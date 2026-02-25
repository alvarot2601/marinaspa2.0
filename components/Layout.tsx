import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail, ChevronDown } from 'lucide-react';
import { SEO_DATA } from '../constants';
import LogoImage from '../src/assets/img/logo.webp';
import { CookieBanner, useCookieConsent } from './CookieConsent';

interface MobileLinkProps {
  to: string;
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const MobileLink = ({ to, children, onClick, className = "" }: MobileLinkProps) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block py-2 text-lg font-serif w-full text-center transition-colors ${isActive ? 'text-marina-gold italic' : 'text-stone-600'
      } ${className}`
    }
  >
    {children}
  </NavLink>
);

const WhatsAppFloatingButton = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  if (isMenuOpen) return null;

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Reset state on navigation, but respect if user manually closed it previously in session if you wanted persistent state (optional)
    // Here we auto-open only on Home ('/') after delay if user hasn't interacted yet
    if (location.pathname === '/' && !hasInteracted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000); // Opens after 4 seconds
      return () => clearTimeout(timer);
    } else {
      // On other pages, keep it closed initially
      setIsOpen(false);
    }
  }, [location, hasInteracted]);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none font-sans">

      {/* Chat Message Bubble */}
      <div
        className={`pointer-events-auto bg-white p-5 rounded-2xl rounded-br-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-stone-100 w-72 transform transition-all duration-500 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8 pointer-events-none'
          }`}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-serif font-bold text-marina-dark text-lg">Marina Spa Online</span>
          </div>
          <button
            onClick={handleClose}
            className="text-stone-400 hover:text-marina-dark transition-colors p-1"
            aria-label="Cerrar chat"
          >
            <X size={16} />
          </button>
        </div>
        <p className="text-stone-600 text-sm font-light leading-relaxed mb-4">
          ¡Hola! 👋 ¿Te gustaría reservar una cita o tienes alguna duda sobre nuestros tratamientos?
        </p>
        <a
          href="https://wa.me/34644799000"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#25D366] text-white py-2 rounded-sm text-xs uppercase tracking-widest font-bold hover:bg-[#20bd5a] transition-colors shadow-md"
        >
          Iniciar Chat
        </a>
      </div>

      {/* Main Button */}
      <a
        href="https://wa.me/34644799000"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setHasInteracted(true)}
        className="pointer-events-auto group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping duration-[2000ms]"></span>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>

        {/* Notification Badge when closed */}
        {!isOpen && !hasInteracted && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        )}
      </a>
    </div>
  );
};

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { resetConsent } = useCookieConsent();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle Scroll Effect for Header with Hysteresis
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Hysteresis Fix: Increased threshold gap to prevent 'bouncing' loop.

      if (offset > 85) {
        setScrolled(true);
      } else if (offset < 20) {
        setScrolled(false);
      }
    };

    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body and html scroll when menu is open to prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Link styling
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs uppercase tracking-[0.2em] transition-all duration-300 relative group py-2 ${isActive ? 'text-marina-gold' : 'text-stone-600 hover:text-stone-900'
    }`;

  // Active Indicator Component
  const ActiveDot = () => (
    <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-marina-gold rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans relative">

      {/* Skip to Content Link for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] bg-marina-gold text-white px-6 py-3 rounded-sm font-bold shadow-lg">
        Saltar al contenido principal
      </a>

      {/* Top Bar - Smooth Transition without CLS */}
      <div
        className={`bg-marina-dark text-stone-300 overflow-hidden transition-all duration-500 ease-out origin-top ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 py-3 opacity-100'
          }`}
      >
        <div className="container mx-auto px-6 text-[10px] tracking-[0.2em] flex justify-between items-center">
          <span className="hidden sm:inline opacity-80">TU VIAJE HACIA LA SERENIDAD</span>
          <div className="flex gap-6 items-center ml-auto sm:ml-0">
            <a href="tel:+34644799000" className="hover:text-marina-gold transition-colors" aria-label="Llamar al 644 79 90 00">
              644 79 90 00
            </a>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/marinaspazafra/?hl=es" target="_blank" rel="noreferrer" aria-label="Síguenos en Instagram"><Instagram size={14} className="cursor-pointer hover:text-marina-gold transition-colors" /></a>
              <a href="https://www.facebook.com/marinaspazafra/?locale=es_ES" target="_blank" rel="noreferrer" aria-label="Síguenos en Facebook"><Facebook size={14} className="cursor-pointer hover:text-marina-gold transition-colors" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Glassmorphism */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 border-b border-transparent ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 border-stone-100' : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo - Image Based */}
          <NavLink to="/" onClick={closeMenu} className="group relative z-50 focus:outline-none focus:ring-2 focus:ring-marina-gold rounded-sm">
            <img
              src={LogoImage}
              alt="Logo de Marina Spa"
              className={`transition-all duration-500 ease-in-out object-contain ${scrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'}`}
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Menú principal">
            <NavLink to={SEO_DATA.home.path} className={getLinkClass}>Inicio <ActiveDot /></NavLink>
            <NavLink to={SEO_DATA.about.path} className={getLinkClass}>El Centro <ActiveDot /></NavLink>

            {/* Tratamientos Dropdown - Added group-focus-within for keyboard accessibility */}
            <div className="relative group" aria-haspopup="true" aria-expanded="false">
              <button className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1 py-2 outline-none group-focus-within:text-marina-gold ${location.pathname !== '/' && location.pathname !== '/contacto' && location.pathname !== '/quienes-somos' ? 'text-marina-gold' : 'text-stone-600 hover:text-stone-900'}`}>
                Tratamientos <ChevronDown size={12} className="group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-300" />
              </button>
              {/* Dropdown Content - Added visible on group-focus-within */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 transform group-hover:translate-y-0 group-focus-within:translate-y-0 translate-y-2">
                <div className="bg-white/95 backdrop-blur-md shadow-xl border border-stone-100 p-6 rounded-sm w-72 flex flex-col gap-2">
                  <NavLink to={SEO_DATA.faciales.path} className="text-base font-serif text-stone-600 hover:text-marina-gold hover:translate-x-1 focus:text-marina-gold focus:translate-x-1 transition-all outline-none">Rituales y Programas Faciales</NavLink>
                  <NavLink to={SEO_DATA.indiba.path} className="text-base font-serif text-stone-600 hover:text-marina-gold hover:translate-x-1 focus:text-marina-gold focus:translate-x-1 transition-all outline-none">Facial Indiba</NavLink>
                  <NavLink to={SEO_DATA.corporales.path} className="text-base font-serif text-stone-600 hover:text-marina-gold hover:translate-x-1 focus:text-marina-gold focus:translate-x-1 transition-all outline-none">Tratamientos Corporales</NavLink>
                  <NavLink to={SEO_DATA.spa.path} className="text-base font-serif text-stone-600 hover:text-marina-gold hover:translate-x-1 focus:text-marina-gold focus:translate-x-1 transition-all outline-none">Bienestar y Relajación</NavLink>
                  <NavLink to={SEO_DATA.depilacion.path} className="text-base font-serif text-stone-600 hover:text-marina-gold hover:translate-x-1 focus:text-marina-gold focus:translate-x-1 transition-all outline-none">Depilación y Fotodepilación</NavLink>
                  <NavLink to={SEO_DATA.estetica.path} className="text-base font-serif text-stone-600 hover:text-marina-gold hover:translate-x-1 focus:text-marina-gold focus:translate-x-1 transition-all outline-none">Estética General</NavLink>
                </div>
              </div>
            </div>

            <NavLink to="/contacto" className="ml-4 bg-marina-gold border text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-marina-dark hover:border-marina-dark transition-all duration-300 shadow-sm hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-marina-dark">
              Reservar
            </NavLink>
          </nav>

          {/* Mobile Menu Button - Larger Touch Target */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-marina-dark hover:text-marina-gold transition-colors z-[100] p-3 -mr-3 focus:outline-none focus:ring-2 focus:ring-marina-gold rounded-sm"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


      </header>
      {/*Mobile Dropdown Overlay - Full Screen & Scrollable */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-40
          transition-transform duration-500 ease-in-out
          lg:hidden overflow-y-auto overscroll-contain
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          aria-hidden={!isMenuOpen}
        >
          {/* 
              Inner container:
              - pt-32: Provides padding top to clear the fixed header (logo+menu button).
              - min-h-full: Ensures it stretches to fill screen.
              - justify-start: Fixes clipping issue on small screens (flex-center clips top).
            */}
          <div className="min-h-full w-full flex flex-col justify-start items-center px-6 pt-32 pb-12">

            {/* Navigation Links - my-auto centers it vertically if there is space, but scrolls if not */}
            <nav className="w-full max-w-sm flex flex-col items-center space-y-1 my-auto">
              {/* Removed duplicate Logo to clean up UI as the header logo is visible through fixed header */}
              {/* Mobile Menu Logo */}


              <MobileLink to={SEO_DATA.home.path} onClick={closeMenu}>Inicio</MobileLink>
              <MobileLink to={SEO_DATA.about.path} onClick={closeMenu}>El Centro</MobileLink>

              {/* Mobile Dropdown Section */}
              <div className="w-full text-center py-4">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-400 block mb-4 border-b border-stone-100 pb-2">Tratamientos</span>
                <div className="flex flex-col gap-2">
                  <MobileLink to={SEO_DATA.faciales.path} onClick={closeMenu} className="text-base py-1">Rituales Faciales</MobileLink>
                  <MobileLink to={SEO_DATA.indiba.path} onClick={closeMenu} className="text-base py-1">Indiba</MobileLink>
                  <MobileLink to={SEO_DATA.corporales.path} onClick={closeMenu} className="text-base py-1">Corporales</MobileLink>
                  <MobileLink to={SEO_DATA.spa.path} onClick={closeMenu} className="text-base py-1">Bienestar y Relax</MobileLink>
                  <MobileLink to={SEO_DATA.depilacion.path} onClick={closeMenu} className="text-base py-1">Depilación</MobileLink>
                  <MobileLink to={SEO_DATA.estetica.path} onClick={closeMenu} className="text-base py-1">Estética General</MobileLink>
                </div>
              </div>
              <MobileLink to="/contacto" onClick={closeMenu} className="mt-6 border-t border-stone-100 pt-6 w-full">Contacto</MobileLink>
            </nav>
          </div>
          <div className="my-12 space-y-4 text-stone-500 font-light flex flex-col items-center shrink-0">
            <a href="https://www.google.com/maps/search/?api=1&query=Marina+Spa+Zafra" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm"><MapPin size={16} className="text-marina-gold" /> Zafra, Badajoz</a>
            <a href="tel:+34644799000" className="flex items-center gap-2 text-sm"><Phone size={16} className="text-marina-gold" /> 644 79 90 00</a>
          </div>
        </div>)}

      {/* Main Content - ID for Skip Link */}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Floating Buttons */}
      <WhatsAppFloatingButton isMenuOpen={isMenuOpen} />

      {/* Cookie Consent Banner - Visibility handled internally via Context */}
      <CookieBanner />

      {/* Premium Footer */}
      <footer className="bg-marina-dark text-stone-400 text-center pt-20 pb-8 relative overflow-hidden" aria-label="Pie de página">
        {/* Decorative Element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-marina-gold"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

            {/* Column 1: Brand */}
            <div className="space-y-6 flex flex-col items-center">
              {/* Footer Logo */}
              <img
                src={LogoImage}
                alt="Marina Spa"
                className="h-16 object-contain brightness-0 invert opacity-90"
              />
              <p className="text-sm leading-7 font-light text-stone-500 max-w-xs mt-2">
                Un santuario de belleza y bienestar en Zafra. Fusionamos técnica, tecnología y pasión para realzar tu mejor versión.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <nav aria-label="Enlaces rápidos">
              <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-8">TRATAMIENTOS</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><NavLink to={SEO_DATA.faciales.path} className="hover:text-marina-gold transition-colors">Rituales y programas faciales</NavLink></li>
                <li><NavLink to={SEO_DATA.indiba.path} className="hover:text-marina-gold transition-colors">Facial Indiba</NavLink></li>
                <li><NavLink to={SEO_DATA.corporales.path} className="hover:text-marina-gold transition-colors">Silueta Corporal</NavLink></li>
                <li><NavLink to={SEO_DATA.spa.path} className="hover:text-marina-gold transition-colors">Rituales Spa</NavLink></li>
              </ul>
            </nav>

            {/* Column 3: Contact */}
            <address className="not-italic">
              <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-8">Contacto</h4>
              <ul className="space-y-4 text-sm font-light">
                <li>
                  <a href="https://www.google.com/maps/search/?api=1&query=Marina+Spa+Zafra" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 hover:text-white transition-colors">
                    <MapPin size={16} className="text-marina-gold mt-1 shrink-0" aria-hidden="true" />
                    <span>C. Reyes Huertas, 8<br />06300 Zafra, Badajoz</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+34644799000" className="flex items-center justify-center gap-3 hover:text-white transition-colors">
                    <Phone size={16} className="text-marina-gold shrink-0" aria-hidden="true" />
                    <span>644 79 90 00</span>
                  </a>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Mail size={16} className="text-marina-gold shrink-0" aria-hidden="true" />
                  <a href="mailto:info@marinaspa.es" className="hover:text-white transition-colors">info@marinaspa.es</a>
                </li>
              </ul>
            </address>

            {/* Column 4: Newsletter/Social */}
            <div>
              <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-8">Síguenos</h4>
              <div className="flex justify-center gap-4 mb-8">
                <a href="https://www.instagram.com/marinaspazafra/?hl=es" target="_blank" rel="noreferrer" aria-label="Síguenos en Instagram" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-marina-gold hover:border-marina-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-marina-gold">
                  <Instagram size={18} aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/marinaspazafra/?locale=es_ES" target="_blank" rel="noreferrer" aria-label="Síguenos en Facebook" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-marina-gold hover:border-marina-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-marina-gold">
                  <Facebook size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600 uppercase tracking-wider">
            <p>© {new Date().getFullYear()} Marina Spa</p>
            <div className="flex gap-6 flex-wrap justify-center">
              <NavLink to="/aviso-legal" className="hover:text-marina-gold transition-colors">Aviso Legal</NavLink>
              <NavLink to="/politica-privacidad" className="hover:text-marina-gold transition-colors">Política de Privacidad</NavLink>
              <NavLink to="/politica-cookies" className="hover:text-marina-gold transition-colors">Política de Cookies</NavLink>
              <button onClick={resetConsent} className="hover:text-marina-gold transition-colors text-left uppercase tracking-wider">Configurar Cookies</button>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;