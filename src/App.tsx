import React from 'react';
import Hero from './components/Hero';
import ConceptSection from './components/ConceptSection';
import TechnologySection from './components/TechnologySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ConceptSection />
      <TechnologySection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;