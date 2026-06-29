import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer custom tailoring and bespoke styling services?",
      answer: "Yes, Heritage Garments specializes in custom tailoring and bespoke styling for bridal wear, luxury sarees, and premium menswear. You can book an appointment with our design consultants to select custom fabrics, embroideries, and fits."
    },
    {
      question: "What is the standard turnaround time for bespoke orders?",
      answer: "Standard bridal and bespoke orders typically take 3 to 6 weeks depending on the complexity of handloom weaving and embroidery work. Ready-to-wear modifications usually take 3 to 5 business days."
    },
    {
      question: "Can I request wholesale pricing or bulk orders through the website?",
      answer: "Absolutely. We support wholesale partners through our e-Quotation system. Please submit a request on our e-Quotation page specifying your business details and product particulars to receive a customized pricing structure."
    },
    {
      question: "How do your digital e-Auctions operate?",
      answer: "We periodically list premium fabric lots, heritage sarees, and bulk surplus items on our e-Auction portal. Registered business participants can place bids transparently within the specified timeframe. To participate, you must register with a valid GST certificate."
    },
    {
      question: "Where do you source your silk and handloom fabrics from?",
      answer: "We source our mulberry silks directly from Kanchipuram and Banaras weavers, and our organic cottons from certified handloom cooperatives across India, supporting rural weavers and authentic craftsmanship."
    },
    {
      question: "Do you ship your products internationally?",
      answer: "Yes, we ship globally. Shipping costs and delivery timelines vary by country. International orders can be arranged by placing a direct trade inquiry or getting in touch with our support desk."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-16 -mt-8 max-w-4xl mx-auto px-4">
      <div className="text-center pt-0 pb-2 mb-8">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 bg-rosegold-500/10 rounded-full flex items-center justify-center">
            <HelpCircle className="text-rosegold-500" size={24} />
          </div>
        </div>
        <h1>Frequently Asked Questions</h1>
        <p className="text-gray-650 text-xs md:text-sm uppercase tracking-wider mt-2 font-medium">
          Common Queries & Answers
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-gray-200 hover:border-rosegold-500 transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-playfair font-bold text-gray-900 text-base md:text-lg">
                  {faq.question}
                </span>
                <span className="text-rosegold-500 shrink-0 ml-4">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
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
                    <div className="px-6 pb-6 pt-1 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
