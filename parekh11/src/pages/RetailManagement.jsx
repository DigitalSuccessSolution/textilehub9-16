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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-center"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-md bg-white p-6"
              style={{ border: '1.5px solid #E8E3D9' }}>
              <div className="relative overflow-hidden w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[#E8E3D9]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1 text-[#2C362B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {member.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#8A6F4E] mb-3">{member.role}</p>
                <div className="flex justify-center">
                  <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-[#2C362B] transition-all duration-200 hover:bg-[#5F6F5E] hover:text-white"
                    style={{ background: 'rgba(95,111,94,0.1)' }}>
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
