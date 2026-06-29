import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", description: "Exploring how sustainable weaving practices are reshaping the textile industry and our commitment to eco-friendly production methods.", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", description: "A deep dive into the design and craftsmanship behind our latest Fall Collection, featuring premium silks and rich embroideries.", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", description: "Discover the meticulous step-by-step journey of creating our signature sarees, from yarn selection to the final exquisite finish.", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = posts.filter(post => 
    activeCategory === "All" || post.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#1A1B23' }}>

      {/* Hero Banner */}
      <div className="relative pt-12 sm:pt-16 pb-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6] mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Blog & Articles
          </h1>
          <div className="w-32 sm:w-48 h-[1px] bg-[#343545]" />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 pt-4 pb-12">
        <div className="text-center mb-10">
          <p className="text-[14px] text-[#9CA3AF] mb-4">Explore insights and stories across various domains.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Innovation", "Collections", "Craftsmanship", "Trends", "News"].map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <span
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-full cursor-pointer transition-colors border ${
                    isActive
                      ? "text-black bg-[#C89B5F] border-[#C89B5F]"
                      : "text-[#C89B5F] bg-[#C89B5F]/10 border-[#C89B5F]/20 hover:bg-[#C89B5F]/20"
                  }`}
                >
                  {cat}
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden hover:shadow-md transition-all duration-300 bg-[#242530]"
              style={{ border: '1.5px solid #343545' }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9]" />
                <div className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(200,155,95,0.1)', border: '1px solid rgba(200,155,95,0.3)', color: '#C89B5F', backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-semibold text-[#9CA3AF]">{post.date}</span>
                  <span className="w-1 h-1 bg-[#C89B5F]" />
                  <span className="text-[11px] font-semibold text-[#9CA3AF]">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-sm sm:text-lg mb-2 leading-snug group-hover:text-[#C89B5F] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F3F4F6' }}>
                  {post.title}
                </h3>
                <p className="text-[10px] sm:text-[12px] mb-2 text-[#9CA3AF] font-semibold">By {post.author}</p>
                <p className="text-[10px] sm:text-[12.5px] leading-relaxed text-[#D1D5DB] mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-auto pt-3 border-t border-[#343545]">
                  <span className="flex items-center gap-1.5 text-[10px] sm:text-[12px] font-bold tracking-wide text-[#C89B5F]">
                    Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[#9CA3AF] text-sm font-semibold">No articles found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
