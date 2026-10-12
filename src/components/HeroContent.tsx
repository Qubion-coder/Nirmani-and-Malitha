import React from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';

export const HeroContent: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');

  return (
    <section aria-label="Hero — Save the Date" className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-[#F8F8F8]">
      <div className="absolute inset-0 w-full h-full">
        <picture className="w-full h-full block">
          <source media="(max-width: 768px)" srcSet="/1.png" />
          <img 
            src="/1.png" 
            alt="Wedding Background" 
            className="w-full h-full absolute inset-0 object-cover object-top" 
            loading="eager" 
            decoding="async" 
            fetchpriority="high" 
          />
        </picture>
        <div 
          className="absolute inset-0" 
          style={{
            background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.7) 100%)`
          }} 
        />
      </div>
      <motion.div 
        className="relative z-10 w-full flex justify-end px-8 md:px-[15vw] lg:px-[20vw] pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="flex flex-col items-center gap-3">
          {prefix && name && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8 flex flex-col items-center"
            >
              <span className="text-[#111111] uppercase tracking-widest text-xs sm:text-sm font-extrabold mb-3 bg-white/60 px-4 py-1 rounded-full backdrop-blur-sm border border-white/50 shadow-sm">We cordially invite</span>
              <span className="text-xl sm:text-3xl md:text-4xl font-serif text-[#111111] text-center px-4 leading-tight" style={{ textShadow: "0 0 20px rgba(255,255,255,1), 0 0 10px rgba(255,255,255,0.9)" }}>
                {prefix} {name}
              </span>
            </motion.div>
          )}
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_25px_rgba(255,255,255,0.8)]">
            NIRMANI
          </span>
          <div className="flex items-center gap-3 opacity-90">
            <div className="h-[1px] w-8 sm:w-16 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
            <span className="text-2xl sm:text-4xl font-display italic text-white lowercase tracking-widest px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_15px_rgba(255,255,255,0.8)]">
              and
            </span>
            <div className="h-[1px] w-8 sm:w-16 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
          </div>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_25px_rgba(255,255,255,0.8)]">
            PRAMODYA
          </span>
        </h1>
      </motion.div>
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3" 
        aria-hidden="true"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-[2px] h-12" style={{ background: "linear-gradient(180deg, transparent, rgba(17,17,17,1))" }} />
        <div>
          <svg width="28" height="16" viewBox="0 0 14 8" fill="none" style={{ filter: "drop-shadow(0px 2px 4px rgba(255,255,255,0.9))" }}>
            <path d="M1 1L7 7L13 1" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
