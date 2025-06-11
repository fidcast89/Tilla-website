"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Store, User, MapPin } from "lucide-react";
import { FloatingElements } from "@/components/floating-elements";

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  country: string;
}

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    country: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [invitationData, setInvitationData] = useState<any>(null);
  const [isCheckingInvitation, setIsCheckingInvitation] = useState(true);

  // Get invitation context from session storage
  const businessName = invitationData?.businessName || 'the business';
  const roleName = invitationData?.roleName || 'team member';
  const invitationEmail = invitationData?.email || '';
  const invitationToken = invitationData?.token || '';
  const businessCountry = invitationData?.businessCountry || 'United States';

  // Load invitation data from session storage
  useEffect(() => {
    const storedData = sessionStorage.getItem('invitationData');
    if (storedData) {
      try {
        const data = JSON.parse(storedData);

        // Check if data is not too old (1 hour expiration)
        const oneHour = 60 * 60 * 1000;
        if (Date.now() - data.timestamp < oneHour) {
          setInvitationData(data);
          setFormData(prev => ({
            ...prev,
            email: data.email,
            country: data.businessCountry
          }));
          setIsCheckingInvitation(false);
        } else {
          // Data expired, redirect to home
          sessionStorage.removeItem('invitationData');
          router.push('/');
        }
      } catch (error) {
        console.error('Error parsing invitation data:', error);
        router.push('/');
      }
    } else {
      // No invitation data, redirect to home
      router.push('/');
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (formData.email !== invitationEmail) {
      setError('Email must match the invitation email');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    return true;
  };

  // Check if form is valid for button state
  const isFormValid = () => {
    return formData.firstName.trim() &&
           formData.lastName.trim() &&
           formData.email.trim() &&
           formData.password.length >= 8;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');

    try {
      // Call the signup API
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          country: formData.country,
          invitationToken: invitationToken
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create account');
      }

      // Clear invitation data from session storage
      sessionStorage.removeItem('invitationData');

      setSuccess(true);

      // Redirect after successful signup
      setTimeout(() => {
        router.push('/login?message=Account created successfully. Please sign in.');
      }, 3000);

    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading while checking invitation
  if (isCheckingInvitation) {
    return (
      <div className="relative min-h-screen bg-black overflow-hidden">
        <FloatingElements />
        <div className="container max-w-5xl mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <div className="w-16 h-16 border-4 border-slate-600 border-t-primary rounded-full animate-spin mb-6"></div>
            <h1 className="text-2xl font-bold text-white mb-2">Loading Invitation</h1>
            <p className="text-slate-400">Please wait while we verify your invitation...</p>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="relative min-h-screen bg-black overflow-hidden">
        <FloatingElements />
        <div className="container max-w-5xl mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Welcome to <span className="text-primary">{businessName}</span>!
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mb-6">
              Your account has been created successfully and you've been added as <strong className="text-primary">{roleName}</strong>.
            </p>
            <p className="text-slate-500 text-sm">
              Redirecting to login page...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background elements */}
      <FloatingElements />
      <div className="container max-w-5xl mx-auto px-4 py-16 relative z-10">
        {/* Success indicator */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Complete Your <span className="text-primary">iHustle</span> Setup
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            You've been invited to join <strong className="text-primary">{businessName}</strong> as <strong className="text-primary">{roleName}</strong>!
            Complete your profile to start managing your business operations.
          </p>
        </div>

        {/* Form */}
        <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl mb-10">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Personal Information</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled
                      className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700 rounded-lg text-slate-400 cursor-not-allowed"
                      placeholder="john@example.com"
                      required
                    />
                    <p className="text-xs text-slate-500 mt-1">This email matches your invitation</p>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
                      Create Password*
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white"
                      placeholder="••••••••"
                      required
                    />
                    <p className="text-xs text-slate-500 mt-1">Must be at least 8 characters</p>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <Store className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Business Information</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-1">
                      Business Name*
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      value={businessName}
                      disabled
                      className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700 rounded-lg text-slate-400 cursor-not-allowed"
                      placeholder="Your Business Name"
                    />
                    <p className="text-xs text-slate-500 mt-1">You're joining this business</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        value={formData.country}
                        disabled
                        className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700 rounded-lg text-slate-400 cursor-not-allowed"
                        placeholder="Country"
                      />
                      <p className="text-xs text-slate-500 mt-1">Inherited from business location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="mt-8 border-t border-slate-800 pt-6">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-slate-600 rounded bg-slate-800 focus:ring-primary"
                    required
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-slate-400">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {error && (
                <div className="bg-red-900/20 border border-red-800 text-red-400 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  type="submit"
                  disabled={isLoading || !isFormValid()}
                  className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                    isLoading || !isFormValid()
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                >
                  {isLoading ? 'Creating Account...' : 'Complete Setup & Join Team'}
                  {!isLoading && isFormValid() && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 border border-slate-800">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ready in Minutes</h3>
            <p className="text-slate-400">
              Jump straight into your role with everything pre-configured for your business needs.
            </p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 border border-slate-800">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Bank-Level Security</h3>
            <p className="text-slate-400">
              Your transactions and customer data are protected with the same security banks use.
            </p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 border border-slate-800">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Always Here to Help</h3>
            <p className="text-slate-400">
              Real people ready to help you succeed, plus smart tools that learn your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
