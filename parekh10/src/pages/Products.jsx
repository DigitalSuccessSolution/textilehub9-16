import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

const allProducts = [
  { id: 101, name: 'Premium Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80' },
  { id: 102, name: 'Activewear Lycra Leggings', category: 'Leggings', image: 'https://images.pexels.com/photos/16701772/pexels-photo-16701772.jpeg' },
  { id: 103, name: 'Designer Cotton Kurti', category: 'Kurtis', image: 'https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg' },
  { id: 104, name: 'Elegant Dress Suit', category: 'Dress Suits', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80' },
  { id: 105, name: 'Luxury Cotton Bedsheet', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=80' },
  { id: 106, name: 'Premium Hosiery Wear', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80' },
  { id: 107, name: 'Classic Men Suiting Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80' },
  { id: 108, name: 'Premium Cotton Shirting', category: 'Shirting', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80' },
  { id: 109, name: 'Designer Lehenga Choli', category: 'Formal & Ethnic Wear for Women', image: 'https://images.pexels.com/photos/9900510/pexels-photo-9900510.jpeg' },
  { id: 110, name: 'Classic Ethnic Sherwani', category: 'Formal & Ethnic Wear for Men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80' },
  { id: 111, name: 'Kids Ethnic Wear', category: 'Formal & Ethnic Wear for Children', image: 'https://images.unsplash.com/photo-1622290319146-7b63df48a635?w=600&auto=format&fit=crop&q=80' },
  { id: 112, name: 'Luxury Upholstery', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=80' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our Collections
          </h1>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-white border border-[#E8E3D9] text-[#5F6F5E]">
            <ShoppingBag size={14} className="shrink-0" />
            <span className="font-bold text-xs">{filteredProducts.length} Products Available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Left Sidebar */}
          <aside className="hidden lg:block lg:w-1/4 shrink-0 text-left">
            <div className="bg-white rounded-2xl border border-[#E8E3D9] p-6 sticky top-24 shadow-sm">
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-bold text-[#2C362B] mb-5 border-b border-[#E8E3D9] pb-3 uppercase tracking-wider">
                Categories
              </h3>
              <ul className="space-y-1 max-h-[350px] overflow-y-auto pr-1 scrollbar-thin">
                {['All', ...categories].map(cat => {
                  const isActive = activeCategory === cat;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-[12.5px] font-bold transition-all duration-150 flex items-center justify-between group ${
                          isActive 
                            ? 'bg-[#5F6F5E] text-white shadow-sm' 
                            : 'text-[#454B45] hover:bg-[#5F6F5E]/5 hover:text-[#5F6F5E]'
                        }`}
                      >
                        <span className="truncate">{cat}</span>
                        <ChevronRight size={13} className={`transition-transform duration-200 shrink-0 ${isActive ? 'translate-x-0.5' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-grow w-full">
            
            {/* Mobile Categories Horizontally Scrollable list */}
            <div className="lg:hidden flex overflow-x-auto gap-2 pb-5 scrollbar-none snap-x snap-mandatory mb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {['All', ...categories].map(cat => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className="px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap transition-all duration-200 snap-start shrink-0"
                    style={isActive
                      ? { background: '#5F6F5E', color: '#fff', boxShadow: '0 4px 12px rgba(95,111,94,0.25)' }
                      : { background: '#FFFFFF', color: '#454B45', border: '1.5px solid #E8E3D9' }
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                    style={{ border: '1.5px solid #E8E3D9' }}
                  >
                    <div className="h-60 w-full relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'rgba(44,54,43,0.25)' }} />
                    </div>
                    <div className="p-4 text-center border-t border-[#E8E3D9]">
                      <p className="text-[10px] uppercase tracking-widest font-bold mb-1.5 text-[#8A6F4E]">
                        {product.category}
                      </p>
                      <h3 className="font-bold text-base text-[#2C362B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 rounded-3xl bg-white"
                style={{ border: '1.5px solid #E8E3D9' }}>
                <p className="text-lg font-bold text-[#5D645D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Products for this category will be available soon.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
