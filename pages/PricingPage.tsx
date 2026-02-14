import React, { useState } from 'react';
import { PRICING_TIERS, INCLUDED_FEATURES } from '../constants.tsx';
import { SparkleIcon, CheckIcon } from '../components/Icons';
import LeadFormModal from '../components/LeadFormModal';

const PricingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState({ name: '', price: '' });

  const handleGetStarted = (suiteName: string, suitePrice: string) => {
    setSelectedSuite({ name: suiteName, price: suitePrice });
    setIsModalOpen(true);
  };

  return (
    <div className="pt-20 bg-luxury-black bg-geometric-gold min-h-screen">
      {/* Header */}
      <section className="py-24 bg-gradient-to-b from-luxury-rich to-luxury-black border-b border-gold/30 noise-gold relative">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block text-glow-gold-medium">Investment Options</span>
          <h1 className="text-6xl md:text-7xl font-serif text-white mb-8 font-bold drop-shadow-sm">Suite Pricing</h1>
          
          {/* Enhanced Visibility Promotional Banner */}
          <div className="mb-10 py-5 px-10 md:px-14 inline-block bg-luxury-card border-2 border-gold rounded-full transition-premium hover:scale-105 group animate-banner-glow overflow-hidden relative">
            <div className="absolute inset-0 bg-gold/5 opacity-50"></div>
            <p className="relative z-10 text-white uppercase tracking-[0.2em] text-sm md:text-lg leading-tight">
              <span className="font-bold">Sign up this month:</span>
              <br />
              <span className="text-gold-bright text-glow-gold-strong font-black text-xl md:text-3xl block mt-1">Four weeks free</span>
            </p>
          </div>

          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Transparent, all-inclusive pricing tiers designed to give your business the <span className="text-gold font-bold">premium home</span> it deserves.
          </p>
          <div className="w-24 h-[2px] bg-gold/50 mx-auto"></div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PRICING_TIERS.map((suite, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col bg-luxury-card border p-10 transition-premium rounded-[10px] group hover:-translate-y-[3px] ${
                  suite.isPopular 
                  ? 'border-gold-bright border-[2px] shadow-gold-sign-strong ring-1 ring-gold/20 scale-105 z-10' 
                  : 'border-gold/30 shadow-gold-card hover:border-gold hover:shadow-gold-glow-btn'
                }`}
              >
                {suite.isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-[#FFD700] px-8 py-2 font-black uppercase text-[12px] tracking-[0.4em] rounded-[6px] shadow-gold-sign-strong z-20 border border-gold-bright text-glow-gold-strong">
                    Signature Choice
                  </div>
                )}
                
                <h3 className="text-3xl font-serif text-gold mb-4 font-bold border-b border-gold/30 pb-2 inline-block drop-shadow-sm">{suite.name}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-5xl font-bold text-white tracking-tighter drop-shadow-sm">{suite.price}</span>
                </div>
                <p className="text-white/40 text-xs mb-8 font-bold uppercase tracking-widest flex items-center">
                  <span className="w-4 h-[2px] bg-gold/50 mr-2"></span>
                  {suite.size}
                </p>
                
                {/* Amenities List with light black background boxes */}
                <div className="space-y-3 mb-12 flex-grow">
                  {suite.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center p-3 bg-luxury-amenity border border-gold/10 rounded-lg group-hover:border-gold/30 transition-colors">
                      <span className="text-[#FFD700] mr-4 text-glow-gold-soft">
                        <CheckIcon className="w-4 h-4" />
                      </span>
                      <span className="text-white font-bold text-[1rem] leading-relaxed text-glow-gold-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleGetStarted(suite.name, suite.price)}
                  className={`block w-full py-5 text-center font-black uppercase tracking-[0.3em] text-xs transition-premium rounded-[30px] shadow-lg ${
                    suite.isPopular 
                    ? 'gold-gradient-bg text-black hover:shadow-gold-glow-btn hover:scale-[1.02]' 
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-black hover:scale-[1.02]'
                  }`}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every Suite Includes - Modern Checklist Design */}
      <section className="py-32 bg-luxury-rich noise-gold relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif text-white mb-6 font-bold">Exclusive Features</h2>
            <p className="text-gold tracking-[0.2em] uppercase text-xs font-bold text-glow-gold-medium">The foundation for your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INCLUDED_FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-6 p-6 feature-gradient border border-gold rounded-xl group hover:shadow-gold-card transition-premium">
                <div className="flex-shrink-0 text-[#FFD700] text-glow-gold-strong">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <span className="text-white font-bold tracking-wide text-glow-gold-soft">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Qualification Modal */}
      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        suiteName={selectedSuite.name}
        suitePrice={selectedSuite.price}
      />
    </div>
  );
};

export default PricingPage;