import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';

import HomePage from "./pages/HomePage";
import PlaceholderPage, { ContactPage } from './pages/PlaceholderPage';


import AboutSection from './sections/AboutSection';
import TeamSection from './sections/TeamSection';
import GallerySection from './sections/GallerySection';

const App = () => {
  return (
    <Router>
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

            {/* Placeholder Pages */}
            <Route path="/hunting-tour" element={<PlaceholderPage title="Ov Turları" />} />
            <Route path="/international/turkey" element={<PlaceholderPage title="Türkiyə Turları" />} />
            <Route path="/international/europe" element={<PlaceholderPage title="Avropa Turları" />} />
            <Route path="/international/uae" element={<PlaceholderPage title="BƏƏ Turları" />} />
            <Route path="/international/asia" element={<PlaceholderPage title="Asiya Turları" />} />
            <Route path="/services/hotels" element={<PlaceholderPage title="Hotel Booking" />} />
            <Route path="/services/villas" element={<PlaceholderPage title="Villa and Cottages" />} />
            <Route path="/services/guide" element={<PlaceholderPage title="Guide Service" />} />
            <Route path="/services/transport" element={<PlaceholderPage title="Transport" />} />
            <Route path="/tours/baku" element={<PlaceholderPage title="Bakı Turları" />} />
            <Route path="/tours/quba" element={<PlaceholderPage title="Quba Turları" />} />
            <Route path="/tours/qabala" element={<PlaceholderPage title="Qəbələ Turları" />} />
            <Route path="/tours/sheki" element={<PlaceholderPage title="Şəki Turları" />} />
            <Route path="/tours/qobustan" element={<PlaceholderPage title="Qobustan Turu" />} />
            <Route path="/tours/yanardag" element={<PlaceholderPage title="Yanardağ Turu" />} />
            <Route path="/tours/ateshgah" element={<PlaceholderPage title="Atəşgah Turu" />} />

            {/* Fallback Route */}
            <Route path="*" element={<PlaceholderPage title="404 - Səhifə Tapılmadı" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
