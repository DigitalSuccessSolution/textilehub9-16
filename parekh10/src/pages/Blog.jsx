import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  { title: "The Art of Indian Sarees: Silk, Cotton and Georgette styling tips", date: "June 25, 2026", category: "Styling", author: "Pooja Hegde", readTime: "5 min read", desc: "Learn the secrets of draping and styling different saree fabrics to look elegant for weddings, festivals, and corporate meetings.", image: "https://images.pexels.com/photos/8886953/pexels-photo-8886953.jpeg" },
  { title: "Why Sustainable Fabrics are the Future of Indian Textile Industry", date: "June 18, 2026", category: "Sustainability", author: "Rajesh Iyer", readTime: "6 min read", desc: "Discover how eco-friendly cotton sourcing and natural dyes are transforming the supply chain at modern Indian textile malls.", image: "https://images.pexels.com/photos/36656990/pexels-photo-36656990.jpeg" },
  { title: "Home Furnishing Trends: How to Transform Your Living Room", date: "June 05, 2026", category: "Home Decor", author: "Anjali Sen", readTime: "4 min read", desc: "Elevate your home interiors with our selection of curated bedsheets, luxury curtains, and premium upholstery fabrics.", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=80" },
];

const categories = ['All', 'Styling', 'Sustainability', 'Home Decor'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative pt-16 sm:pt-24 pb-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Blog & Articles
          </h1>
          
          <p className="text-[16px] sm:text-[18px] md:text-[20px] italic mb-8 text-[#5D645D] leading-relaxed max-w-3xl">
            "Join and participate in our nation-wide campaign to digitalize the Textile<br className="hidden md:block"/> Sector, one of the largest sectors of India".
          </p>

          <h2 className="text-base sm:text-lg font-bold tracking-widest mb-2 uppercase text-[#2C362B]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Sandhya Textile Mall
          </h2>
          
          <p className="text-[11px] sm:text-[13px] font-bold tracking-wide mb-1 text-[#8A6F4E]">
            Textile Manufacturer & Entrepreneur
          </p>
          
          <p className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-8 text-[#7E857E]">
            INDIA
          </p>

          <div className="w-32 sm:w-48 h-[1px] bg-[#E8E3D9]" />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 pt-4">
        
        <div className="text-center mb-10">
        
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

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white text-left"
              style={{ border: '1.5px solid #E8E3D9' }}
            >
              <div className="relative w-full aspect-[16/12] sm:aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9]" />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.3)', color: '#5F6F5E', backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-3 sm:p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-[9px] sm:text-[11px] font-semibold text-[#7E857E]">{post.date}</span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#5F6F5E]" />
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-[#7E857E]">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-[13px] sm:text-lg mb-1 sm:mb-2 leading-tight sm:leading-snug group-hover:text-[#5F6F5E] transition-colors line-clamp-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C362B' }}>
                  {post.title}
                </h3>
                <p className="text-[10px] sm:text-[11.5px] mb-2 sm:mb-3 text-[#5F6F5E] font-semibold uppercase tracking-wider">By {post.author}</p>
                <p className="text-[11px] sm:text-[12.5px] leading-relaxed text-[#5D645D] font-medium mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-3">{post.desc}</p>
                <div className="mt-auto pt-3 sm:pt-4 border-t border-[#E8E3D9]/60">
                  <span className="flex items-center gap-1.5 text-[10px] sm:text-[12px] font-bold tracking-wide text-[#5F6F5E]">
                    Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200 sm:w-[13px]" />
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
