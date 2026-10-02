import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Camera, 
  X, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function GalleryLife() {
  const [filter, setFilter] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  const categories = ['All', 'Celebrations', 'Learning', 'Nature', 'Sports'];

  const filteredItems = filter === 'All' 
    ? schoolConfig.galleryMoments 
    : schoolConfig.galleryMoments.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF5FF] text-[#9C29B2] border border-purple-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Memorable Moments & Indian Culture</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#103741] mb-5 leading-tight">
            Life & Celebrations at Nanhe Kadam
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-sans-clean">
            From vibrant festival celebrations to joyful sensory messy play, explore glimpses 
            of everyday laughter and discovery across our campus.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-display font-bold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#9C29B2] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-[#9C29B2] border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-100"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#103741]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-[#103741] text-xs font-bold w-max mb-2">
                  {item.tag}
                </span>
                <h4 className="font-display font-bold text-lg leading-snug">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-xs text-white/80 mt-1">
                  <span>Click to expand view</span>
                  <Maximize2 className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>

              {/* Bottom Tag Bar for Mobile */}
              <div className="p-4 sm:hidden bg-white">
                <span className="text-xs font-bold text-[#9C29B2]">{item.category}</span>
                <p className="font-display font-bold text-sm text-[#103741] mt-0.5">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-white flex items-center justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-[#9C29B2] text-xs font-bold">
                  {activeImage.category} • {activeImage.tag}
                </span>
                <h3 className="font-display font-bold text-xl text-[#103741] mt-2">
                  {activeImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
