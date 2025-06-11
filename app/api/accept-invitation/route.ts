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

    // Get invitation details (use simple query since it works)
    console.log('🔍 API DEBUG: Querying database for token:', token);
    const { data: invitation, error: getError } = await supabase
      .from('user_invitations')
      .select('*')
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

    // Get additional data separately
    console.log('🔍 API DEBUG: Getting business details...');
    const { data: business } = await supabase
      .from('businesses')
      .select('name, country, currency')
      .eq('id', invitation.business_id)
      .single();

    console.log('🔍 API DEBUG: Getting role name...');
    const { data: role } = await supabase
      .from('roles')
      .select('name')
      .eq('id', invitation.role_id)
      .single();

    console.log('🔍 API DEBUG: Getting inviter name...');
    const { data: inviter } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', invitation.invited_by)
      .single();

    console.log('🔍 API DEBUG: Additional data:', { business, role, inviter });

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
        businessName: business?.name || 'Unknown Business',
        businessCountry: business?.country || 'United States',
        businessCurrency: business?.currency || 'USD',
        roleName: role?.name || 'Team Member',
        invitedBy: inviter?.full_name || 'Someone',
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