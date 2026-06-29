import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, ChevronDown } from 'lucide-react';

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
  { id: 101, name: 'Elegant Banarasi Katan Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80' },
  { id: 102, name: 'Premium Cotton Lycra Leggings', category: 'Leggings', image: 'https://images.pexels.com/photos/16701769/pexels-photo-16701769.jpeg' },
  { id: 103, name: 'Designer Chanderi Embroidery Kurti', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=80' },
  { id: 104, name: 'Elegant Anarkali Designer Dress Suit', category: 'Dress Suits', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80' },
  { id: 105, name: 'Luxury Egyptian Cotton Bedsheet', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80' },
  { id: 106, name: 'Premium Soft Cotton Socks', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80' },
  { id: 107, name: 'Classic Italian Wool Suiting Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&auto=format&fit=crop&q=80' },
  { id: 108, name: 'Royal Giza Cotton Shirting Fabric', category: 'Shirting', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80' },
  { id: 109, name: 'Exquisite Bridal Lehenga Choli', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80' },
  { id: 110, name: 'Designer Bandhgala Jodhpuri Suit', category: 'Formal & Ethnic Wear for Men', image: 'https://images.pexels.com/photos/7897576/pexels-photo-7897576.jpeg' },
  { id: 111, name: 'Kids Traditional Silk Kurta Pyjama', category: 'Formal & Ethnic Wear for Children', image: 'https://images.pexels.com/photos/33468174/pexels-photo-33468174.jpeg' },
  { id: 112, name: 'Premium Jacquard Sofa Upholstery Fabric', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80' },
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
    <div className="pb-20" style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative h-44 overflow-hidden flex items-center justify-center text-center bg-[#FAF6F0] border-b border-[#EADBC8]/60">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our Collections
          </h1>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-white border border-[#EADBC8] text-[#2A083E]">
            <ShoppingBag size={14} className="shrink-0" />
            <span className="font-extrabold text-xs">{filteredProducts.length} Products Available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Categories Horizontal Filter List */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`px-4 py-2 text-xs font-extrabold uppercase rounded-full tracking-wider border transition-all duration-200 ${
              activeCategory === "All"
                ? "bg-[#2A083E] text-white border-[#2A083E]"
                : "bg-white text-[#2A083E] border-[#EADBC8] hover:bg-[#FAF6F0]"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 text-xs font-extrabold uppercase rounded-full tracking-wider border transition-all duration-200 ${
                activeCategory.toLowerCase() === cat.toLowerCase()
                  ? "bg-[#2A083E] text-white border-[#2A083E]"
                  : "bg-white text-[#2A083E] border-[#EADBC8] hover:bg-[#FAF6F0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 text-left max-w-7xl mx-auto">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                style={{ border: '1.5px solid #EADBC8' }}
              >
                <div className="h-40 sm:h-64 w-full relative overflow-hidden bg-[#FAF6F0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(42,8,62,0.1)' }} />
                </div>
                
                <div className="p-3 sm:p-5 text-center border-t border-[#EADBC8]">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-extrabold mb-1 text-[#C5A059]">
                    {product.category}
                  </p>
                  <h3 className="font-extrabold text-sm sm:text-lg text-[#2A083E]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl bg-white max-w-3xl mx-auto border border-[#EADBC8]">
            <p className="text-lg font-bold text-[#504257]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              No products found matching your search.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
