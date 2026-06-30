import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Urban Textile Hub's fabrics unique?",
      answer: "We source the finest long-staple cotton, mulberry silk, and organic fiber blends. Our fabrics are crafted in partner mills under strict quality audits, ensuring premium tensile strength, exquisite texture, and long-lasting colors."
    },
    {
      question: "Do you support custom B2B orders and manufacturing?",
      answer: "Yes, absolutely. We cater to wholesale buyers, fashion designers, and corporate entities. You can submit custom GSM, blend ratios, and design specifications through our e-Quotation page or contact our team directly."
    },
    {
      question: "How does the e-Auction system work?",
      answer: "Our e-Auction system allows certified traders and buyers to bid on bulk fabric lots, surplus stock, and exclusive artisanal collections. To participate, simply register your business and upload your GST certificate on our e-Auction page."
    },
    {
      question: "What is your return or exchange policy on bulk orders?",
      answer: "Since bulk orders are customized to specific buyer requirements, returns are only accepted in cases of verifiable manufacturing defects or quality deviations from the approved pre-production sample. All claims must be raised within 7 business days of delivery."
    },
    {
      question: "Are your production processes environmentally sustainable?",
      answer: "Sustainability is one of our core pillars. We use eco-friendly AZO-free dyes, implement zero-liquid-discharge (ZLD) water recycling systems in partner dyeing mills, and offer a dedicated line of certified organic cotton and linen fabrics."
    },
    {
      question: "Do you ship products internationally?",
      answer: "Yes, Urban Textile Hub has a dedicated export division. We export our premium textiles, sarees, and home furnishings to over 25 countries, adhering to all international quality and shipping guidelines."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-3xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">FAQ</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Frequently Asked Questions</p>
        </div>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div 
              key={index} 
              className="bg-white border border-gray-200 hover:border-rosegold-500 transition-colors duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-3.5 pr-4">
                  <HelpCircle size={18} className="text-rosegold-500 shrink-0" />
                  <span className="font-playfair text-base font-semibold text-gray-900 tracking-wide">
                    {faq.question}
                  </span>
                </div>
                <div className="shrink-0 text-gray-400 hover:text-rosegold-500 transition-colors">
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
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-sm text-gray-650 leading-relaxed border-t border-gray-100 bg-pearl-50/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
