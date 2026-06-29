import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { X, Sparkles } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Premium preloader timing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 600);
      return () => clearTimeout(popupTimer);
    }
  }, [loading]);

  return (
    <Router>
      <ScrollToTop />
      {loading ? (
        <Preloader />
      ) : (
        <>
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

          {/* Welcome Modal Popup */}
          <AnimatePresence>
            {showPopup && (
              <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                {/* Backdrop overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowPopup(false)}
                  className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
                />

                {/* Modal box */}
                <motion.div
                  initial={{ scale: 0.9, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.9, y: 20, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="bg-white max-w-md w-full p-8 border border-gray-200 shadow-2xl relative text-center z-10 flex flex-col items-center"
                >
                  {/* Close icon */}
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-rosegold-500 transition-colors p-1"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>

                  {/* Sparkles icon header */}
                  <div className="w-12 h-12 bg-rosegold-500/10 flex items-center justify-center mb-5 rounded-full">
                    <Sparkles size={20} className="text-rosegold-500" />
                  </div>

                  {/* Brand name */}
                  <h3 className="font-playfair text-xl tracking-wider text-gray-900 font-bold leading-none mb-1.5 uppercase">
                    URBAN TEXTILE HUB
                  </h3>
                  <span className="block text-[9px] tracking-widest uppercase text-rosegold-500 font-semibold mb-4">
                    Tradition & Trade Excellence
                  </span>

                  {/* Divider line */}
                  <div className="w-12 h-0.5 bg-rosegold-500/30 mb-5" />

                  {/* Content body */}
                  <p className="text-gray-650 text-xs md:text-sm font-outfit leading-relaxed mb-6">
                    Welcome to India's premier B2B and retail textile marketplace. Explore our exquisite collection of handloom sarees, custom fabrics, and sustainable clothing today.
                  </p>

                  {/* Close button */}
                  <button
                    onClick={() => setShowPopup(false)}
                    className="bg-rosegold-500 hover:bg-rosegold-400 text-white w-full py-3 text-xs font-semibold uppercase tracking-widest transition-colors shadow-md"
                  >
                    Explore Collection
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>
      )}
    </Router>
  );
}

export default App;
