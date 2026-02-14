import React from 'react';
import { Link } from 'react-router-dom';
import { PinIcon, PhoneIcon, EmailIcon, ClockIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-luxury-rich to-luxury-black border-t border-gold pt-24 pb-12 relative overflow-hidden rounded-t-[10px] noise-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Column 1 - Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-gold font-serif text-3xl mb-8 tracking-tighter border-b border-gold/30 pb-2 inline-block drop-shadow-sm">Salon Village</h3>
            <p className="text-white/60 mb-8 leading-relaxed font-light">
              Houston's premier salon suite community, providing a <span className="text-gold font-medium">luxury sanctuary</span> for independent beauty entrepreneurs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/salonvillagehtx/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/5 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-premium hover:-translate-y-1 shadow-gold-nav"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-white font-serif mb-8 uppercase tracking-[0.2em] text-xs font-bold border-b border-gold/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/40 hover:text-gold transition-premium font-light tracking-wide hover:text-glow-gold">Home</Link></li>
              <li><Link to="/pricing" className="text-white/40 hover:text-gold transition-premium font-light tracking-wide hover:text-glow-gold">Pricing</Link></li>
              <li><Link to="/contact" className="text-white/40 hover:text-gold transition-premium font-light tracking-wide hover:text-glow-gold">Contact</Link></li>
              <li><a href="#" className="text-white/40 hover:text-gold transition-premium font-light tracking-wide hover:text-glow-gold">Member Portal</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-white font-serif mb-8 uppercase tracking-[0.2em] text-xs font-bold border-b border-gold/20 pb-2 inline-block">Contact Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ul className="space-y-6 text-white/50">
                <li className="flex items-start group">
                  <span className="text-gold mr-4 mt-1 bg-gold/5 p-1 rounded-full shadow-gold-nav group-hover:bg-gold/20 transition-colors"><PinIcon className="w-5 h-5" /></span>
                  <span className="font-light leading-relaxed group-hover:text-white/80 transition-colors">1801 S. Dairy Ashford Rd. <br />Suite 102, Houston, TX 77077</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-gold mr-4 bg-gold/5 p-1 rounded-full shadow-gold-nav group-hover:bg-gold/20 transition-colors"><PhoneIcon className="w-5 h-5" /></span>
                  <span className="hover:text-gold transition-premium cursor-default font-medium text-white/90">(346) 439-6712</span>
                </li>
              </ul>
              <ul className="space-y-6 text-white/50">
                <li className="flex items-center group">
                  <span className="text-gold mr-4 bg-gold/5 p-1 rounded-full shadow-gold-nav group-hover:bg-gold/20 transition-colors"><EmailIcon className="w-5 h-5" /></span>
                  <a href="mailto:svmanager1801@gmail.com" className="hover:text-gold transition-premium font-light break-all group-hover:text-white/80">svmanager1801@gmail.com</a>
                </li>
                <li className="flex items-center group">
                  <span className="text-gold mr-4 bg-gold/5 p-1 rounded-full shadow-gold-nav group-hover:bg-gold/20 transition-colors"><ClockIcon className="w-5 h-5" /></span>
                  <span className="font-light group-hover:text-white/80 transition-colors">Tue-Sat: 8AM-5PM <br /><span className="text-[10px] uppercase font-bold text-gold/60">24/7 Access for Tenants</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-12 text-center relative z-10">
          <p className="text-white/30 text-[11px] uppercase tracking-[0.3em] font-medium">
            © 2025 Salon Village Houston. Redefining the Suite Experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;