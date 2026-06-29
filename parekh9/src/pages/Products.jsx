import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

const allProducts = [
  { id: 101, name: 'Premium Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
  { id: 102, name: 'Stretch Cotton Leggings', category: 'Leggings', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&auto=format&fit=crop&q=60' },
  { id: 103, name: 'Embroidered Georgette Kurti', category: 'Kurtis', image: 'https://images.pexels.com/photos/8886955/pexels-photo-8886955.jpeg' },
  { id: 104, name: 'Ethnic Anarkali Dress Suit', category: 'Dress Suits', image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&auto=format&fit=crop&q=60' },
  { id: 105, name: 'Luxury Combed Bedsheet', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60' },
  { id: 106, name: 'Premium Cotton Socks Set', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=60' },
  { id: 107, name: 'Classic Woolen Suiting Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
  { id: 108, name: 'Premium Linen Shirting Fabric', category: 'Shirting', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=60' },
  { id: 109, name: 'Designer Bridal Lehenga', category: 'Formal & Ethnic Wear for Women', image: 'https://images.pexels.com/photos/30541606/pexels-photo-30541606.jpeg' },
  { id: 110, name: 'Royal Sherwani Suit', category: 'Formal & Ethnic Wear for Men', image: 'https://images.pexels.com/photos/16199169/pexels-photo-16199169.jpeg' },
  { id: 111, name: 'Kids Ethnic Kurta Set', category: 'Formal & Ethnic Wear for Children', image: 'https://images.pexels.com/photos/17015449/pexels-photo-17015449.jpeg' },
  { id: 112, name: 'Luxury Velvet Cushion Covers', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60' }
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
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430]"
              style={{ fontFamily: "'Marcellus', serif" }}>
              Catalogue
          </h1>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full shadow-md bg-white border border-[#EADCD2] text-[#A24E51]">
            <ShoppingBag size={15} />
            <span className="font-bold text-xs">{filteredProducts.length} Products</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className="px-4 py-2 rounded-full text-[12px] font-bold transition-all duration-200"
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #A24E51, #C37E80)', color: '#fff', boxShadow: '0 4px 12px rgba(162,78,81,0.3)' }
                : { background: '#FFFFFF', color: '#554D48', border: '1.5px solid #EADCD2' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                style={{ border: '1.5px solid #EADCD2' }}
              >
                <div className="h-40 sm:h-60 w-full relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(35,28,24,0.3)' }} />
                </div>
                <div className="p-3 sm:p-4 text-center border-t border-[#EADCD2]">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold mb-1.5 text-[#A24E51]">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-sm sm:text-base text-[#3C3430]" style={{ fontFamily: "'Marcellus', serif" }}>
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl bg-white"
            style={{ border: '1.5px solid #EADCD2' }}>
            <p className="text-xl font-bold text-[#706863]" style={{ fontFamily: "'Marcellus', serif" }}>
              Products for this category will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
