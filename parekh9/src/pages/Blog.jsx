import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  { 
    title: "Preserving the Art of Handloom Weaving", 
    date: "June 12, 2026", 
    category: "Heritage", 
    author: "Aarav Sen", 
    description: "Explore the intricate journey of Indian handloom fabrics and our collaborative efforts to preserve these traditional artisanal crafts.", 
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80" 
  },
  { 
    title: "Eco-Friendly Textile Innovations in 2026", 
    date: "May 30, 2026", 
    category: "Sustainability", 
    author: "Dr. Meera Iyer", 
    description: "How organic cotton fibers, natural plant-based dyes, and zero-waste patterns are redefining modern textile retail operations.", 
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80" 
  },
  { 
    title: "Modern B2B Strategies for Retailers", 
    date: "May 10, 2026", 
    category: "Business", 
    author: "Karan Malhotra", 
    description: "Analyzing the transition to digital B2B quotation systems and transparent e-Auction models to streamline vendor logistics.", 
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80" 
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0' }}>

      {/* Hero Banner */}
      <div className="relative pt-16 sm:pt-24 pb-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430] mb-6"
            style={{ fontFamily: "'Marcellus', serif" }}>
            Blog & Articles
          </h1>
          
          <p className="text-[16px] sm:text-[18px] md:text-[20px] italic mb-8 text-[#6F5547] leading-relaxed max-w-3xl">
            "Join and participate in our nation-wide campaign to digitalize the Textile<br className="hidden md:block"/> Sector, one of the largest sectors of India".
          </p>

          <h2 className="text-base sm:text-lg font-bold tracking-widest mb-2 uppercase text-[#3C3430]"
              style={{ fontFamily: "'Marcellus', serif" }}>
            Vastramall
          </h2>
          
          <p className="text-[11px] sm:text-[13px] font-bold tracking-wide mb-1 text-[#A24E51]">
            Textile Manufacturer & Entrepreneur
          </p>
          
          <p className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-8 text-[#908882]">
            INDIA
          </p>

          <div className="w-32 sm:w-48 h-[1px] bg-[#EADCD2]" />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-6">
    

        {/* Category Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {['All', 'Heritage', 'Sustainability', 'Business'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-[12px] font-bold transition-all duration-200 cursor-pointer"
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #A24E51, #C37E80)', color: '#fff', boxShadow: '0 4px 12px rgba(162,78,81,0.3)' }
                : { background: '#FFFFFF', color: '#554D48', border: '1.5px solid #EADCD2' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white"
              style={{ border: '1.5px solid #EADCD2' }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(162,78,81,0.1)', border: '1px solid rgba(162,78,81,0.3)', color: '#A24E51', backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-3 sm:p-5 flex flex-col flex-1 text-left">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold mb-1.5 text-[#A24E51]">
                  {post.category}
                </p>
                <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 leading-snug group-hover:text-[#A24E51] transition-colors"
                  style={{ fontFamily: "'Marcellus', serif", color: '#3C3430' }}>
                  {post.title}
                </h3>
                <p className="text-[11.5px] sm:text-[13.5px] leading-relaxed text-[#706863] mb-4 sm:mb-5 font-medium flex-grow line-clamp-3 sm:line-clamp-none">
                  {post.description}
                </p>
                <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-[#EADCD2] text-[9.5px] sm:text-[11px] font-bold text-[#908882]">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
