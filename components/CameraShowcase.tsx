import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../translations';

const CameraShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const { language } = useLanguage();
  const t = translations.about;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress of section through viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = 1 - (rect.bottom / (viewportHeight + rect.height));
        // Rotate from -15deg to 15deg based on scroll
        setRotation((progress - 0.5) * 40);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-brand-gray overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Content Side */}
        <div className="order-2 md:order-1 relative z-10">
          <div className="overflow-hidden mb-4">
            <h3 className="text-brand-accent font-sans text-sm uppercase tracking-widest mb-2">{t.subtitle[language]}</h3>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-8 leading-tight">
            {t.heading1[language]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/10">{t.heading2[language]}</span>
          </h2>
          <div className="space-y-6 text-gray-400 font-light text-lg">
            <p>
              {t.description1[language]}
            </p>
            <p>
              {t.description2[language]}
            </p>
          </div>

          <div className="mt-12 flex gap-8">
            <div className="text-center">
              <span className="block font-display text-4xl text-white">500+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">{t.stats.weddings[language]}</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-4xl text-white">8+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">{t.stats.years[language]}</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-4xl text-white">100%</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">{t.stats.satisfaction[language]}</span>
            </div>
          </div>
        </div>

        {/* Visual Side - Mimicking the rotating camera from reference */}
        <div className="order-1 md:order-2 flex justify-center perspective-1000">
          <div
            className="relative w-full max-w-md aspect-square transition-transform duration-100 ease-out"
            style={{
              transform: `rotateY(${rotation}deg) rotateX(${rotation * -0.5}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Using a high quality camera image to simulate the 3D model */}
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
              alt="Professional Camera"
              className="w-full h-full object-cover rounded-xl shadow-2xl shadow-black/50 border border-white/10"
              style={{
                transform: 'translateZ(20px)',
              }}
            />
            {/* Floating elements for depth */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl"
              style={{ transform: 'translateZ(-50px)' }}
            />
            <div
              className="absolute bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
              style={{ transform: 'translateZ(-50px)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraShowcase;