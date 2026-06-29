import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative h-24 sm:h-32 overflow-hidden flex items-end pb-4 sm:pb-6 justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our Retail Management
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 pt-2 pb-10">
        <p className="text-center text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed text-[#5D645D] font-medium">
          SANDHYA TEXTILE MALL is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-center"
        >
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 rounded-[2rem]"
              style={{ border: '1.5px solid #EAE3D9' }}
            >
              
              {/* Image Section */}
              <div className="relative w-full aspect-square sm:h-[300px] sm:aspect-auto overflow-hidden bg-[#FAF8F5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Elegant Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C362B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Contact Icon */}
                <div className="absolute bottom-6 right-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-[#2C362B] shadow-xl hover:bg-[#4E6C50] hover:text-white transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-7 text-center border-t border-[#EAE3D9] bg-white relative z-20">
                <p className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#8A6F4E] mb-2">{member.role}</p>
                <h3 className="text-2xl font-bold text-[#2C362B]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {member.name}
                </h3>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
