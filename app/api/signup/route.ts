import { createClient } from '@supabase/supabase-js';
import { NextRequest } from 'next/server';

// Server-side Supabase client (secure)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password, phone, invitationToken } = await request.json();

    console.log('🔍 SIGNUP DEBUG: Received signup request for:', email);

    // Validate required fields
    if (!fullName || !email || !password) {
      return Response.json(
        { error: 'Full name, email, and password are required' },
        { status: 400 }
      );
    }

    // Get the invitation details with business information
    const { data: invitation, error: invitationError } = await supabase
      .from('user_invitations')
      .select(`
        *,
        businesses(
          id,
          name,
          country,
          currency,
          timezone,
          business_type,
          phone,
          email,
          address,
          city,
          state,
          postal_code
        ),
        roles(id, name)
      `)
      .eq('invitation_token', invitationToken)
      .eq('status', 'pending')
      .eq('email', email)
      .single();

    if (invitationError || !invitation) {
      console.log('🔍 SIGNUP DEBUG: Invalid invitation:', invitationError);
      return Response.json(
        { error: 'Invalid or expired invitation' },
        { status: 400 }
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

    console.log('🔍 SIGNUP DEBUG: Valid invitation found, creating user...');

    // Create user account in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true, // Auto-confirm email since they were invited
      user_metadata: {
        full_name: fullName,
        invited_by: invitation.invited_by,
        business_id: invitation.business_id
      }
    });

    if (authError) {
      console.log('🔍 SIGNUP DEBUG: Auth error:', authError);
      return Response.json(
        { error: authError.message || 'Failed to create user account' },
        { status: 400 }
      );
    }

    const userId = authData.user.id;
    console.log('🔍 SIGNUP DEBUG: User created with ID:', userId);

    // Create profile in profiles table with business context
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: userId,
        full_name: fullName,
        email: email,
        phone: phone || null,
        country: invitation.businesses?.country || null,
        timezone: invitation.businesses?.timezone || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });

    if (profileError) {
      console.log('🔍 SIGNUP DEBUG: Profile creation error:', profileError);
      // Don't fail the whole process if profile creation fails
    }

    // Accept the invitation (update status and accepted_by)
    const { error: acceptError } = await supabase
      .from('user_invitations')
      .update({
        status: 'accepted',
        accepted_by: userId,
        accepted_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('id', invitation.id);

    if (acceptError) {
      console.log('🔍 SIGNUP DEBUG: Accept invitation error:', acceptError);
    }

    // Add user to business_users table with the specified role
    const { error: businessUserError } = await supabase
      .from('business_users')
      .insert({
        business_id: invitation.business_id,
        user_id: userId,
        role_id: invitation.role_id,
        status: 'active',
        joined_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });

    if (businessUserError) {
      console.log('🔍 SIGNUP DEBUG: Business user creation error:', businessUserError);
      // This is important, so we should handle this error
      return Response.json(
        { error: 'Account created but failed to join business. Please contact support.' },
        { status: 500 }
      );
    }

    console.log('🔍 SIGNUP DEBUG: Signup completed successfully');

    return Response.json({
      success: true,
      message: 'Account created successfully',
      userId: userId,
      business: {
        name: invitation.businesses?.name,
        country: invitation.businesses?.country,
        currency: invitation.businesses?.currency
      }
    });

  } catch (error) {
    console.error('🔍 SIGNUP DEBUG: Unexpected error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
