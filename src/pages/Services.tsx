import React, { useState } from 'react';
import { SERVICES_DATA, SERVICE_CATEGORIES } from '../data/servicesData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import { MessageSquare, Phone, CheckCircle2, ShieldCheck, Sparkles, Filter, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ServicesProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState('All Services');

  const filteredServices = activeCategory === 'All Services'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <div className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <SEO
        title="Services & Medicine Categories | Aanand Homeo Clinic Rajgir"
        description="Explore comprehensive homeopathic categories: German Dilutions, Mother Tinctures, Biochemic Tissue Salts, Pediatric Care, Health Devices & Live Stock Checker at Aanand Homeo Clinic Rajgir."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Services & Products' }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0A8F6A]/10 px-3.5 py-1 text-xs font-bold text-[#0A8F6A] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Comprehensive Healthcare &amp; Pharmacy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Healthcare Services &amp; Medicine Categories
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            From precision German dilutions and pediatric syrups to digital health diagnostics and fast local home delivery across Rajgir, Bihar.
          </p>
        </div>

        {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
        <section id="stock-checker" className="mb-14 scroll-mt-24">
          <MedicineStockChecker onSelectMedicine={(med) => onOpenOrderModal(med)} />
        </section>

        {/* CATEGORY-WISE SERVICES SECTION */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Category-Wise Clinical &amp; Pharmacy Services
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  activeCategory === category
                    ? 'bg-[#0A8F6A] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 border-t border-slate-100 dark:border-slate-800 pt-3">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#0A8F6A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onOpenOrderModal(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8F6A] hover:underline"
                  >
                    <span>Inquire / Order on WhatsApp</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>

                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    title="Call about this service"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRESCRIPTION DISPENSING STANDARDS BANNER */}
        <section className="rounded-2xl bg-white p-8 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8F6A] uppercase mb-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Doctor's Prescription Dispensing</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Have a Homeopathic Doctor's Prescription?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We accurately dispense prescriptions from registered homeopaths across Bihar. Our dispensary provides:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Exact potency matching (30C, 200C, 1M, LM potencies)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Dispensed in sugar globules No. 30/40 or double distilled water</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Clearly labeled dosage instructions (drops, times per day)</span>
                </li>
              </ul>

              <button
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0A8F6A] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#077254] transition"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Upload Doctor's Prescription via WhatsApp</span>
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
                alt="Prescription Dispensing Aanand Homeo Clinic"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
