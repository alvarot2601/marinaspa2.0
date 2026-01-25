import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Facebook, Heart } from 'lucide-react';
import { useCookieConsent, CookiePlaceholder } from '../components/CookieConsent';
import { AnimatedTitle } from '../components/PageComponents';
// --- Schema Markup Component (JSON-LD) for Local SEO ---
export const SchemaMarkup: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://marinaspa.es/contacto#contact",
    "url": "https://marinaspa.es/contacto",
    "name": "Contacto y reservas Marina Spa",
    "description": "Página de contacto de Marina Spa, centro de estética en Zafra. Reserva tu cita, consulta horarios y localización.",
    "mainEntity": {
      "@type": "BeautySalon",
      "@id": "https://marinaspa.es/#beautysalon",
      "name": "Marina Spa",
      "telephone": "+34644799000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C. Reyes Huertas, 8",
        "addressLocality": "Zafra",
        "addressRegion": "Badajoz",
        "postalCode": "06300",
        "addressCountry": "ES"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

const Contact: React.FC = () => {
  const { consent } = useCookieConsent();

  return <>
    <SchemaMarkup />
    <div
      className="bg-stone-100 min-h-[calc(100vh-80px)] py-16 md:py-24 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Decorative Background Text - Static now */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-serif text-marina-gold/5 whitespace-nowrap pointer-events-none select-none z-0"
      >
        MARINA
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div>
            <AnimatedTitle
              text="Contacto y Reservas"
              el="h1"
              className="font-serif text-5xl md:text-6xl text-marina-dark mb-4 drop-shadow-lg"
            />
          </div>
          <p className="text-stone-500 font-light text-lg md:text-xl">
            Estaremos encantadas de atenderte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto items-stretch">

          {/* Contact Info Card */}
          <div
            className="p-10 md:p-14 bg-marina-dark text-white shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center rounded-sm"
          >
            {/* Decorative background circle inside card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-marina-gold opacity-10 rounded-full blur-3xl pointer-events-none"></div>

            <h2 className="font-serif text-3xl text-marina-gold mb-10 relative z-10">Información</h2>

            <div className="space-y-10 relative z-10">
              <div className="flex items-start gap-6 group">
                <div className="hidden md:block p-3 bg-white/5 rounded-full group-hover:bg-marina-gold group-hover:text-marina-dark transition-colors duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest mb-2 text-marina-gold-light">Ubicación</h3>
                  <p className="text-stone-300 font-light leading-relaxed text-lg">
                    C. Reyes Huertas, 8<br />06300 Zafra, Badajoz
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Marina+Spa+Zafra"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs mt-3 text-marina-gold hover:text-white transition-colors border-b border-marina-gold/30 pb-0.5"
                  >
                    Ver en Google Maps <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="hidden md:block p-3 bg-white/5 rounded-full group-hover:bg-marina-gold group-hover:text-marina-dark transition-colors duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest mb-2 text-marina-gold-light">Teléfono</h3>
                  <p className="text-stone-300 font-light hover:text-white transition-colors">
                    <a href="tel:+34644799000" className="text-xl tracking-wide">644 79 90 00</a>
                  </p>
                  <p className="text-xs text-stone-500 mt-1">Llámanos para reservar tu cita</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="hidden md:block p-3 bg-white/5 rounded-full group-hover:bg-marina-gold group-hover:text-marina-dark transition-colors duration-500">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest mb-2 text-marina-gold-light">Síguenos</h3>
                  <div className="flex gap-6 mt-1">
                    <a
                      href="https://www.instagram.com/marinaspazafra/?hl=es"
                      target="_blank"
                      rel="noreferrer"
                      className="text-stone-300 hover:text-marina-gold transition-all transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram size={28} />
                    </a>
                    <a
                      href="https://www.facebook.com/marinaspazafra/?locale=es_ES"
                      target="_blank"
                      rel="noreferrer"
                      className="text-stone-300 hover:text-marina-gold transition-all transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook size={28} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="hidden md:block p-3 bg-white/5 rounded-full group-hover:bg-marina-gold group-hover:text-marina-dark transition-colors duration-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest mb-2 text-marina-gold-light">Horario</h3>
                  <div className="text-stone-300 font-light text-sm space-y-1 w-full max-w-xs">
                    <div className="flex justify-between gap-4"><span>Lunes</span> <span>Cerrado</span></div>
                    <div className="flex justify-between gap-4"><span>Martes</span> <span>10:00–20:30</span></div>
                    <div className="flex justify-between gap-4"><span>Miércoles</span> <span>10:00–20:30</span></div>
                    <div className="flex justify-between gap-4"><span>Jueves</span> <span>10:00–20:30</span></div>
                    <div className="flex justify-between gap-4"><span>Viernes</span> <span>10:00–14:00, 16:30–20:30</span></div>
                    <div className="flex justify-between gap-4"><span>Sábado</span> <span>10:00–14:00</span></div>
                    <div className="flex justify-between gap-4"><span>Domingo</span> <span>Cerrado</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container - Conditional Rendering based on Cookies */}
          <div
            className="bg-white p-2 shadow-2xl rounded-sm min-h-[500px] h-full relative group"
          >
            <div className="w-full h-full bg-stone-200 overflow-hidden relative">
              {consent === 'accepted' ? (

                <iframe
                  title="Marina Spa Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=C.+Reyes+Huertas,+8,+06300+Zafra,+Badajoz&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                ></iframe>
              ) : (
                <CookiePlaceholder />
              )}
              {/* Overlay to ensure pointer events for scrolling don't trap mouse immediately unless interacted */}
              {consent === 'accepted' && <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]"></div>}
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
};

export default Contact;