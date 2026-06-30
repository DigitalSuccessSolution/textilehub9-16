import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export default function Popup({ isOpen, onClose }) {
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
              className="pointer-events-auto bg-[#132C20] border-2 border-[#C3A87E]/30 text-white max-w-md w-full p-8 rounded-2xl shadow-2xl relative text-center overflow-hidden"
            >
              {/* Background Accent Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,168,126,0.1),transparent_70%)] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white hover:rotate-90 transition-all duration-300 p-1.5 cursor-pointer"
                aria-label="Close Popup"
              >
                <X size={20} />
              </button>

              {/* Icon */}
              <div className="w-14 h-14 bg-[#C3A87E]/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-[#C3A87E]/20">
                <Sparkles className="text-[#C3A87E]" size={24} />
              </div>

              {/* Content */}
              <h2 className="font-playfair text-2xl font-bold tracking-wider text-[#C3A87E] uppercase mb-3">
                Welcome to Royal Weaves
              </h2>
              
              <div className="flex items-center justify-center gap-1.5 mb-4">
                <div className="w-6 h-[1px] bg-[#C3A87E]/30"></div>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#eedec9]/70 font-semibold">
                  ESTABLISHED 2026
                </span>
                <div className="w-6 h-[1px] bg-[#C3A87E]/30"></div>
              </div>

              <p className="text-[#eedec9]/90 text-sm leading-relaxed mb-6 font-outfit">
                Step into a world of pure heritage weaves, bespoke luxury suits, sarees, and premium textiles. Explore our new collections and corporate offerings.
              </p>

              {/* Action Button */}
              <button
                onClick={onClose}
                className="bg-[#C3A87E] text-[#132C20] hover:bg-white hover:text-[#132C20] px-8 py-3 w-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer rounded-lg"
              >
                Enter Textile Mall
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
