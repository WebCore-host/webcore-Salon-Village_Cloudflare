import React from 'react';
import { REVIEWS } from '../constants.tsx';

const ReviewMarquee: React.FC = () => {
  // Double the reviews to ensure seamless looping with translateX(-50%)
  const displayReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-24 bg-luxury-rich border-y border-gold/40 relative overflow-hidden bg-geometric-gold">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-10">
        <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Proven Success</span>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 font-bold">What Our Tenants Say</h2>
        <div className="w-24 h-[2px] bg-gold mx-auto"></div>
      </div>

      <div className="flex overflow-hidden relative z-10">
        <div className="animate-marquee py-4">
          {displayReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[350px] md:w-[400px] bg-luxury-card border border-gold/40 hover:border-gold rounded-lg p-8 mx-4 shadow-gold-card transition-premium hover:shadow-gold-glow-btn hover:-translate-y-1"
            >
              <div className="flex text-gold mb-6 drop-shadow-sm">
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>
              <p className="text-white/90 italic mb-8 leading-relaxed text-[1.1rem] font-light">
                "{review.text}"
              </p>
              <div className="border-t border-gold/10 pt-4">
                <p className="text-gold font-bold tracking-wide">— {review.author.split(' ')[0]}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold mt-1">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewMarquee;