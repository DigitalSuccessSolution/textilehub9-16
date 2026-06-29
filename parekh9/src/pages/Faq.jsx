import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "How can I submit a B2B trade enquiry?",
    a: "You can submit a B2B trade enquiry directly through our Trade Enquiry form page, or by contacting our team via mail at info@textilemall.com. We typically respond within 24 hours with product availability, customization options, and custom pricing guides."
  },
  {
    q: "What is the minimum order volume for custom manufacturing?",
    a: "Our minimum order volume varies depending on the category. For printed textiles (Kurtis/Suiting/Shirting), it starts at 1,00,000 units/meters. For custom handloom fabrics or specialty luxury silks, smaller volumes can be scheduled."
  },
  {
    q: "How does the e-Auction system work?",
    a: "Our e-Auction platform allows verified retail partners to participate in transparent, live liquidation events for surplus stock rolls, hosiery lots, and clearance materials. Interested traders must register their GST details on our e-Auction page to participate."
  },
  {
    q: "Can I request custom fabric samples before ordering?",
    a: "Yes! We encourage requesting physical fabric or GSM swatch booklets before placing bulk contracts. You can specify sample requirements in the e-Quotation request form under 'Particulars of the Products'."
  },
  {
    q: "Do you ship textiles globally?",
    a: "Yes, Vastramall partners with international shipping lines to export premium Indian weaves worldwide. We maintain complete export compliance certifications and zero-defect checks to ensure standard packing and customs handling."
  },
  {
    q: "How frequently is the Notice Board updated?",
    a: "The Notice Board is updated in real-time as corporate events, warehouse maintenance closures, pricing updates, or logistics announcements are published by our operations directors."
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div
      className="rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
      style={{ border: '1.5px solid #EADCD2' }}
    >
      <button
        onClick={toggleOpen}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-bold text-[#3C3430] text-sm sm:text-base leading-snug flex items-center gap-3">
          <HelpCircle size={18} className="text-[#A24E51] shrink-0" />
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className="text-[#908882] shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 pt-1 border-t border-gray-100/50">
              <p className="text-[13.5px] leading-relaxed text-[#554D48] font-medium pl-7">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0', minHeight: 'calc(100vh - 75px)' }}>
      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430]"
            style={{ fontFamily: "'Marcellus', serif" }}>
            FAQ
          </h1>
        </div>
      </div>

      {/* Main FAQ Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-center text-[14px] leading-relaxed mb-10 text-[#706863] font-medium">
          Have questions about orders, B2B quotations, live auctions, or logistics? Find detailed answers below.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              toggleOpen={() => toggleOpen(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
