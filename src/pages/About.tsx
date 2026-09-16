import React from 'react';
import { ShieldCheck, Heart, Award, Clock, Stethoscope, CheckCircle2, MapPin, Phone, MessageSquare, Target, Compass, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <SEO
        title="About Us | Aanand Homeo Clinic & Pharmacy Rajgir"
        description="Learn about the journey, mission, vision, and trusted homeopathic care of Aanand Homeo Clinic located at Block More, near Shivani Cinema Hall, Rajgir, Bihar."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Hero Section */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0A8F6A]/20 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>Pioneering Gentle Homeopathy in Nalanda District</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
              Dedicated to Genuine Healing, Pure Medicines &amp; Patient Compassion
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Serving the historic town of Rajgir and surrounding communities from our clinic at Block More, near Shivani Cinema Hall, Ashok Nagar. We believe true healthcare treats the person, not just the isolated symptoms.
            </p>
          </div>
        </div>

        {/* 1. BUSINESS STORY */}
        <section className="mb-16 rounded-2xl bg-white p-8 sm:p-10 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A]">
                Our Heritage &amp; Roots
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 mb-4">
                The Story Behind Aanand Homeo Clinic
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Founded with a resolute commitment to offering unadulterated, original homeopathic medicines in Rajgir, <strong>Aanand Homeo Clinic</strong> began its journey recognizing a major gap in the local market: patients often struggled to find genuine German dilutions, authentic mother tinctures, and reliable clinical guidance.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Over the years, we established direct supply partnerships with premier manufacturers including Dr. Reckeweg &amp; Co. (Bensheim, Germany), Dr. Willmar Schwabe, Adel Pekana, and SBL Private Limited. Today, our store at Block More stands as a beacon of health, where generations of families come for dependable relief from acute and chronic diseases.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0A8F6A]">
                <MapPin className="h-4 w-4" />
                <span>Ashok Nagar, Block More, near Shivani Cinema Hall, Rajgir, Bihar 803116</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Aanand Homeo Clinic Dispensary"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. MISSION, VISION & VALUES */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-[#0A8F6A] dark:bg-emerald-950/60 dark:text-emerald-400 mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  To provide the highest standard of genuine homeopathic formulations and compassionate patient guidance, ensuring affordable, safe, and holistic healthcare for every household in Rajgir and Bihar.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 mb-4">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  To be recognized as the most trusted homeopathic clinical pharmacy in the region, bridging classical homeopathic science with modern convenience, fast inventory tracking, and door-to-door delivery.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Our Core Values
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Integrity:</strong> Zero adulteration, only factory-sealed original batches. <strong>Compassion:</strong> Attentive listening to patient histories. <strong>Accessibility:</strong> Affordable pricing and open 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OWNER / PRACTITIONER MESSAGE */}
        <section className="mb-16 rounded-2xl bg-emerald-50 dark:bg-slate-900/90 p-8 sm:p-10 border border-emerald-200/80 dark:border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A8F6A] text-white">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Message from the Clinic Founder &amp; Pharmacy Team
                </h3>
                <p className="text-xs text-[#0A8F6A] font-semibold">
                  Aanand Homeo Clinic, Rajgir
                </p>
              </div>
            </div>
            <blockquote className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed border-l-4 border-[#0A8F6A] pl-4 my-4">
              "Homeopathy is not merely about pills; it is an art of stimulating the body's innate healing force (vis medicatrix naturae). In an era where patients frequently suffer from the harsh collateral side effects of aggressive drugs, gentle homeopathy offers safe, lasting restorative balance. When you receive a dilution or mother tincture from Aanand Homeo Clinic, you can rest assured it adheres to the strictest potentization standards. We are here to serve Rajgir with honesty, empathy, and professional integrity every single day."
            </blockquote>
          </div>
        </section>

        {/* 4. STORE OVERVIEW & ACHIEVEMENTS */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A]">
              Store Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Dispensary Standards &amp; Milestones
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0A8F6A]">2,500+</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                Medicines &amp; Dilutions in Stock
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Potencies 6C to CM</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">10,000+</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                Patients Guided
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Across Rajgir &amp; Nalanda</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600">100%</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                Original Brand Guarantee
              </p>
              <p className="text-[11px] text-slate-400 mt-1">German &amp; Indian seals</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-600">7 Days</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                Open Every Week
              </p>
              <p className="text-[11px] text-slate-400 mt-1">8:30 AM to 8:30 PM</p>
            </div>
          </div>
        </section>

        {/* 5. BUSINESS TIMELINE */}
        <section className="mb-16 rounded-2xl bg-white p-8 sm:p-10 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A]">
              Our Journey
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              Milestones in Patient Care
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-200 dark:border-slate-700 ml-4 md:ml-32 space-y-8">
            <div className="relative pl-6">
              <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 border-white bg-[#0A8F6A] dark:border-slate-900"></div>
              <span className="text-xs font-bold text-[#0A8F6A]">Establishment</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Clinic Opened at Block More, Rajgir</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Inaugurated near Shivani Cinema Hall to bring certified homeopathic solutions to local residents.
              </p>
            </div>

            <div className="relative pl-6">
              <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 border-white bg-[#0A8F6A] dark:border-slate-900"></div>
              <span className="text-xs font-bold text-[#0A8F6A]">Expansion</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Authorized Import of German Formulations</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Introduced complete line-up of Dr. Reckeweg (R1–R89) and Dr. Willmar Schwabe German drops.
              </p>
            </div>

            <div className="relative pl-6">
              <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 border-white bg-[#0A8F6A] dark:border-slate-900"></div>
              <span className="text-xs font-bold text-[#0A8F6A]">Digital Care</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">WhatsApp Medicine Delivery Launched</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Empowered elderly and distant patients to send prescriptions via WhatsApp for doorstep delivery in Rajgir.
              </p>
            </div>

            <div className="relative pl-6">
              <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 border-white bg-[#0A8F6A] dark:border-slate-900"></div>
              <span className="text-xs font-bold text-[#0A8F6A]">Today &amp; Ahead</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Online Inventory Checker &amp; PWA Launch</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Continuous modern care with real-time stock lookup and multi-device progressive app capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Action CTA */}
        <div className="rounded-2xl bg-[#0A8F6A] p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            Visit Aanand Homeo Clinic in Rajgir Today
          </h3>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto mb-6">
            Consult our team at Block More or connect via WhatsApp for prescription refills and guidance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 shadow hover:bg-slate-100"
            >
              <MessageSquare className="h-4 w-4 text-[#0A8F6A]" />
              <span>WhatsApp Medicine Order</span>
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-emerald-800/40 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-emerald-800"
            >
              <Phone className="h-4 w-4" />
              <span>Call Clinic (09534387930)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
