import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  { title: "The Future of Sustainable Weaving", date: "June 10, 2026", category: "Innovation", author: "Priya Sharma", readTime: "5 min read", description: "Discover how sustainable practices are reshaping the textile industry and what it means for the future of weaving.", image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" },
  { title: "Elegance in Threads: The Fall Collection", date: "May 28, 2026", category: "Collections", author: "Rajiv Kapoor", readTime: "4 min read", description: "A deep dive into the inspiration and craftsmanship behind our exclusive new fall collection.", image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" },
  { title: "Behind the Scenes: Crafting the Perfect Saree", date: "May 15, 2026", category: "Craftsmanship", author: "Ananya Patel", readTime: "6 min read", description: "Explore the intricate details, passion, and time required to craft a single masterpiece silk saree.", image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative pt-12 sm:pt-16 pb-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Blog & Articles
          </h1>
          
          <p className="text-[16px] sm:text-[18px] md:text-[20px] italic mb-8 text-[#5D645D] leading-relaxed max-w-3xl">
            "Join and participate in our nation-wide campaign to digitalize the Textile<br className="hidden md:block"/> Sector, one of the largest sectors of India".
          </p>

   

          <div className="w-32 sm:w-48 h-[1px] bg-[#E8E3D9]" />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 pt-2">
        
        <div className="text-center mb-8">
        
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["All", "Innovation", "Collections", "Craftsmanship", "Trends"].map(cat => (
              <span 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-[#E8E3D9] cursor-pointer transition-colors ${
                  activeCategory === cat 
                    ? "bg-[#5F6F5E] text-white" 
                    : "text-[#2C362B] bg-white hover:bg-[#5F6F5E] hover:text-white"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white"
              style={{ border: '1.5px solid #E8E3D9' }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9]" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.3)', color: '#5F6F5E', backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-semibold text-[#7E857E]">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#5F6F5E]" />
                  <span className="text-[11px] font-semibold text-[#7E857E]">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 leading-snug group-hover:text-[#5F6F5E] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C362B' }}>
                  {post.title}
                </h3>
                <p className="text-[12px] mb-3 text-[#5D645D] font-medium line-clamp-2">{post.description}</p>
                <p className="text-[12px] mb-4 text-[#8A6F4E] font-bold uppercase tracking-wide">By {post.author}</p>
                <div className="mt-auto pt-3 border-t border-[#E8E3D9]/60">
                  <span className="flex items-center gap-1.5 text-[12px] font-bold tracking-wide text-[#5F6F5E]">
                    Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
