import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Mail, Navigation, Send, CheckCircle2, AlertCircle, ShieldAlert } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Medicine Stock Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please enter your Name, Phone Number, and Message.');
      return;
    }

    // In client-side SPA, open WhatsApp directly with prefilled inquiry message
    const formattedMsg = `*Inquiry from Website Contact Form*
-------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ''}*Subject:* ${formData.subject}
*Message:* ${formData.message}
-------------------------------
_Aanand Homeo Clinic Contact Page_`;

    setIsSubmitted(true);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`, '_blank');
  };

  return (
    <div className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <SEO
        title="Contact Us & Directions | Aanand Homeo Clinic Rajgir"
        description="Contact Aanand Homeo Clinic at Block More, near Shivani Cinema Hall, Ashok Nagar, Rajgir, Bihar 803116. Phone & WhatsApp: 09534387930. Open 7 days 8:30 AM – 8:30 PM."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Contact Us & Location' }]} />

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0A8F6A]/10 px-3.5 py-1 text-xs font-bold text-[#0A8F6A] mb-3">
            <MapPin className="h-3.5 w-3.5" />
            <span>Rajgir Central Location</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch &amp; Find Directions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            Have questions about medicine availability or consultation? Visit our dispensary or connect with our pharmacy team immediately.
          </p>
        </div>

        {/* Action Buttons Row: Call Button, WhatsApp Button, Directions Button */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {/* Call Button */}
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center justify-center gap-3 rounded-2xl bg-white p-5 shadow-sm hover:shadow-md dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white transition group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 group-hover:scale-105 transition-transform">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Call Directly</p>
              <p className="text-sm font-bold">{SITE_CONFIG.phoneFormatted}</p>
            </div>
          </a>

          {/* WhatsApp Button */}
          <button
            type="button"
            onClick={onOpenOrderModal}
            className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-50/80 p-5 shadow-sm hover:shadow-md dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800 text-slate-900 dark:text-white transition group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A8F6A] text-white group-hover:scale-105 transition-transform shadow-md">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="text-xs text-[#0A8F6A] font-semibold">WhatsApp Order</p>
              <p className="text-sm font-bold">09534387930</p>
            </div>
          </button>

          {/* Directions Button */}
          <a
            href={SITE_CONFIG.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white p-5 shadow-sm hover:shadow-md dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white transition group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 group-hover:scale-105 transition-transform">
              <Navigation className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400">Google Maps</p>
              <p className="text-sm font-bold">Get Directions</p>
            </div>
          </a>
        </div>

        {/* Contact Details & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          {/* Left Column: Business Info & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Clinic Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-0.5">Physical Address:</strong>
                    <p className="leading-relaxed">BLOCK MORE, near SHIVANI CINEMA HALL</p>
                    <p className="leading-relaxed">Ashok Nagar, Rajgir, Bihar 803116</p>
                    <p className="text-[11px] text-slate-400 mt-1">Landmark: Opposite Block Road junction, near Shivani Cinema</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Clock className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-0.5">Dispensary Hours:</strong>
                    <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                      Monday – Sunday (Open 7 Days)
                    </p>
                    <p>8:30 AM – 8:30 PM (Continuous)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Phone className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-0.5">Direct Contacts:</strong>
                    <p>Phone: <a href={`tel:${SITE_CONFIG.phone}`} className="hover:underline">{SITE_CONFIG.phoneFormatted}</a></p>
                    <p>WhatsApp: <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} className="hover:underline text-[#0A8F6A] font-semibold">{SITE_CONFIG.whatsappDisplay}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Mail className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-0.5">Email Inquiries:</strong>
                    <p>{SITE_CONFIG.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact Section */}
            <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/30 p-6 border border-amber-200/80 dark:border-amber-800/60">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm mb-2">
                <ShieldAlert className="h-5 w-5 text-amber-600" />
                <span>Emergency Medicine Support</span>
              </div>
              <p className="text-xs text-amber-900/80 dark:text-amber-300/80 leading-relaxed">
                For urgent requirement of life-saving dilutions or chronic flare-ups after store hours, message our priority WhatsApp dispatch desk at <strong>09534387930</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Send an Online Message / Prescription Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below. We will respond promptly via WhatsApp or phone call.
              </p>

              {isSubmitted ? (
                <div className="rounded-xl bg-emerald-50 p-6 text-center dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 mb-2" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Inquiry Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-sm mx-auto">
                    Your inquiry has been formatted and shared with Aanand Homeo Clinic via WhatsApp. Our staff will assist you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 rounded-xl bg-[#0A8F6A] px-4 py-2 text-xs font-bold text-white shadow hover:bg-[#077254]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs font-semibold text-red-600 dark:bg-red-950/40 dark:text-red-300 border border-red-200">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 09534387930"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. user@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 px-3 text-sm text-slate-900 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      >
                        <option value="Medicine Stock Inquiry">Medicine Stock Inquiry</option>
                        <option value="Home Delivery in Rajgir">Home Delivery in Rajgir</option>
                        <option value="Doctor Prescription Dispensing">Doctor Prescription Dispensing</option>
                        <option value="Consultation Guidance">Consultation Guidance</option>
                        <option value="German Dilutions (Dr. Reckeweg)">German Dilutions (Dr. Reckeweg)</option>
                        <option value="Other Question">Other Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Your Message / Medicine Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Please specify medicine name, potency, quantity, or any symptoms..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0A8F6A] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#077254] transition active:scale-98"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Inquiry to WhatsApp (09534387930)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Full Width Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
              <MapPin className="h-4 w-4 text-[#0A8F6A]" />
              <span>Interactive Location Map • Block More, Rajgir</span>
            </div>
            <a
              href={SITE_CONFIG.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#0A8F6A] hover:underline flex items-center gap-1"
            >
              <span>Open in Maps App</span>
              <Navigation className="h-3 w-3" />
            </a>
          </div>
          <div className="h-96 w-full rounded-xl overflow-hidden">
            <iframe
              title="Aanand Homeo Clinic Full Google Map"
              src={SITE_CONFIG.address.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
