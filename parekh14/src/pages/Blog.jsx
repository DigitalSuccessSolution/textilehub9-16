import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Calendar, Tag } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Innovation", "Collections", "Craftsmanship"];

  const posts = [
    {
      id: 1,
      title: "The Art of Pure Zari Kanjivaram Weaving",
      category: "Craftsmanship",
      date: "June 25, 2026",
      author: "Devendra Parekh",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60",
      description: "Deep dive into the traditional gold-thread weaving process that creates the monumental luster of our heritage Kanjivaram sarees."
    },
    {
      id: 2,
      title: "Sartorial Grace: Modernizing Indian Bridal Attire",
      category: "Collections",
      date: "June 18, 2026",
      author: "Ananya Sharma",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60",
      description: "Explore how contemporary silhouettes are blending seamlessly with centuries-old handloom techniques to define the 2026 bridal aesthetic."
    },
    {
      id: 3,
      title: "Sustainable Handloom: Sourcing Organic Cotton Threads",
      category: "Innovation",
      date: "June 05, 2026",
      author: "Vikram Mehta",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=60",
      description: "Understanding our direct-from-weaver supply chain that brings certified organic cotton threads from sustainable farms to our weaving looms."
    }
  ];

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="space-y-8 -mt-8 max-w-7xl mx-auto px-4">
      {/* Header section with paragraph above categories */}
      <div className="text-center pt-0 pb-2">
        <p className="text-rosegold-500 font-medium tracking-widest uppercase text-xs mb-2">Insights & News</p>
        <h1 className="mb-4">The Heritage Garments Journal</h1>
        <p className="text-gray-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed italic mb-6">
          Exploring the rich tapestry of Indian handlooms, sustainable couture, and seasonal updates.
        </p>

        {/* Categories displayed above the cards */}
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

      {/* Cards list */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {filteredPosts.map((post) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:border-rosegold-500 hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            <div className="h-36 sm:h-64 overflow-hidden relative bg-pearl-100">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-rosegold-500 text-pearl-100 text-[8px] sm:text-[9px] uppercase tracking-widest px-2 sm:px-3 py-1 font-bold">
                {post.category}
              </span>
            </div>
            
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider mb-2 sm:mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-rosegold-500" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={12} className="text-rosegold-500" /> By {post.author}
                </span>
              </div>

              <h3 className="font-playfair text-sm sm:text-xl text-gray-900 font-bold mb-2 sm:mb-3 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide leading-tight line-clamp-2 sm:line-clamp-none">
                {post.title}
              </h3>
              
              <p className="text-gray-655 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-2 sm:line-clamp-none">
                {post.description}
              </p>

              <button className="inline-flex items-center gap-2 text-rosegold-500 hover:text-rosegold-400 font-bold uppercase text-[10px] sm:text-xs tracking-wider border-b border-transparent hover:border-rosegold-500 w-fit pb-1 transition-all duration-200">
                Read Article <ArrowRight size={14} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
