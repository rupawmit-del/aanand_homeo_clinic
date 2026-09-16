import React, { useState } from 'react';
import { ShieldCheck, Lock, Phone, Mail, ArrowRight, MessageSquare, CheckCircle2, User, KeyRound } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import { SITE_CONFIG } from '../config/siteConfig';

interface LoginProps {
  onOpenOrderModal: () => void;
}

export const Login: React.FC<LoginProps> = ({ onOpenOrderModal }) => {
  const [authMode, setAuthMode] = useState<'mobile' | 'email'>('mobile');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleMobileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpSent) {
      if (mobileNumber.trim().length >= 10) {
        setOtpSent(true);
      }
    } else {
      if (otpValue.trim()) {
        setLoggedInUser(`Patient (+91 ${mobileNumber.slice(-10)})`);
      }
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setLoggedInUser(email.split('@')[0]);
    }
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <SEO
        title="Patient Portal Login | Aanand Homeo Clinic Rajgir"
        description="Login to Aanand Homeo Clinic patient portal to track past homeopathic prescriptions, check active refills, and consult with the dispensary."
      />

      <div className="max-w-md mx-auto px-4 sm:px-6">
        <Breadcrumb items={[{ label: 'Patient Login' }]} />

        <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
          {/* Top Logo */}
          <div className="text-center mb-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0A8F6A] to-[#0284C7] p-0.5 shadow-md shadow-emerald-700/20 mb-3">
              <div className="h-full w-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                <img src="/icons/icon.svg" alt="Aanand Homeo Clinic" className="h-9 w-9" />
              </div>
            </div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Patient Portal
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Access your prescription records, past orders &amp; refill alerts
            </p>
          </div>

          {loggedInUser ? (
            /* Logged in state */
            <div className="text-center py-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 mb-3">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Welcome, {loggedInUser}!
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                You are logged in to the patient portal.
              </p>

              <div className="mt-6 space-y-2">
                <button
                  onClick={() => onOpenOrderModal()}
                  className="w-full rounded-xl bg-[#0A8F6A] py-3 text-xs font-bold text-white shadow hover:bg-[#077254]"
                >
                  Order Medicines on WhatsApp
                </button>
                <button
                  onClick={() => {
                    setLoggedInUser(null);
                    setOtpSent(false);
                    setOtpValue('');
                  }}
                  className="w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Tab Switcher: Mobile OTP vs Email/Password */}
              <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800 mb-6">
                <button
                  onClick={() => { setAuthMode('mobile'); setOtpSent(false); }}
                  className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
                    authMode === 'mobile'
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Mobile Number / OTP
                </button>
                <button
                  onClick={() => setAuthMode('email')}
                  className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
                    authMode === 'email'
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Email &amp; Password
                </button>
              </div>

              {/* Mobile OTP Flow */}
              {authMode === 'mobile' && (
                <form onSubmit={handleMobileSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Registered Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 text-xs font-bold">
                        +91
                      </div>
                      <input
                        type="tel"
                        required
                        disabled={otpSent}
                        placeholder="9534387930"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-12 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white disabled:bg-slate-100 dark:disabled:bg-slate-800/60"
                      />
                    </div>
                  </div>

                  {otpSent && (
                    <div className="space-y-2 animate-fade-in">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700 dark:text-slate-300">Enter 4-Digit OTP</span>
                        <button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          className="text-[#0A8F6A] font-semibold hover:underline"
                        >
                          Change Number
                        </button>
                      </div>
                      <input
                        type="text"
                        required
                        maxLength={6}
                        placeholder="1 2 3 4"
                        value={otpValue}
                        onChange={(e) => setOtpValue(e.target.value)}
                        className="w-full text-center tracking-widest text-lg font-black rounded-xl border border-[#0A8F6A] bg-white py-2 px-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:bg-slate-800 dark:text-white"
                      />
                      <p className="text-[11px] text-slate-400 text-center">
                        Demo OTP: Enter any 4 digits to proceed
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0A8F6A] py-3 text-xs font-bold text-white shadow-md hover:bg-[#077254] transition"
                  >
                    <span>{otpSent ? 'Verify OTP & Login' : 'Send One-Time Password (OTP)'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}

              {/* Email/Password Flow */}
              {authMode === 'email' && (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="patient@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => alert('Please contact the dispensary staff on WhatsApp (+91 9534387930) to reset your account access.')}
                        className="text-[11px] font-semibold text-[#0A8F6A] hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0A8F6A] py-3 text-xs font-bold text-white shadow-md hover:bg-[#077254] transition"
                  >
                    <KeyRound className="h-3.5 w-3.5" />
                    <span>Sign In to Account</span>
                  </button>
                </form>
              )}

              {/* Instant WhatsApp Alternative */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Don't have an account or want to order without login?
                </p>
                <button
                  onClick={onOpenOrderModal}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#0A8F6A] bg-emerald-50/50 py-2.5 text-xs font-bold text-[#0A8F6A] hover:bg-emerald-100/50 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40 transition"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Order Directly on WhatsApp (No Login Needed)</span>
                </button>
              </div>

              {/* Security Assurance */}
              <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span>256-Bit Encrypted &amp; Confidential Medical Records</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
