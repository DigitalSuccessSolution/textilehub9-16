import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What types of textiles do you offer?',
    answer: 'We offer a wide range of premium textiles including Sarees, Kurtis, Leggings, Dress Suits, Shirting, Suiting, and Home Upholstery materials.',
  },
  {
    question: 'Do you accept bulk or wholesale orders?',
    answer: 'Yes, we specialize in bulk and wholesale orders for businesses, retailers, and boutique owners. Please contact our Trade Enquiry section for more details.',
  },
  {
    question: 'How can I place an e-Quotation or e-Auction request?',
    answer: 'You can easily place requests through our dedicated e-Quotation and e-Auction pages by filling out the required details in the form provided on those pages.',
  },
  {
    question: 'What is your return and exchange policy?',
    answer: 'We have a hassle-free 7-day return and exchange policy for unused items in their original packaging. Custom stitched or altered items are non-returnable.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we provide international shipping to select countries. Shipping costs and delivery times vary based on the destination and order volume.',
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order is dispatched, you will receive a tracking link via email and SMS to monitor the real-time status of your delivery.',
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pb-20" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FDFBF7' }}>
      {/* Hero Banner */}
      <div className="relative h-44 overflow-hidden flex items-center justify-center text-center bg-[#FDFBF7] border-b border-[#EAE3D9]/60">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-sm font-bold text-[#8A6F4E] tracking-widest uppercase">We are here to help</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#EAE3D9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg text-[#2C362B] pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#8A6F4E] shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-[#7E857E] shrink-0" size={24} />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-[#5D645D] leading-relaxed border-t border-[#EAE3D9]/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
