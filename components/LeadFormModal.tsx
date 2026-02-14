import React, { useState, useEffect, useRef } from 'react';
import { CloseIcon, SparkleIcon, CheckIcon } from './Icons';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  suiteName: string;
  suitePrice: string;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose, suiteName, suitePrice }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [serviceOfInterest, setServiceOfInterest] = useState('');
  const [otherService, setOtherService] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const professions = [
    'Hair Stylist', 'Barber', 'Nail Technician', 'Esthetician', 
    'Massage Therapist', 'Lash Artist', 'Brow Artist', 'Makeup Artist', 'Other'
  ];

  const referralSources = [
    'Google Search', 'Instagram', 'Facebook', 'Friend/Referral', 'Drive-by', 'Other'
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setPhone('');
        setServiceOfInterest('');
        setOtherService('');
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setPhone(formattedValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const labelClass = "text-[12px] text-[#FFD700] uppercase font-bold tracking-widest ml-1 mb-2 block";
  const inputClass = "w-full bg-[#1E1E1E] border border-[#FFD700] rounded-lg px-5 py-4 text-[#F5F5F5] placeholder-[#B0B0B0] text-base focus:border-[#FFD700] focus:shadow-[0_0_10px_rgba(255,215,0,0.5)] hover:shadow-[0_0_8px_rgba(255,215,0,0.3)] outline-none transition-premium font-medium";

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className={`relative bg-luxury-rich border-2 border-gold w-full max-w-2xl rounded-2xl shadow-gold-sign-strong overflow-hidden transition-all duration-700 transform ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'} noise-gold`}>
        
        {/* Exit Button with Tooltip */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 bg-black text-[#FFD700] hover:opacity-80 transition-all z-30 p-2 border border-[#FFD700] rounded-full shadow-lg group"
          aria-label="Close modal"
          title="Close"
        >
          <CloseIcon className="w-6 h-6" />
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-[#FFD700] text-[10px] px-2 py-1 rounded border border-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Close
          </span>
        </button>

        {isSubmitted ? (
          <div className="p-16 text-center space-y-8 relative z-10">
            <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold shadow-gold-nav">
              <CheckIcon className="w-12 h-12 text-gold" />
            </div>
            <h2 className="text-4xl font-serif text-gold font-bold">Thank You!</h2>
            <p className="text-[#F5F5F5] text-lg font-light leading-relaxed">
              We've received your interest in the <span className="text-gold font-bold">{suiteName}</span>. 
              One of our property managers will contact you shortly to schedule your private tour.
            </p>
            <button 
              onClick={onClose}
              className="mt-8 px-12 py-4 bg-[#FFD700] text-black font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-premium rounded-lg"
            >
              Return to Site
            </button>
          </div>
        ) : (
          <div ref={scrollContainerRef} className="max-h-[90vh] overflow-y-auto relative z-10">
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-4">
                <SparkleIcon className="text-gold w-8 h-8 drop-shadow-sm" />
                <h2 className="text-3xl md:text-4xl font-serif text-gold font-bold">Start Your Journey</h2>
              </div>
              <p className="text-[#B0B0B0] mb-12 font-light text-lg">Join the elite circle of beauty entrepreneurs in Houston.</p>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Auto-filled field */}
                <div className="bg-black/80 border-2 border-gold/50 p-6 rounded-xl shadow-gold-nav">
                  <p className="text-[11px] text-[#FFD700] uppercase tracking-[0.3em] font-bold mb-2">Interested In</p>
                  <p className="text-white font-serif text-2xl font-bold">{suiteName} <span className="text-[#FFD700] mx-2">—</span> <span className="text-[#FFD700] text-glow-gold-medium">{suitePrice}</span></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-1">
                    <label className={labelClass}>Full Name*</label>
                    <input 
                      type="text" 
                      required 
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className={labelClass}>Email Address*</label>
                    <input 
                      type="email" 
                      required 
                      className={inputClass}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-1">
                    <label className={labelClass}>Phone Number*</label>
                    <input 
                      type="tel" 
                      required 
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength={14}
                      className={inputClass}
                      placeholder="(346) 000-0000"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className={labelClass}>Business Name*</label>
                    <input 
                      type="text" 
                      required 
                      className={inputClass}
                      placeholder="Styles by Jane"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-1">
                    <label className={labelClass}>Service of Interest*</label>
                    <div className="relative">
                      <select 
                        required 
                        value={serviceOfInterest}
                        onChange={(e) => setServiceOfInterest(e.target.value)}
                        className={inputClass}
                      >
                        <option value="" disabled className="bg-luxury-rich text-[#B0B0B0]">Select Profession</option>
                        {professions.map(p => <option key={p} value={p} className="bg-luxury-rich">{p}</option>)}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFD700]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className={labelClass}>Referral Source*</label>
                    <div className="relative">
                      <select 
                        required 
                        className={inputClass}
                      >
                        <option value="" disabled selected className="bg-luxury-rich text-[#B0B0B0]">Select Source</option>
                        {referralSources.map(s => <option key={s} value={s} className="bg-luxury-rich">{s}</option>)}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFD700]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {serviceOfInterest === 'Other' && (
                  <div className="space-y-1 animate-slide-fade">
                    <label className={labelClass}>Please specify service*</label>
                    <input 
                      type="text" 
                      required 
                      value={otherService}
                      onChange={(e) => setOtherService(e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Tooth Gem Artist"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <label className={labelClass}>Brief Description (Optional)</label>
                  <textarea 
                    rows={4}
                    className={inputClass + " resize-none"}
                    placeholder="Tell us about your space requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-4 py-4">
                  <input 
                    type="checkbox" 
                    required 
                    id="terms-modal"
                    className="mt-1.5 w-5 h-5 accent-[#FFD700] cursor-pointer" 
                  />
                  <label htmlFor="terms-modal" className="text-[13px] text-[#E0E0E0] leading-relaxed cursor-pointer hover:text-[#F5F5F5] transition-colors">
                    I agree to the terms of service and privacy policy. I consent to receive communication from Salon Village via phone or email.
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-6 bg-[#FFD700] text-black font-black uppercase tracking-[0.3em] text-sm hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] transition-premium shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 rounded-[40px]"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="font-black tracking-[0.3em]">Processing...</span>
                    </>
                  ) : (
                    <span className="font-black tracking-[0.3em]">Submit Application</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;