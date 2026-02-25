import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PageHeader, ServiceSection, CtaBanner } from '../components/PageComponents';
import {
  BotanicalBg,
  TechLinesBg,
  OrganicWavesBg,
  ZenCirclesBg
} from '../components/Backgrounds';
import {
  SEO_DATA,
  FACIAL_SERVICES,
  INDIBA_SERVICES,
  BODY_SERVICES,
  SPA_SERVICES,
  DEPILATION_SERVICES,
  AESTHETIC_SERVICES
} from '../constants';

import IndibaTreatmentsImage from '../src/assets/img/tratamientos-indiba.webp';
import IndibaTreatmentsImagePNG from '../src/assets/img/tratamientos-indiba.png';
import FacialTreatmentsImage from '../src/assets/img/tratamientos-faciales.webp';
import FacialTreatmentsImageJPG from '../src/assets/img/tratamientos-faciales.jpg';
import DepilationTreatmentsImage from '../src/assets/img/tratamientos-depilacion.webp';
import DepilationTreatmentsImagePNG from '../src/assets/img/tratamientos-depilacion.png';
import AestheticGeneralTreatmentsImage from '../src/assets/img/tratamientos-estetica-general.webp';
import AestheticGeneralTreatmentsImagePNG from '../src/assets/img/tratamientos-estetica-general.png';
import WellnessTreatmentsImage from '../src/assets/img/tratamientos-bienestar.webp';
import WellnessTreatmentsImageJPG from '../src/assets/img/tratamientos-bienestar.jpg';
import corporalTreatmentsImage from '../src/assets/img/tratamientos-corporales.webp';
import corporalTreatmentsImagePNG from '../src/assets/img/tratamientos-corporales.png';
import CubesIMG from '../src/assets/img/cubes.webp';

// --- Schema Markup Component (JSON-LD) for Local SEO ---
export const FacialsSchemaMarkup: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://marinaspa.es/rituales-faciales#service",
    "name": "Rituales y Programas Faciales en Zafra",
    "description": "Tratamientos faciales personalizados con alta cosmética y tecnología avanzada para mejorar la salud y apariencia de la piel en Marina Spa Zafra.",
    "provider": {
      "@type": "BeautySalon",
      "@id": "https://marinaspa.es/#beautysalon"
    },
    "areaServed": {
      "@type": "City",
      "name": "Zafra"
    },
    "serviceType": "Tratamientos faciales"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// --- Schema Markup Component (JSON-LD) for Local SEO ---
export const IndibaSchemaMarkup: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://marinaspa.es/indiba#service",
    "name": "Tratamientos Indiba en Zafra",
    "description": "Tratamientos Indiba facial y corporal para regeneración celular, reafirmación y rejuvenecimiento sin dolor en Marina Spa Zafra.",
    "provider": {
      "@type": "BeautySalon",
      "@id": "https://marinaspa.es/#beautysalon"
    },
    "areaServed": {
      "@type": "City",
      "name": "Zafra"
    },
    "serviceType": "Radiofrecuencia Indiba"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// --- Schema Markup Component (JSON-LD) for Local SEO ---
export const BodySchemaMarkup: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://marinaspa.es/corporales#service",
    "name": "Tratamientos Corporales en Zafra",
    "description": "Tratamientos corporales para remodelación de la silueta, celulitis y bienestar general en Marina Spa Zafra.",
    "provider": {
      "@type": "BeautySalon",
      "@id": "https://marinaspa.es/#beautysalon"
    },
    "areaServed": {
      "@type": "City",
      "name": "Zafra"
    },
    "serviceType": "Tratamientos corporales"
  }


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// --- Schema Markup Component (JSON-LD) for Local SEO ---
export const SpaSchemaMarkup: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://marinaspa.es/spa#service",
    "name": "Spa y Bienestar en Zafra",
    "description": "Servicios de spa, masajes relajantes y rituales sensoriales diseñados para el descanso y la desconexión en Marina Spa Zafra.",
    "provider": {
      "@type": "BeautySalon",
      "@id": "https://marinaspa.es/#beautysalon"
    },
    "areaServed": {
      "@type": "City",
      "name": "Zafra"
    },
    "serviceType": "Spa y bienestar"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// --- Schema Markup Component (JSON-LD) for Local SEO ---
