import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  { title: "Silk Saree Exhibition 2026", desc: "Showcasing our latest premium silk collection at the national textile expo.", category: "Event", date: "Jan 12, 2026", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=60" },
  { title: "Cotton Weaving Workshop", desc: "A deep dive into the traditional methods of cotton weaving by expert artisans.", category: "Workshop", date: "Feb 05, 2026", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60" },
  { title: "Launch of Winter Collection", desc: "Introducing our new line of warm, stylish, and comfortable winter wear for all.", category: "Product Launch", date: "Mar 18, 2026", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=60" },
  { title: "Sustainable Fabrics Seminar", desc: "Discussing the importance of eco-friendly materials in the modern textile industry.", category: "Seminar", date: "Apr 22, 2026", image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&auto=format&fit=crop&q=60" },
  { title: "National Handloom Day Celebration", desc: "Honoring our weavers and celebrating the rich heritage of Indian handlooms.", category: "Community", date: "Aug 07, 2026", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=800&auto=format&fit=crop&q=60" },
];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative h-24 sm:h-32 overflow-hidden flex items-end pb-4 sm:pb-6 justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Media Gallery
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 pt-2">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#5D645D] mb-4">Explore our gallery of events, workshops, and milestones.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["All", "Event", "Workshop", "Product Launch", "Seminar", "Community"].map(cat => (
              <span 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-[#E8E3D9] cursor-pointer transition-colors ${
                  activeCategory === cat 
                    ? "bg-[#5F6F5E] text-white" 
                    : "text-[#2C362B] bg-white hover:bg-[#5F6F5E] hover:text-white"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group rounded-2xl overflow-hidden flex flex-col bg-white cursor-pointer transition-all duration-300 hover:shadow-md"
              style={{ border: '1.5px solid #E8E3D9' }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.9]"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-[#8A6F4E] uppercase tracking-wider">{item.category}</span>
                  <span className="text-[11px] font-semibold text-[#7E857E]">{item.date}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 leading-snug transition-colors text-[#2C362B]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {item.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-[#5D645D] font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
