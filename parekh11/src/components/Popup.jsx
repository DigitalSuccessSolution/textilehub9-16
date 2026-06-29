import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup immediately after preloader finishes
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleExplore = () => {
    setIsOpen(false);
    navigate('/products');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60]"
            style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-[400px] bg-[#FDFBF7] rounded-3xl shadow-2xl overflow-hidden"
            style={{ border: '2px solid #EAE3D9' }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-black/20 hover:bg-black/40 backdrop-blur-md transition-colors z-20 border border-white/20"
            >
              <X size={15} className="text-white" />
            </button>
            
            <div className="relative h-56 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/32151733/pexels-photo-32151733.png" 
                alt="Premium Collection" 
                className="absolute inset-0 w-full h-full object-cover filter saturate-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left">
                 <p className="text-[#F5EFE6]/90 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-1.5 drop-shadow-md">New Arrivals</p>
                 <h3 className="text-white text-3xl font-bold drop-shadow-md leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                   Festive<br/>Elegance
                 </h3>
              </div>
            </div>

            <div className="px-7 pt-7 pb-8 text-center">
              <p className="text-[13px] text-[#5D645D] mb-7 leading-relaxed font-medium">
                Experience the finest collection of premium textiles, ethnic wear, and sustainable fabrics meticulously crafted to perfection.
              </p>
              
              <button 
                onClick={handleExplore}
                className="w-full py-3.5 rounded-xl font-bold tracking-widest uppercase text-white text-[11px] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg bg-[#4E6C50] shadow-md shadow-[#4E6C50]/20 cursor-pointer"
              >
                Explore Collection
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
