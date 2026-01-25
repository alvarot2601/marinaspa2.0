import React, { useEffect, useState } from 'react';

// Common wrapper for parallax background elements
const ParallaxWrapper: React.FC<{ children: React.ReactNode; speed?: number; className?: string }> = ({ 
  children, 
  speed = 0.1, 
  className = "" 
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      className={`absolute pointer-events-none select-none z-0 ${className}`} 
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

// 1. Organic Waves (Spa/Water/Flow) - Gentle flowing motion
export const OrganicWavesBg: React.FC = () => (
  <ParallaxWrapper speed={0.15} className="top-0 right-0 w-full h-full opacity-[0.03] text-marina-dark overflow-hidden">
    <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="none">
      <path 
        className="animate-wave"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        d="M0,200 C320,300 420,100 740,200 C1060,300 1160,100 1440,200"
      />
      <path 
        className="animate-wave"
        style={{ animationDelay: '1s', transformOrigin: 'center' }}
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        d="M0,400 C320,500 420,300 740,400 C1060,500 1160,300 1440,400"
      />
       <path 
        className="animate-wave"
        style={{ animationDelay: '2s' }}
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
        d="M0,600 C320,700 420,500 740,600 C1060,700 1160,500 1440,600"
      />
    </svg>
  </ParallaxWrapper>
);

// 2. Tech Lines (Indiba/Advanced) - Pulsing and tech-feel
export const TechLinesBg: React.FC = () => (
  <ParallaxWrapper speed={0.05} className="top-20 right-0 w-2/3 h-full opacity-[0.04] text-marina-dark">
    <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" className="animate-pulse-slow" />
      <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" className="animate-spin-slow" />
    </svg>
  </ParallaxWrapper>
);

// 3. Botanical/Leaf (Facial/Natural) - Gentle floating
export const BotanicalBg: React.FC = () => (
  <ParallaxWrapper speed={-0.1} className="-left-20 top-40 w-1/2 h-auto opacity-[0.04] text-marina-gold">
    <svg viewBox="0 0 200 400" className="w-full h-full">
       <path 
         className="animate-float"
         d="M100,400 Q150,300 100,200 T100,0" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth="2"
       />
       <path 
         className="animate-float"
         style={{ animationDelay: '1s' }}
         d="M100,200 Q150,150 180,180" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth="1" 
       />
       <path 
         className="animate-float"
         style={{ animationDelay: '2s' }}
         d="M100,300 Q50,250 20,280" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth="1" 
        />
       <path 
         className="animate-float"
         style={{ animationDelay: '1.5s' }}
         d="M100,100 Q150,50 180,80" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth="1" 
       />
    </svg>
  </ParallaxWrapper>
);

// 4. Zen Circles (Relax/General) - Geometric pulses
export const ZenCirclesBg: React.FC = () => (
  <>
    <ParallaxWrapper speed={0.08} className="top-10 -right-20 w-96 h-96 opacity-[0.03] text-marina-dark">
      <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
        <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </ParallaxWrapper>
    <ParallaxWrapper speed={-0.05} className="bottom-10 -left-20 w-80 h-80 opacity-[0.04] text-marina-gold">
      <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse-slow">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="30" opacity="0.5"/>
      </svg>
    </ParallaxWrapper>
  </>
);