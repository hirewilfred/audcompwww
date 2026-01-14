
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIConfigurator from './pages/AIConfigurator';
import Partners from './pages/Partners';
import Cybersecurity from './pages/Cybersecurity';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-assessment" element={<AIConfigurator />} />
          <Route path="/managed-it" element={<Partners />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