export const DepilationSchemaMarkup: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://marinaspa.es/depilacion#service",
    "name": "Depilación y Fotodepilación en Zafra",
    "description": "Servicios de depilación láser, cera e hilo para una piel suave y cuidada en Marina Spa Zafra.",
    "provider": {
      "@type": "BeautySalon",
      "@id": "https://marinaspa.es/#beautysalon"
    },
    "areaServed": {
      "@type": "City",
      "name": "Zafra"
    },
    "serviceType": "Depilación"
  }


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// --- Schema Markup Component (JSON-LD) for Local SEO ---
export const EsteticaGeneralSchemaMarkup: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://marinaspa.es/estetica-general#service",
    "name": "Estética General en Zafra",
    "description": "Servicios de estética general como manicura, pedicura, maquillaje y tratamientos de mirada en Marina Spa Zafra.",
    "provider": {
      "@type": "BeautySalon",
      "@id": "https://marinaspa.es/#beautysalon"
    },
    "areaServed": {
      "@type": "City",
      "name": "Zafra"
    },
    "serviceType": "Estética general"
  }


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// Helper hook for SEO
const useSEO = (key: string) => {
  useEffect(() => {
    document.title = SEO_DATA[key].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', SEO_DATA[key].description);
    window.scrollTo(0, 0);
  }, [key]);
};

export const FacialPage: React.FC = () => {
  useSEO('faciales');
  return (
    <>
      <FacialsSchemaMarkup />
      <PageHeader
        title="Rituales y Programas Faciales"
        subtitle="Higiene, oxigenación y la mejor tecnología anti-edad en nuestro centro de estética en Zafra"
        bgImage={FacialTreatmentsImage}
        bgImageFallback={FacialTreatmentsImageJPG}
        altImage="Tratamiento facial relajante en Marina Spa, centro de estética en Zafra"
      />
      {FACIAL_SERVICES.map((category, idx) => (
        <ServiceSection
          key={idx}
          category={category}
          index={idx}
          BackgroundComponent={idx % 2 === 0 ? BotanicalBg : undefined}
        />
      ))}
      <CtaBanner />
    </>
  );
};

export const IndibaPage: React.FC = () => {
  useSEO('indiba');
  return (
    <>
      <IndibaSchemaMarkup />
      <PageHeader
        title="Tratamientos Indiba en Zafra"
        subtitle="Regeneración celular profunda, belleza sin dolor y resultados visibles en Marina Spa"
        bgImage={IndibaTreatmentsImage}
        bgImageFallback={IndibaTreatmentsImagePNG}
        altImage="Tratamientos Indiba en Marina Spa, centro de estética en Zafra"
      />
      {/* Custom intro for Indiba */}
      <div className="py-24 bg-white text-center relative overflow-hidden">
        <TechLinesBg />
        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          <span className="text-marina-gold text-xs tracking-[0.3em] uppercase block mb-6">Ciencia & Belleza</span>
          <h2 className="font-serif text-4xl md:text-5xl text-marina-dark mb-8 italic">El sistema Proionic® en Zafra</h2>
          <p className="text-stone-500 font-light text-xl leading-relaxed">
            Estimula el intercambio iónico intra y extracelular restableciendo la actividad eléctrica celular fisiológica.
            El resultado es una <span className="text-marina-dark font-normal">piel revitalizada</span> con aumento visible de colágeno y elastina.
            Descubre más sobre la tecnología en la <a href="https://www.indiba.com/es/" target="_blank" rel="noopener noreferrer nofollow" className="text-marina-gold underline hover:text-marina-dark transition-colors">web oficial de Indiba®</a>.
          </p>
        </div>
      </div>

      {INDIBA_SERVICES.map((category, idx) => (
        <ServiceSection
          key={idx}
          category={category}
          index={idx + 1}
          BackgroundComponent={TechLinesBg}
        />
      ))}

      {/* Benefits Section - Modern Grid */}
      <div className="py-24 bg-stone-50 relative">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h3 className="font-serif text-3xl mb-12 text-center text-marina-dark">Beneficios Clínicos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Reduce arrugas y líneas",
              "Hidratación profunda",
              "Aumenta la elasticidad",
              "Redefine el óvalo facial",
              "Efecto lifting en ojos",
              "Reduce bolsas y ojeras"
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-8 border border-stone-100 hover:border-marina-gold shadow-sm hover:shadow-lg transition-all duration-500 group">
                <p className="font-serif text-xl text-stone-600 italic group-hover:text-marina-gold transition-colors">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CtaBanner />
    </>
  );
};

