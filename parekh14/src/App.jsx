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
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Premium preloader timing
    const timer = setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopup]);

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

          {showPopup && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowPopup(false)} />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-[#fcfbf9] border border-rosegold-500 max-w-md w-full shadow-2xl relative z-10 rounded-2xl overflow-hidden"
              >
                {/* Close/Cross Button */}
                <button 
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 text-white hover:text-rosegold-400 transition-colors z-20 bg-black/40 hover:bg-black/60 p-1.5 rounded-full"
                >
                  <X size={16} />
                </button>

                {/* Banner Image */}
                <div className="h-44 w-full relative">
                  <img 
                    src="https://images.pexels.com/photos/29210804/pexels-photo-29210804.jpeg" 
                    alt="Heritage Threads" 
                    className="w-full h-full object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf9] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 pt-4 text-center">
                  <div className="w-12 h-12 border-2 border-rosegold-500 flex items-center justify-center font-playfair font-bold text-xl text-rosegold-500 mx-auto mb-3 bg-[#fcfbf9] relative -mt-10 shadow-md rounded-lg">
                    H
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-1 uppercase tracking-wide">
                    Heritage Garments
                  </h3>
                  <p className="text-[10px] text-rosegold-500 font-bold uppercase tracking-widest mb-4">
                    Timeless Threads & Royal Elegance
                  </p>
                  <p className="text-gray-655 text-sm leading-relaxed mb-6 font-outfit">
                    Step into our world of luxury, handloom heritage, and bespoke tailoring crafted to perfection for your moments of celebration.
                  </p>
                  <button 
                    onClick={() => setShowPopup(false)}
                    className="bg-rosegold-500 hover:bg-rosegold-400 text-white px-8 py-3.5 text-xs uppercase font-bold tracking-widest transition-colors shadow-md w-full rounded-lg"
                  >
                    Explore Collection
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </>
      )}
    </Router>
  );
}

export default App;
