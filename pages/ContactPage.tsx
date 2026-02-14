import React, { useState } from 'react';
import { PinIcon, PhoneIcon, EmailIcon, ClockIcon, CameraIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    canText: 'yes',
    message: '',
    preferredTime: ''
  });

  const professions = [
    'Hair Stylist', 'Barber', 'Nail Technician', 'Esthetician', 
    'Massage Therapist', 'Lash Artist', 'Brow Artist', 'Makeup Artist', 'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
  };

  return (
    <div className="pt-20 bg-luxury-black bg-geometric-gold min-h-screen">
      {/* Header */}
      <section className="py-24 text-center noise-gold relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif text-gold mb-4 font-bold drop-shadow-sm">Get in Touch</h1>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto px-4 leading-relaxed">We'd love to hear from you and help you start your journey in a space you'll love.</p>
          <div className="max-w-xs h-[2px] bg-gold mx-auto mt-8 opacity-50"></div>
        </div>
      </section>

      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-luxury-card border border-gold/30 p-10 rounded-[10px] space-y-10 shadow-gold-card transition-premium hover:shadow-gold-glow-btn hover:border-gold">
              <h2 className="text-3xl font-serif text-gold font-bold border-b border-gold/30 pb-2 inline-block">Contact Details</h2>
              
              <div className="flex items-start space-x-6 group">
                <div className="text-gold mt-1 p-2 bg-gold/5 rounded-full shadow-gold-nav group-hover:bg-gold/20 transition-premium">
                  <PinIcon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-1 uppercase text-[10px] tracking-widest opacity-60">Location</h4>
                  <p className="text-white/80 font-light">1801 S. Dairy Ashford Rd. Suite 102</p>
                  <p className="text-white/80 font-light">Houston, TX 77077</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="text-gold mt-1 p-2 bg-gold/5 rounded-full shadow-gold-nav group-hover:bg-gold/20 transition-premium">
                  <PhoneIcon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-1 uppercase text-[10px] tracking-widest opacity-60">Phone</h4>
                  <span className="text-gold text-xl font-bold hover:text-white transition-colors cursor-default">(346) 439-6712</span>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="text-gold mt-1 p-2 bg-gold/5 rounded-full shadow-gold-nav group-hover:bg-gold/20 transition-premium">
                  <EmailIcon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-1 uppercase text-[10px] tracking-widest opacity-60">Email</h4>
                  <a href="mailto:svmanager1801@gmail.com" className="text-gold font-bold hover:text-white break-all transition-colors underline decoration-gold/30">svmanager1801@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="text-gold mt-1 p-2 bg-gold/5 rounded-full shadow-gold-nav group-hover:bg-gold/20 transition-premium">
                  <ClockIcon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-gold font-bold mb-1 uppercase text-[10px] tracking-widest opacity-60">Manager Hours</h4>
                  <p className="text-white/80 font-light">Tuesday - Saturday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gold/80 italic mt-2 text-sm font-medium">Note: Tenants have 24/7 access</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gold/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="text-gold">
                    <CameraIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest opacity-60">Follow us</h4>
                    <a href="https://www.instagram.com/salonvillagehtx/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white font-bold transition-colors">@salonvillagehtx</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-luxury-card p-10 rounded-[10px] border border-gold/30 shadow-gold-card transition-premium hover:shadow-gold-glow-btn hover:border-gold">
            <h2 className="text-3xl font-serif text-gold mb-8 font-bold border-b border-gold/30 pb-2 inline-block">Inquire Today</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Name*"
                    className="w-full bg-transparent border-b border-gold/40 py-3 text-gold focus:border-gold-light outline-none transition-premium font-light placeholder:text-gold/30"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    required 
                    placeholder="Email Address*"
                    className="w-full bg-transparent border-b border-gold/40 py-3 text-gold focus:border-gold-light outline-none transition-premium font-light placeholder:text-gold/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="tel" 
                    required 
                    placeholder="Phone Number*"
                    className="w-full bg-transparent border-b border-gold/40 py-3 text-gold focus:border-gold-light outline-none transition-premium font-light placeholder:text-gold/30"
                  />
                </div>
                <div className="relative">
                  <select 
                    required 
                    className="w-full bg-luxury-card border-b border-gold/40 py-3 text-gold focus:border-gold-light outline-none transition-premium appearance-none cursor-pointer font-light"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gold/50">Select Your Profession*</option>
                    {professions.map(p => <option key={p} value={p} className="bg-luxury-card">{p}</option>)}
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gold opacity-40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gold/60 text-[10px] font-bold uppercase tracking-widest">Can we text you?*</p>
                <div className="flex space-x-8">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" name="text" value="yes" defaultChecked className="w-4 h-4 accent-gold" />
                    <span className="text-white/80 font-medium group-hover:text-gold transition-colors">Yes, please</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" name="text" value="no" className="w-4 h-4 accent-gold" />
                    <span className="text-white/80 font-medium group-hover:text-gold transition-colors">Call only</span>
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your business needs..."
                  className="w-full bg-transparent border-b border-gold/40 py-3 text-gold focus:border-gold-light outline-none transition-premium resize-none font-light placeholder:text-gold/30"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 gold-gradient-bg text-black font-bold uppercase tracking-[0.2em] text-xs hover:shadow-gold-glow-btn transition-premium shadow-lg active:scale-[0.98] rounded-[30px]"
              >
                Send Message
              </button>
              
              <p className="text-gold/40 text-[9px] text-center uppercase tracking-widest mt-4 italic">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gold mb-4 font-bold border-b border-gold/30 pb-2 inline-block drop-shadow-sm">Find Us</h2>
        </div>
        <div className="w-full h-[450px] bg-luxury-card border border-gold/40 rounded-[10px] overflow-hidden shadow-gold-card transition-premium hover:shadow-gold-glow-btn hover:border-gold">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732.0089270028973!2d-95.60633529597119!3d29.748196460892217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dc6250e39ba3%3A0xb0e6ecbdabb0ada0!2sSalon%20Village!5e0!3m2!1sen!2sus!4v1770683454502!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Salon Village Houston Location"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;