import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FFFFFF',
  border: '1.5px solid #EADBC8',
  color: '#2A083E',
};

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center border-b border-[#EADBC8] bg-[#FAF6F0]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            e-Quotation
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-2xl mx-auto px-4 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} className="text-[#C5A059]" />
            <h2 className="font-extrabold text-lg uppercase tracking-wide text-[#2A083E]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Active Quotation Requests
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-white rounded-2xl flex flex-col md:flex-row items-start gap-4"
              style={{ border: '1.5px solid #EADBC8' }}>
              <div className="w-12 h-12 flex items-center justify-center shrink-0 text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full">
                <Inbox size={24} strokeWidth={1.5} />
              </div>
              <div className="flex-grow text-left">
                <h3 className="font-extrabold text-lg text-[#2A083E] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Bulk Silk Saree Procurement
                </h3>
                <p className="text-[13px] text-[#504257] leading-relaxed mb-3">
                  Request for quotation for premium silk sarees in bulk quantities of 500+ units for the upcoming festive season.
                </p>
                <div className="text-[10px] uppercase tracking-widest font-extrabold text-[#786B80]">
                  Published: 2026-06-29
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="shadow-sm overflow-hidden bg-white text-left rounded-2xl"
          style={{ border: '1.5px solid #EADBC8' }}>
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#EADBC8]">
              <div className="w-11 h-11 flex items-center justify-center bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-lg">
                <FileText size={20} className="text-[#C5A059]" />
              </div>
              <div>
                <h2 className="font-extrabold text-xl uppercase tracking-wide text-[#2A083E]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Request a Price Quote
                </h2>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5 text-[#786B80]">Fill in your details below</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                {[
                  { label: 'Name of the Trader *', type: 'text', req: true },
                  { label: 'Business Name *', type: 'text', req: true },
                  { label: 'Business Address with Pin Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#504257]">
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 rounded-lg"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#C5A059'}
                      onBlur={e => e.target.style.borderColor = '#EADBC8'}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#504257]">
                  Options *
                </label>
                <select required className="w-full px-4 py-3 text-sm outline-none appearance-none cursor-pointer rounded-lg"
                  style={inputStyle}>
                  <option value="" disabled>Select Option</option>
                  <option value="option1">Textile Products</option>
                  <option value="option2">Raw Materials</option>
                  <option value="option3">Corporate Gifting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#504257]">
                  Particulars of the Products *
                </label>
                <textarea rows={4} required
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  className="w-full px-4 py-3 text-sm outline-none resize-none rounded-lg"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#C5A059'}
                  onBlur={e => e.target.style.borderColor = '#EADBC8'}
                />
              </div>

              <button type="submit"
                className="w-full py-4 font-bold tracking-widest uppercase text-white text-xs flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 btn-primary shadow-sm cursor-pointer"
              >
                <Send size={14} /> Submit Quotation Request
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
