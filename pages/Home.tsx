import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { SEO_DATA, TESTIMONIALS } from '../constants';
import { CtaBanner, RevealOnScroll, TestimonialSlider, AnimatedTitle, SchemaMarkup } from '../components/PageComponents';
import { motion, useReducedMotion } from 'framer-motion';
import { BotanicalBg, ZenCirclesBg, OrganicWavesBg } from '../components/Backgrounds';
import IndibaTreatmentsImage from '../src/assets/img/tratamientos-indiba.png';
import FacialTreatmentsImage from '../src/assets/img/tratamientos-faciales.jpg';
import DepilationTreatmentsImage from '../src/assets/img/tratamientos-depilacion.png';
import AestheticGeneralTreatmentsImage from '../src/assets/img/tratamientos-estetica-general.png';
import WellnessTreatmentsImage from '../src/assets/img/tratamientos-bienestar.jpg';
import corporalTreatmentsImage from '../src/assets/img/tratamientos-corporales.png';

import FacilitiesImage from '../src/assets/img/habitacion-instalaciones.png';
import headerImage from '../src/assets/img/spa-marina-zafra-bienestar-zen.png';
import headerImage2 from '../src/assets/img/textura-suave-spa-lujo.png';

// --- Static Hero Component (SEO & Conversion Optimized) ---
const StaticHero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-marina-dark">
      {/* 1. Background Image - LCP Optimized (Matches index.html preload) */}
      <div className="absolute inset-0 z-0">
        <img
          src={headerImage}
          alt="Ambiente de bienestar y relajación con piedras zen en un spa de estética en Zafra"
          className="w-full h-full object-cover opacity-90"
          fetchPriority="high" // Critical for SEO/LCP
          width="2070"
          height="1380"
        />
        {/* Premium Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-marina-dark/40 to-marina-dark/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Brand Tagline */}
          <motion.span
            variants={itemVariants}
            className="inline-block text-marina-gold text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 font-bold bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
          >
            CENTRO DE ESTÉTICA · ZAFRA
          </motion.span>

          {/* H1: Main Local Keyword - Visible & Unique */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-6 drop-shadow-xl"
          >
            Centro de Estética <br className="hidden md:block" />
            <span className="italic text-stone-100">en Zafra</span>
          </motion.h1>

          {/* H2: Services & Value Proposition */}
          <motion.h2
            variants={itemVariants}
            className="font-sans text-lg md:text-2xl text-stone-200 font-light tracking-wide mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Rituales faciales, Indiba y bienestar con atención personalizada.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-stone-400 text-sm md:text-base font-light mb-10 max-w-xl mx-auto"
          >
            Más de <strong>300 clientas satisfechas</strong> confían en nuestro <strong>centro de estética en Zafra</strong>,
            ubicado en la calle Reyes Huertas. Fusionamos <strong>alta cosmética, tecnología avanzada e Indiba</strong> para ayudarte a realzar tu mejor versión.
          </motion.p>

          {/* CTAs: Conversion & Location */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary CTA */}
            <NavLink
              to="/contacto"
              className="w-full sm:w-auto bg-marina-gold text-white border border-marina-gold px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-marina-gold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] flex items-center justify-center gap-2 group"
              aria-label="Reservar cita en Marina Spa"
            >
              <Calendar size={16} />
              Pedir cita ahora
            </NavLink>


          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-6"
        >
          <NavLink
            to={SEO_DATA.faciales.path}
            className="text-xs text-stone-400 underline hover:text-marina-gold transition-colors"
          >
            Descubre nuestros rituales faciales en Zafra
          </NavLink>
        </motion.div>
      </div>


    </section>
  );
};

// --- Intro Parallax Logic ---
const LuxuriousIntro: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden">

      {/* Animated Background - Botanical for Nature/Intro */}
      <BotanicalBg />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">

          <div className="md:w-1/2 relative order-2 md:order-1 h-[550px] flex items-center justify-center">
            <RevealOnScroll>
              <div className="relative z-10">
                {/* Main Image */}
                <div>
                  <img
                    src={FacilitiesImage}
                    alt="Instalaciones interiores de nuestro centro de estética Marina Spa"
                    className="w-full max-w-md shadow-2xl rounded-sm relative z-10"
                    loading="lazy"
                    width="448"
                    height="672"
                  />
                </div>
              </div>
            </RevealOnScroll>


          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <RevealOnScroll>
              <span className="text-marina-gold text-xs tracking-[0.3em] uppercase block mb-6 font-bold">Filosofía Marina Spa</span>
              <AnimatedTitle
                text="Filosofía de tu Centro de Belleza en Zafra"
                el="h2"
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-marina-dark mb-8 leading-tight"
              />
              <div className="w-20 h-px bg-marina-gold mb-8"></div>
              <p className="text-stone-600 font-light text-lg leading-loose mb-6">
                En Marina Spa comprendemos que el bienestar no es un lujo, sino una necesidad. Cada tratamiento cuenta una historia, y nosotros estamos aquí para escucharla y mejorarla.
              </p>
              <p className="text-stone-600 font-light text-lg leading-loose mb-10">
                Como referente en <strong>centro de belleza en Zafra</strong>, fusionamos la <NavLink to={SEO_DATA.faciales.path} className="text-marina-dark border-b border-marina-gold/30 hover:text-marina-gold transition-colors font-bold">cosmética de alta gama</NavLink> con la tecnología más avanzada, como <NavLink to={SEO_DATA.indiba.path} className="text-marina-dark border-b border-marina-gold/30 hover:text-marina-gold transition-colors font-bold">Indiba</NavLink>, en un entorno diseñado para la <NavLink to={SEO_DATA.spa.path} className="text-marina-dark border-b border-marina-gold/30 hover:text-marina-gold transition-colors font-bold">calma absoluta</NavLink>. Somos tu <strong>centro de estética en Zafra</strong> de confianza.
              </p>
              <NavLink to={SEO_DATA.faciales.path} className="group flex items-center gap-2 text-marina-dark uppercase tracking-widest text-xs font-bold hover:text-marina-gold transition-colors focus:outline-none focus:ring-2 focus:ring-marina-gold p-1 rounded-sm">
                Nuestra Historia <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </NavLink>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Services Preview Grid Data ---

