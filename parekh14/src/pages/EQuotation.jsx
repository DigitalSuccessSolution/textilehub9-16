import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send } from 'lucide-react';

const EQuotation = () => {
  const activeQuotations = [
    {
      id: 1,
      title: "Wholesale Cotton Fabric Procurement - Festive Season 2026",
      description: "Requesting quotation for 10,000 meters of high-density organic cotton fabric. Must support dye-sublimation and natural dyes.",
      date: "Published: June 25, 2026"
    },
    {
      id: 2,
      title: "Bespoke Corporate Uniform Supply - Premium Suiting",
      description: "Quotation request for customized corporate uniforms including premium blazers, trousers, and shirts for 500+ employees.",
      date: "Published: June 18, 2026"
    }
  ];

  return (
    <div className="pb-20 -mt-8 max-w-7xl mx-auto px-4 md:px-8">
      {/* Page Header */}
      <div className="text-center pt-0 pb-2 mb-2">
        <h1><span className="font-outfit font-normal lowercase">e</span>-Quotation</h1>
        <p className="text-gray-650 text-xs md:text-sm uppercase tracking-wider mt-2 font-medium">
          Request a Price Quote
        </p>
      </div>

      {/* Main Content Area */}
      <div className="space-y-10 mt-8">
        
        {/* Active Quotation Requests Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} className="text-[#d8a5ad]" />
            <h2 className="text-[#2d0a4e] font-bold text-lg md:text-xl uppercase tracking-wide">Active Quotation Requests</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeQuotations.map((quote) => (
              <div key={quote.id} className="bg-white p-6 border border-gray-200 shadow-sm flex items-start gap-4 rounded-xl">
                <div className="w-12 h-12 bg-rosegold-500/10 flex items-center justify-center shrink-0 rounded-lg">
                  <FileText className="text-rosegold-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2 leading-tight">{quote.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{quote.description}</p>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rosegold-500">{quote.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Request a Price Quote Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-[#d8a5ad]/10 rounded-xl flex items-center justify-center">
              <FileText size={24} className="text-[#d8a5ad]" />
            </div>
            <div>
              <h2 className="text-[#2d0a4e] font-bold text-xl uppercase tracking-wide">Request a Price Quote</h2>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mt-1">Fill in your details below</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Name of the Trader *
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Business Name *
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Business Address with Pin Code *
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  GST No.
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Mobile No. *
                </label>
                <input type="tel" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Email ID *
                </label>
                <input type="email" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                Options *
              </label>
              <select className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors appearance-none text-sm text-gray-700" required>
                <option value="" disabled selected>Select Option</option>
                <option value="option1">Textile Products</option>
                <option value="option2">Raw Materials</option>
                <option value="option3">Corporate Gifting</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                Particulars of the Products *
              </label>
              <textarea 
                rows="4" 
                className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors resize-none text-sm" 
                placeholder="Enter product details, GSM, quantity, color, specifications..."
                required 
              ></textarea>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-rosegold-500 text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-rosegold-400 transition-all duration-300 shadow-md flex items-center justify-center gap-3"
              >
                <Send size={14} /> Submit Quotation Request
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
