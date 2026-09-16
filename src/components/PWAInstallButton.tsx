import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'mobile' | 'hero';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ className = '', variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed in standalone mode, suppress button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
    } else if (isInstallable) {
      await install();
    } else {
      // Fallback for browsers where install prompt isn't directly exposed
      setShowIOSGuide(true);
    }
  };

  if (variant === 'hero') {
    return (
      <>
        <button
          type="button"
          onClick={handleInstallClick}
          aria-label="Add Aanand Homeo Clinic to Home Screen"
          className={`inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 transition active:scale-95 ${className}`}
        >
          <Smartphone className="h-4 w-4 text-emerald-400 dark:text-white" />
          <span>📲 Add to Home</span>
        </button>
        <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
      </>
    );
  }

  if (variant === 'mobile') {
    return (
      <>
        <button
          type="button"
          onClick={handleInstallClick}
          aria-label="Add Aanand Homeo Clinic to Home Screen"
          className={`w-full flex items-center justify-center gap-2.5 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-[#0A8F6A] border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300 transition ${className}`}
        >
          <Smartphone className="h-5 w-5 animate-pulse" />
          <span>📲 Add to Home</span>
        </button>
        <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        aria-label="Add Aanand Homeo Clinic to Home Screen"
        className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-[#0A8F6A] border border-emerald-200/80 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300 transition-all active:scale-95 ${className}`}
      >
        <Smartphone className="h-3.5 w-3.5 text-[#0A8F6A] dark:text-emerald-300" />
        <span className="whitespace-nowrap">📲 Add to Home</span>
      </button>
      <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
    </>
  );
};
