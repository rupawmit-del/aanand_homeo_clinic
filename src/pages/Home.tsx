import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Navigation, ArrowRight, ShieldCheck, CheckCircle2, Award, Truck, Sparkles, HeartPulse, Stethoscope, ChevronDown, Clock, MapPin, Mail, Star, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { REVIEWS_DATA } from '../data/reviewsData';
import { FAQ_DATA } from '../data/faqData';
import { HEALTH_TIPS_DATA } from '../data/healthTipsData';
import { SEO } from '../components/SEO';
import rawStock from '../data/medicineStock.json';
import { PWAInstallButton } from '../components/PWAInstallButton';

interface HomeProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Maximum 6 featured services for preview as required
  const featuredServices = SERVICES_DATA.slice(0, 6);
  // Featured products from inventory
  const featuredProducts = (rawStock as any[]).slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Aanand Homeo Clinic & Pharmacy | Rajgir, Bihar"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Rajgir, Bihar."
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900/90 via-slate-900 to-slate-950 text-white py-16 md:py-24">
        {/* Healthcare Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2000&q=80"
            alt="Healthcare and Pharmacy Rajgir"
            className="h-full w-full object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-emerald-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md border border-emerald-500/30 mb-6">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Block More, Ashok Nagar, Rajgir • Open 7 Days</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Your Trusted Medical Store for Genuine Medicines &amp; Healthcare Needs
            </h1>

            {/* Exact Required Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
            </p>

            {/* Required Buttons: Call Now, WhatsApp Order, Get Directions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              {/* Call Now */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-xl hover:bg-slate-100 active:scale-95 transition"
              >
                <Phone className="h-4 w-4 text-[#0A8F6A]" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Order */}
              <button
                type="button"
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A8F6A] px-6 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-[#077254] active:scale-95 transition"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Order</span>
              </button>

              {/* Get Directions */}
              <a
                href={SITE_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/80 px-6 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-md hover:bg-slate-700 active:scale-95 transition"
              >
                <Navigation className="h-4 w-4 text-rose-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Micro Trust Factors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Seals</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Dr. Reckeweg &amp; Schwabe</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Rajgir Home Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>8:30 AM – 8:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW (Strict: Not complete about, only preview with "View More") */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63c23057e930?auto=format&fit=crop&w=800&q=80"
                  alt="Aanand Homeo Clinic Rajgir Front View"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-[#0A8F6A] text-white p-4 rounded-xl shadow-xl hidden sm:block">
                <p className="text-xl font-black">15+ Years</p>
                <p className="text-xs text-emerald-100 font-medium">Healthcare Trust in Rajgir</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A8F6A] mb-2">
                <Sparkles className="h-4 w-4" />
                <span>About Aanand Homeo Clinic</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Holistic Healing with Science &amp; Genuine Homeopathic Care
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Located centrally at Block More, near Shivani Cinema Hall in Ashok Nagar, Rajgir, Aanand Homeo Clinic &amp; Pharmacy is the community's foremost center for authentic homeopathic remedies, imported German dilutions, mother tinctures, and wellness consultation.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Every patient receives personalized attention for chronic ailments like gastric disorders, skin conditions, arthritis, and lifestyle ailments with zero adverse side effects.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0A8F6A] px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#077254] transition"
                >
                  <span>View More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#0A8F6A] underline underline-offset-4"
                >
                  <span>Explore Available Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (Maximum 6 Preview with "View More" button) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A8F6A] mb-2">
                <HeartPulse className="h-4 w-4" />
                <span>Healthcare Offerings</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Featured Clinical &amp; Pharmacy Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                High standards of medicinal purity, German formulations, and dedicated pharmacy dispensing in Rajgir.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#0A8F6A]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-all duration-200"
              >
                <div>
                  {service.badge && (
                    <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 mb-3">
                      {service.badge}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0A8F6A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                    {service.category}
                  </span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0A8F6A] hover:underline"
                  >
                    <span>Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stock Checker Banner Link */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#0A8F6A] to-teal-800 p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-wide uppercase mb-2">
                Live Inventory
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Looking for a Specific Dilution or Medicine in Rajgir?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                Check our live stock database or message us with your doctor's prescription for immediate verification.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 shadow-md hover:bg-slate-100 transition"
              >
                <span>Open Stock Checker</span>
                <ArrowRight className="h-4 w-4 text-[#0A8F6A]" />
              </Link>
              <button
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-emerald-700/40 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 transition"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Order</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A8F6A] mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Quality &amp; Trust</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Rajgir Trusts Aanand Homeo Clinic
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Providing uncompromised medical authenticity, ethical pricing, and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-[#0A8F6A] dark:bg-emerald-950/60 dark:text-emerald-400 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                100% Genuine Brands
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Direct authorized sourcing from Dr. Reckeweg, Schwabe Germany, and SBL with authentic factory seals.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 mb-4">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                Personalized Advice
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Thorough symptom evaluation for chronic complaints without rushed judgments or adverse side effects.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                Open 7 Days a Week
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Operating continuously from 8:30 AM to 8:30 PM with emergency WhatsApp assistance on 09534387930.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                Local Doorstep Delivery
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Convenient local medicine delivery across Ashok Nagar, Block More, and surrounding areas in Rajgir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A8F6A] mb-2">
                <Sparkles className="h-4 w-4" />
                <span>Popular Remedies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Featured Medicines &amp; Healthcare Essentials
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0A8F6A] hover:underline"
            >
              <span>View Full Inventory (Stock Checker)</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{prod.brand}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{prod.status}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {prod.indication}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">MRP</span>
                    <span className="font-extrabold text-slate-900 dark:text-white text-base">
                      ₹{prod.mrp}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenOrderModal(`${prod.name} (${prod.brand})`)}
                    className="inline-flex items-center gap-1 rounded-xl bg-[#0A8F6A] px-3.5 py-2 text-xs font-bold text-white shadow hover:bg-[#077254] transition"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A8F6A] mb-2">
              <Star className="h-4 w-4 fill-[#0A8F6A]" />
              <span>Patient Testimonials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Rajgir Patients Say About Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Real feedback from local residents who trust Aanand Homeo Clinic for gentle, natural healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.slice(0, 2).map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-4 leading-relaxed">
                  "{rev.comment}"
                </p>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{rev.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{rev.location}</p>
                  </div>
                  {rev.conditionTreated && (
                    <span className="rounded-md bg-emerald-100 px-2 py-1 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                      {rev.conditionTreated}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0A8F6A] hover:underline"
            >
              <span>Read More In About Us</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A8F6A] mb-2">
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions Preview
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Common questions about medicines, doctor prescriptions, and ordering in Rajgir.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-slate-900 dark:text-white hover:text-[#0A8F6A] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#0A8F6A]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0A8F6A] hover:underline"
            >
              <span>Have Another Question? Contact Us Directly</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A8F6A] mb-2">
              <span>Wellness Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Latest Health &amp; Homeopathy Tips Preview
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Practical holistic health guidance curated by Aanand Homeo Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS_DATA.map((tip) => (
              <div
                key={tip.id}
                className="overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span className="font-semibold text-[#0A8F6A]">{tip.category}</span>
                      <span>{tip.readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenOrderModal()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8F6A] hover:underline"
                  >
                    <span>Consult About This on WhatsApp</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-16 bg-[#0A8F6A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Need Genuine Homeopathic Medicines in Rajgir Today?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Visit us at Block More, near Shivani Cinema Hall, Ashok Nagar, Rajgir — or send your prescription via WhatsApp for prompt home delivery.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-xl hover:bg-slate-100 transition"
            >
              <Phone className="h-4 w-4 text-[#0A8F6A]" />
              <span>Call 09534387930</span>
            </a>

            <button
              onClick={() => onOpenOrderModal()}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-slate-800 transition"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>Send WhatsApp Order</span>
            </button>

            <a
              href={SITE_CONFIG.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-emerald-700/40 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-700 transition"
            >
              <Navigation className="h-4 w-4 text-white" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="py-12 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="mx-auto h-8 w-8 text-[#0A8F6A] mb-3" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Subscribe to Seasonal Health &amp; Homeo Updates
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Receive seasonal illness advisories, immunity tips, and new medicine arrivals directly.
          </p>

          {newsletterSubscribed ? (
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-100 px-4 py-2.5 text-xs font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Thank you for subscribing to Aanand Homeo Clinic health updates!</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#0A8F6A] px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-[#077254] transition"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
