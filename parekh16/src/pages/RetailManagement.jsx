import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const RetailManagement = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajiv Parekh',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      desc: 'Oversees brand initiatives, managing core growth and retail strategy to expand our operations while maintaining textile heritage.'
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      desc: 'Drives customer engagement, manages standard showroom procedures, and directs service quality across all flagship branches.'
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      desc: 'Controls raw material procurement and coordinates with weaver co-operatives to guarantee sustainable yarn supplies.'
    }
  ];

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Our Management</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Experienced Leadership & Vision</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: member.id * 0.1 }}
            className="bg-white border border-gray-200 p-6 shadow-md hover:border-rosegold-500 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center rounded-2xl"
          >
            {/* Circular Profile Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-rosegold-500/20 shadow-md mb-4 shrink-0 bg-pearl-100">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Details */}
            <h3 className="text-base font-playfair font-bold text-gray-900 mb-0.5">{member.name}</h3>
            <p className="text-[10px] uppercase tracking-wider text-rosegold-500 font-bold mb-3">{member.role}</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              {member.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RetailManagement;
