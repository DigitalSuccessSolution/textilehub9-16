import { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { title: "Premium Saree Launch 2026", desc: "Showcasing our new Banarasi and Silk Saree collection to distinguished wholesale buyers.", category: "Product Launch", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=60" },
  { title: "Textile Machinery Upgradation", desc: "Installation of next-gen automated looms to enhance precision in fabric production.", category: "Infrastructure", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" },
  { title: "National Traders Convention", desc: "Our sales team presenting the B2B catalog at the largest textile convention in Surat.", category: "Event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" },
  { title: "Eco-Friendly Dyes Initiative", desc: "A look into our new sustainable dyeing unit that recycles 90% of the water used.", category: "CSR Initiative", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=60" },
];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "All" || item.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#1A1B23' }}>

      {/* Hero Banner */}
      <div className="relative pt-12 sm:pt-16 pb-4 flex flex-col items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6] mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Media Gallery
          </h1>
          <div className="w-32 sm:w-48 h-[1px] bg-[#343545] mx-auto" />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 pt-4 pb-12">
        <div className="text-center mb-10">
          <p className="text-[14px] text-[#9CA3AF] mb-4">A visual journey through our latest events, innovations, and corporate milestones.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Product Launch", "Infrastructure", "Event", "CSR Initiative", "Achievement"].map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <span
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-full cursor-pointer transition-colors border ${
                    isActive
                      ? "text-black bg-[#C89B5F] border-[#C89B5F]"
                      : "text-[#C89B5F] bg-[#C89B5F]/10 border-[#C89B5F]/20 hover:bg-[#C89B5F]/20"
                  }`}
                >
                  {cat}
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-left">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group overflow-hidden flex flex-col bg-[#242530] cursor-pointer transition-all duration-300 hover:shadow-md"
              style={{ border: '1.5px solid #343545' }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.9]"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#C89B5F]"
                  style={{ background: 'rgba(200, 155, 95, 0.1)', border: '1px solid rgba(200, 155, 95, 0.3)', backdropFilter: 'blur(8px)' }}>
                  {item.category}
                </div>
              </div>

              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <h3 className="font-bold text-sm sm:text-base mb-1.5 leading-snug transition-colors text-[#F3F4F6]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-[12px] leading-relaxed line-clamp-3 text-[#9CA3AF] font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[#9CA3AF] text-sm font-semibold">No media items found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
