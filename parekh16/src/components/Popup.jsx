import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShoppingBag, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Popup({ isOpen, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Save scroll position and lock body — works on all mobile browsers
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
      // Restore body and scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    };
  }, [isOpen]);

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[150] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[151] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="pointer-events-auto bg-[#132C20] border border-[#C3A87E]/30 text-white max-w-lg md:max-w-2xl w-full rounded-3xl shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12"
            >
              {/* Left Column (Image Block) */}
              <div className="md:col-span-5 relative h-48 md:h-auto overflow-hidden bg-slate-900 min-h-[180px]">
                <img
                  src="https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg"
                  alt="Premium Royal Silk Apparel"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#132C20]/50" />
              </div>

              {/* Right Column (Content Area) */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center relative text-left">
                {/* Background Accent Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,168,126,0.06),transparent_70%)] pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/50 hover:text-white hover:rotate-90 transition-all duration-300 p-1.5 cursor-pointer z-10"
                  aria-label="Close Popup"
                >
                  <X size={18} />
                </button>

                {/* Sparkles Icon & Established subtitle */}
                <div className="flex items-center gap-2 mb-2 text-[#C3A87E]">
                  <Sparkles size={16} />
                  <span className="text-[8px] tracking-[0.25em] uppercase text-[#eedec9]/70 font-bold font-outfit">
                    Established 2026
                  </span>
                </div>

                {/* Header */}
                <h2 className="font-playfair text-xl sm:text-2xl font-bold tracking-wide text-[#C3A87E] uppercase mb-3 border-0 pb-0">
                  Royal Weaves
                </h2>

                <p className="text-[#eedec9]/85 text-xs sm:text-sm leading-relaxed mb-6 font-outfit">
                  Step into a world of pure heritage weaves, bespoke luxury suits, bridal lehengas, and premium trade textiles. Explore our collections and bulk order services.
                </p>

                {/* Dual Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleNavigate("/products")}
                    className="flex-1 bg-[#C3A87E] text-[#132C20] hover:bg-white hover:text-[#132C20] py-3 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer rounded-xl flex items-center justify-center gap-2 border border-[#C3A87E]"
                  >
                    <ShoppingBag size={12} /> Explore Catalogue
                  </button>
                  <button
                    onClick={() => handleNavigate("/trade-enquiry")}
                    className="flex-1 bg-transparent hover:bg-white/5 text-white border border-[#C3A87E]/40 hover:border-white py-3 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-xl flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={12} /> Trade Enquiry
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