export const BodyPage: React.FC = () => {
  useSEO('corporales');
  return (
    <>
      <BodySchemaMarkup />
      <PageHeader
        title="Tratamientos Corporales Zafra"
        subtitle="Remodela tu silueta, elimina celulitis y mejora tu circulación en nuestro centro de belleza"
        bgImage={corporalTreatmentsImage}
        bgImageFallback={corporalTreatmentsImagePNG}
        altImage="Tratamientos corporales en Marina Spa, centro de estética en Zafra"
      />
      {BODY_SERVICES.map((category, idx) => (
        <ServiceSection
          key={idx}
          category={category}
          index={idx}
          BackgroundComponent={idx % 2 === 0 ? OrganicWavesBg : undefined}
        />
      ))}
      <CtaBanner />
    </>
  );
};

export const SpaPage: React.FC = () => {
  useSEO('spa');
  return (
    <>
      <SpaSchemaMarkup />
      <PageHeader
        title="Bienestar y Relajación en Zafra"
        subtitle="Desconecta para reconectar: masajes, bañeras y rituales sensoriales en Marina Spa"
        bgImage={WellnessTreatmentsImage}
        bgImageFallback={WellnessTreatmentsImageJPG}
        altImage="Bienestar y relajación en Marina Spa, centro de estética en Zafra"
      />
      {SPA_SERVICES.map((category, idx) => (
        <ServiceSection
          key={idx}
          category={category}
          index={idx}
          BackgroundComponent={OrganicWavesBg}
        />
      ))}
      <CtaBanner />
    </>
  );
};

export const DepilationPage: React.FC = () => {
  useSEO('depilacion');
  return (
    <>
      <DepilationSchemaMarkup />
      <PageHeader
        title="Depilación y Fotodepilación Zafra"
        subtitle="Soluciones eficaces para la eliminación del vello: Láser, Cera y Hilo"
        bgImage={DepilationTreatmentsImage}
        bgImageFallback={DepilationTreatmentsImagePNG}
        altImage="Depilación y fotodepilación en Marina Spa, centro de estética en Zafra"
      />
      {DEPILATION_SERVICES.map((category, idx) => (
        <ServiceSection
          key={idx}
          category={category}
          index={idx}
          BackgroundComponent={TechLinesBg}
        />
      ))}
      <CtaBanner />
    </>
  );
};

export const GeneralPage: React.FC = () => {
  useSEO('estetica');
  return (
    <>
      <EsteticaGeneralSchemaMarkup />
      <PageHeader
        title="Estética General en Zafra"
        subtitle="Completa tu cuidado personal con servicios esenciales que realcen tu belleza y bienestar."
        bgImage={AestheticGeneralTreatmentsImage}
        bgImageFallback={AestheticGeneralTreatmentsImagePNG}
        altImage="Estética general en Marina Spa, centro de estética en Zafra"
      />
      {AESTHETIC_SERVICES.map((category, idx) => (
        <ServiceSection
          key={idx}
          category={category}
          index={idx}
          BackgroundComponent={ZenCirclesBg}
        />
      ))}

      {/* Beauty Party Special - Luxury Light Design */}
      <div className="relative py-32 text-center overflow-hidden bg-stone-50">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${CubesIMG})` }}></div>
        {/* Gradient Overlay for warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-marina-gold-light/20 to-transparent"></div>
        <ZenCirclesBg />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl mb-4 text-marina-dark">Beauty Party en Zafra</h2>
          <p className="text-marina-gold font-serif italic text-3xl mb-12">Una celebración diferente</p>

          <div className="bg-white/60 backdrop-blur-xl border border-white p-10 md:p-16 max-w-3xl mx-auto mb-12 shadow-xl rounded-sm transform hover:scale-[1.02] transition-transform duration-700">
            <p className="text-4xl font-serif text-marina-dark mb-8">62€ <span className="text-sm font-sans tracking-widest uppercase text-stone-500">/ persona</span></p>
            <div className="h-px w-24 bg-marina-gold mx-auto mb-8"></div>
            <p className="text-stone-600 font-light leading-loose text-lg mb-8">
              ¡Para disfrutar con las amigas! Mínimo 4 personas, máximo 10 personas.<br />
              Incluye: Cocktail de bienvenida, masaje corporal (30 min), belleza iluminadora facial y maquillaje exprés.
            </p>
          </div>

          <NavLink to="/contacto" className="inline-block bg-marina-dark text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-marina-gold hover:text-white transition-colors shadow-lg">
            Reservar Fiesta
          </NavLink>
        </div>
      </div>
      <CtaBanner />
    </>
  );
};