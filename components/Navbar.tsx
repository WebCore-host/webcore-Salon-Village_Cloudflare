import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-luxury-rich to-luxury-black border-b border-gold/40 backdrop-blur-md shadow-gold-nav transition-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center space-x-3 md:space-x-4 group">
            <div className="relative">
              <img 
                src="Logo_Salon_Village.png" 
                alt="Salon Village Logo" 
                className="h-12 w-auto md:h-16 object-contain transition-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col items-start border-l border-gold/50 pl-3 md:pl-4">
              <span className="text-lg md:text-2xl font-serif font-bold text-gold tracking-widest leading-tight group-hover:text-gold-bright transition-colors drop-shadow-sm">
                SALON VILLAGE
              </span>
              <span className="text-[9px] md:text-xs text-gold/60 tracking-[0.3em] font-medium uppercase font-nav">
                HOUSTON
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-premium font-nav relative py-2 ${
                  isActive(link.path) 
                  ? 'text-gold font-bold text-glow-gold' 
                  : 'text-white/80 hover:text-gold hover:text-glow-gold'
                } font-medium tracking-wide group`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${isActive(link.path) ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-gold/30 mx-2"></div>
            <span
              className="text-gold font-bold hover:text-gold-bright transition-colors cursor-default font-nav text-sm tracking-wider text-glow-gold-soft"
            >
              (346) 439-6712
            </span>
            <a 
              href="https://www.instagram.com/salonvillagehtx/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-bright transition-premium flex items-center justify-center p-1"
              aria-label="Instagram"
            >
              <svg className="w-8 h-8 fill-current drop-shadow-md" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold focus:outline-none w-10 h-10 relative flex items-center justify-center p-2 rounded-lg bg-gold/5 border border-gold/20 shadow-gold-nav"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-center justify-center gap-[5px]">
                <div className={`h-[2px] w-full bg-current transform transition-premium ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
                <div className={`h-[2px] w-full bg-current transition-premium ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`h-[2px] w-full bg-current transform transition-premium ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-luxury-black border-t border-gold/30 transition-all duration-500 ease-in-out overflow-hidden backdrop-blur-xl ${
          isOpen ? 'max-h-[350px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-6 pb-8 space-y-6 relative">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-xl font-nav font-medium transition-premium ${
                isActive(link.path) ? 'text-gold font-bold text-glow-gold' : 'text-white/70 hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gold/10">
            <span className="block text-gold font-bold font-nav text-xl text-glow-gold">
              (346) 439-6712
            </span>
          </div>

          {/* Instagram Button */}
          <a 
            href="https://www.instagram.com/salonvillagehtx/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-8 right-6 text-gold hover:text-white transition-premium p-2 bg-gold/5 border border-gold/20 rounded-lg shadow-gold-nav"
            aria-label="Instagram"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;