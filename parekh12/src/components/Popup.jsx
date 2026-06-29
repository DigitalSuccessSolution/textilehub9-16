import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup shortly after component mounts (which is after preloader)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
        style={{ background: 'rgba(10, 10, 12, 0.85)', backdropFilter: 'blur(4px)' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
          className="relative w-full max-w-md bg-[#242530] p-8 text-center shadow-2xl overflow-hidden"
          style={{ border: '1.5px solid #343545', borderTop: '4px solid #C89B5F' }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#C89B5F] transition-colors"
          >
            <X size={20} />
          </button>

          {/* Icon/Logo area */}
          <div className="mx-auto w-14 h-14 flex items-center justify-center bg-[#C89B5F]/10 border border-[#C89B5F]/30 mb-5 text-[#C89B5F] rounded-full">
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#C89B5F]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <rect x="5" y="5" width="90" height="90" stroke="currentColor" strokeWidth="2" />
              <path d="M 50 22 L 50 78 M 22 50 L 78 50" strokeWidth="3" />
              <path d="M 50 22 L 78 22" strokeWidth="3" />
              <path d="M 78 50 L 78 78" strokeWidth="3" />
              <path d="M 50 78 L 22 78" strokeWidth="3" />
              <path d="M 22 50 L 22 22" strokeWidth="3" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-3 text-[#F3F4F6]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Swastik Textile Mall
          </h2>
          
          <p className="text-[13px] text-[#9CA3AF] leading-relaxed mb-6 font-medium">
            Welcome to India's premier B2B textile destination. Explore our exclusive collections, transparent auctions, and tailored manufacturing capabilities.
          </p>

          <button
            onClick={() => setIsVisible(false)}
            className="w-full py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:opacity-95 bg-[#C89B5F]"
          >
            Explore Now
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Popup;
