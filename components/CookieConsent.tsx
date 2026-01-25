import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Cookie, X, Check, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
type ConsentStatus = 'accepted' | 'rejected' | null;

interface CookieConsentContextType {
    consent: ConsentStatus;
    acceptCookies: () => void;
    rejectCookies: () => void;
    resetConsent: () => void;
    isBannerOpen: boolean;
    setBannerOpen: (isOpen: boolean) => void;
}

// --- Context ---
const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
    const context = useContext(CookieConsentContext);
    if (!context) {
        throw new Error('useCookieConsent must be used within a CookieConsentProvider');
    }
    return context;
};

// --- Provider ---
export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [consent, setConsent] = useState<ConsentStatus>(null);
    const [isBannerOpen, setBannerOpen] = useState(false);

    useEffect(() => {
        // Check localStorage on mount
        const savedConsent = localStorage.getItem('marina-spa-cookie-consent');
        if (savedConsent === 'accepted' || savedConsent === 'rejected') {
            setConsent(savedConsent);
        } else {
            setConsent(null);
            // Small delay to show banner for UX
            const timer = setTimeout(() => setBannerOpen(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        setConsent('accepted');
        localStorage.setItem('marina-spa-cookie-consent', 'accepted');
        setBannerOpen(false);
    };

    const rejectCookies = () => {
        setConsent('rejected');
        localStorage.setItem('marina-spa-cookie-consent', 'rejected');
        setBannerOpen(false);
    };

    const resetConsent = () => {
        setConsent(null);
        localStorage.removeItem('marina-spa-cookie-consent');
        setBannerOpen(true);
    };

    return (
        <CookieConsentContext.Provider value={{ consent, acceptCookies, rejectCookies, resetConsent, isBannerOpen, setBannerOpen }}>
            {children}
        </CookieConsentContext.Provider>
    );
};

// --- Banner Component ---
export const CookieBanner: React.FC = () => {
    const { isBannerOpen, acceptCookies, rejectCookies } = useCookieConsent();

    return (
        <AnimatePresence>
            {isBannerOpen && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-4 border-marina-gold shadow-[0_-10px_40px_rgba(0,0,0,0.15)]"
                    role="dialog"
                    aria-labelledby="cookie-title"
                    aria-describedby="cookie-desc"
                >
                    <div className="container mx-auto max-w-7xl p-6 md:p-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                            {/* Text Content */}
                            <div className="flex-1 text-center lg:text-left">
                                <h3 id="cookie-title" className="text-marina-dark font-serif text-xl mb-3 flex items-center justify-center lg:justify-start gap-2">
                                    <Cookie size={20} className="text-marina-gold" />
                                    Configuración de Privacidad
                                </h3>
                                <p id="cookie-desc" className="text-stone-600 font-light text-sm leading-relaxed max-w-3xl">
                                    En Marina Spa utilizamos cookies propias y de terceros para gestionar su visita, garantizar el funcionamiento del mapa interactivo y analizar nuestro tráfico.
                                    Respetamos su privacidad: usted decide qué datos comparte.
                                </p>
                            </div>

                            {/* Action Buttons - Equal Hierarchy */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">

                                <button
                                    onClick={rejectCookies}
                                    className="px-6 py-3 border border-stone-300 text-stone-600 text-xs font-bold uppercase tracking-widest hover:bg-stone-100 hover:text-marina-dark transition-colors rounded-sm flex items-center justify-center gap-2"
                                >
                                    <X size={14} /> Rechazar
                                </button>

                                <NavLink
                                    to="/politica-cookies"
                                    className="px-6 py-3 border border-stone-300 text-stone-600 text-xs font-bold uppercase tracking-widest hover:bg-stone-100 hover:text-marina-dark transition-colors rounded-sm flex items-center justify-center"
                                >
                                    Ver Política
                                </NavLink>

                                <button
                                    onClick={acceptCookies}
                                    className="px-8 py-3 bg-marina-dark text-white border border-marina-dark text-xs font-bold uppercase tracking-widest hover:bg-marina-gold hover:border-marina-gold hover:text-white transition-all shadow-md rounded-sm flex items-center justify-center gap-2 min-w-[140px]"
                                >
                                    <Check size={14} /> Aceptar
                                </button>

                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// --- Placeholder Component for blocked content ---
export const CookiePlaceholder: React.FC<{
    title?: string;
    message?: string;
    bgClass?: string;
}> = ({
    title = "Contenido bloqueado",
    message = "Este contenido (Google Maps) está deshabilitado porque no has aceptado las cookies de terceros.",
    bgClass = "bg-stone-200"
}) => {
        const { acceptCookies, consent } = useCookieConsent();

        // If consent is pending (null), simply show nothing or a simpler loader? 
        // Strategy: If rejected or null, show placeholder to encourage interaction.

        return (
            <div className={`w-full h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 ${bgClass} text-stone-600`}>
                <ShieldAlert size={48} className="text-stone-400 mb-4" />
                <h3 className="font-serif text-xl text-marina-dark mb-2">{title}</h3>
                <p className="text-sm font-light max-w-md mb-6">{message}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={acceptCookies}
                        className="bg-marina-gold text-white px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-marina-dark transition-colors shadow-sm"
                    >
                        Aceptar Cookies y Ver Mapa
                    </button>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Marina+Spa+Zafra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-stone-300 text-stone-600 px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-stone-50 transition-colors"
                    >
                        Abrir en Google Maps Externo
                    </a>
                </div>
            </div>
        );
    };