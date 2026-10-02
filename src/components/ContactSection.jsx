import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle, 
  CalendarCheck,
  User,
  Phone,
  Mail,
  Smile,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Star,
  Clock,
  Video,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { schoolConfig } from '../config/schoolConfig';
import ScrollReveal from './ScrollReveal';

export default function ContactSection({ onOpenTourModal }) {
  const [selectedTopic, setSelectedTopic] = useState('Campus Tour');
  const [formData, setFormData] = useState({
    guardianName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const topics = ['Campus Tour', 'Playschool Admission', 'Daycare Care'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.guardianName || !formData.phone) return;

    setLoading(true);

    const whatsappNum = schoolConfig.contact.whatsappNumber || '918328411176';
    const messageLines = [
      `*New Admission / Visit Enquiry - ${schoolConfig.brand.name}*`,
      `----------------------------------------`,
      `*Inquiry Type:* ${selectedTopic}`,
      `*Academic Session:* 2027-2028`,
      `*Guardian Name:* ${formData.guardianName}`,
      `*Phone Number:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : '',
      formData.childName ? `*Child Name:* ${formData.childName}` : '',
      formData.childAge ? `*Child Age:* ${formData.childAge}` : '',
      formData.message ? `*Message:* ${formData.message}` : '',
      `----------------------------------------`,
      `_Sent via Nanhe Kadam Playschool Portal_`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(messageLines)}`;

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      
      // Redirect to WhatsApp with input values
      try {
        const opened = window.open(whatsappUrl, '_blank');
        if (!opened || opened.closed || typeof opened.closed === 'undefined') {
          window.location.href = whatsappUrl;
        }
      } catch (err) {
        window.location.href = whatsappUrl;
      }

      // Trigger joyful celebration confetti
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.65 },
          colors: ['#9C29B2', '#88C90D', '#FEC624', '#00BBF2', '#FF7A1A']
        });
      } catch (err) {
        // Fallback
      }
    }, 400);
  };

  return (
    <section 
      id="contact" 
      className="py-10 sm:py-12 lg:py-14 bg-[#FAF7F2]/50 relative overflow-hidden select-none"
    >
      {/* Decorative Floating Background Ambient Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-purple-200/40 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-amber-100/50 filter blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-64 h-64 rounded-full bg-emerald-100/40 filter blur-3xl pointer-events-none" />

      {/* Playful Floating SVG Doodles */}
      <div className="absolute top-12 left-10 text-3xl opacity-70 animate-float-slow pointer-events-none select-none">
        ✈️
      </div>
      <div className="absolute bottom-16 left-1/3 text-2xl opacity-60 animate-float-gentle pointer-events-none select-none">
        ⭐
      </div>
      <div className="absolute top-20 right-12 text-3xl opacity-60 animate-bounce pointer-events-none select-none">
        🎨
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ======================================================== */}
          {/* 1. LEFT COLUMN: Elevated, Attractive Glassmorphic Form   */}
          {/* ======================================================== */}
          <ScrollReveal animation="fade-right" duration={650} className="lg:col-span-7">
            <div className="rounded-[32px] sm:rounded-[38px] bg-white/95 backdrop-blur-md border-2 border-purple-100/90 p-5 sm:p-7 md:p-8 shadow-[0_20px_45px_-12px_rgba(156,41,178,0.12)] hover:shadow-[0_26px_55px_-12px_rgba(156,41,178,0.16)] transition-all duration-300 relative group/card">
              
              {/* Top Banner Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-purple-100/80">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF5FF] text-[#9C29B2] text-xs font-bold border border-purple-200/60">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
                  <span>Admissions Open 2027-28</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  ⚡ Quick 2-Hr Response
                </span>
              </div>

              {/* Inquiry Type Chips */}
              <div className="mb-5">
                <span className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider font-display">
                  Select Inquiry Type:
                </span>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTopic(t)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-sans-clean transition-all duration-200 cursor-pointer ${
                        selectedTopic === t
                          ? 'bg-[#9C29B2] text-white shadow-sm scale-105'
                          : 'bg-[#FAF7F2] text-slate-600 hover:bg-purple-50 hover:text-[#9C29B2]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  
                  {/* Row 1: Guardian Name & Phone No with Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="relative">
                      <div className="absolute left-4.5 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="guardianName"
                        required
                        placeholder="Gurdian Name *"
                        value={formData.guardianName}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] hover:bg-purple-50/40 rounded-full pl-11 pr-5 py-3.5 sm:py-4 text-slate-800 placeholder-slate-400 text-sm font-sans-clean border border-slate-200/80 focus:border-[#9C29B2] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#9C29B2]/15 shadow-2xs transition-all"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute left-4.5 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone No (+91) *"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] hover:bg-purple-50/40 rounded-full pl-11 pr-5 py-3.5 sm:py-4 text-slate-800 placeholder-slate-400 text-sm font-sans-clean border border-slate-200/80 focus:border-[#9C29B2] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#9C29B2]/15 shadow-2xs transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div className="relative">
                    <div className="absolute left-4.5 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] hover:bg-purple-50/40 rounded-full pl-11 pr-5 py-3.5 sm:py-4 text-slate-800 placeholder-slate-400 text-sm font-sans-clean border border-slate-200/80 focus:border-[#9C29B2] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#9C29B2]/15 shadow-2xs transition-all"
                    />
                  </div>

                  {/* Row 3: Child Name & Age of Child */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="relative">
                      <div className="absolute left-4.5 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none">
                        <Smile className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="childName"
                        placeholder="Child Name"
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] hover:bg-purple-50/40 rounded-full pl-11 pr-5 py-3.5 sm:py-4 text-slate-800 placeholder-slate-400 text-sm font-sans-clean border border-slate-200/80 focus:border-[#9C29B2] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#9C29B2]/15 shadow-2xs transition-all"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute left-4.5 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="childAge"
                        placeholder="Age of Child (e.g. 2.5 Yrs)"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] hover:bg-purple-50/40 rounded-full pl-11 pr-5 py-3.5 sm:py-4 text-slate-800 placeholder-slate-400 text-sm font-sans-clean border border-slate-200/80 focus:border-[#9C29B2] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#9C29B2]/15 shadow-2xs transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="relative">
                    <div className="absolute left-4.5 top-4.5 text-purple-400 pointer-events-none">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Message / Specific queries or convenient visit time..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] hover:bg-purple-50/40 rounded-[24px] pl-11 pr-5 py-3.5 sm:py-4 text-slate-800 placeholder-slate-400 text-sm font-sans-clean border border-slate-200/80 focus:border-[#9C29B2] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#9C29B2]/15 shadow-2xs transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Row 5: Submit Button with Shimmer & Scale */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="relative overflow-hidden w-full py-4 rounded-full bg-gradient-to-r from-[#9C29B2] via-[#851E9B] to-[#9C29B2] hover:from-[#88C90D] hover:to-[#6CA507] text-white font-display font-extrabold text-base tracking-wide shadow-sunny hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group"
                    >
                      {/* Shimmer Light Bar */}
                      <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
                      
                      {loading ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Submit Appointment Request</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-slate-400 font-sans-clean mt-2">
                      🔒 100% Privacy • No Spam Calls • Direct Counselor Walk-Through
                    </p>
                  </div>

                </form>
              ) : (
                /* Celebration Confirmation Screen */
                <div className="py-10 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-18 h-18 rounded-full bg-[#88C90D]/20 text-[#88C90D] flex items-center justify-center mb-1">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#103741]">
                    Dhanyavaad, {formData.guardianName || 'Parent'}! 🙏
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base font-sans-clean max-w-md leading-relaxed">
                    Your appointment request for <strong>{selectedTopic}</strong> at <strong>{schoolConfig.brand.name}</strong> has been received. 
                    Our admissions counselor will call you shortly on <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-3 flex flex-wrap gap-3 justify-center">
                    <a
                      href={`https://wa.me/${schoolConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hello, I have submitted an admission inquiry for ${schoolConfig.brand.name} (Session 2027-2028). Name: ${formData.guardianName}, Phone: ${formData.phone}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-display font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${schoolConfig.contact.primaryPhone}`}
                      className="px-6 py-2.5 rounded-full bg-[#9C29B2] hover:bg-[#88C90D] text-white font-display font-bold text-xs shadow-sunny hover:scale-105 transition-all flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call Now: {schoolConfig.contact.primaryPhone}</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-slate-200 text-slate-700 font-display font-bold text-xs transition-colors cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              )}

            </div>
          </ScrollReveal>

          {/* ======================================================== */}
          {/* 2. RIGHT COLUMN: Visual Narrative, Badges & CTAs         */}
          {/* ======================================================== */}
          <ScrollReveal animation="fade-left" delay={120} duration={650} className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Eyebrow in Purple */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E8FF] text-[#9C29B2] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#9C29B2]" />
              <span>Make Appointment</span>
            </div>

            {/* Main Headline in Bold Navy */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#103741] leading-[1.18] tracking-tight mb-3">
              Join Our Fun with <br className="hidden sm:inline" />
              <span className="text-[#9C29B2] underline decoration-[#FEC624] decoration-wavy decoration-2">
                Cutie Kids
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans-clean mb-4 max-w-lg">
              Schedule a personalized campus walk-through and experience our loving sanctuary 
              firsthand. Meet our Principal, interact with our caring educators, and let your 
              little one explore our safe sensory learning spaces and vibrant play zones.
            </p>

            {/* 3 Key Indian Parent Reassurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full mb-5">
              <div className="p-3 rounded-2xl bg-white border border-purple-100 shadow-2xs flex flex-col items-start">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#9C29B2] flex items-center justify-center mb-1.5">
                  <Video className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#103741] leading-tight">Live CCTV</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Mobile app access</span>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-purple-100 shadow-2xs flex flex-col items-start">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#103741] leading-tight">Lady Didis</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Caring assistance</span>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-purple-100 shadow-2xs flex flex-col items-start">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-1.5">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#103741] leading-tight">1:8 Ratio</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Personal focus</span>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <button
                onClick={() => onOpenTourModal ? onOpenTourModal('Make Appointment') : null}
                className="px-8 py-3.5 rounded-full bg-[#9C29B2] hover:bg-[#88C90D] text-white font-display font-bold text-sm sm:text-base tracking-wide shadow-sunny hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-amber-300" />
                <span>Learn More</span>
              </button>

              <a
                href={`tel:${schoolConfig.contact.primaryPhone}`}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#103741] font-display font-bold text-sm border border-slate-200 shadow-2xs transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Call Counselor</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="flex items-center gap-3 pt-2 border-t border-purple-100/80 w-full">
              <div className="flex -space-x-2">
                <img src="/images/hero-indian-playschool-blocks.jpg" alt="Child" className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-2xs" />
                <img src="/images/hero-indian-playschool-activities.jpg" alt="Child" className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-2xs" />
                <img src="/images/hero-indian-playschool-playground.jpg" alt="Child" className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-2xs" />
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 font-medium font-sans-clean mt-0.5">
                  Trusted by <strong>2,400+ happy Indian families</strong>
                </p>
              </div>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
