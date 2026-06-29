import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gavel, UploadCloud, Send } from 'lucide-react';

const EAuction = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const activeAuctions = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=60",
      title: "Auction Lot #204 - Premium Pure Silk Borders",
      description: "Liquidation of high-grade silk borders woven with pure gold zari. Total quantity 150 rolls. Opening bid: ₹5,00,000.",
      date: "Bidding Ends: July 10, 2026"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60",
      title: "Auction Lot #205 - Surplus Cotton Shirting Lots",
      description: "Fine checks and solid color premium cotton shirting fabrics. Approx 5,000 meters total. Opening bid: ₹2,50,000.",
      date: "Bidding Ends: July 15, 2026"
    }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please upload the GST Certificate.");
      return;
    }
    // Handle submission
  };

  return (
    <div className="pb-20 -mt-8 max-w-7xl mx-auto px-4 md:px-8">
      {/* Page Header */}
      <div className="text-center pt-0 pb-2 mb-2">
        <h1><span className="font-outfit font-normal lowercase">e</span>-Auction</h1>
        <p className="text-gray-650 text-xs md:text-sm uppercase tracking-wider mt-2 font-medium">
          Digital Liquidation System
        </p>
      </div>
      {/* Main Content Area */}
      <div className="space-y-10 mt-8">
        
        {/* Active e-Auctions Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} className="text-[#d8a5ad]" />
            <h2 className="text-[#2d0a4e] font-playfair font-bold text-xl">
              Active <span className="font-outfit font-normal lowercase">e</span>-Auctions
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            {activeAuctions.map((auction) => (
              <div key={auction.id} className="bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden rounded-xl">
                <div className="w-full h-36 sm:h-48 bg-pearl-100 shrink-0">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-sm sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight line-clamp-2 sm:line-clamp-none">{auction.title}</h3>
                    <p className="text-gray-655 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2 sm:line-clamp-none">{auction.description}</p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-rosegold-500">{auction.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Participation Registration Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-[#d8a5ad]/10 rounded-xl flex items-center justify-center">
              <Gavel size={24} className="text-[#d8a5ad]" />
            </div>
            <div>
              <h2 className="text-[#2d0a4e] font-playfair font-bold text-2xl uppercase tracking-wide">Participation Registration</h2>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">Register your interest for upcoming auctions</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Name of the Participant *
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Legal Name of Business *
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

            <div className="pt-4">
              <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-3">
                Upload GST Certificate *
              </label>
              
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept=".pdf,.jpg,.jpeg,.png" 
                className="hidden"
                required
              />

              <div 
                onClick={() => fileInputRef.current.click()} 
                className="w-full border-2 border-dashed border-gray-200 py-12 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group rounded-xl"
              >
                <UploadCloud size={32} className="text-gray-300 group-hover:text-rosegold-500 mb-3 transition-colors" />
                {selectedFile ? (
                  <>
                    <p className="text-rosegold-500 font-bold text-sm">Selected: {selectedFile.name}</p>
                    <p className="text-gray-400 text-xs mt-1">Size: {(selectedFile.size / 1024).toFixed(1)} KB (Click to change)</p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-550 font-medium text-sm">Click to upload GST Certificate</p>
                    <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-bold">PDF, JPG, PNG ACCEPTED</p>
                  </>
                )}
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-rosegold-500 text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-rosegold-400 transition-all duration-300 shadow-md flex items-center justify-center gap-3"
              >
                <Send size={14} /> Submit Registration
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
