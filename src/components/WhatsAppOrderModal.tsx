import React, { useState } from 'react';
import { X, MessageSquare, Phone, Upload, CheckCircle2, FileText, Clock, MapPin, User, Mail, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(initialMedicineName);
  const [preferredTime, setPreferredTime] = useState('Immediate / ASAP');
  const [message, setMessage] = useState('');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync initialMedicineName when provided
  React.useEffect(() => {
    if (initialMedicineName) {
      setMedicineName(initialMedicineName);
    }
  }, [initialMedicineName]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setPrescriptionFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !mobileNumber.trim() || (!medicineName.trim() && !prescriptionFile)) {
      setErrorMsg('Please fill in your name, mobile number, and either medicine name or attach prescription.');
      return;
    }

    const hasPrescription = prescriptionFile ? `Yes (${prescriptionFile.name}) - I will attach photo in WhatsApp` : 'No (Written Order)';
    
    // Format message as requested
    const formattedMessage = 
`*Hello Aanand Homeo Clinic Medicine Order*
---------------------------------------
*Customer Name:* ${customerName.trim()}
*Phone:* ${mobileNumber.trim()}${email ? `\n*Email:* ${email.trim()}` : ''}
*Medicine Required:* ${medicineName.trim() || 'Prescription Attached'}
*Delivery Address:* ${address.trim() || 'Store Pickup / Local Rajgir'}
*Prescription:* ${hasPrescription}
*Preferred Time:* ${preferredTime}
*Message / Notes:* ${message.trim() || 'Please confirm availability & price.'}
---------------------------------------
_Sent via Aanand Homeo Clinic Official Website_`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative my-8 w-full max-w-lg rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-4 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-t-2xl">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A8F6A] text-white shadow-sm">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">WhatsApp Medicine Order</h3>
              <p className="text-xs text-[#0A8F6A] font-medium">Instant verification by Aanand Homeo Clinic</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {errorMsg && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs font-semibold text-red-600 dark:bg-red-950/40 dark:text-red-300 border border-red-200 dark:border-red-900">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={customerName}
                  onChange={(e) => { setCustomerName(e.target.value); setErrorMsg(''); }}
                  className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 09534387930"
                  value={mobileNumber}
                  onChange={(e) => { setMobileNumber(e.target.value); setErrorMsg(''); }}
                  className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Email Address (Optional)
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="email"
                placeholder="e.g. customer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required / Potency
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Arnica 200C (1 bottle), Dr. Reckeweg R89 drops (1 bottle), Nux Vomica 30"
              value={medicineName}
              onChange={(e) => { setMedicineName(e.target.value); setErrorMsg(''); }}
              className="w-full rounded-xl border border-slate-300 bg-white p-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address in Rajgir
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. Near Shivani Cinema, Ashok Nagar, Rajgir"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Preferred Delivery / Pickup Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value="Immediate / ASAP">Immediate / ASAP (Same Day)</option>
                <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                <option value="Store Pickup at Block More">Store Pickup at Block More Clinic</option>
              </select>
            </div>
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Upload Prescription Photo (Optional)
            </label>
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition ${
                isDragOver
                  ? 'border-[#0A8F6A] bg-emerald-50 dark:bg-emerald-950/40'
                  : 'border-slate-300 dark:border-slate-700 hover:border-[#0A8F6A] bg-slate-50/60 dark:bg-slate-800/40'
              }`}
            >
              <input
                type="file"
                id="prescriptionUpload"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="prescriptionUpload" className="cursor-pointer block">
                {prescriptionFile ? (
                  <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-xs font-semibold">{prescriptionFile.name}</span>
                    <span className="text-[10px] text-slate-400">({(prescriptionFile.size / 1024).toFixed(1)} KB)</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400">
                    <Upload className="h-6 w-6 text-slate-400" />
                    <p className="text-xs font-medium">
                      <span className="font-bold text-[#0A8F6A]">Click to select</span> or drag & drop prescription image
                    </p>
                    <p className="text-[10px] text-slate-400">PNG, JPG, PDF up to 10MB</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Additional Notes / Symptoms
            </label>
            <input
              type="text"
              placeholder="e.g. Please supply sugar globules format instead of liquid dilution"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-2 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#0A8F6A] py-3 px-4 font-bold text-white shadow-md hover:bg-[#077254] active:scale-98 transition"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 px-4 font-bold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 transition"
            >
              <Phone className="h-4 w-4 text-[#0A8F6A]" />
              <span>Call Now</span>
            </a>
          </div>

          <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
            🔒 Your healthcare privacy is fully respected. Order directly verified on WhatsApp (09534387930).
          </p>
        </form>
      </div>
    </div>
  );
};
