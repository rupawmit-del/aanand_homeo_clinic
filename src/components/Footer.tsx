import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, Mail, ExternalLink, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  // === MANDATORY GLOBAL TRACKER HOOK (STEP 11) ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner inside Footer */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0A8F6A] to-[#0284C7] p-0.5 shadow-lg">
              <div className="h-full w-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <img src="/icons/icon.svg" alt="Aanand Homeo Clinic" className="h-10 w-10 rounded-xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                AANAND HOMEO CLINIC
              </h3>
              <p className="text-xs text-emerald-400 font-semibold">
                Your Trusted Medical Store for Genuine Medicines & Healthcare Needs in Rajgir
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A8F6A] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#077254] transition"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp: 09534387930</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition"
            >
              <Phone className="h-4 w-4 text-[#0A8F6A]" />
              <span>Call Clinic</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Business Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Clinic Location
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="h-4 w-4 text-[#0A8F6A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Aanand Homeo Clinic</p>
                <p>BLOCK MORE, near SHIVANI CINEMA HALL</p>
                <p>Ashok Nagar, Rajgir, Bihar 803116</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A8F6A] hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <Phone className="h-4 w-4 text-[#0A8F6A] shrink-0" />
              <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white">
                {SITE_CONFIG.phoneFormatted}
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Mail className="h-4 w-4 text-[#0A8F6A] shrink-0" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#0A8F6A] transition-colors">
                  Home (Overview & Previews)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0A8F6A] transition-colors">
                  About Us (Story & Philosophy)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0A8F6A] transition-colors">
                  Services & Medicine Categories
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-emerald-400 font-semibold hover:underline">
                  🔍 Medicine Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#0A8F6A] transition-colors">
                  Photo Gallery (Store & Shelves)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0A8F6A] transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#0A8F6A] transition-colors">
                  Patient Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Quality */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Working Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#0A8F6A]" />
                <span className="font-semibold text-white">Monday – Sunday (7 Days Open)</span>
              </div>
              <p className="pl-6 text-slate-400">8:30 AM to 8:30 PM (No Lunch Break)</p>

              <div className="pt-2 border-t border-slate-800">
                <p className="font-semibold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" />
                  100% Genuine Medicine Guarantee
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Original seals from Dr. Reckeweg, Schwabe, SBL, Adel & Bakson directly supplied.
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map Preview */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Find Us in Rajgir
            </h4>
            <div className="rounded-xl overflow-hidden border border-slate-800 h-32 bg-slate-800 relative">
              <iframe
                title="Aanand Homeo Clinic Rajgir Map"
                src={SITE_CONFIG.address.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[11px] text-slate-400">
              Landmark: Near Shivani Cinema Hall, Block More, Ashok Nagar.
            </p>
          </div>
        </div>

        {/* Legal & Policy Links */}
        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="hover:text-slate-200">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-200">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-200">Medical Disclaimer</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-200">Prescription Verification Policy</Link>
          </div>
          <div className="text-[11px] text-slate-400">
            Homeopathy is a gentle complementary system of medicine. Consult a doctor for acute emergencies.
          </div>
        </div>

        {/* Copyright & Mandatory WMIT Anchor Trigger */}
        <div className="mt-6 border-t border-slate-800/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.
          </div>

          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVED EXACTLY */}
          <div className="text-center font-medium">
            <a href="#" className="wmit-popup-trigger text-emerald-400 hover:text-emerald-300 hover:underline">
              Developed by WMIT
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span>Crafted for Patient Wellness</span>
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
            <span>Rajgir, Bihar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
