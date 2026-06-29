import { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { title: "Grand Showroom Launch", category: "Showrooms", date: "June 25, 2026", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80" },
  { title: "Royal Saree Exhibition Delhi", category: "Exhibitions", date: "June 10, 2026", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80" },
  { title: "Sustainable Loom Workshop", category: "Infrastructure", date: "May 20, 2026", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&auto=format&fit=crop&q=80" },
  { title: "Weaver's Guild Summit", category: "Events", date: "April 15, 2026", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop&q=80" },
  { title: "Festive Collection Unveiling", category: "Events", date: "March 30, 2026", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80" },
];

const categories = ["All", "Events", "Showrooms", "Infrastructure", "Exhibitions"];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative pt-10 sm:pt-14 pb-2 flex flex-col items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Media Gallery
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 pt-2 text-center">
        {/* One line paragraph above categories */}
        <p className="text-xs sm:text-sm text-[#786B80] italic mb-4 max-w-xl mx-auto">
          Explore our journey through visual highlights of royal fashion exhibitions, modern showrooms, and international summits.
        </p>

        {/* Categories Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 text-xs font-extrabold uppercase rounded-full tracking-wider border cursor-pointer transition-colors duration-200"
                style={{
                  borderColor: '#EADBC8',
                  background: isActive ? '#2A083E' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#2A083E'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left max-w-5xl mx-auto">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group overflow-hidden flex flex-col bg-white cursor-pointer transition-all duration-300 hover:shadow-md rounded-2xl"
              style={{ border: '1.5px solid #EADBC8' }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.9]"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#C5A059] rounded"
                  style={{ background: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.3)', backdropFilter: 'blur(8px)' }}>
                  {item.category}
                </div>
              </div>

              <div className="p-3 sm:p-4 flex flex-col flex-1 border-t border-[#FAF6F0]">
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#786B80] tracking-wider mb-1 block uppercase">
                  {item.date}
                </span>
                <h3 className="font-bold text-sm sm:text-base leading-snug transition-colors text-[#2A083E]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
