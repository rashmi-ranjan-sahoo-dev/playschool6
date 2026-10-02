import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  Baby, 
  Clock, 
  Sparkles, 
  CheckCircle2,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { schoolConfig } from '../config/schoolConfig';

export default function TourBookingModal({ isOpen, onClose, initialProgram = "" }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    program: initialProgram || 'Nursery (Little Explorers)',
    preferredDate: '',
    timeSlot: 'Morning (09:30 AM - 11:30 AM)'
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync initialProgram if provided
  useEffect(() => {
    if (initialProgram) {
      setFormData(prev => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  // 1. Close when pressing the ESC key on tablet & desktop
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        resetAndClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // 2. Lock body scroll when popup is open so the background page doesn't scroll
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    setSubmitted(true);

    // Fire joyful celebratory confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#9C29B2', '#88C90D', '#FEC624', '#00BBF2', '#FF5E7E']
      });
    } catch (err) {
      // Fallback
    }

    // Build WhatsApp message with input values
    const messageLines = [
      `*Admission / Campus Tour Enquiry - ${schoolConfig.brand.name}*`,
      `----------------------------------------`,
      `*Session:* 2027-2028`,
      `*Parent Name:* ${formData.parentName}`,
      `*Phone Number:* ${formData.phone}`,
      formData.childName ? `*Child Name:* ${formData.childName}` : '',
      `*Program / Class:* ${formData.program}`,
      formData.preferredDate ? `*Preferred Date:* ${formData.preferredDate}` : '',
      formData.timeSlot ? `*Preferred Slot:* ${formData.timeSlot}` : '',
      `----------------------------------------`,
      `_Sent via Nanhe Kadam Website_`
    ].filter(Boolean).join('\n');

    const whatsappNum = schoolConfig.contact.whatsappNumber || '918328411176';
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(messageLines)}`;

    // Redirect to WhatsApp with entered values
    setTimeout(() => {
      try {
        const opened = window.open(whatsappUrl, '_blank');
        if (!opened || opened.closed || typeof opened.closed === 'undefined') {
          window.location.href = whatsappUrl;
        }
      } catch (err) {
        window.location.href = whatsappUrl;
      }
    }, 500);
  };

  const handleWhatsAppRedirect = () => {
    const messageLines = [
      `*Admission / Campus Tour Enquiry - ${schoolConfig.brand.name}*`,
      `----------------------------------------`,
      `*Session:* 2027-2028`,
      `*Parent Name:* ${formData.parentName}`,
      `*Phone Number:* ${formData.phone}`,
      formData.childName ? `*Child Name:* ${formData.childName}` : '',
      `*Program / Class:* ${formData.program}`,
      formData.preferredDate ? `*Preferred Date:* ${formData.preferredDate}` : '',
      formData.timeSlot ? `*Preferred Slot:* ${formData.timeSlot}` : '',
      `----------------------------------------`,
      `_Sent via Nanhe Kadam Website_`
    ].filter(Boolean).join('\n');

    const whatsappNum = schoolConfig.contact.whatsappNumber || '918328411176';
    window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(messageLines)}`, '_blank');
  };

  return (
    /* 
      BACKDROP / BLANK SPACE:
      Clicking in this blank space (outside the modal box) closes the popup immediately 
      on both phone and desktop screens.
    */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={resetAndClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
    >
      {/* 
        MODAL CARD CONTAINER:
        1. e.stopPropagation() prevents clicks inside from closing the popup.
        2. max-h-[92vh] with flex flex-col ensures header is fixed and body scrolls smoothly 
           on all mobile phone screens (no cut-off content).
      */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl sm:rounded-[36px] shadow-2xl overflow-hidden border border-purple-100/90 my-auto max-h-[92vh] sm:max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* ======================================================== */}
        {/* MODAL HEADER: Clean, attractive & compact for phones     */}
        {/* ======================================================== */}
        <div className="bg-gradient-to-r from-[#9C29B2] to-[#7A1D8D] text-white p-5 sm:p-6 sm:pb-7 relative shrink-0">
          
          {/* Accessible, easy-to-tap Cross (X) Close Button */}
          <button
            type="button"
            onClick={resetAndClose}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 active:scale-90 text-white flex items-center justify-center transition-all cursor-pointer z-30 shadow-xs"
            aria-label="Close contact popup"
          >
            <X className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.5]" />
          </button>

          {/* Saffron Admissions Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FEC624] text-[#103741] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-2 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions 2027-28</span>
          </div>

          <h3 id="modal-title" className="font-display font-bold text-xl sm:text-2xl text-white pr-8 leading-snug">
            Book a Campus Tour
          </h3>
          <p className="text-xs sm:text-[13px] text-white/85 mt-1 font-sans-clean line-clamp-2">
            Experience our joyful classrooms, meet caring Didis, and let your little one play!
          </p>
        </div>

        {/* ======================================================== */}
        {/* MODAL BODY: Simple, clean & scrollable on all phones     */}
        {/* ======================================================== */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
          {submitted ? (
            /* SUBMITTED CONFIRMATION STATE */
            <div className="text-center py-4 sm:py-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>

              <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#103741] mb-1.5">
                Tour Request Received!
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 font-sans-clean mb-4 sm:mb-6 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.parentName}</strong>! Our Admissions Counselor will call you at{' '}
                <strong className="text-[#9C29B2]">{formData.phone}</strong> to confirm your slot.
              </p>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FEF5FF] border border-purple-100 text-left mb-5 text-xs text-slate-700 space-y-1">
                {formData.childName && (
                  <p><strong>Child's Name:</strong> {formData.childName}</p>
                )}
                <p><strong>Program Interested:</strong> {formData.program}</p>
                {formData.preferredDate && (
                  <p><strong>Preferred Date:</strong> {formData.preferredDate}</p>
                )}
                <p><strong>Preferred Slot:</strong> {formData.timeSlot}</p>
                <p><strong>Contact Desk:</strong> +91 83284 11176</p>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3 sm:py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] active:scale-98 text-white font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Open Details on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full py-2.5 sm:py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 active:scale-98 text-slate-700 font-display font-bold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Close & Back to Website
                </button>
              </div>
            </div>
          ) : (
            /* SIMPLE, CLEAN FORM FOR MOBILE & DESKTOP */
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              
              {/* Parent Name */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Parent / Guardian Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 sm:top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pooja Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#9C29B2] focus:ring-1 focus:ring-[#9C29B2] focus:outline-none text-[15px] sm:text-sm text-slate-800 bg-slate-50/50 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* WhatsApp / Phone Number */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 sm:top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 83284 11176"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#9C29B2] focus:ring-1 focus:ring-[#9C29B2] focus:outline-none text-[15px] sm:text-sm text-slate-800 bg-slate-50/50 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Child's Name & Program */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Child's Name <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Baby className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 sm:top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Aarav"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#9C29B2] focus:ring-1 focus:ring-[#9C29B2] focus:outline-none text-[15px] sm:text-sm text-slate-800 bg-slate-50/50 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Program / Class *
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#9C29B2] focus:ring-1 focus:ring-[#9C29B2] focus:outline-none text-[15px] sm:text-sm text-slate-800 bg-slate-50/50 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Playgroup (Toddler Bloom)">Playgroup (1.5 – 2.5 Yrs)</option>
                    <option value="Nursery (Little Explorers)">Nursery (2.5 – 3.5 Yrs)</option>
                    <option value="Junior KG / LKG">Junior KG / LKG (3.5 – 4.5 Yrs)</option>
                    <option value="Senior KG / UKG">Senior KG / UKG (4.5 – 5.5 Yrs)</option>
                    <option value="Daycare & Extended Care">Daycare & After-School</option>
                  </select>
                </div>
              </div>

              {/* Preferred Tour Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 sm:top-3.5" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#9C29B2] focus:ring-1 focus:ring-[#9C29B2] focus:outline-none text-[15px] sm:text-sm text-slate-800 bg-slate-50/50 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#9C29B2] focus:ring-1 focus:ring-[#9C29B2] focus:outline-none text-[15px] sm:text-sm text-slate-800 bg-slate-50/50 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Morning (09:30 AM - 11:30 AM)">Morning (9:30 AM – 11:30 AM)</option>
                    <option value="Afternoon (12:00 PM - 02:00 PM)">Afternoon (12:00 PM – 2:00 PM)</option>
                    <option value="Evening (04:00 PM - 05:30 PM)">Evening (4:00 PM – 5:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#9C29B2] to-[#7A1D8D] hover:from-[#88C90D] hover:to-[#6CA507] active:scale-98 text-white font-display font-bold text-sm sm:text-base shadow-sunny hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 mt-3"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                <span>Confirm Visit & Connect</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <p className="text-[11px] text-center text-slate-400 font-sans-clean">
                🔒 Privacy guaranteed. Directly connects with our Noida Admissions Desk.
              </p>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
