import { createClient } from '@supabase/supabase-js';
import { NextRequest } from 'next/server';

// Server-side Supabase client (secure)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Service role key, not anon key
);

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    console.log('🔍 API DEBUG: Received token:', token);

    if (!token) {
      return Response.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    // First try a simple query without joins
    console.log('🔍 API DEBUG: Trying simple query first...');
    const { data: simpleInvitation, error: simpleError } = await supabase
      .from('user_invitations')
      .select('*')
      .eq('invitation_token', token)
      .single();

    console.log('🔍 API DEBUG: Simple query result:', { simpleInvitation, simpleError });

    // Get invitation details with joins
    console.log('🔍 API DEBUG: Querying database for token:', token);
    const { data: invitation, error: getError } = await supabase
      .from('user_invitations')
      .select(`
        *,
        businesses(name),
        roles(name),
        profiles!invited_by(full_name)
      `)
      .eq('invitation_token', token)
      .eq('status', 'pending')
      .single();

    console.log('🔍 API DEBUG: Database response:', { invitation, error: getError });

    if (getError || !invitation) {
      console.log('🔍 API DEBUG: No invitation found or error occurred');
      return Response.json(
        { error: 'Invitation not found or has expired', debug: { getError, hasInvitation: !!invitation } },
        { status: 404 }
      );
    }

    // Check if invitation is expired
    const expiresAt = new Date(invitation.expires_at);
    const now = new Date();

    if (expiresAt < now) {
      return Response.json(
        { error: 'Invitation has expired' },
        { status: 410 }
      );
    }

    // Return invitation details (don't auto-accept, let user choose)
    return Response.json({
      success: true,
      invitation: {
        businessName: invitation.businesses?.name || 'Unknown Business',
        roleName: invitation.roles?.name || 'Team Member',
        invitedBy: invitation.profiles?.full_name || 'Someone',
        email: invitation.email,
        expiresAt: invitation.expires_at
      }
    });

  } catch (error) {
    console.error('Error processing invitation:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}