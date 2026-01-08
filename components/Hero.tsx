import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { translations } from '../translations';
import JmeLogo from './JmeLogo';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();
  const t = translations.hero;

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${offset * 0.3}px) scale(${1.05 + offset * 0.0003})`,
          }}
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
        >
          <source src={`${import.meta.env.BASE_URL}hero_video.mp4`} type="video/mp4" />
          {/* If video fails to load, fallback image will show via poster */}
        </video>
      </div>

      {/* Subtle vignette overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-[1]" />

      {/* Top-Left Brand Logo */}
      <div className="absolute top-6 left-6 z-20 opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]">
        <JmeLogo className="w-24 md:w-32 lg:w-40 drop-shadow-2xl" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-down {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(15px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;