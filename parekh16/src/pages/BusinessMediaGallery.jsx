import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [
    {
      id: 1,
      title: "Luxury Weaving Loom Operations",
      category: "Weaving",
      date: "June 2026",
      image: "https://images.pexels.com/photos/8886948/pexels-photo-8886948.jpeg"
    },
    {
      id: 2,
      title: "Premium Silk Thread Dyeing",
      category: "Dyeing",
      date: "May 2026",
      image: "https://images.pexels.com/photos/5377395/pexels-photo-5377395.jpeg"
    },
    {
      id: 3,
      title: "Traditional Zari Hand-Embroidery",
      category: "Embroidery",
      date: "April 2026",
      image: "https://images.pexels.com/photos/37757334/pexels-photo-37757334.jpeg"
    },
    {
      id: 4,
      title: "Quality Control and Fabric Inspection",
      category: "Quality Control",
      date: "March 2026",
      image: "https://images.pexels.com/photos/31259255/pexels-photo-31259255.jpeg"
    },
    {
      id: 5,
      title: "Royal Weaves Boutique Showcase",
      category: "Retail Showcase",
      date: "February 2026",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=60"
    }
  ];

  const categories = ["All", "Weaving", "Dyeing", "Embroidery", "Quality Control", "Retail Showcase"];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Business Gallery</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Media, Infrastructure & Operations</p>
        </div>
      </div>

      {/* Categories Header Section */}
      <div className="mb-10 text-center">
        <p className="text-gray-505 text-xs sm:text-sm italic mb-4 max-w-lg mx-auto">
          Take a visual journey through our state-of-the-art weaving looms, dye labs, and luxury boutique.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-sm border transition-all cursor-pointer rounded-full ${
                activeCategory === cat
                  ? "bg-[#132C20] text-[#eedec9] border-[#132C20]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#132C20] hover:text-[#132C20]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:border-rosegold-500 hover:shadow-xl transition-all duration-300 rounded-3xl"
          >
            {/* Image section */}
            <div className="relative h-48 w-full overflow-hidden bg-pearl-100 shrink-0 rounded-t-3xl">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-rosegold-500 text-pearl-100 text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
                {item.category}
              </span>
            </div>

            {/* Text details below image */}
            <div className="p-6 flex flex-col justify-center flex-grow bg-white rounded-b-3xl">
              <span className="text-[10px] text-rosegold-500 font-bold uppercase tracking-widest mb-1.5">{item.date}</span>
              <h3 className="font-playfair text-base text-gray-900 font-bold group-hover:text-rosegold-500 transition-colors uppercase tracking-wide line-clamp-2">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
