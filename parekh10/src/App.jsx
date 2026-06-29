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
      
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
        
        {!loading && showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
              onClick={() => setShowPopup(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="relative bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl flex flex-col items-center text-center"
              style={{ border: '1.5px solid #E8E3D9' }}
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2C362B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              
              <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ background: 'rgba(95,111,94,0.1)', border: '2px solid rgba(95,111,94,0.25)' }}>
                <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#5F6F5E]" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="84" height="84" rx="6" stroke="currentColor" strokeWidth="3" />
                  <path d="M62 35 C62 30, 58 26, 50 26 C41 26, 38 32, 38 38 C38 48, 62 46, 62 57 C62 67, 52 74, 42 74 C36 74, 34 70, 34 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#2C362B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Welcome to Sandhya
              </h2>
              <p className="text-[14.5px] text-[#5D645D] leading-relaxed font-medium mb-8">
                Discover India's finest collection of premium sarees, suiting, shirting, and luxury home furnishing.
              </p>
              
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full py-3.5 rounded-xl text-[12px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:opacity-95 hover:shadow-md bg-[#5F6F5E]"
              >
                Explore Collections
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
