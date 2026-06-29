import { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { title: "Sandhya Textile Mall Grand Festive Inauguration", category: "Events", date: "Oct 12, 2025", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=80" },
  { title: "Exclusive Weaver Community Meet 2026", category: "Community", date: "Jan 18, 2026", image: "https://images.pexels.com/photos/34519967/pexels-photo-34519967.jpeg" },
  { title: "Unveiling the Luxury Saree Showroom Sector", category: "Showroom", date: "Mar 05, 2026", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80" },
  { title: "State-of-the-Art Fabric Quality Testing Lab", category: "Infrastructure", date: "Apr 29, 2026", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80" },
  { title: "B2B Wholesaler Partnership Summit", category: "Events", date: "Jun 15, 2026", image: "https://images.pexels.com/photos/35064535/pexels-photo-35064535.jpeg" },
];

const categories = ['All', 'Events', 'Community', 'Showroom', 'Infrastructure'];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredItems = activeCategory === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeCategory);
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Media Gallery
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-[14px] text-[#5D645D] font-medium mb-6 italic">
            Browse through capturing moments of our exhibitions, corporate initiatives, and celebrations at Sandhya Textile Mall.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-[12px] font-bold tracking-wide transition-all duration-300"
                style={activeCategory === cat ? { background: '#5F6F5E', color: 'white' } : { background: '#FFFFFF', color: '#454B45', border: '1.5px solid #E8E3D9' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
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
                <div className="absolute top-2 left-2 sm:top-2 sm:left-2 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-[#5F6F5E]"
                  style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.3)', backdropFilter: 'blur(8px)' }}>
                  {item.category}
                </div>
              </div>

              <div className="p-3 sm:p-5 flex flex-col flex-1">
                <p className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-[#7E857E] mb-1 sm:mb-2 uppercase">{item.date}</p>
                <h3 className="font-bold text-[12px] sm:text-lg mb-1 sm:mb-1.5 leading-tight sm:leading-snug transition-colors text-[#2C362B] line-clamp-3 sm:line-clamp-none"
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
