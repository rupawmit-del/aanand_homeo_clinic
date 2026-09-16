import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm hover:bg-white/20 transition"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/25 transition"
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/25 transition"
        aria-label="Next photo"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl bg-black/40 shadow-2xl flex flex-col items-center">
        <img
          src={currentItem.imageUrl}
          alt={currentItem.title}
          className="max-h-[72vh] w-auto object-contain rounded-t-xl"
        />
        <div className="w-full bg-slate-900/90 p-4 text-center text-white backdrop-blur-md">
          <h4 className="text-base font-bold">{currentItem.title}</h4>
          <p className="mt-1 text-xs text-slate-300">{currentItem.description}</p>
          <div className="mt-2 text-[11px] text-slate-400">
            {currentIndex + 1} of {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};
