import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import {
  FacialPage,
  IndibaPage,
  BodyPage,
  SpaPage,
  GeneralPage,
  DepilationPage
} from './pages/ServicePages';
import { LegalNotice, PrivacyPolicy, CookiesPolicy } from './pages/Legal';
import { SEO_DATA } from './constants';
import { CookieConsentProvider } from './components/CookieConsent';

// ScrollToTop component to ensure page starts at top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CookieConsentProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={SEO_DATA.about.path} element={<About />} />
            <Route path={SEO_DATA.faciales.path} element={<FacialPage />} />
            <Route path={SEO_DATA.indiba.path} element={<IndibaPage />} />
            <Route path={SEO_DATA.corporales.path} element={<BodyPage />} />
            <Route path={SEO_DATA.spa.path} element={<SpaPage />} />
            <Route path={SEO_DATA.depilacion.path} element={<DepilationPage />} />
            <Route path={SEO_DATA.estetica.path} element={<GeneralPage />} />
            <Route path="/contacto" element={<Contact />} />

            {/* Legal Pages */}
            <Route path="/aviso-legal" element={<LegalNotice />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
            <Route path="/politica-cookies" element={<CookiesPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookieConsentProvider >

  );
};

export default App;