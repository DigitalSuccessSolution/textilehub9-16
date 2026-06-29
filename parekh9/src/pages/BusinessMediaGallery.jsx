import { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { title: "Banarasi Silk Exhibition", category: "Heritage", date: "June 15, 2026", image: "https://images.pexels.com/photos/5377395/pexels-photo-5377395.jpeg" },
  { title: "Linen Fabrics Showcase", category: "Linen", date: "May 20, 2026", image: "https://images.pexels.com/photos/18359540/pexels-photo-18359540.jpeg" },
  { title: "Cotton Prints Launch", category: "Cotton", date: "Apr 10, 2026", image: "https://images.pexels.com/photos/37608683/pexels-photo-37608683.jpeg" },
  { title: "Designer Kurtis Collection", category: "Kurtis", date: "Mar 02, 2026", image: "https://images.pexels.com/photos/20702676/pexels-photo-20702676.jpeg" },
  { title: "Premium Suiting Fabrics", category: "Suiting", date: "Feb 18, 2026", image: "https://images.pexels.com/photos/16199169/pexels-photo-16199169.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430]"
            style={{ fontFamily: "'Marcellus', serif" }}>
            Media Gallery
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-6">

        {/* Intro Paragraph */}
        <p className="text-center text-sm font-medium text-[#706863] max-w-xl mx-auto mb-6">
          Browse through our latest premium clothing exhibitions, designer fabric showcases, and ethnic collection launches.
        </p>

        {/* Category Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {['All', 'Heritage', 'Linen', 'Cotton', 'Kurtis', 'Suiting'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-[12px] font-bold transition-all duration-200 cursor-pointer"
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #A24E51, #C37E80)', color: '#fff', boxShadow: '0 4px 12px rgba(162,78,81,0.3)' }
                : { background: '#FFFFFF', color: '#554D48', border: '1.5px solid #EADCD2' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group rounded-2xl overflow-hidden flex flex-col bg-white hover:shadow-md transition-all duration-300"
              style={{ border: '1.5px solid #EADCD2' }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold mb-1 text-[#A24E51]">
                  {item.category}
                </span>
                <h3 className="font-bold text-sm sm:text-base mb-2 leading-snug transition-colors text-[#3C3430]"
                  style={{ fontFamily: "'Marcellus', serif" }}>
                  {item.title}
                </h3>
                <div className="text-[10px] sm:text-[11px] font-semibold text-[#908882] mt-auto pt-2 border-t border-gray-100">
                  {item.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
