import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SparkleIcon } from '../components/Icons';

const FAQ_DATA = [
  {
    question: "What is Salon Village?",
    answer: "Salon Village is a premier community of independent beauty and wellness professionals. We provide fully equipped, private salon suites for lease, allowing professionals like hair stylists, barbers, estheticians, and nail technicians to own and operate their own businesses without the high overhead of a traditional salon."
  },
  {
    question: "What types of suites do you offer?",
    answer: "We offer various suite sizes to fit your needs, including:\n\nQuality Suites: Standard ~130 sq. ft. layouts.\n\nBright Suites: ~130 sq. ft. with natural window lighting.\n\nPremium Suites: Large ~200 sq. ft. suites in prime front locations with floor-to-ceiling windows."
  },
  {
    question: "Who can rent a suite at Salon Village?",
    answer: "Our suites are designed for a wide range of professionals, including hair stylists, barbers, nail technicians, lash and brow artists, massage therapists, makeup artists, and skin care specialists."
  },
  {
    question: "What amenities are included in the weekly rent?",
    answer: "Your rent is \"all-inclusive,\" covering:\n\nAll utilities (electricity, water, AC).\n\nHigh-speed 1GB fiber WiFi.\n\nProfessional styling stations and shampoo bowls.\n\nBuilt-in cabinetry and storage.\n\nOn-site laundry facilities."
  },
  {
    question: "Will I have 24/7 access to my suite?",
    answer: "Yes. We understand that your business doesn't always run on a 9-to-5 schedule. You will receive a secure key fob providing you with 24/7 access to the building and your private suite."
  },
  {
    question: "Is the building secure for me and my clients?",
    answer: "Absolutely. Salon Village is equipped with a comprehensive security and monitoring system to ensure a safe environment for you and your clients at all times."
  },
  {
    question: "Is there ample parking available?",
    answer: "Yes, we offer plenty of free, convenient parking for both you and your clients, ensuring a stress-free arrival for every appointment."
  },
  {
    question: "Can I decorate or customize my suite?",
    answer: "Yes! We encourage you to personalize your space to reflect your brand and style. You are free to paint, hang decor, and furnish your suite to create a unique experience for your clientele."
  },
  {
    question: "Do you provide laundry facilities?",
    answer: "Yes, we have high-capacity, on-site laundry facilities available exclusively for our tenants to use at their convenience."
  },
  {
    question: "Are there any move-in specials or promotions?",
    answer: "We frequently offer move-in incentives, such as two or four weeks of free rent for new leases. Please contact our manager at (346) 439-6712 for our current availability and promotions."
  },
  {
    question: "What is the benefit of a suite vs. a traditional booth rental?",
    answer: "A suite offers total privacy, the ability to sell your own retail products (keeping 100% of the profit), control over your own schedule, and the freedom to create your own brand atmosphere—all for a flat weekly rate."
  },
  {
    question: "Do I have to share my equipment?",
    answer: "No. Your suite is your own private business space. Each suite comes with its own professional styling station and shampoo bowl that is not shared with other tenants."
  },
  {
    question: "How do I handle client payments and booking?",
    answer: "As an independent business owner at Salon Village, you have total control. You choose your own booking software and payment processor, and you keep 100% of your earnings."
  },
  {
    question: "Where is Salon Village located?",
    answer: "We are conveniently located in Houston at 1801 S. Dairy Ashford Rd, providing easy access for clients from across the Westchase and Energy Corridor areas."
  },
  {
    question: "How can I schedule a tour?",
    answer: "We would love to show you around! You can schedule a tour by calling us at (346) 439-6712 or by visiting our website to fill out an inquiry form. Tours are generally available Tuesday through Saturday."
  }
];

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gold/20 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-premium"
      >
        <span className={`text-xl md:text-2xl font-serif font-bold transition-colors ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className={`w-6 h-6 ${isOpen ? 'text-gold' : 'text-gold/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-8 text-white/70 font-light text-lg leading-relaxed whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-20 bg-luxury-black bg-geometric-gold min-h-screen">
      {/* Header */}
      <section className="py-24 bg-gradient-to-b from-luxury-rich to-luxury-black border-b border-gold/30 noise-gold relative">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block text-glow-gold-medium">Common Inquiries</span>
          <h1 className="text-6xl md:text-7xl font-serif text-white mb-8 font-bold drop-shadow-sm">Frequently Asked</h1>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed font-serif italic">
            Everything you need to know about starting your <span className="text-gold font-bold">independent journey</span> at Salon Village.
          </p>
          <div className="w-24 h-[2px] bg-gold/50 mx-auto"></div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-luxury-card border border-gold/30 p-8 md:p-12 rounded-2xl shadow-gold-card noise-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5 opacity-50"></div>
          <div className="relative z-10">
            {FAQ_DATA.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <SparkleIcon className="text-gold w-8 h-8" />
            <h2 className="text-4xl font-serif text-white font-bold">Still have questions?</h2>
            <SparkleIcon className="text-gold w-8 h-8" />
          </div>
          <p className="text-white/60 text-lg mb-10 font-light">
            We're here to help you every step of the way. Reach out to our team for a personalized consultation.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/contact"
              className="px-12 py-5 gold-gradient-bg text-black font-black uppercase tracking-widest rounded-full hover:shadow-gold-glow-btn transition-premium"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
