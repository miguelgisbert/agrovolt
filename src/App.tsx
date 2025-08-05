import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ConceptSection from "./components/ConceptSection";
import TechnologySection from "./components/TechnologySection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ProspectusPage from "./pages/ProspectusPage";
import { initGA, usePageTracking } from "./utils/analytics";

function AppContent() {
  // Hook para trackear page views automàticament
  usePageTracking();

  return (
    <div className="min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ConceptSection />
              <TechnologySection />
              <CTASection />
              <Footer />
            </>
          }
        />
        <Route path="/prospecto" element={<ProspectusPage />} />
      </Routes>
    </div>
  );
}

function App() {
  
   const [gaReady, setGaReady] = useState(false);

  useEffect(() => {
    initGA();
    setGaReady(true);
  }, []);

  return (
    <Router>
      {gaReady && <AppContent />}
    </Router>
  );
}

export default App;
