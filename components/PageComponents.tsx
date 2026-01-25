import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceCategory, Testimonial } from '../types';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import headerImage3 from '../src/assets/img/masaje-facial-relax-spa-marina-zafra.png';

// --- Schema Markup Component (JSON-LD) for Local SEO ---
export const SchemaMarkup: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://marinaspa.es/#beautysalon",
    "name": "Marina Spa",
    "description": "Centro de estética y belleza en Zafra especializado en rituales faciales, Indiba, tratamientos corporales, depilación y bienestar.",
    "url": "https://marinaspa.es",
    "telephone": "+34644799000",
    "priceRange": "€€",
    "logo": "https://marinaspa.es/assets/img/logo-marina-spa.png",
    "image": [
      "https://marinaspa.es/assets/img/instalaciones.png"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C. Reyes Huertas, 8",
      "addressLocality": "Zafra",
      "addressRegion": "Badajoz",
      "postalCode": "06300",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.4255,
      "longitude": -6.4187
    },
    "areaServed": {
      "@type": "City",
      "name": "Zafra"
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Marina+Spa+Zafra",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "10:00",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "10:00",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Sunday"],
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/marinaspazafra/?hl=es",
      "https://www.facebook.com/marinaspazafra/?locale=es_ES",
      "https://www.google.com/maps/search/?api=1&query=Marina+Spa+Zafra"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tratamientos de estética en Zafra",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rituales faciales",
            "description": "Tratamientos faciales personalizados con alta cosmética y tecnología avanzada."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Programas faciales personalizados",
            "description": "Planes faciales adaptados a las necesidades de cada piel."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Indiba",
            "description": "Tratamientos Indiba para rejuvenecimiento facial y corporal."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tratamientos corporales",
            "description": "Masajes, maderoterapia y remodelación corporal."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Depilación",
            "description": "Depilación láser, cera y diseño de cejas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spa y bienestar",
            "description": "Masajes relajantes y rituales sensoriales."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};


// --- Premium Animated Title Component ---
interface AnimatedTitleProps {
  text: string;
  className?: string;
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  delay?: number;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className = "", el: Tag = "h2", delay = 0 }) => {
  const ref = useRef(null);
  // Trigger slightly earlier (-15%) so user doesn't wait for text to appear
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02, // Faster stagger for snappier feel
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: {
      y: shouldReduceMotion ? 0 : 20, // Reduced distance
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15, // Higher damping = less bounce, faster settle
        stiffness: 200, // Higher stiffness = faster movement
        mass: 0.8
      }
    },
  };

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        aria-hidden
        className="block"
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block origin-bottom"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

