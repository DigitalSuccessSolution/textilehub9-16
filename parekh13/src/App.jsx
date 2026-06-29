import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import RetailManagement from './pages/RetailManagement';
import TradeEnquiry from './pages/TradeEnquiry';
import EQuotation from './pages/EQuotation';
import EAuction from './pages/EAuction';
import TradeCircular from './pages/TradeCircular';
import Blog from './pages/Blog';
import NoticeBoard from './pages/NoticeBoard';
import Career from './pages/Career';
import CustomerReview from './pages/CustomerReview';
import BusinessMediaGallery from './pages/BusinessMediaGallery';
import FAQ from './pages/FAQ';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Premium preloader timing
    const timer = setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 3700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="retail-management" element={<RetailManagement />} />
          <Route path="trade-enquiry" element={<TradeEnquiry />} />
          <Route path="e-quotation" element={<EQuotation />} />
          <Route path="e-auction" element={<EAuction />} />
          <Route path="trade-circular" element={<TradeCircular />} />
          <Route path="blog" element={<Blog />} />
          <Route path="notice-board" element={<NoticeBoard />} />
          <Route path="career" element={<Career />} />
          <Route path="reviews" element={<CustomerReview />} />
          <Route path="gallery" element={<BusinessMediaGallery />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
      {loading && <Preloader />}

      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl p-8 text-center"
              style={{ border: '2px solid #C5A059' }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-[#786B80] hover:text-[#2A083E] transition-colors"
              >
                <X size={20} />
              </button>

              {/* Logo / Badge */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#2A083E] border-2 border-[#C5A059] rounded-full text-white mb-6">
                <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#C5A059]" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 25 C44 25 42 33 42 39 C42 45 46 51 50 51 C54 51 58 45 58 39 C58 33 56 25 50 25 Z" fill="currentColor" fillOpacity="0.1" />
                  <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#2A083E] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Welcome to Mayura Royal
              </h3>
              <p className="text-[13.5px] leading-relaxed text-[#504257] mb-6 font-medium">
                Experience the epitome of Indian textile heritage. Discover our curated collections of premium silk sarees, designer suits, and elegant home furnishings.
              </p>

              <Link
                to="/products"
                onClick={() => setShowPopup(false)}
                className="block w-full py-3 text-xs font-bold uppercase tracking-wider text-white btn-primary rounded-xl shadow-md transition-all hover:opacity-95 text-center"
              >
                Explore Collection
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
