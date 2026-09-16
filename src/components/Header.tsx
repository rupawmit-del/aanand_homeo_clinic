import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Sun, Moon, Menu, X, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-sm dark:bg-slate-900/95 dark:border-b dark:border-slate-800 transition-colors">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-[#0A8F6A] text-white py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 font-medium">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-emerald-200" />
              <span>Block More, Near Shivani Cinema, Rajgir</span>
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="h-3 w-3 text-emerald-200" />
              <span>Open 7 Days: 8:30 AM – 8:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="hidden sm:inline">WhatsApp Support:</span>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-emerald-100 flex items-center gap-1"
            >
              <MessageSquare className="h-3 w-3" />
              <span>09534387930</span>
            </a>
            <span className="opacity-40">|</span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="font-bold hover:text-emerald-100 flex items-center gap-1"
            >
              <Phone className="h-3 w-3" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0A8F6A] to-[#0284C7] p-0.5 shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <div className="h-full w-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
                <img src="/icons/icon.svg" alt="Aanand Homeo Clinic Logo" className="h-9 w-9 rounded-lg" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight flex items-center gap-1.5">
                AANAND HOMEO CLINIC
                <ShieldCheck className="h-4 w-4 text-[#0A8F6A] shrink-0" />
              </span>
              <span className="text-[11px] font-semibold text-[#0A8F6A] tracking-wider uppercase">
                Pharmacy & Medical Store • Rajgir
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Strict 6 Pages) */}
          <nav className="hidden lg:flex items-center space-x-1 font-semibold text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#0A8F6A]/10 text-[#0A8F6A] dark:bg-emerald-950/60 dark:text-emerald-300 font-bold'
                      : 'text-slate-600 hover:text-[#0A8F6A] hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* PWA Install Button */}
            <PWAInstallButton variant="nav" />

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition"
              aria-label="Toggle dark mode"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* WhatsApp Order Button */}
            <button
              onClick={onOpenOrderModal}
              className="flex items-center gap-1.5 rounded-xl bg-[#0A8F6A] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-900/10 hover:bg-[#077254] active:scale-95 transition"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Order</span>
            </button>

            {/* Call Now Button */}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 transition"
            >
              <Phone className="h-4 w-4 text-[#0A8F6A]" />
              <span>Call</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <PWAInstallButton variant="nav" />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 dark:border-slate-800 dark:bg-slate-900 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-1 mb-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'bg-[#0A8F6A]/10 text-[#0A8F6A] font-bold dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <PWAInstallButton variant="mobile" />

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0A8F6A] py-3 text-sm font-bold text-white shadow-md hover:bg-[#077254]"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Medicine Order</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 text-sm font-bold text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            >
              <Phone className="h-4 w-4 text-[#0A8F6A]" />
              <span>Call Clinic (09534387930)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
