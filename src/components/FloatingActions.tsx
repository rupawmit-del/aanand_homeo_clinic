import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, Navigation, Search } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Link } from 'react-router-dom';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons on Desktop/Tablet (Right Side) */}
      <div className="fixed right-5 bottom-20 z-40 hidden sm:flex flex-col items-end gap-3">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-all hover:scale-105 active:scale-95"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          aria-label="Call Aanand Homeo Clinic"
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 group"
        >
          <Phone className="h-4 w-4 text-white" />
          <span className="hidden group-hover:inline">Call Clinic</span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={onOpenOrderModal}
          aria-label="Order medicine on WhatsApp"
          className="flex items-center gap-2.5 rounded-full bg-[#0A8F6A] p-3 text-white shadow-2xl hover:bg-[#077254] transition-all hover:scale-105 active:scale-95 group"
        >
          <div className="relative">
            <MessageSquare className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          <span className="text-xs font-bold pr-1">WhatsApp Order</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 block sm:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-semibold">
          {/* Call */}
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex flex-col items-center justify-center py-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95"
          >
            <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400 mb-0.5" />
            <span>Call</span>
          </a>

          {/* WhatsApp Order */}
          <button
            onClick={onOpenOrderModal}
            className="flex flex-col items-center justify-center py-1.5 rounded-lg text-[#0A8F6A] dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 active:scale-95 font-bold"
          >
            <MessageSquare className="h-4 w-4 text-[#0A8F6A] mb-0.5" />
            <span>WhatsApp</span>
          </button>

          {/* Stock Checker */}
          <Link
            to="/services"
            className="flex flex-col items-center justify-center py-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95"
          >
            <Search className="h-4 w-4 text-amber-500 mb-0.5" />
            <span>Stock</span>
          </Link>

          {/* Directions */}
          <a
            href={SITE_CONFIG.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95"
          >
            <Navigation className="h-4 w-4 text-rose-500 mb-0.5" />
            <span>Map</span>
          </a>
        </div>
      </div>
    </>
  );
};
