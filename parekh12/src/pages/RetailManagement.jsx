import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60' },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#1A1B23' }}>

      {/* Hero Banner */}
      <div className="relative pt-12 sm:pt-16 pb-4 flex flex-col items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6] mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our Retail Management
          </h1>
          <div className="w-32 sm:w-48 h-[1px] bg-[#343545] mx-auto" />
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 pt-4 pb-10">
        <p className="text-center text-[15px] mb-8 max-w-2xl mx-auto leading-relaxed text-[#9CA3AF] font-medium">
          Swastik Textile Mall is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto text-center"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group flex flex-col items-center w-36"
            >
              <div className="relative overflow-hidden w-24 h-24 rounded-full mb-3 shadow-md"
                style={{ border: '2px solid #C89B5F' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter saturate-[0.9]"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(0,0,0,0.5)' }}>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full text-[#C89B5F] transition-all hover:scale-110"
                    style={{ background: 'rgba(200, 155, 95, 0.3)' }}>
                    <Mail size={14} className="text-white" />
                  </a>
                </div>
              </div>
              <h3 className="text-[14px] font-bold text-[#F3F4F6] mb-0.5 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {member.name}
              </h3>
              <p className="text-[9px] uppercase tracking-widest font-bold text-[#C89B5F]">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
