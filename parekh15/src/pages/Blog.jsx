import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Heritage", "Collections", "Sustainability"];

  const posts = [
    {
      id: 1,
      title: "The Art of Handloom Weaving: Retaining Heritage in a Fast World",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60",
      author: "Rajiv Parekh",
      category: "Heritage",
      publishDate: "June 25, 2026",
      description: "Explore the intricate process of Indian handloom weaving. Learn how traditional artisans weave stories of luxury, culture, and pure silk into every thread."
    },
    {
      id: 2,
      title: "Unveiling the Autumn Palette: Rose Gold & Emerald Silks",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=60",
      author: "Ananya Sharma",
      category: "Collections",
      publishDate: "June 18, 2026",
      description: "A deep dive into our latest premium ethnic collection. Discover how warm rose gold hues merge with traditional emerald green silks for weddings."
    },
    {
      id: 3,
      title: "Sustainable Textiles: The Rise of Organic Cotton & Eco-Friendly Dyes",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=60",
      author: "Vikram Mehta",
      category: "Sustainability",
      publishDate: "June 05, 2026",
      description: "As B2B textile demand grows, ecological sustainability becomes key. Discover our eco-friendly organic cotton range and water-saving dying methods."
    }
  ];

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">The Journal</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Insights, News & Collections</p>
        </div>
      </div>

      {/* Intro Paragraph above categories */}
      <p className="text-gray-500 text-xs tracking-wide mb-4">
        Browse our latest announcements, updates, and design journals by category.
      </p>

      {/* Category Tabs list */}
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
          {filteredPosts.map((post) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer bg-white overflow-hidden shadow-lg hover:shadow-2xl hover:border-rosegold-500 border border-gray-200 transition-all duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="h-36 sm:h-56 w-full overflow-hidden relative shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white text-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </div>
              {/* Content Section */}
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[9px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                    <span>{post.publishDate}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-rosegold-500 font-bold hidden sm:inline">{post.category}</span>
                  </div>
                  <h3 className="font-playfair text-xs sm:text-lg text-gray-900 mb-2 sm:mb-3 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-550 text-[10px] sm:text-xs leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 font-semibold truncate max-w-[80px] sm:max-w-none">By {post.author}</span>
                  <p className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-rosegold-500 group-hover:text-rosegold-400 transition-colors">
                    Read <ArrowRight size={10} />
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {/* Empty Category State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white border border-gray-200 shadow-sm">
            <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">No blog posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