// Utility Component for Reveal Animations with Luxury Easing
// OPTIMIZED: Faster duration and hardware acceleration hint
export const RevealOnScroll: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      // Lower threshold to trigger sooner
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      // Changed duration-1000 to duration-700 for snappier feel
      // Changed translate-y-16 to translate-y-10 for less distance travel
      className={`transform transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 translate-y-0' : (shouldReduceMotion ? 'opacity-0' : 'opacity-0 translate-y-10')}`}
      // Added will-change to hint browser compositor
      style={{ transitionDelay: `${delay}ms`, willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
};

// Header with Smooth Zoom Animation (Ken Burns Effect) - No Scroll Parallax
export const PageHeader: React.FC<{ title: string; subtitle: string; bgImage?: string; altImage?: string }> = ({ title, subtitle, bgImage, altImage }) => {
  const shouldReduceMotion = useReducedMotion();
  const image = bgImage;

  return (
    <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-marina-dark">
      {/* Animated Background Container */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ scale: shouldReduceMotion ? 1 : 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
        >
          <img
            src={image}
            alt={altImage}
            className="w-full h-full object-cover opacity-40"
            // Priority load for LCP as headers are usually at the top
            fetchPriority="high"
          />
        </motion.div>
      </div>

      {/* Abstract Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-marina-dark via-marina-dark/40 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-10"></div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <AnimatedTitle
            text={title}
            el="h1"
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light italic drop-shadow-2xl leading-tight"
            delay={0.2}
          />
        </div>

        <RevealOnScroll delay={300}>
          <div className="w-24 h-px bg-marina-gold mx-auto mb-8 opacity-70"></div>
          <p className="text-stone-200 font-light text-lg md:text-xl tracking-wide max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            {subtitle}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

interface ServiceSectionProps {
  category: ServiceCategory;
  index: number;
  BackgroundComponent?: React.FC;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ category, index, BackgroundComponent }) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for the list container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Faster rhythm
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 }, // Reduced distance
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Faster duration
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`relative py-24 md:py-36 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`} aria-labelledby={`cat-${index}`}>

      {/* Dynamic Background SVG */}
      {BackgroundComponent && <div aria-hidden="true"><BackgroundComponent /></div>}

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className={`flex flex-col gap-12 md:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

          {/* Title Column */}
          <div className="md:w-5/12">
            <div className="sticky top-32">
              <RevealOnScroll>
                <div id={`cat-${index}`}>
                  <AnimatedTitle
                    text={category.title}
                    el="h2"
                    className="font-serif text-5xl md:text-6xl text-marina-dark mb-8 leading-tight"
                  />
                </div>
                <div className="w-20 h-0.5 bg-marina-gold mb-8"></div>
                <p className="text-stone-600 leading-loose font-light text-lg mb-8 text-justify">
                  {category.description}
                </p>
              </RevealOnScroll>
            </div>
          </div>

          {/* Items Column - Animated List */}
          <motion.div
            className="md:w-7/12 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {category.items.map((item, idx) => (
              <motion.article
                key={idx}
                variants={itemVariants}
                className="rounded-sm bg-white/80 backdrop-blur-md border border-stone-100 hover:border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 ease-out p-8 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-marina-charcoal transition-colors duration-300 group-hover:text-marina-dark">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="font-sans text-lg font-bold text-stone-600 transition-colors whitespace-nowrap">
                      {item.price}
                    </span>
                  )}
                </div>

                {item.duration && (
                  <div className="text-[10px] uppercase tracking-widest text-marina-gold mb-3 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-marina-gold/40"></span>
                    {item.duration}
                  </div>
                )}

                {item.description && (
                  <p className="text-stone-600 font-light text-sm leading-relaxed transition-colors">
                    {item.description}
                  </p>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const CtaBanner: React.FC = () => (
  <section className="relative py-32 md:py-48 px-6 text-center overflow-hidden">
    {/* Parallax Background using fixed attachment */}
    <div className="absolute inset-0 bg-[url(`'${headerImage3}'`)] bg-fixed bg-cover bg-center parallax-bg" style={{ backgroundImage: `url(${headerImage3})` }}
      role="img" aria-label="Ambiente relajante de spa"></div>
    <div className="absolute inset-0 bg-marina-dark/60 backdrop-blur-[2px]"></div>

    <div className="relative z-10 max-w-5xl mx-auto">
      <RevealOnScroll>
        <span className="text-white/80 text-xs tracking-[0.4em] uppercase block mb-8">No esperes más</span>
        <AnimatedTitle
          text="¿Lista para renovarte?"
          el="h3"
          className="font-serif text-5xl md:text-7xl text-white mb-10 italic"
        />
        <p className="text-stone-200 mb-14 text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Reserva tu cita hoy en el mejor centro de estética de Zafra y descubre el tratamiento perfecto para tu bienestar.
        </p>
        <NavLink to="/contacto" className="inline-block bg-white text-marina-dark px-12 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-marina-gold hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-marina-gold">
          Reservar experiencia
        </NavLink>
      </RevealOnScroll>
    </div>
  </section>
);

export const ReviewCard: React.FC<{ name: string; text: string; rating: number; googleUrl?: string }> = ({ name, text, rating, googleUrl }) => (
  <article className="bg-white border border-stone-50 h-full p-12 text-center flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-500 ease-luxury transform hover:-translate-y-1 relative overflow-hidden group">
    {/* Decorative quote mark */}
    <div className="absolute -top-4 -left-2 text-[10rem] font-serif text-stone-50 transition-colors duration-500 select-none pointer-events-none group-hover:text-stone-100" aria-hidden="true">"</div>

    <div className="relative z-10">
      <div className="flex justify-center gap-1 text-marina-gold transition-colors duration-500 mb-8" aria-label={`Valoración: ${rating} de 5 estrellas`}>
        {[...Array(rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" aria-hidden="true" />)}
      </div>
      <p className="text-stone-600 mb-8 font-serif text-xl leading-relaxed italic transition-colors">"{text}"</p>
      <div className="w-10 h-px bg-marina-gold mx-auto mb-4 transition-all duration-500 group-hover:w-20"></div>
      <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-2">{name}</h4>
      {googleUrl && (
        <a href={googleUrl} target="_blank" rel="noreferrer" className="text-[10px] text-marina-gold uppercase tracking-widest font-bold border-b border-transparent hover:border-marina-gold transition-all">
          Ver en Google
        </a>
      )}
    </div>
  </article>
);

export const TestimonialSlider: React.FC<{ testimonials: (Testimonial & { googleUrl?: string })[] }> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Pause on hover for accessibility (users need time to read)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [index, isPaused]);

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Testimonios de clientes"
    >
      {/* Arrow Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-stone-200 text-stone-400 hover:border-marina-gold hover:text-marina-gold hover:bg-white transition-all z-20 focus:outline-none focus:ring-2 focus:ring-marina-gold"
        aria-label="Testimonio anterior"
      >
        <ChevronLeft size={24} strokeWidth={1} />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-stone-200 text-stone-400 hover:border-marina-gold hover:text-marina-gold hover:bg-white transition-all z-20 focus:outline-none focus:ring-2 focus:ring-marina-gold"
        aria-label="Siguiente testimonio"
      >
        <ChevronRight size={24} strokeWidth={1} />
      </button>

      <div className="relative overflow-hidden min-h-[400px]" aria-live={isPaused ? "polite" : "off"}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="w-full">
              <ReviewCard {...testimonials[index]} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-12" role="tablist">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-marina-gold ${index === i ? 'w-8 h-1 bg-marina-gold' : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'}`}
            aria-label={`Ir al testimonio ${i + 1}`}
            aria-selected={index === i}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
};