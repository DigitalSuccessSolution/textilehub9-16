import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BusinessMediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Weaving", "Designing", "Embroidery", "Retail Experience", "Quality Control"];

  const galleryItems = [
    {
      id: 1,
      title: "Premium Handloom Kanjivaram Weaving",
      category: "Weaving",
      date: "October 2026",
      desc: "Hand-weaving gold borders and mulberry silk threads at our state-of-the-art weaving looms.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Bridal Couture Design Room",
      category: "Designing",
      date: "September 2026",
      desc: "Our creative designers sketching bespoke bridal lehengas and drafting luxury seasonal patterns.",
      image: "https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg"
    },
    {
      id: 3,
      title: "Exquisite Handcrafted Embroidery",
      category: "Embroidery",
      date: "August 2026",
      desc: "Skilled artisans detailing royal sherwanis and sarees with traditional zardozi patterns.",
      image: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "Flagship Luxury Boutique Store",
      category: "Retail Experience",
      date: "July 2026",
      desc: "A premium display of our silk collections at the Chennai heritage design showroom.",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      title: "Fabric Inspection and Quality Assurance",
      category: "Quality Control",
      date: "June 2026",
      desc: "Thorough verification of fiber density, dye fastness, and thread consistency before dispatch.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=60"
    }
  ];

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6 -mt-8 max-w-7xl mx-auto px-4">
      <div className="text-center pt-0 pb-2">
        <p className="text-rosegold-500 font-medium tracking-widest uppercase text-xs mb-2">Media & Operations</p>
        <h1 className="mb-4">Business Gallery</h1>
        <p className="text-gray-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed italic mb-6">
          A glimpse into our operational milestones, traditional weaving workshops, and luxury bridal showrooms.
        </p>

        {/* Categories shown above the cards */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-rosegold-500 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-rosegold-500 hover:text-rosegold-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pt-4">
        {filteredItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:border-rosegold-500 hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            {/* Image section */}
            <div className="relative h-36 sm:h-64 overflow-hidden bg-pearl-100">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-rosegold-500 text-pearl-100 text-[8px] sm:text-[9px] uppercase tracking-widest px-2 sm:px-3 py-1 font-bold">
                {item.category}
              </span>
            </div>

            {/* Text details below image */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow bg-white">
              <span className="text-[9px] sm:text-[10px] text-rosegold-500 font-bold uppercase tracking-widest mb-1.5">{item.date}</span>
              <h3 className="font-playfair text-sm sm:text-xl text-gray-900 font-bold mb-2 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide leading-tight line-clamp-2 sm:line-clamp-none">
                {item.title}
              </h3>
              <p className="text-gray-655 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-2 sm:line-clamp-none">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
