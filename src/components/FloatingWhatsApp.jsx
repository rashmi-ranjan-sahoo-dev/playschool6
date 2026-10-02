import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${schoolConfig.contact.whatsappNumber}?text=Namaste!%20I%20am%20interested%20in%20learning%20more%20about%20admissions%20at%20${encodeURIComponent(schoolConfig.brand.name)}.`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end gap-3">
      {/* Friendly Bubble Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white text-[#103741] shadow-xl border border-slate-100 text-xs font-semibold animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Chat with Admissions Counselor</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
        <span className="sr-only">WhatsApp Inquiry</span>
      </a>
    </div>
  );
}
