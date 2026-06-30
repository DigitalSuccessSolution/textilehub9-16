import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, SlidersHorizontal, X, Search } from 'lucide-react';

export default function Products() {
  const categories = [
    "Sarees", "Leggings", "Kurtis", "Dress Suits", 
    "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting", 
    "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men", 
    "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
  ];

  const allProducts = [
    { id: 101, name: 'Royal Kanjivaram Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
    { id: 102, name: 'Premium Cotton Leggings', category: 'Leggings', image: 'https://images.pexels.com/photos/16701769/pexels-photo-16701769.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 103, name: 'Artisanal Designer Kurti', category: 'Kurtis', image: 'https://images.pexels.com/photos/20702674/pexels-photo-20702674.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 104, name: 'Elegant Salwar Kameez Suit', category: 'Dress Suits', image: 'https://images.pexels.com/photos/25184999/pexels-photo-25184999.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 105, name: 'Luxury Cotton Bedsheet Set', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60' },
    { id: 106, name: 'Soft-Knit Hosiery Collection', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=60' },
    { id: 107, name: 'Premium Blazer & Suiting Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
    { id: 108, name: 'Classic Linen Shirting Fabric', category: 'Shirting', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=60' },
    { id: 109, name: 'Bridal Heritage Lehenga Choli', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=60' },
    { id: 110, name: 'Handcrafted Men Sherwani Set', category: 'Formal & Ethnic Wear for Men', image: 'https://images.pexels.com/photos/16199169/pexels-photo-16199169.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 111, name: 'Kids Festive Kurta Pajama', category: 'Formal & Ethnic Wear for Children', image: 'https://images.pexels.com/photos/17015449/pexels-photo-17015449.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 112, name: 'Luxury Drapes & Cushion Covers', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60' }
  ];

  const categoryDetails = {
    "All": { desc: "View our entire catalogue of premium products", monogram: "ALL" },
    "Sarees": { desc: "Elegant silk, banarasi & cotton weaves", monogram: "SR" },
    "Leggings": { desc: "Premium comfort fit and stretchy leggings", monogram: "LG" },
    "Kurtis": { desc: "Artisanal designer kurtis & tunic sets", monogram: "KR" },
    "Dress Suits": { desc: "Graceful salwar suits & ethnic dress sets", monogram: "DS" },
    "Bedsheets & Linen": { desc: "Luxurious pure cotton linens & sheets", monogram: "BL" },
    "Hosiery Items": { desc: "Comfy soft-knit daily hosiery items", monogram: "HS" },
    "Suiting": { desc: "Premium blazer & classic suit fabrics", monogram: "ST" },
    "Shirting": { desc: "Crisp cotton, linen & executive shirting", monogram: "SH" },
    "Formal & Ethnic Wear for Women": { desc: "Bridal, festival & celebration wear", monogram: "FW" },
    "Formal & Ethnic Wear for Men": { desc: "Classic sherwanis, bandhgalas & kurtas", monogram: "FM" },
    "Formal & Ethnic Wear for Children": { desc: "Vibrant ethnic clothes for boys & girls", monogram: "FC" },
    "Home Upholstery & Furnishing": { desc: "Drapes, cushions & bespoke furnishings", monogram: "HU" }
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  // Group filtered products by category for display ONLY when not "All"
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const getProductCount = (categoryName) => {
    if (categoryName === "All") return allProducts.length;
    return allProducts.filter(p => p.category === categoryName).length;
  };

  const filteredCategories = categories.filter(cat => 
    cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-7xl mx-auto px-4 relative">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Catalogue</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Explore Our Exquisite Collections</p>
        </div>
      </div>
      
      {/* Filter & Spacing Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-gray-200">
        {/* Count Badge & Active Category Indicator */}
        <div className="bg-white text-gray-800 px-6 py-3.5 border border-gray-200 flex items-center gap-3 shadow-md w-full sm:w-auto font-semibold text-xs md:text-sm">
          <ShoppingBag size={18} className="text-rosegold-500" />
          <span>{filteredProducts.length} Products Available</span>
          <span className="text-gray-300">|</span>
          <span className="text-rosegold-500 uppercase tracking-widest text-xs">Active: {activeCategory}</span>
        </div>

        {/* Filter Trigger Button */}
        <button
          onClick={() => {
            setSearchQuery("");
            setIsFilterOpen(true);
          }}
          className="group relative bg-slate-950 text-white hover:bg-rosegold-500 hover:text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center gap-2.5 cursor-pointer border border-slate-900 w-full sm:w-auto justify-center overflow-hidden"
        >
          <span className="absolute inset-0 bg-rosegold-500 transition-transform duration-300 -translate-x-full group-hover:translate-x-0 z-0" />
          <SlidersHorizontal size={14} className="relative z-10 group-hover:rotate-180 transition-transform duration-500" />
          <span className="relative z-10">Select Category Collection</span>
        </button>
      </div>

      {/* Centered Category Selection Popup Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] cursor-pointer"
            />

            {/* Centered Modal Container */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6 pointer-events-none">
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="pointer-events-auto bg-white max-w-4xl w-full max-h-[85vh] flex flex-col p-6 md:p-8 border border-gray-200 shadow-2xl relative"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsFilterOpen(false)} 
                  className="absolute top-4 right-4 text-gray-400 hover:text-rosegold-500 transition-all duration-300 hover:rotate-90 p-2 z-10 cursor-pointer"
                  aria-label="Close Modal"
                >
                  <X size={20} />
                </button>

                {/* Header */}
                <div className="pb-5 border-b border-gray-200 shrink-0 pr-10 mb-6">
                  <h3 className="font-playfair text-xl text-gray-900 font-semibold uppercase tracking-wider border-b-2 border-rosegold-500 pb-1.5 w-fit">
                    Explore Collections
                  </h3>
                </div>

                {/* Categories Scrollable Grid */}
                <div className="flex-grow overflow-y-auto py-2 pr-1 custom-scrollbar">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* "All" Card */}
                    <button
                      onClick={() => {
                        setActiveCategory("All");
                        setIsFilterOpen(false);
                      }}
                      className={`group relative text-left p-4 border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        activeCategory === "All"
                          ? "bg-rosegold-500 border-rosegold-500 text-white shadow-md"
                          : "bg-pearl-100 border-gray-200 text-gray-800 hover:border-rosegold-500 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <span className="text-xs font-semibold uppercase tracking-widest">
                        All Collections
                      </span>
                      <span className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 ${
                        activeCategory === "All" ? "bg-white/20 text-white" : "bg-gray-200/70 text-gray-500"
                      }`}>
                        {getProductCount("All")} Items
                      </span>
                    </button>

                    {/* Filtered Categories Cards */}
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsFilterOpen(false);
                        }}
                        className={`group relative text-left p-4 border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          activeCategory === cat
                            ? "bg-rosegold-500 border-rosegold-500 text-white shadow-md"
                            : "bg-pearl-100 border-gray-200 text-gray-800 hover:border-rosegold-500 hover:bg-white hover:shadow-md"
                      }`}
                      >
                        <span className="text-xs font-semibold uppercase tracking-widest truncate pr-2">
                          {cat}
                        </span>
                        <span className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 ${
                          activeCategory === cat
                            ? "bg-white/20 text-white"
                            : "bg-rosegold-500/10 text-rosegold-500"
                        }`}>
                          {getProductCount(cat)} Items
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-200 shrink-0 flex justify-between items-center text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                  <span>Active Selection: <strong className="text-rosegold-500">{activeCategory}</strong></span>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="bg-slate-950 text-white hover:bg-rosegold-500 px-5 py-2.5 font-bold tracking-widest transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Products Display */}
      <div className="space-y-16">
        {activeCategory === "All" ? (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-rosegold-500 transition-all duration-300"
                >
                  <div className="h-64 w-full relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 text-center bg-white border-t border-gray-100">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                      {product.category}
                    </p>
                    <h3 className="font-playfair text-base text-gray-900 font-semibold uppercase tracking-wide">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          Object.entries(groupedProducts).map(([categoryName, products]) => (
            <div key={categoryName}>
              <h2 className="font-playfair text-xl text-gray-900 font-semibold uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">{categoryName}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map(product => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-rosegold-500 transition-all duration-300"
                  >
                    <div className="h-64 w-full relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 text-center bg-white border-t border-gray-100">
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                        {product.category}
                      </p>
                      <h3 className="font-playfair text-base text-gray-900 font-semibold uppercase tracking-wide">
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white border border-gray-200 shadow-md">
            <h3 className="font-playfair text-xl text-gray-400 uppercase tracking-wider">Products for this category will be available soon.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
