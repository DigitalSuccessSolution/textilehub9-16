import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FAF8F5',
  border: '1.5px solid #E8E3D9',
  color: '#2C362B',
};

const EAuction = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            e-Auction
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8 py-10">
        <p className="text-center text-[14px] mb-10 text-[#5D645D] font-medium">
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} color="#5F6F5E" />
            <h2 className="font-bold text-lg  tracking-wide text-[#2C362B]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Active e-Auctions
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {[
              { id: 1, title: 'Surplus Premium Cotton Fabric Roll Lot', desc: 'Liquidation of 500+ premium cotton fabric rolls from our recent surplus inventory. Bidding starts at base price.', date: 'July 15, 2026', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80' },
              { id: 2, title: 'Unstitched Ethnic Dress Materials Stock', desc: 'Complete lot of 1,000+ unstitched ethnic dress materials. Ideal for retail stores and bulk distributors.', date: 'July 20, 2026', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80' },
            ].map(auction => (
              <div key={auction.id} className="group rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-md flex flex-col" style={{ border: '1.5px solid #E8E3D9' }}>
                <div className="w-full h-32 sm:h-40 overflow-hidden relative">
                  <img src={auction.image} alt={auction.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9]" />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-[#2C362B]">
                    {auction.date}
                  </div>
                </div>
                <div className="p-3 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-[13px] sm:text-[16px] font-bold leading-tight sm:leading-snug mb-1.5 sm:mb-2 text-[#2C362B] line-clamp-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {auction.title}
                  </h3>
                  <p className="text-[10px] sm:text-[12.5px] leading-relaxed text-[#5D645D] font-medium line-clamp-3 sm:line-clamp-2">
                    {auction.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-md overflow-hidden bg-white text-left"
          style={{ border: '1.5px solid #E8E3D9' }}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#E8E3D9]/60">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
                <Gavel size={22} color="#5F6F5E" />
              </div>
              <div>
                <h2 className="font-bold text-xl uppercase tracking-wide text-[#2C362B]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Participation Registration
                </h2>
                <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5 text-[#7E857E]">
                  Register your interest for upcoming auctions
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: 'Name of the Participant *', type: 'text', req: true },
                  { label: 'Legal Name of Business *', type: 'text', req: true },
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

              {/* Upload */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-3 text-[#454B45]">
                  Upload GST Certificate *
                </label>
                <label className="w-full border-2 border-dashed rounded-2xl py-12 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-80"
                  style={{ borderColor: '#E8E3D9', background: '#FAF8F5' }}>
                  <input type="file" required className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <UploadCloud size={32} className="mb-3" color="#5F6F5E" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-[#5D645D]">Click to upload GST Certificate</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold mt-1 text-[#7E857E]">PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-95 hover:-translate-y-0.5 btn-primary shadow-sm"
              >
                <Send size={16} /> Submit Registration
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
