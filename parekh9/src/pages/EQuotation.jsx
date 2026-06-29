import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FCF5F0',
  border: '1.5px solid #EADCD2',
  color: '#3C3430',
};

const EQuotation = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430]"
            style={{ fontFamily: "'Marcellus', serif" }}>
            e-Quotation
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* Active Quotations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} color="#A24E51" />
            <h2 className="font-bold text-lg uppercase tracking-wide text-[#3C3430]"
              style={{ fontFamily: "'Marcellus', serif" }}>
              Active Quotation Requests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, title: 'Premium Silk Yarn Supply', desc: 'Seeking supplier quotes for 500kg organic Mulberry silk yarns in white/cream.', date: 'Oct 30, 2026' },
              { id: 2, title: 'Combed Cotton Fabric', desc: 'Requesting wholesale pricing for 5,000 meters of premium 180 GSM combed cotton.', date: 'Nov 12, 2026' },
              { id: 3, title: 'Ethnic Kurtis Manufacturing', desc: 'Looking for a verified retail manufacturer for a run of 1,200 Georgette Kurtis.', date: 'Dec 05, 2026' }
            ].map(card => (
              <div key={card.id} className="p-6 rounded-2xl bg-white flex flex-col justify-between"
                style={{ border: '1.5px solid #EADCD2' }}>
                <div>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 bg-[#F8ECE9] border border-[#A24E51]/20">
                    <ClipboardCheck size={16} color="#A24E51" />
                  </div>
                  <h3 className="font-bold text-base mb-1.5 text-[#3C3430]" style={{ fontFamily: "'Marcellus', serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-[#706863] mb-4 font-medium">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-[10.5px] font-bold text-[#908882]">
                  <span>REF: EQ/{2026}/{card.id}</span>
                  <span>{card.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left"
          style={{ border: '1.5px solid #EADCD2' }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#EADCD2]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(162,78,81,0.1)', border: '1px solid rgba(162,78,81,0.2)' }}>
                <FileText size={22} color="#A24E51" />
              </div>
              <div>
                <h2 className="font-bold text-xl uppercase tracking-wide text-[#3C3430]"
                  style={{ fontFamily: "'Marcellus', serif" }}>
                  Request a Price Quote
                </h2>
                <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5 text-[#908882]">Fill in your details below</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: 'Name of the Trader *', type: 'text', req: true },
                  { label: 'Business Name *', type: 'text', req: true },
                  { label: 'Business Address with Pin Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#554D48]">
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#A24E51'}
                      onBlur={e => e.target.style.borderColor = '#EADCD2'}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#554D48]">
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
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-2 text-[#554D48]">
                  Particulars of the Products *
                </label>
                <textarea rows={4} required
                  placeholder="Enter product details, GSM, quantity, color, specifications..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#A24E51'}
                  onBlur={e => e.target.style.borderColor = '#EADCD2'}
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
