import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80' },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430]"
            style={{ fontFamily: "'Marcellus', serif" }}>
            Our Retail Management
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <p className="text-center text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed text-[#706863] font-medium">
          VASTRAMALL is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:shadow-md bg-white"
              style={{ border: '1.5px solid #EADCD2' }}>
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative shadow-sm border border-[#EADCD2]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base font-bold mb-1 text-[#3C3430]" style={{ fontFamily: "'Marcellus', serif" }}>
                {member.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#A24E51] mb-3">{member.role}</p>
              <a href={`mailto:${member.name.toLowerCase().replace(' ', '')}@textilemall.com`} className="text-[#908882] hover:text-[#A24E51] transition-colors p-1.5 rounded-full bg-[#FCF5F0] border border-[#EADCD2] hover:scale-110 transition-transform">
                <Mail size={13} />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
