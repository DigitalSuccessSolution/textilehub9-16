import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FAF8F5',
  border: '1.5px solid #E8E3D9',
  color: '#2C362B',
};

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            e-Quotation
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} color="#5F6F5E" />
            <h2 className="font-bold text-lg uppercase tracking-wide text-[#2C362B]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Active Quotation Requests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { id: 1, title: 'Cotton Shirting Material - 10,000 Meters', desc: 'Seeking bulk quotation for premium quality 100% cotton shirting fabrics in assorted pastel colors. Delivery expected within 45 days.', date: 'July 10, 2026' },
              { id: 2, title: 'Designer Saree Blouses - 5,000 Units', desc: 'Requirement for ready-made designer saree blouses in various sizes and embroidery patterns. Vendors must have prior experience.', date: 'July 18, 2026' },
            ].map(quote => (
              <div key={quote.id} className="group rounded-2xl p-6 bg-white transition-all duration-300 hover:shadow-md" style={{ border: '1.5px solid #E8E3D9' }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
                    <FileText size={22} color="#5F6F5E" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E857E]">{quote.date}</span>
                </div>
                <h3 className="text-[16px] font-bold leading-snug mb-2 text-[#2C362B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {quote.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed text-[#5D645D] font-medium line-clamp-3 mb-4">
                  {quote.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left"
          style={{ border: '1.5px solid #E8E3D9' }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#E8E3D9]/60">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
                <FileText size={22} color="#5F6F5E" />
              </div>
              <div>
                <h2 className="font-bold text-xl uppercase tracking-wide text-[#2C362B]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Request a Price Quote
                </h2>
                <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5 text-[#7E857E]">Fill in your details below</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: 'Name of the Trader *', type: 'text', req: true },
                  { label: 'Business Name *', type: 'text', req: true },
                  { label: 'Business Address with PIN Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#454B45]">
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#5F6F5E'}
                      onBlur={e => e.target.style.borderColor = '#E8E3D9'}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#454B45]">
                  Options *
                </label>
                <select required className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                  style={inputStyle}>
                  <option value="" disabled>Select Option</option>
                  <option value="option1">Textile Products</option>
                  <option value="option2">Raw Materials</option>
                  <option value="option3">Corporate Gifting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#454B45]">
                  Particulars of the Products *
                </label>
                <textarea rows={4} required
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#5F6F5E'}
                  onBlur={e => e.target.style.borderColor = '#E8E3D9'}
                />
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 btn-primary shadow-sm"
              >
                <Send size={16} /> Submit Quotation Request
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
