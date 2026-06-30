import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Exhibitions", "Facilities", "Product Launch", "Corporate Events", "Retail Outlets"];

  const galleryItems = [
    {
      id: 1,
      title: "Launching Our Signature Silk Saree Exhibition",
      category: "Exhibitions",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Eco-Friendly Weaving Facility Expansion",
      category: "Facilities",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Unveiling the Sustainable Linen Collection",
      category: "Product Launch",
      date: "April 2026",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "Annual Loom Artisan Honors & Awards",
      category: "Corporate Events",
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      title: "Opening of Flagship Retail Outlet in Mumbai",
      category: "Retail Outlets",
      date: "February 2026",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=60"
    }
  ];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Business Gallery</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Media, Infrastructure & Operations</p>
        </div>
      </div>

      {/* 1-Line Intro Paragraph above categories */}
      <p className="text-gray-500 text-xs tracking-wide mb-4">
        Explore our high-end spinning facilities, traditional weavers, exhibitions, and corporate retail launch moments.
      </p>

      {/* Category Tabs above cards */}
      <div className="flex flex-wrap gap-2.5 mb-8 pb-4 border-b border-gray-200">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-rosegold-500 text-white border-rosegold-500"
                : "bg-pearl-100 text-gray-650 border-gray-200 hover:border-rosegold-500 hover:bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout of Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:border-rosegold-500 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-36 sm:h-56 w-full overflow-hidden bg-pearl-100 shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-rosegold-500 text-pearl-100 text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
                  {item.category}
                </span>
              </div>

              {/* Text details */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <span className="text-[10px] text-rosegold-500 font-bold uppercase tracking-widest mb-1 block">{item.date}</span>
                  <h3 className="font-playfair text-xs sm:text-base text-gray-900 font-semibold mb-2 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block mt-2 pt-2 border-t border-gray-100">
                  Category: {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white border border-gray-200 shadow-sm">
            <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">No media gallery items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
