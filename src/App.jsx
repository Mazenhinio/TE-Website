import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Immediate Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

// Lazy Loaded Pages
const FoodBeverage = React.lazy(() => import('./pages/FoodBeverage'));
const WellnessSpa = React.lazy(() => import('./pages/WellnessSpa'));
const Weddings = React.lazy(() => import('./pages/Weddings'));
const KidsClub = React.lazy(() => import('./pages/KidsClub'));
const RoomsSuites = React.lazy(() => import('./pages/RoomsSuites'));
const LoyaltyRetention = React.lazy(() => import('./pages/LoyaltyRetention'));
const ReviewsReputation = React.lazy(() => import('./pages/ReviewsReputation'));

// Simple loading fallback
const PageLoader = () => (
  <div className="w-full min-h-screen flex items-center justify-center bg-black">
    <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-electric animate-spin"></div>
  </div>
);

function App() {
  const location = useLocation();

  // Scroll to top on every route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-text-on-black">
      <Navbar />
      <main className="flex-grow">
        {/* We removed pt-20 here since pages have their own padding in heroes */}
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              {/* Core Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />

              {/* Department Pages */}
              <Route path="/food-beverage" element={<FoodBeverage />} />
              <Route path="/wellness-spa" element={<WellnessSpa />} />
              <Route path="/weddings-events" element={<Weddings />} />
              <Route path="/kids-club" element={<KidsClub />} />
              <Route path="/rooms-suites" element={<RoomsSuites />} />
              <Route path="/loyalty-retention" element={<LoyaltyRetention />} />
              <Route path="/reviews-reputation" element={<ReviewsReputation />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
