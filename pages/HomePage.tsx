import React from 'react';
import { Link } from 'react-router-dom';
import { AMENITIES } from '../constants.tsx';
import ReviewMarquee from '../components/ReviewMarquee';
import { KeyIcon, BulbIcon, PinIcon } from '../components/Icons';

const HomePage: React.FC = () => {
  const topRowBase = [
    'marquee/nail_application.webp',
    'marquee/eyebrow_microblading.webp',
    'marquee/salon_consultation.webp',
    'marquee/hair_styling.webp',
    'marquee/hair_combing.webp',
    'marquee/salon_lobby.webp',
  ];

  const bottomRowBase = [
    'marquee/pedicure_service.webp',
    'marquee/esthetics_room.webp',
    'marquee/barber_haircut.webp',
    'marquee/barbershop_trimming.webp',
    'marquee/spa_massage.webp',
    'marquee/decorated_nails.webp',
  ];

  // Double the images for seamless infinite loop with translateX(-50%)
  const topRowImages = [...topRowBase, ...topRowBase];
  const bottomRowImages = [...bottomRowBase, ...bottomRowBase];

  return (
    <div className="pt-20 bg-luxury-black min-h-screen bg-geometric-gold">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden shadow-gold-hero-inner m-4 md:m-8 rounded-[10px] border border-gold/10">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10s] hover:scale-105" 
          style={{ backgroundImage: `url('Salon_Village_Outside_Cover.png')` }}
        >
          {/* Depth overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1] drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]">
              Your Dream <br />
              <span className="bg-clip-text text-transparent gold-gradient-bg font-bold italic">Salon Suite</span> 
              <br />Awaits
            </h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-lg font-light tracking-wide text-glow-gold-soft">
              Join Houston's premier community of beauty professionals in our <strong className="text-gold">luxury salon suites</strong>. Designed for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact" 
                className="px-10 py-4 border-2 border-gold text-gold font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-black transition-premium text-center rounded-[30px] shadow-gold-glow-btn"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Marquee */}
      <ReviewMarquee />

      {/* About Section */}
      <section className="py-32 bg-luxury-black relative noise-gold overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold-dark to-transparent"></div>
              <h2 className="text-5xl md:text-6xl font-serif text-gold mb-10 pl-8 leading-tight font-bold drop-shadow-sm">
                Welcome to <br />
                <span className="text-white border-b border-gold/40">Salon Village</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-10 pl-8 font-light">
                At Salon Village, we provide beauty professionals with fully-equipped, private salon suites to grow their independent businesses. Located in Houston, Texas, our facility offers everything you need to succeed in a <span className="text-gold font-bold">sophisticated, upscale environment</span>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pl-8">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gold/5 border border-gold/30 rounded-full group-hover:bg-gold/20 transition-premium shadow-gold-nav">
                    <KeyIcon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-white/90 font-medium tracking-wide">24/7 Suite Access</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gold/5 border border-gold/30 rounded-full group-hover:bg-gold/20 transition-premium shadow-gold-nav">
                    <BulbIcon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-white/90 font-medium tracking-wide">All-Inclusive Utilities</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full"></div>
              <img 
                src="Salon_Village_Multi_Shot.png" 
                alt="Luxury Salon Interior" 
                className="relative w-full h-auto border border-gold shadow-gold-card rounded-[10px] transition-premium hover:-translate-y-1 hover:shadow-gold-glow-btn"
              />
              <div className="absolute -bottom-10 -right-10 hidden lg:block p-8 bg-luxury-card border-2 border-gold shadow-gold-glow-btn rounded-[6px]">
                <p className="text-gold font-serif text-4xl mb-1">100%</p>
                <p className="text-gold/60 text-xs uppercase tracking-widest font-bold">Privacy Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-32 bg-luxury-rich relative overflow-hidden bg-geometric-gold">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block text-glow-gold">Elevate Your Business</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 font-bold">Premium Amenities</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-8"></div>
            <p className="text-white/60 max-w-xl mx-auto font-light leading-relaxed">Everything you need to run your business with ease, wrapped in a luxury experience for you and your clients.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMENITIES.map((amenity, idx) => (
              <div 
                key={idx} 
                className="p-10 bg-luxury-card border border-gold/40 hover:border-gold-light transition-premium group rounded-[10px] shadow-gold-card hover:-translate-y-[3px] hover:shadow-gold-glow-btn"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-premium inline-block drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                  {amenity.icon}
                </div>
                <h3 className="text-[1.625rem] font-serif text-white mb-4 group-hover:text-gold transition-colors border-b border-transparent group-hover:border-gold/30 pb-2 block w-fit mx-auto text-center">
                  {amenity.title}
                </h3>
                <p className="text-white/50 text-base font-light leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Luxury - Dual Marquee Section */}
      <section className="py-32 bg-luxury-black noise-gold relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-gold mb-6 font-bold text-glow-gold">Experience Luxury</h2>
            <p className="text-gold/60 tracking-[0.3em] text-xs uppercase font-bold">Tour Our Signature Spaces</p>
          </div>
        </div>
        
        <div className="space-y-6 md:space-y-10">
          {/* Top Row: Right to Left */}
          <div className="flex overflow-hidden relative">
            <div className="animate-marquee py-2" style={{ animationDuration: '48s' }}>
              {topRowImages.map((src, idx) => (
                <div key={`top-${idx}`} className="mx-3 md:mx-5 flex-shrink-0">
                  <img 
                    src={src} 
                    alt={`Salon Gallery ${idx}`} 
                    className="h-[250px] md:h-[400px] w-auto object-cover rounded-[10px] border border-gold/30 shadow-gold-card transition-premium hover:border-gold hover:shadow-gold-glow-btn"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Left to Right */}
          <div className="flex overflow-hidden relative">
            <div className="animate-marquee-reverse py-2" style={{ animationDuration: '48s' }}>
              {bottomRowImages.map((src, idx) => (
                <div key={`bottom-${idx}`} className="mx-3 md:mx-5 flex-shrink-0">
                  <img 
                    src={src} 
                    alt={`Salon Gallery ${idx}`} 
                    className="h-[250px] md:h-[400px] w-auto object-cover rounded-[10px] border border-gold/30 shadow-gold-card transition-premium hover:border-gold hover:shadow-gold-glow-btn"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 bg-gradient-to-r from-luxury-rich to-luxury-black border-y border-gold/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric-gold opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 drop-shadow-sm font-bold">Ready to Elevate?</h2>
          <p className="text-white/80 text-2xl mb-12 max-w-2xl mx-auto font-medium tracking-tight text-glow-gold-soft">
            Join the elite circle of beauty entrepreneurs in Houston. Limited suites available.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-16 py-5 gold-gradient-bg text-black font-bold uppercase tracking-[0.3em] text-sm hover:shadow-gold-glow-btn transition-premium shadow-2xl border border-gold-light/40 rounded-[30px] hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;