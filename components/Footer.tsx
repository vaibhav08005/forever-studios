import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, Phone, Facebook } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { translations } from '../translations';
import JmeLogo from './JmeLogo';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.footer;
  const nav = translations.nav;

  return (
    <footer className="bg-black pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo - Removed as per request */}
          <div />

          {/* Sitemap */}
          <div>
            <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-6">{t.sitemap[language]}</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.home[language]}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.about[language]}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.services[language]}</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.gallery[language]}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.contact[language]}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-6">{t.social[language]}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-sm transition-colors flex items-center gap-2">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-sm transition-colors flex items-center gap-2">
                  <Facebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCrv7BA1wYAVrIlngTr06pxQ/videos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-sm transition-colors flex items-center gap-2">
                  <Youtube size={16} /> YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-6">{t.contact[language]}</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+918511352306" className="text-gray-400 hover:text-brand-accent text-sm transition-colors flex items-center gap-2">
                  <Phone size={16} /> +91 85113 52306
                </a>
              </li>
              <li className="pt-4">
                <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors block">{t.privacy[language]}</a>
                <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors block mt-1">{t.terms[language]}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Devotional Text - Stylish */}
        <div className="border-t border-white/5 pt-12 overflow-hidden">
          <div className="flex flex-col items-center">
            <h1
              className="font-mega text-[10vw] font-black text-center uppercase leading-[0.8] tracking-wider relative"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f5e7a3 25%, #d4af37 50%, #8a6d1a 75%, #d4af37 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s ease-in-out infinite',
                textShadow: '0 0 80px rgba(212, 175, 55, 0.3)',
                filter: 'drop-shadow(0 4px 20px rgba(212, 175, 55, 0.2))',
              }}
            >
              Forever
            </h1>
          </div>
        </div>

        <style>{`
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="text-gray-600 text-xs">
            © 2026 <span className="text-brand-accent font-semibold tracking-wider">Forever Studio Nanded</span>. {t.copyright[language]} {t.love[language]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;