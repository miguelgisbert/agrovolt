import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ConceptSection from "./components/ConceptSection";
import TechnologySection from "./components/TechnologySection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function AppContent() {

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
      </Routes>
    </div>
  );
}

function App() {
  
    return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
