import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function Products() {
  const categories = [
    "Sarees", "Leggings", "Kurtis", "Dress Suits", 
    "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting", 
    "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men", 
    "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
  ];

  const allProducts = [
    { id: 101, name: 'Premium Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?w=600&auto=format&fit=crop&q=60' },
    { id: 105, name: 'Embroidered Silk Saree', category: 'Sarees', image: 'https://images.pexels.com/photos/12850126/pexels-photo-12850126.jpeg' },
    { id: 102, name: 'Designer Kurti Set', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60' },
    { id: 106, name: 'Printed Cotton Kurti', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=60' },
    { id: 103, name: 'Luxury Cotton Bedsheet', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60' },
    { id: 107, name: 'Premium Percale Linen Set', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60' },
    { id: 104, name: 'Classic Men Suit Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&auto=format&fit=crop&q=60' },
    { id: 108, name: 'Bespoke Woolen Suiting Material', category: 'Suiting', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=60' },
    { id: 109, name: 'Premium Cotton Leggings', category: 'Leggings', image: 'https://images.pexels.com/photos/9291842/pexels-photo-9291842.jpeg' },
    { id: 110, name: 'Stretchable Active Leggings', category: 'Leggings', image: 'https://images.pexels.com/photos/16701769/pexels-photo-16701769.jpeg' },
    { id: 111, name: 'Classic Anarkali Dress Suit', category: 'Dress Suits', image: 'https://images.pexels.com/photos/19956044/pexels-photo-19956044.jpeg' },
    { id: 112, name: 'Designer Georgette Salwar Suit', category: 'Dress Suits', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=60' },
    { id: 113, name: 'Super-Soft Cotton Socks Set', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=60' },
    { id: 114, name: 'Premium Cotton Innerwear', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=60' },
    { id: 115, name: 'Royal Oxford Shirt Fabric', category: 'Shirting', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=60' },
    { id: 116, name: 'Premium Linen Shirting Fabric', category: 'Shirting', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=60' },
    { id: 117, name: 'Handcrafted Banarasi Lehenga', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
    { id: 118, name: 'Designer Wedding Gown', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60' },
    { id: 119, name: 'Royal Sherwani with Zardozi', category: 'Formal & Ethnic Wear for Men', image: 'https://images.unsplash.com/photo-1678805408312-04e5fd7a9dcc?w=600&auto=format&fit=crop&q=60' },
    { id: 120, name: 'Premium Silk Kurta Pyjama Set', category: 'Formal & Ethnic Wear for Men', image: 'https://images.pexels.com/photos/5465927/pexels-photo-5465927.jpeg' },
    { id: 121, name: 'Kids Silk Kurta Set', category: 'Formal & Ethnic Wear for Children', image: 'https://images.pexels.com/photos/17015449/pexels-photo-17015449.jpeg' },
    { id: 122, name: 'Little Princess Lehenga', category: 'Formal & Ethnic Wear for Children', image: 'https://images.pexels.com/photos/8819062/pexels-photo-8819062.jpeg' },
    { id: 123, name: 'Jacquard Cushion Covers Set', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=60' },
    { id: 124, name: 'Luxury Damask Living Room Curtains', category: 'Home Upholstery & Furnishing', image: 'https://images.pexels.com/photos/33482782/pexels-photo-33482782.jpeg' }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  // Group filtered products by category for display, keeping the order of categories array
  const groupedProducts = {};
  categories.forEach(cat => {
    const productsInCat = filteredProducts.filter(p => p.category === cat);
    if (productsInCat.length > 0) {
      groupedProducts[cat] = productsInCat;
    }
  });

  return (
    <div className="pb-16 -mt-8 max-w-7xl mx-auto px-4">
      {/* Centered Page Header */}
      <div className="text-center pt-0 pb-2 mb-6">
        <p className="text-rosegold-500 font-bold tracking-[0.2em] uppercase text-xs mb-2">HERITAGE GARMENTS</p>
        <h1>Catalogue</h1>
      </div>
      
      {/* Centered Product Count Badge */}
      <div className="flex justify-center mb-10">
        <div className="bg-pearl-50 text-gray-800 px-6 py-3 border border-gray-200 flex items-center gap-3 shadow-lg w-fit">
          <ShoppingBag size={18} className="text-rosegold-500" />
          <span className="font-bold text-sm">{filteredProducts.length} Products</span>
        </div>
      </div>

      {/* Categories Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        <button 
          onClick={() => setActiveCategory("All")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors border ${
            activeCategory === "All" 
              ? "bg-[#d8a5ad] text-white border-[#d8a5ad]" 
              : "bg-white text-gray-600 border-gray-200 hover:border-[#d8a5ad]"
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === cat 
                ? "bg-[#d8a5ad] text-white border-[#d8a5ad]" 
                : "bg-white text-gray-600 border-gray-200 hover:border-[#d8a5ad]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Display Grouped by Category */}
      <div className="space-y-16">
        {Object.entries(groupedProducts).map(([categoryName, products]) => (
          <div key={categoryName}>
            <h2 className="font-playfair text-2xl text-[#2d0a4e] font-bold mb-6">{categoryName}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map(product => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="h-36 sm:h-64 w-full relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-5 text-center bg-white border-t border-gray-100">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 mb-1.5 font-medium">
                      {product.category}
                    </p>
                    <h3 className="font-playfair text-sm sm:text-lg text-[#2d0a4e] font-bold leading-tight line-clamp-1 sm:line-clamp-none">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-playfair text-2xl text-gray-400">Products for this category will be available soon.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
