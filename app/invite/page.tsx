"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface InvitationData {
  businessName: string;
  roleName: string;
  invitedBy: string;
  email: string;
  expiresAt: string;
}

export default function InvitePage() {
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'found' | 'error' | 'expired'>('loading');
  const [message, setMessage] = useState('Processing your invitation...');
  const [invitation, setInvitation] = useState<InvitationData | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      checkInvitation(token);
    } else {
      setStatus('error');
      setMessage('Invalid invitation link. Missing token parameter.');
    }
  }, []);

  async function checkInvitation(token: string) {
    try {
      setStatus('loading');
      setMessage('Verifying your invitation...');

      // Call your secure API route
      const response = await fetch('/api/accept-invitation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('found');
        setInvitation(result.invitation);
        setMessage(`You've been invited to join ${result.invitation.businessName}!`);
      } else {
        if (response.status === 410) {
          setStatus('expired');
          setMessage('This invitation has expired.');
        } else {
          setStatus('error');
          setMessage(result.error || 'Failed to process invitation.');
        }
      }

    } catch (error) {
      console.error('Error checking invitation:', error);
      setStatus('error');
      setMessage('Failed to process invitation. Please try again.');
    }
  }

  function handleAccept() {
    // Redirect to your app download or signup page
    const params = new URLSearchParams({
      business: invitation?.businessName || '',
      role: invitation?.roleName || '',
      email: invitation?.email || ''
    });

    router.push(`/signup?${params.toString()}`);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '500px',
        textAlign: 'center',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        backgroundColor: 'white'
      }}>

        {status === 'loading' && (
          <>
            <div style={{
              width: '50px',
              height: '50px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid #00A86B',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }}></div>
            <h1 style={{ color: '#333' }}>Processing Invitation</h1>
          </>
        )}

        {status === 'found' && invitation && (
          <>
            <div style={{ fontSize: '50px', color: '#00A86B', marginBottom: '20px' }}>📧</div>
            <h1 style={{ color: '#00A86B', marginBottom: '20px' }}>You're Invited!</h1>

            <div style={{ textAlign: 'left', marginBottom: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <p><strong>Business:</strong> {invitation.businessName}</p>
              <p><strong>Role:</strong> {invitation.roleName}</p>
              <p><strong>Invited by:</strong> {invitation.invitedBy}</p>
              <p><strong>Email:</strong> {invitation.email}</p>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={handleAccept}
                style={{
                  backgroundColor: '#00A86B',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >
                Accept Invitation
              </button>
              <button
                onClick={() => router.push('/')}
                style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >
                Decline
              </button>
            </div>
          </>
        )}

        {(status === 'error' || status === 'expired') && (
          <>
            <div style={{ fontSize: '50px', color: '#e74c3c', marginBottom: '20px' }}>
              {status === 'expired' ? '⏰' : '❌'}
            </div>
            <h1 style={{ color: '#e74c3c' }}>
              {status === 'expired' ? 'Invitation Expired' : 'Invitation Error'}
            </h1>
            <p style={{ color: '#666', marginBottom: '20px' }}>{message}</p>
            <button
              onClick={() => router.push('/')}
              style={{
                backgroundColor: '#00A86B',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Go Home
            </button>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
