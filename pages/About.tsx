import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { PageHeader, AnimatedTitle, RevealOnScroll, CtaBanner } from '../components/PageComponents';
import { SEO_DATA } from '../constants';
import { ZenCirclesBg } from '../components/Backgrounds';
import FacilitiesImage from '../src/assets/img/instalaciones.webp';
import FacilitiesImagePNG from '../src/assets/img/instalaciones.png';
import Facilities2Image from '../src/assets/img/instalaciones-2.webp';
import Facilities2ImagePNG from '../src/assets/img/instalaciones-2.png';
import Facilities3Image from '../src/assets/img/instalaciones-3.webp';
import Facilities3ImagePNG from '../src/assets/img/instalaciones-3.png';
import FacilitiesVideo from '../src/assets/video/instalaciones.mp4';
import HeroImage from '../src/assets/img/ritual-bienestar-marina-spa-zafra.webp';
import HeroImagePNG from '../src/assets/img/ritual-bienestar-marina-spa-zafra.png';


// --- Schema Markup Component (JSON-LD) for Local SEO ---
export const SchemaMarkup: React.FC = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://marinaspa.es/quienes-somos#about",
        "name": "Quiénes somos | Marina Spa",
        "description": "Historia, valores y equipo de Marina Spa, centro de estética en Zafra.",
        "url": "https://marinaspa.es/quienes-somos",
        "about": {
            "@type": "BeautySalon",
            "name": "Marina Spa",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Zafra",
                "addressRegion": "Badajoz",
                "addressCountry": "ES"
            }
        },
        "mainEntity": {
            "@type": "BeautySalon",
            "@id": "https://marinaspa.es/#beautysalon",
            "name": "Marina Spa"
        }
    };

    const structuredData2 = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://marinaspa.es/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Quiénes somos",
                "item": "https://marinaspa.es/quienes-somos"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData2) }}
            />
        </>
    );
};
// --- Mixed Media Data (Video first, then Images) ---
const GALLERY_ITEMS = [
    {
        type: 'video',
        id: 'video-main',
        src: FacilitiesVideo,
        poster: Facilities2Image,
        posterFallback: Facilities2ImagePNG,
        alt: "Video recorrido del centro Marina Spa"
    },
    {
        type: 'image',
        id: 'img-1',
        src: FacilitiesImage,
        fallback: FacilitiesImagePNG,
        alt: "Cabina interior relajante de nuestro centro"
    },
    {
        type: 'image',
        id: 'img-2',
        src: Facilities2Image,
        fallback: Facilities2ImagePNG,
        alt: "Detalle de tratamientos de nuestro centro"
    },
    {
        type: 'image',
        id: 'img-3',
        src: Facilities3Image,
        fallback: Facilities3ImagePNG,
        alt: "Zona de relax y espera en nuestro centro"
    }
];

const FacilityMediaCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Manual navigation only
    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    const currentItem = GALLERY_ITEMS[index];

    return (
        <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-sm shadow-2xl border-4 border-white/50 group bg-stone-900 overflow-hidden">

            {/* Content Display */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    {currentItem.type === 'video' ? (
                        <video
                            className="w-full h-full object-cover"
                            controlsList="nodownload"
                            playsInline
                            // El video se puede reproducir automáticamente silenciado, pero permitimos controles
                            //autoPlay
                            muted
                            loop
                            controls
                            preload="none"
                            poster={currentItem.posterFallback}
                        >
                            <source src={currentItem.src} type="video/mp4" />
                            Tu navegador no soporta videos.
                        </video>
                    ) : (
                        <>
                            <picture>
                                <source srcSet={currentItem.src} type="image/webp" />
                                <img
                                    src={currentItem.fallback}
                                    alt={currentItem.alt}
                                    loading="lazy"
                                    decoding="async"
                                    width="720"
                                    height="1280"
                                    sizes="(max-width: 768px) 100vw, 360px"
                                    className="w-full h-full object-cover"
                                />
                            </picture>
                            <div className="absolute inset-0 bg-gradient-to-t from-marina-dark/40 via-transparent to-transparent pointer-events-none"></div>
                        </>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Manual Controls - Visible on hover or always on mobile */}

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/80 hover:text-marina-dark transition-all z-20 focus:outline-none focus:ring-2 focus:ring-marina-gold"
                aria-label="Anterior"
            >
                <ChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/80 hover:text-marina-dark transition-all z-20 focus:outline-none focus:ring-2 focus:ring-marina-gold"
                aria-label="Siguiente"
            >
                <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20 pointer-events-none">
                {GALLERY_ITEMS.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${index === i ? 'w-6 bg-marina-gold' : 'w-1.5 bg-white/60'}`}
                    ></div>
                ))}
            </div>

            {/* Decorative Label */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="inline-block bg-marina-dark/80 backdrop-blur-sm text-marina-gold text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm border border-white/10">
                    {currentItem.type === 'video' ? 'Video Tour' : 'Galería'}
                </span>
            </div>
        </div>
    );
};

const About: React.FC = () => {
    useEffect(() => {
        document.title = SEO_DATA.about.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', SEO_DATA.about.description);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SchemaMarkup />
            <PageHeader
                title="Donde la belleza se convierte en bienestar"
                subtitle="Tu centro de estética en Zafra"
                bgImage={HeroImage}
                bgImageFallback={HeroImagePNG}
                altImage="Detalle de manos sosteniendo aceite esencial en un ritual de bienestar en Marina Spa"
            />

            <section className="py-24 bg-white relative overflow-hidden">
                <ZenCirclesBg />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* Text Content */}
                        <div className="lg:w-1/2">
                            <RevealOnScroll>
                                <span className="text-marina-gold text-xs tracking-[0.3em] uppercase block mb-6 font-bold">Nuestra Esencia</span>
                                <AnimatedTitle
                                    text="Historia y Misión"
                                    el="h2"
                                    className="font-serif text-4xl md:text-5xl text-marina-dark mb-8"
                                />
                                <div className="w-20 h-px bg-marina-gold mb-8"></div>
                                <p className="text-stone-600 font-light text-lg leading-loose mb-6 text-justify">
                                    <strong>Marina Spa</strong> nació con una visión clara: convertirse en el <strong>centro de estética en Zafra</strong> de referencia, donde la tecnología puntera se encuentra con el trato humano más cálido.
                                </p>
                                <p className="text-stone-600 font-light text-lg leading-loose mb-8 text-justify">
                                    Entendemos la belleza como una consecuencia de la salud y el bienestar.
                                    Por ello, cada protocolo, desde un tratamiento facial hasta{" "}
                                    <NavLink
                                        to={SEO_DATA.indiba.path}
                                        className="text-marina-gold hover:underline"
                                    >
                                        nuestros tratamientos Indiba en Zafra
                                    </NavLink>,
                                    está diseñado para ofrecer resultados visibles respetando la biología de tu piel.
                                </p>

                                <div className="grid grid-cols-2 gap-8 mt-12">
                                    <div>
                                        <h3 className="font-serif text-2xl text-marina-dark mb-2">Experiencia</h3>
                                        <p className="text-stone-500 font-light">Más de 10 años cuidando de ti.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl text-marina-dark mb-2">Tecnología</h3>
                                        <p className="text-stone-500 font-light">Centro certificado Indiba® y Mesoestetic®.</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>

                        {/* Slider Section */}
                        <div className="lg:w-1/2 w-full">
                            <RevealOnScroll delay={200}>
                                <FacilityMediaCarousel />
                                <p className="text-center text-xs text-stone-400 mt-6 tracking-widest uppercase">
                                    Visítanos en C. Reyes Huertas, 8
                                </p>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team / Expertise Section */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <RevealOnScroll>
                        <span className="text-marina-gold text-xs tracking-[0.3em] uppercase block mb-6 font-bold">Profesionales</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-marina-dark mb-12">Nuestro Equipo Certificado</h2>
                        <p className="text-stone-600 font-light text-lg leading-loose mb-12">
                            Detrás de Marina Spa hay un equipo de esteticistas apasionadas y en constante formación. Especialistas en diagnóstico facial, remodelación corporal y técnicas de masaje, nuestro objetivo es personalizar cada visita para que te sientas única.
                        </p>
                        <p className="text-stone-600 font-light text-lg leading-loose">
                            ¿Por qué elegirnos como tu <strong>centro de belleza en Zafra</strong>? Porque combinamos la eficacia clínica de equipos como Indiba con la sensorialidad de la alta cosmética profesional.
                        </p>

                        <div className="mt-16">
                            <NavLink to="/contacto" className="inline-block border-b border-marina-dark pb-1 uppercase tracking-[0.2em] text-xs hover:text-marina-gold hover:border-marina-gold transition-colors">
                                Ven a conocernos en Zafra
                            </NavLink>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <CtaBanner />
        </>
    );
};

export default About;