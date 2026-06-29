import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#242530',
  border: '1.5px solid #343545',
  color: '#F3F4F6',
};

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#1A1B23' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center border-b border-[#343545] bg-[#1A1B23]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            e-Quotation
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-2xl mx-auto px-4 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} className="text-[#C89B5F]" />
            <h2 className="font-extrabold text-lg uppercase tracking-wide text-[#F3F4F6]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Active Quotation Requests
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-5 bg-[#242530] hover:shadow-md transition-all duration-300" style={{ border: '1.5px solid #343545' }}>
              <h3 className="text-[15px] font-bold text-[#F3F4F6] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Bulk Raw Cotton Purchase</h3>
              <p className="text-[12px] text-[#9CA3AF] mb-3 leading-relaxed">Looking for 5000kg of premium quality raw cotton (Shankar-6 variety) for our new manufacturing unit.</p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#C89B5F]">Date: Oct 12, 2026</div>
            </div>
            <div className="p-5 bg-[#242530] hover:shadow-md transition-all duration-300" style={{ border: '1.5px solid #343545' }}>
              <h3 className="text-[15px] font-bold text-[#F3F4F6] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Premium Silk Fabric Quotation</h3>
              <p className="text-[12px] text-[#9CA3AF] mb-3 leading-relaxed">Requirement for 2000 meters of pure Banarasi silk fabric in assorted festive colors.</p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#C89B5F]">Date: Oct 05, 2026</div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="shadow-sm overflow-hidden bg-[#242530] text-left"
          style={{ border: '1.5px solid #343545' }}>
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#343545]">
              <div className="w-11 h-11 flex items-center justify-center bg-[#C89B5F]/10 border border-[#C89B5F]/20">
                <FileText size={20} className="text-[#C89B5F]" />
              </div>
              <div>
                <h2 className="font-extrabold text-xl uppercase tracking-wide text-[#F3F4F6]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Request a Price Quote
                </h2>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5 text-[#9CA3AF]">Fill in your details below</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                {[
                  { label: 'Name of the Trader *', type: 'text', req: true },
                  { label: 'Business Name *', type: 'text', req: true },
                  { label: 'Business Address with PIN Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#D1D5DB]">
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#C89B5F'}
                      onBlur={e => e.target.style.borderColor = '#343545'}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#D1D5DB]">
                  Options *
                </label>
                <select required className="w-full px-4 py-3 text-sm outline-none appearance-none cursor-pointer"
                  style={inputStyle}>
                  <option value="" disabled>Select Option</option>
                  <option value="option1">Textile Products</option>
                  <option value="option2">Raw Materials</option>
                  <option value="option3">Corporate Gifting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-2 text-[#D1D5DB]">
                  Particulars of the Products *
                </label>
                <textarea rows={4} required
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  className="w-full px-4 py-3 text-sm outline-none resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#C89B5F'}
                  onBlur={e => e.target.style.borderColor = '#343545'}
                />
              </div>

              <button type="submit"
                className="w-full py-4 font-bold tracking-widest uppercase text-white text-xs flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 bg-[#4E6C50] btn-primary shadow-sm cursor-pointer"
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
