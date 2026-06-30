import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Calendar, Tag } from 'lucide-react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = [
    {
      title: "The Art of Handloom Weaving in Modern Indian Fashion",
      author: "Rajiv Parekh",
      date: "June 25, 2026",
      category: "Craftsmanship",
      description: "Discover how traditional handloom techniques are merging with modern aesthetics to create stunning, sustainable fashion for the contemporary wardrobe.",
      image: "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg"
    },
    {
      title: "Choosing the Perfect Bridal Lehenga: A Comprehensive Guide",
      author: "Ananya Sharma",
      date: "June 18, 2026",
      category: "Styling",
      description: "Finding your dream bridal attire is a journey of textures and colors. Learn how to choose the right silk weave, embroidery, and weight for your special day.",
      image: "https://images.pexels.com/photos/15226347/pexels-photo-15226347.jpeg"
    },
    {
      title: "Sustainable Cotton: The Backbone of Daily Comfort Wear",
      author: "Vikram Mehta",
      date: "June 10, 2026",
      category: "Sustainability",
      description: "An in-depth look at our sourcing practices, from organic cotton fields to the softest breathable daily hosiery and comfortable leggings.",
      image: "https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg"
    }
  ];

  const categories = ["All", "Craftsmanship", "Styling", "Sustainability"];

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Blog & Insights</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Insights, News & Collections</p>
        </div>
      </div>

      {/* Categories Header Section */}
      <div className="mb-10 text-center">
        <p className="text-gray-505 text-xs sm:text-sm italic mb-4 max-w-lg mx-auto">
          Explore our latest insights, styling guides, and sustainability milestones.
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
        {filteredPosts.map((post, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer bg-white overflow-hidden shadow-lg hover:shadow-2xl hover:border-rosegold-500 border border-gray-200 transition-all duration-300 flex flex-col rounded-3xl"
          >
            {/* Image Section */}
            <div className="h-48 w-full overflow-hidden relative shrink-0 rounded-t-3xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-rosegold-500 text-pearl-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Tag size={10} /> {post.category}
              </div>
            </div>
            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between flex-grow bg-white rounded-b-3xl">
              <div>
                <div className="flex flex-wrap gap-2 text-gray-405 text-[9px] mb-3 font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={11} className="text-rosegold-500" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={11} className="text-rosegold-500" /> By {post.author}</span>
                </div>
                <h3 className="font-playfair text-base text-gray-900 mb-3 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide font-bold line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-5 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-rosegold-500 group-hover:text-rosegold-400 transition-colors mt-auto">
                Read Article <ArrowRight size={14} />
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
