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
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Faq from './pages/Faq';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Premium preloader timing
    const timer = setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 3000);
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
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
      {loading && <Preloader />}
      
      {/* Welcome Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[4px]"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full relative p-8 text-center border border-[#EADCD2]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(90deg, #A24E51, #C37E80)' }} />
              
              {/* Close Button */}
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#A24E51] transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              {/* Logo icon */}
              <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-5 bg-[#F8ECE9] border border-[#A24E51]/20">
                <svg viewBox="0 0 100 100" className="w-7 h-7 text-[#A24E51]" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M50 20 C60 40, 75 50, 80 50 C75 50, 60 60, 50 80 C40 60, 25 50, 20 50 C25 50, 40 40, 50 20 Z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[#3C3430] mb-3" style={{ fontFamily: "'Marcellus', serif" }}>
                Welcome to Vastramall
              </h3>

              <p className="text-[13.5px] leading-relaxed text-[#554D48] font-medium mb-6">
                Discover India's most trusted premium B2B textile network. Explore our latest collections, participate in live digital e-Auctions, and request instant bulk e-Quotations.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-3.5 rounded-full font-bold uppercase tracking-wider text-xs text-white btn-primary shadow-md cursor-pointer"
              >
                Start Exploring
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
