import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import './styles/animations.css';

import HomePage from "./pages/HomePage";
import PlaceholderPage, { ContactPage } from './pages/PlaceholderPage';
import ScrollToTop from './components/ScrollToTop';

import AboutSection from './sections/AboutSection';
import TeamSection from './sections/TeamSection';
import GallerySection from './sections/GallerySection';
import HotelsPage from './pages/services/HotelsPage';
import VillaAndCottages from './pages/services/VillaAndCottages';
import GuideServices from './pages/services/GuideServices';
import TransportServices from './pages/services/TransportServices'
import HuntingTour from './pages/services/HuntingTour'
import TurkeyTours from './pages/internationalTours/TurkeyTours'
import EuropeTours from './pages/internationalTours/EuropeTours'
import AsiaTours from './pages/internationalTours/AsiaTours'
import OldBakuTour from './pages/domesticTours/baku/OldBakuTour';
import ModernBakuTour from './pages/domesticTours/baku/ModernBakuTour';
import BakuGastronomyTour from './pages/domesticTours/baku/BakuGastronomyTour';
import AbsheronTour from './pages/domesticTours/bakuSurroundings/AbsheronTour'; 
import GobustanTour from './pages/domesticTours/bakuSurroundings/GobustanTour';
import CaspianCastlesTour from './pages/domesticTours/bakuSurroundings/CaspianCastlesTour';
import QubaTours from './pages/domesticTours/regions/QubaTours';
import QabalaTours from './pages/domesticTours/regions/QabalaTours';
import ShekiTours from './pages/domesticTours/regions/ShekiTours';


const App = () => {
  return (
    <Router>
       <ScrollToTop />
      <GlobalStyles />
      <div className="w-full overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<div className="pt-24"><AboutSection /></div>} />
            <Route path="/team" element={<div className="pt-24"><TeamSection /></div>} />
            <Route path="/gallery" element={<div className="pt-24"><GallerySection /></div>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/villas" element={<VillaAndCottages />} /> 
            <Route path="/services/hotels" element={<HotelsPage />} />
            <Route path="/services/guides" element={<GuideServices />} />
            <Route path="/services/transport" element={<TransportServices />} />
            <Route path="/services/huntingtour" element={<HuntingTour />} />
            <Route path="/international/turkey" element={<TurkeyTours />} />
            <Route path="/international/europe" element={<EuropeTours />} />
            <Route path="/international/asia" element={<AsiaTours />} />
            <Route path="/tours/domestic/baku/icherisheher-qiz-qalasi" element={<OldBakuTour />} />
            <Route path="/tours/domestic/baku/modern-baku-architecture" element={<ModernBakuTour />} /> 
            <Route path="/tours/domestic/baku/baku-gastronomy" element={<BakuGastronomyTour />} />
            <Route path="/tours/domestic/baku-surroundings/absheron-peninsula" element={<AbsheronTour />} /> 
            <Route path="/tours/domestic/baku-surroundings/gobustan-mud-volcanoes" element={<GobustanTour />} />
            <Route path="/tours/domestic/baku-surroundings/caspian-coast-castles" element={<CaspianCastlesTour />} />
            <Route path="/tours/quba" element={<QubaTours />} /> 
            <Route path="/tours/qabala" element={<QabalaTours />} />
            <Route path="/tours/sheki" element={<ShekiTours />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
