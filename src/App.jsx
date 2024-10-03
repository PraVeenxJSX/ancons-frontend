import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Register from './components/Register'; // Assuming you have a Register component
import "./App.css";
import BannerImage from './components/Bannerimg';
import ApplyPage from './components/ApplyPage';
import Map from './components/Map';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import Privacy Policy component
import TermsConditions from './components/TermsConditions'; // Import Terms and Conditions component

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <section id="hero" className="fade-in"><HeroSection /></section>
            <section id="banner" className="fade-in"><BannerImage /></section>
            <section id="services" className="fade-in"><Services /></section>
            <Map />
            <section id="about" className="fade-in"><About /></section>
            <section id="contact" className="fade-in"><Contact /></section>
          </>
        } />
        
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* New route for Privacy Policy */}
        <Route path="/terms-conditions" element={<TermsConditions />} /> {/* New route for Terms and Conditions */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
