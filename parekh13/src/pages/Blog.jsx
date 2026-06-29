import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  { 
    title: "The Royal History of Banarasi Silk Sarees", 
    date: "June 28, 2026", 
    category: "Heritage", 
    author: "Priya Sharma", 
    description: "Unraveling the rich history, intricate weaves, and timeless craftsmanship of the legendary Banarasi sarees.", 
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80" 
  },
  { 
    title: "Sustaining Craftsmanship in the Modern Era", 
    date: "June 15, 2026", 
    category: "Sustainability", 
    author: "Rajiv Kapoor", 
    description: "How traditional Indian weavers are adopting sustainable practices while keeping age-old art alive.", 
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=80" 
  },
  { 
    title: "Home Decor Trends: Styling with Ethnic Furnishings", 
    date: "May 30, 2026", 
    category: "Home Styling", 
    author: "Neha Gupta", 
    description: "Transform your living space with Indian jacquards, rich bed linens, and traditional upholstery themes.", 
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80" 
  },
];

const categories = ["All", "Heritage", "Sustainability", "Home Styling"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative pt-10 sm:pt-14 pb-2 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Blog & Articles
          </h1>
          
    

          <div className="w-32 sm:w-48 h-[1px] bg-[#EADBC8]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-2 pb-6 text-center">
        {/* Intro half line paragraph above categories */}
        <p className="text-xs sm:text-sm text-[#786B80] italic mb-4 max-w-lg mx-auto">
          Explore the rich legacy of Indian handlooms, sustainable weaving methods, and contemporary home decor styles.
        </p>

        {/* Categories Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Blogs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden hover:shadow-md transition-all duration-300 bg-white rounded-2xl"
              style={{ border: '1.5px solid #EADBC8' }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9]" />
                <div className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase rounded"
                  style={{ background: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.3)', color: '#C5A059', backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-3 sm:p-5 flex flex-col flex-1 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#786B80]">{post.date}</span>
                </div>
                <h3 className="font-bold text-sm sm:text-lg mb-2 leading-snug group-hover:text-[#C5A059] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2A083E' }}>
                  {post.title}
                </h3>
                <p className="text-[11px] sm:text-[12.5px] text-[#504257] leading-relaxed mb-4 flex-grow font-medium line-clamp-3 sm:line-clamp-none">
                  {post.description}
                </p>
                <p className="text-[12px] mb-4 text-[#786B80] font-semibold">By {post.author}</p>
                <div className="mt-auto pt-3 border-t border-[#EADBC8]">
                  <span className="flex items-center gap-1.5 text-[12px] font-bold tracking-wide text-[#C5A059] cursor-pointer">
                    Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
