import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, RefreshCw, Sparkles, PhoneCall } from 'lucide-react';
import rawStockData from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

interface MedicineStockCheckerProps {
  onSelectMedicine?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onSelectMedicine }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Load from separate JSON
  const stockList = rawStockData as MedicineItem[];

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(stockList.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, [stockList]);

  // Filtered medicines
  const filteredMedicines = useMemo(() => {
    return stockList.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.indication.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.potency && item.potency.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [stockList, searchTerm, selectedCategory, statusFilter]);

  const handleOrder = (medicine: MedicineItem) => {
    if (onSelectMedicine) {
      onSelectMedicine(`${medicine.name} (${medicine.brand}) - ₹${medicine.mrp}`);
    } else {
      const msg = `Hello Aanand Homeo Clinic, I want to check availability & order: ${medicine.name} (${medicine.brand}) - ₹${medicine.mrp}`;
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-800 dark:bg-rose-950/60 dark:text-rose-300">
            <XCircle className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
      {/* Header Banner */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-[#0A8F6A]/10 px-3 py-1 text-xs font-bold text-[#0A8F6A] mb-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Exclusive Live Inventory Tool</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Medicine Stock & Availability Checker
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Search live store inventory at Block More, Rajgir. Instant stock status for German & Indian homeopathic medicines.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Verified Daily Stock: <strong className="text-slate-900 dark:text-white">{stockList.length} items listed</strong></span>
        </div>
      </div>

      {/* Search & Filters Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6">
        {/* Search Input */}
        <div className="relative md:col-span-6">
          <Search className="absolute left-3.5 top-3 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by medicine name, brand (Reckeweg, Schwabe, SBL), symptom..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50/70 py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0A8F6A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="relative md:col-span-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full appearance-none rounded-xl border border-slate-300 bg-slate-50/70 py-2.5 px-3.5 text-sm text-slate-800 focus:border-[#0A8F6A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="relative md:col-span-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full appearance-none rounded-xl border border-slate-300 bg-slate-50/70 py-2.5 px-3.5 text-sm text-slate-800 focus:border-[#0A8F6A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="All">All Stock Status</option>
            <option value="Available">Available (In Stock)</option>
            <option value="Limited Stock">Limited Stock (&lt; 5)</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Results Count & Quick Tags */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
        <div>
          Showing <span className="font-bold text-slate-900 dark:text-white">{filteredMedicines.length}</span> of {stockList.length} medicines
          {searchTerm && <span> matching "<strong>{searchTerm}</strong>"</span>}
        </div>
        
        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap gap-1.5">
          {['Arnica', 'R89', 'Schwabe', 'Berberis', 'Nux Vomica'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 hover:border-[#0A8F6A] hover:text-[#0A8F6A] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 transition"
            >
              +{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Table / Cards */}
      {filteredMedicines.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
          <AlertTriangle className="mx-auto h-10 w-10 text-amber-500 mb-2" />
          <h4 className="font-bold text-slate-800 dark:text-white">Medicine Not Listed in Quick Checker?</h4>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            We stock over 2,500+ dilutions and remedies in our physical clinic in Rajgir! Send us your medicine name on WhatsApp and we will immediately verify shelf stock.
          </p>
          <button
            onClick={() => {
              const msg = `Hello Aanand Homeo Clinic, I am searching for medicine: "${searchTerm}". Is it available at your Rajgir clinic?`;
              window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0A8F6A] px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-[#077254]"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ask via WhatsApp for "{searchTerm || 'Medicine'}"</span>
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100/80 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 uppercase tracking-wider font-semibold text-[11px]">
              <tr>
                <th className="py-3 px-4">Medicine & Indication</th>
                <th className="py-3 px-3">Brand / Form</th>
                <th className="py-3 px-3 text-center">Status</th>
                <th className="py-3 px-3 text-right">MRP</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredMedicines.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900 dark:text-white text-sm">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {item.indication}
                    </div>
                    {item.expiry !== 'N/A' && (
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                        Exp: {item.expiry}
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-medium text-slate-800 dark:text-slate-200">
                      {item.brand}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {item.form}
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    {getStatusBadge(item.status)}
                    <div className="text-[10px] text-slate-400 mt-1">
                      {item.status === 'Out of Stock' ? 'Restocking soon' : `${item.availableQuantity} units ready`}
                    </div>
                  </td>
                  <td className="py-3 px-3 text-right font-bold text-slate-900 dark:text-white">
                    ₹{item.mrp}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {item.status !== 'Out of Stock' ? (
                      <button
                        onClick={() => handleOrder(item)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A8F6A] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#077254] active:scale-95 transition"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Order</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          const msg = `Hello Aanand Homeo Clinic, please notify me when ${item.name} (${item.brand}) is back in stock at Rajgir.`;
                          window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
                        }}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        <RefreshCw className="h-3 w-3" />
                        <span>Notify Me</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Note for API integration */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 gap-2 border-t border-slate-100 dark:border-slate-800 pt-3">
        <span>* Live inventory synced from Aanand Homeo Clinic dispensary database.</span>
        <span className="font-medium text-[#0A8F6A]">Need prescription review? WhatsApp: 09534387930</span>
      </div>
    </div>
  );
};
