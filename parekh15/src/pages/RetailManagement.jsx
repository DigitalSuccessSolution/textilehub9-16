import React from 'react';
import { motion } from 'framer-motion';

const RetailManagement = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajiv Parekh',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Oversees brand vision and heritage values, directing the long-term expansion of B2B and retail textile hubs.'
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      bio: 'Manages retail experience, boutique operations, and visual merchandising guidelines across premium outlets.'
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
      bio: 'Directs logistics, inventory control, and partner mill collaborations to maintain seamless order fulfillment.'
    }
  ];

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-5xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-12 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Our Management</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Experienced Leadership & Vision</p>
        </div>
      </div>

      {/* Grid of Compact Profile Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-gray-200 shadow-md hover:border-rosegold-500 hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            {/* Avatar image */}
            <div className="relative overflow-hidden w-24 h-24 rounded-full border-2 border-rosegold-500 mb-4 bg-pearl-100 shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bio info */}
            <h3 className="text-base font-playfair font-semibold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-[10px] uppercase tracking-widest text-rosegold-500 font-bold mb-3">{member.role}</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RetailManagement;
