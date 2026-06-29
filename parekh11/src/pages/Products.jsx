import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronDown } from 'lucide-react';

const categories = [
  "Sarees",
  "Leggings",
  "Kurtis",
  "Dress Suits",
  "Bedsheets & Linen",
  "Hosiery Items",
  "Suiting",
  "Shirting",
  "Formal & Ethnic Wear for Women",
  "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children",
  "Home Upholstery & Furnishing"
];

// Product mock data
const allProducts = [
  { id: 101, name: 'Premium Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?w=600&auto=format&fit=crop&q=60' },
  { id: 102, name: 'Stretchable Premium Leggings', category: 'Leggings', image: 'https://images.pexels.com/photos/31443911/pexels-photo-31443911.jpeg' },
  { id: 103, name: 'Designer Kurti Set', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60' },
  { id: 104, name: 'Elegant Designer Dress Suit', category: 'Dress Suits', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60' },
  { id: 105, name: 'Luxury Cotton Bedsheet', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60' },
  { id: 106, name: 'Premium Cotton Hosiery Socks', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=60' },
  { id: 107, name: 'Classic Men Suit Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&auto=format&fit=crop&q=60' },
  { id: 108, name: 'Premium Shirting Material', category: 'Shirting', image: 'https://images.pexels.com/photos/8483478/pexels-photo-8483478.jpeg' },
  { id: 109, name: 'Royal Silk Banarasi Anarkali', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
  { id: 110, name: 'Premium Jacquard Sherwani', category: 'Formal & Ethnic Wear for Men', image: 'https://images.pexels.com/photos/16199169/pexels-photo-16199169.jpeg' },
  { id: 111, name: 'Kids Traditional Kurta Pyjama', category: 'Formal & Ethnic Wear for Children', image: 'https://images.pexels.com/photos/17015459/pexels-photo-17015459.jpeg' },
  { id: 112, name: 'Luxurious Sofa Upholstery', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Filter products by category
  const filteredProducts = allProducts.filter(product => {
    return activeCategory === "All" || product.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="pb-20" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FDFBF7' }}>

      {/* Hero Banner */}
      <div className="relative h-44 overflow-hidden flex items-center justify-center text-center bg-[#FDFBF7] border-b border-[#EAE3D9]/60">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Collections
          </h1>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-white border border-[#EAE3D9] text-[#4E6C50]">
            <ShoppingBag size={14} className="shrink-0" />
            <span className="font-extrabold text-xs">{filteredProducts.length} Products Available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Category Filter Dropdown Container */}
        <div className="bg-white border border-[#EAE3D9] p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm mb-8 sm:mb-10 w-full max-w-sm sm:max-w-md mx-auto">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-extrabold tracking-widest uppercase text-[#8A6F4E] pl-1">
              Filter by Category
            </label>
            {/* Category Dropdown Select */}
            <div className="relative flex items-center">
              <select
                value={activeCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl text-[13px] sm:text-sm font-bold outline-none appearance-none transition-all duration-200 pr-10 cursor-pointer shadow-sm hover:border-[#4E6C50]/50 focus:border-[#4E6C50] focus:ring-2 focus:ring-[#4E6C50]/10"
                style={{ background: '#FDFBF7', border: '1.5px solid #EAE3D9', color: '#2C362B' }}
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 text-[#4E6C50] pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 text-left max-w-6xl mx-auto">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                style={{ border: '1.5px solid #EAE3D9' }}
              >
                <div className="h-64 w-full relative overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(44,54,43,0.15)' }} />
                </div>
                
                <div className="p-5 text-center border-t border-[#EAE3D9]">
                  <p className="text-[10px] uppercase tracking-widest font-extrabold mb-1 text-[#8A6F4E]">
                    {product.category}
                  </p>
                  <h3 className="font-extrabold text-lg text-[#2C362B]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-3xl bg-white max-w-3xl mx-auto border border-[#EAE3D9]">
            <p className="text-lg font-bold text-[#5D645D]" style={{ fontFamily: "'Playfair Display', serif" }}>
              No products found matching your search.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
