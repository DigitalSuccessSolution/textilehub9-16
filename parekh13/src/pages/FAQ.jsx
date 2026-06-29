import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What types of apparel collections do you offer?",
    answer: "Mayura Royal specializes in premium sarees (including Banarasi, Katan, and Silk), designer kurtis, elegant dress suits, suiting and shirting fabrics, as well as formal and ethnic wear for men, women, and children."
  },
  {
    question: "Do you provide custom tailoring or size customization?",
    answer: "Yes, we offer premium stitching and customization services for our designer kurtis, dress suits, and ethnic wear collections. You can discuss your measurements with our instore designers or through our contact page."
  },
  {
    question: "How long does shipping and delivery take?",
    answer: "We offer Pan-India delivery. Ready-to-ship products are dispatched within 24-48 hours and usually reach you within 3-7 business days. Custom tailored orders may take 10-15 business days depending on design complexity."
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We maintain an easy return policy. If you receive a damaged, defective, or incorrect product, you can initiate a return or exchange within 7 days of delivery, provided the tags are intact and the product is unused."
  },
  {
    question: "Can we view products physically before buying?",
    answer: "Absolutely! You are welcome to visit our retail showrooms to explore the complete collections of home upholstery, furnishings, and fabrics in person."
  },
  {
    question: "How can I request an e-Quotation for bulk orders?",
    answer: "You can navigate to our 'e-Quotation' page, fill in your business details along with the products of interest, and our sales team will respond with a customized wholesale quote within 24 hours."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-20 bg-[#FAF6F0]" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Hero Banner */}
      <div className="relative h-44 overflow-hidden flex items-center justify-center text-center border-b border-[#EADBC8]/60">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Frequently Asked Questions
          </h1>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-white border border-[#EADBC8] text-[#2A083E]">
            <HelpCircle size={14} className="shrink-0 text-[#C5A059]" />
            <span className="font-extrabold text-xs">Help & Support Center</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-[#EADBC8]"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left gap-4 hover:bg-[#FAF6F0]/30 transition-colors"
                >
                  <span className="font-extrabold text-base sm:text-lg text-[#2A083E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.question}
                  </span>
                  <div className="p-1 rounded-full bg-[#FAF6F0] border border-[#EADBC8] text-[#C5A059]">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-[#504257] border-t border-[#FAF6F0] pt-4 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
