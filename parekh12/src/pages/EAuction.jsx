import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#242530',
  border: '1.5px solid #343545',
  color: '#F3F4F6',
};

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#1A1B23' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center border-b border-[#343545] bg-[#1A1B23]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            e-Auction
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-2xl mx-auto px-4 py-10">
        <p className="text-center text-[13.5px] mb-8 text-[#9CA3AF] font-semibold">
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} className="text-[#C89B5F]" />
            <h2 className="font-extrabold text-lg  tracking-wide text-[#F3F4F6]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Active e-Auctions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-5 p-5 bg-[#242530] hover:shadow-md transition-all duration-300" style={{ border: '1.5px solid #343545' }}>
              <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=60" alt="Auction Item" className="w-full md:w-48 h-32 object-cover" />
              <div className="flex flex-col justify-center">
                <h3 className="text-[16px] font-bold text-[#F3F4F6] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Liquidation of Excess Premium Shirting</h3>
                <p className="text-[12px] text-[#9CA3AF] mb-3 leading-relaxed">Auctioning 10,000 meters of excess premium cotton shirting material. Minimum bid starts at ₹150/meter.</p>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#C89B5F]">Date: Oct 25, 2026</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="shadow-sm overflow-hidden bg-[#242530] text-left"
          style={{ border: '1.5px solid #343545' }}>
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#343545]">
              <div className="w-11 h-11 flex items-center justify-center bg-[#C89B5F]/10 border border-[#C89B5F]/20">
                <Gavel size={20} className="text-[#C89B5F]" />
              </div>
              <div>
                <h2 className="font-extrabold text-xl uppercase tracking-wide text-[#F3F4F6]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Participation Registration
                </h2>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5 text-[#9CA3AF]">
                  Register your interest for upcoming auctions
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                {[
                  { label: 'Name of the Participant *', type: 'text', req: true },
                  { label: 'Legal Name of Business *', type: 'text', req: true },
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

              {/* Upload */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-extrabold mb-3 text-[#D1D5DB]">
                  Upload GST Certificate
                </label>
                <label className="w-full border-2 border-dashed py-10 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-80 bg-[#242530]"
                  style={{ borderColor: '#343545' }}>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <UploadCloud size={28} className="mb-3 text-[#C89B5F]" strokeWidth={1.2} />
                  <p className="text-xs font-bold text-[#9CA3AF]">Click to upload GST Certificate</p>
                  <p className="text-[9px] uppercase tracking-widest font-bold mt-1 text-[#9CA3AF]">PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 font-bold tracking-widest uppercase text-white text-xs flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 bg-[#4E6C50] btn-primary shadow-sm cursor-pointer"
              >
                <Send size={14} /> Submit Registration
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
