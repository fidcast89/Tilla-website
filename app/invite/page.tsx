"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, User, Building2, UserCheck, Mail, Calendar } from "lucide-react";
import { FloatingElements } from "@/components/floating-elements";

interface InvitationData {
  businessName: string;
  businessCountry: string;
  businessCurrency: string;
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
    // Get the invitation token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    // Store invitation data securely in session storage
    if (invitation && token) {
      const invitationData = {
        businessName: invitation.businessName,
        roleName: invitation.roleName,
        email: invitation.email,
        businessCountry: invitation.businessCountry,
        businessCurrency: invitation.businessCurrency,
        invitedBy: invitation.invitedBy,
        token: token,
        timestamp: Date.now() // For expiration check
      };

      sessionStorage.setItem('invitationData', JSON.stringify(invitationData));
    }

    // Redirect to signup page without sensitive data in URL
    router.push('/signup');
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background elements */}
      <FloatingElements />
      <div className="container max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl max-w-2xl w-full">

            {status === 'loading' && (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-slate-600 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
                <h1 className="text-2xl font-bold text-white mb-2">Processing Invitation</h1>
                <p className="text-slate-400">Please wait while we verify your invitation...</p>
              </div>
            )}

            {status === 'found' && invitation && (
              <div className="text-center">
                {/* Header */}
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-primary" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    You're Invited to Join <span className="text-primary">{invitation.businessName}</span>!
                  </h1>
                  <p className="text-slate-400 text-lg">
                    Complete your setup to start working as <strong className="text-primary">{invitation.roleName}</strong>
                  </p>
                </div>

                {/* Invitation Details */}
                <div className="bg-slate-800/50 rounded-xl p-6 mb-8 text-left">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <UserCheck className="w-5 h-5 text-primary mr-2" />
                    Invitation Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 text-slate-400 mr-3" />
                      <span className="text-slate-300">Business:</span>
                      <span className="text-white ml-2 font-medium">{invitation.businessName}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-slate-400 mr-3" />
                      <span className="text-slate-300">Role:</span>
                      <span className="text-primary ml-2 font-medium">{invitation.roleName}</span>
                    </div>
                    <div className="flex items-center">
                      <UserCheck className="w-4 h-4 text-slate-400 mr-3" />
                      <span className="text-slate-300">Invited by:</span>
                      <span className="text-white ml-2 font-medium">{invitation.invitedBy}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-slate-400 mr-3" />
                      <span className="text-slate-300">Email:</span>
                      <span className="text-white ml-2 font-medium">{invitation.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-slate-400 mr-3" />
                      <span className="text-slate-300">Expires:</span>
                      <span className="text-white ml-2 font-medium">
                        {new Date(invitation.expiresAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleAccept}
                    className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Accept Invitation
                  </button>
                  <button
                    onClick={() => router.push('/')}
                    className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            )}

            {(status === 'error' || status === 'expired') && (
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                  <div className="text-4xl">
                    {status === 'expired' ? '⏰' : '❌'}
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">
                  {status === 'expired' ? 'Invitation Expired' : 'Invitation Error'}
                </h1>
                <p className="text-slate-400 text-lg mb-8">{message}</p>
                <button
                  onClick={() => router.push('/')}
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors"
                >
                  Go Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
