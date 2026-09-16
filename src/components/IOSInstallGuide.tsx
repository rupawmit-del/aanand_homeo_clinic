import React from 'react';
import { Share, PlusSquare, X } from 'lucide-react';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-slate-800">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A8F6A]/10 text-[#0A8F6A]">
            <img src="/icons/icon.svg" alt="Aanand Homeo" className="h-8 w-8 rounded-lg" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Install Aanand Homeo App</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Install on your iPhone or iPad</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          Install our app on your home screen for quick 1-tap medicine orders, stock checking, and offline clinic details.
        </p>

        <div className="space-y-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 text-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-xs dark:bg-blue-900/50 dark:text-blue-300">
              1
            </div>
            <div className="pt-0.5">
              <p className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                Tap the <Share className="h-4 w-4 text-blue-500 inline" /> <span className="font-semibold">Share</span> button
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Located at the bottom of Safari toolbar.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-xs dark:bg-blue-900/50 dark:text-blue-300">
              2
            </div>
            <div className="pt-0.5">
              <p className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                Scroll & tap <PlusSquare className="h-4 w-4 text-emerald-600 inline" /> <span className="font-semibold">Add to Home Screen</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Usually found in the middle action row.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-xs dark:bg-blue-900/50 dark:text-blue-300">
              3
            </div>
            <div className="pt-0.5">
              <p className="font-medium text-slate-800 dark:text-slate-200">
                Tap <span className="font-semibold text-[#0A8F6A]">Add</span> in the top right corner
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">The icon will now appear on your home screen!</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
        >
          Got It, Thanks!
        </button>
      </div>
    </div>
  );
};