const SERVICES_PREVIEW = [
  {
    title: "Rituales Faciales",
    subtitle: "Cuidado Facial",
    desc: "Rejuvenecimiento, higiene y luminosidad con alta cosmética.",
    link: SEO_DATA.faciales.path,
    img: FacialTreatmentsImage,
    delay: 0
  },
  {
    title: "Indiba Zafra",
    subtitle: "Tecnología Avanzada",
    desc: "Radiofrecuencia regenerativa celular para rostro y cuerpo.",
    link: SEO_DATA.indiba.path,
    img: IndibaTreatmentsImage,
    delay: 100
  },
  {
    title: "Corporales",
    subtitle: "Remodelación",
    desc: "Maderoterapia, criolipólisis y planes de adelgazamiento.",
    link: SEO_DATA.corporales.path,
    img: corporalTreatmentsImage,
    delay: 200
  },
  {
    title: "Bienestar",
    subtitle: "Equilibrio & Armonía",
    desc: "Masajes relajantes, bañeras de hidromasaje y rituales sensoriales.",
    link: SEO_DATA.spa.path,
    img: WellnessTreatmentsImage,
    delay: 300
  },
  {
    title: "Depilación",
    subtitle: "Suavidad",
    desc: "Láser, cera y diseño de cejas con hilo. Resultados duraderos.",
    link: SEO_DATA.depilacion.path,
    img: DepilationTreatmentsImage,
    delay: 400
  },
  {
    title: "Estética General",
    subtitle: "Belleza",
    desc: "Manicura, pedicura y maquillaje para realzar tu belleza natural.",
    link: SEO_DATA.estetica.path,
    img: AestheticGeneralTreatmentsImage,
    delay: 500
  }
];

// --- Main Home Component ---
const Home: React.FC = () => {
  useEffect(() => {
    document.title = SEO_DATA.home.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', SEO_DATA.home.description);
  }, []);

  return (
    <>
      <SchemaMarkup />

      {/* Static Hero Section (Replaces HeroSlider and old sr-only H1) */}
      <StaticHero />

      <LuxuriousIntro />

      {/* Curated Collections (Services) - Grid Layout */}
      <section className="py-32 bg-stone-50 relative overflow-hidden" aria-labelledby="services-heading">

        {/* Animated Background - Zen Circles for Structure */}
        <div aria-hidden="true"><ZenCirclesBg /></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <RevealOnScroll>
              <span className="text-marina-gold text-xs tracking-[0.3em] uppercase block mb-4 font-bold">Descubre</span>
              <AnimatedTitle
                text="Tratamientos de Estética en Zafra"
                el="h2"
                className="font-serif text-5xl text-marina-dark mb-6"
              />
              <p className="text-stone-600 font-light text-lg">Experiencias de belleza y bienestar diseñadas para cada necesidad.</p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_PREVIEW.map((service, idx) => (
              <RevealOnScroll key={idx} delay={service.delay}>
                <NavLink to={service.link} className="group block relative h-[500px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 rounded-sm focus:outline-none focus:ring-4 focus:ring-marina-gold">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.img}')` }}
                    role="img"
                    aria-label={`Imagen representativa de ${service.title}`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-marina-dark/90 via-marina-dark/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <span className="text-marina-gold text-[10px] tracking-[0.3em] uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl italic mb-4">{service.title}</h3>
                    <p className="text-sm font-light text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <div className="w-12 h-px bg-white group-hover:w-full transition-all duration-700"></div>
                  </div>
                </NavLink>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section - Quote */}
      <section className="py-40 relative bg-fixed bg-center bg-cover parallax-bg" style={{
        backgroundImage: `url(${headerImage2})`
      }}>
        <div className="absolute inset-0 bg-marina-dark/60 backdrop-blur-[1px]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll>
            <AnimatedTitle
              text='"Tu viaje hacia la serenidad comienza aquí"'
              el="h3"
              className="text-4xl md:text-6xl text-white font-serif italic mb-8 block leading-tight drop-shadow-xl"
            />
            <div className="w-24 h-1 bg-marina-gold mx-auto shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Testimonials - Clean & Modern */}
      <section className="py-32 bg-white relative overflow-hidden" aria-labelledby="testimonials-heading">

        {/* Animated Background - Organic Waves for Flow */}
        <div aria-hidden="true"><OrganicWavesBg /></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <span className="text-marina-gold text-xs tracking-[0.3em] uppercase block mb-4 font-bold">Voces Reales</span>
              <AnimatedTitle
                text="Opiniones sobre nuestro Centro"
                el="h2"
                className="font-serif text-4xl text-marina-dark"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <TestimonialSlider testimonials={TESTIMONIALS} />
          </RevealOnScroll>
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default Home;