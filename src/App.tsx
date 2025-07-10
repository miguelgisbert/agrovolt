import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ConceptSection from './components/ConceptSection';
import TechnologySection from './components/TechnologySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ProspectusPage from './pages/ProspectusPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ConceptSection />
              <TechnologySection />
              <CTASection />
              <Footer />
            </>
          } />
          <Route path="/agrovolt/prospecto" element={<ProspectusPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;