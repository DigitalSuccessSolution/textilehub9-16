import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What types of textile products do you manufacture?",
    answer: "We manufacture a wide range of premium textile products including Sarees, Dress Suits, Kurtis, Shirting, Suiting, Leggings, Bedsheets, and Home Furnishing items."
  },
  {
    question: "Do you supply products in wholesale to retailers?",
    answer: "Yes, Swastik Textile Mall specializes in B2B supply. We have a robust retail management ecosystem and supply to over 50,000 retail partners across India."
  },
  {
    question: "How can I participate in your e-Auctions?",
    answer: "You can participate in our e-Auctions by registering through our e-Auction page. You will need to provide your business details and upload your GST certificate for verification."
  },
  {
    question: "Can I request a custom quotation for bulk orders?",
    answer: "Absolutely. Our e-Quotation page allows you to submit your specific requirements including GSM, color, quantity, and product type to receive a customized price quote."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we have a strong nationwide presence across India. For international export inquiries, please contact our trade enquiry team directly."
  },
  {
    question: "How can I apply for a job at Swastik Textile Mall?",
    answer: "You can view our current openings on the Career page. To apply, simply click the 'Apply Now' button on the relevant job listing or email your resume to our HR department."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#1A1B23' }}>
      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#242530] overflow-hidden transition-colors duration-300"
              style={{ border: '1.5px solid #343545' }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <h3 className="text-[15px] sm:text-[17px] font-bold text-[#F3F4F6]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {faq.question}
                </h3>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#C89B5F] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-1 border-t border-[#343545]">
                      <p className="text-[13.5px] leading-relaxed text-[#9CA3AF] font-medium mt-3">
                        {faq.answer}
                      </p>
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
