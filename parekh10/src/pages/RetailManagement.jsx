import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80' },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our Retail Management
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <p className="text-center text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed text-[#5D645D] font-medium">
          SANDHYA TEXTILE MALL is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group flex flex-col items-center p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-white"
              style={{ border: '1.5px solid #E8E3D9' }}>
              <div className="relative w-28 h-28 mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-sm group-hover:scale-105 transition-transform duration-500 filter saturate-[0.9]"
                  style={{ border: '3px solid #FAF8F5', outline: '1px solid #E8E3D9' }}
                />
              </div>
              <h3 className="text-[17px] font-bold mb-1 text-[#2C362B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {member.name}
              </h3>
              <p className="text-[10.5px] uppercase tracking-widest font-bold text-[#8A6F4E] mb-5">{member.role}</p>
              
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-[#5F6F5E] transition-all duration-200 hover:scale-110 hover:bg-[#5F6F5E] hover:text-white"
                style={{ background: 'rgba(95,111,94,0.1)' }}>
                <Mail size={15} />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
