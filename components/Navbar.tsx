import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { translations } from '../translations';
import JmeLogo from './JmeLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations.nav;

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only when scrolled past most of the hero section
      setIsVisible(window.scrollY > window.innerHeight - 100);
    };

    // Check initially
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home[language], href: '#home' },
    { name: t.about[language], href: '#about' },
    { name: t.services[language], href: '#services' },
    { name: t.gallery[language], href: '#gallery' },
    { name: t.contact[language], href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isVisible
      ? 'translate-y-0 opacity-100 bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg'
      : '-translate-y-full opacity-0 py-6 pointer-events-none'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <JmeLogo className="w-24 h-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-brand-accent transition-colors text-white/80"
            >
              {link.name}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 border border-brand-accent/50 text-xs font-bold uppercase tracking-widest text-brand-accent hover:bg-brand-accent hover:text-black transition-all duration-300 rounded-full"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            <span className="relative overflow-hidden h-4 w-8">
              <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${language === 'en' ? 'translate-y-0' : '-translate-y-full'}`}>EN</span>
              <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${language === 'mr' ? 'translate-y-0' : 'translate-y-full'}`}>मरा</span>
            </span>
          </button>

          <a
            href="#contact"
            className="px-6 py-2 border border-white/30 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            {t.bookNow[language]}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-display text-4xl uppercase font-bold text-white hover:text-brand-accent transition-colors"
          >
            {link.name}
          </a>
        ))}

        {/* Mobile Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-3 px-6 py-3 border-2 border-brand-accent text-lg font-bold text-brand-accent hover:bg-brand-accent hover:text-black transition-all duration-300 rounded-full mt-4"
        >
          <Globe size={20} />
          {language === 'en' ? 'मराठी' : 'English'}
        </button>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-6 text-white/50 hover:text-white"
        >
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;