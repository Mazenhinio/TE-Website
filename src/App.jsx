import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Hospitality from './pages/Hospitality';
import CaseStudies from './pages/CaseStudies';
import Integrations from './pages/Integrations';
import About from './pages/About';
import Contact from './pages/Contact';
import Security from './pages/Security';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-text-on-black">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/hospitality" element={<Hospitality />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
