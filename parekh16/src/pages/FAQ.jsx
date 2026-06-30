import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What types of fabrics do you offer at Royal Weaves?",
      answer: "We offer an extensive range of premium textiles, including pure Banarasi silk sarees, designer cotton and georgette kurtis, high-quality suiting and shirting fabrics, comfortable hosiery products, and elegant home furnishing upholstery."
    },
    {
      question: "Do you support bulk B2B orders and wholesale inquiries?",
      answer: "Yes, we specialize in bulk B2B trading. You can submit your requirements via our Trade Enquiry page or request a customized price quote using our e-Quotation portal. Our team will review your business specifications and get back to you with competitive quotes."
    },
    {
      question: "How does the e-Auction portal work?",
      answer: "Our digital e-Auction system allows certified traders and businesses to participate in surplus inventory liquidation and stock bids. Interested buyers must register by uploading their GST Certificate via our e-Auction page to gain access to active bidding catalogs."
    },
    {
      question: "Can I customize the sizing and designs for bridal or corporate wear?",
      answer: "Absolutely. We offer bespoke customization options for both individual wedding wear (such as bridal lehengas and sherwanis) and corporate custom orders. Please connect with our team through the Contact Us page or visit one of our flagship boutiques."
    },
    {
      question: "What is your standard delivery timeline for trade orders?",
      answer: "Domestic orders typically take between 5 to 7 business days for shipping and delivery, depending on the volume and destination state. For custom bulk weave fabric manufacturing, timelines vary and will be specified directly on your trade circular contract."
    },
    {
      question: "Where are your retail management outlets located?",
      answer: "We operate multiple flagship retail outlets across India, including our major showrooms and distribution depots in Mumbai, Surat, and Delhi. You can view our leadership team and operations under our Retail Management section."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-3xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Frequently Asked Questions</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Quick Answers to Your Inquiries</p>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-playfair font-semibold text-gray-900 hover:text-rosegold-500 transition-colors focus:outline-none"
              >
                <div className="flex items-center gap-3.5 pr-4">
                  <HelpCircle size={18} className="text-rosegold-500 shrink-0" />
                  <span className="text-sm md:text-base font-medium">{faq.question}</span>
                </div>
                <div>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-rosegold-500 shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400 shrink-0" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 border-t border-gray-100 text-gray-650 text-xs md:text-sm leading-relaxed bg-pearl-50">
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
}
