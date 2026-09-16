import React, { useState } from 'react';
import { GALLERY_DATA, GALLERY_CATEGORIES } from '../data/galleryData';
import { LightboxModal } from '../components/LightboxModal';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import { ZoomIn, Camera, Sparkles, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <SEO
        title="Photo Gallery | Aanand Homeo Clinic Rajgir"
        description="Browse photo gallery of Aanand Homeo Clinic: Store front at Block More, medicine dispensary shelves, German Dr. Reckeweg drops, and diagnostic equipment in Rajgir."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Photo Gallery' }]} />

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0A8F6A]/10 px-3.5 py-1 text-xs font-bold text-[#0A8F6A] mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Store &amp; Clinic Visual Tour</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Clinic &amp; Pharmacy Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            Take a look inside our clinic at Block More, near Shivani Cinema Hall, Rajgir. Tap any photo to zoom with high-resolution lightbox.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0A8F6A] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid with Zoom Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-sm">
                    <ZoomIn className="h-5 w-5" />
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A8F6A]">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-[#0A8F6A] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Store Highlights Note */}
        <div className="mt-14 rounded-2xl bg-white p-6 sm:p-8 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center max-w-3xl mx-auto shadow-sm">
          <MapPin className="mx-auto h-7 w-7 text-[#0A8F6A] mb-2" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Visit Us in Person at Ashok Nagar, Rajgir
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Conveniently located at BLOCK MORE, near SHIVANI CINEMA HALL, Ashok Nagar, Rajgir, Bihar 803116.
          </p>
          <a
            href={SITE_CONFIG.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8F6A] hover:underline"
          >
            <span>Get Live Directions on Google Maps</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          items={filteredItems}
          currentIndex={lightboxIndex}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </div>
  );
};

export default Gallery;
