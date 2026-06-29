import React from 'react';
import { motion } from 'framer-motion';

const RetailManagement = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajiv Parekh',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    }
  ];

  return (
    <div className="pb-16 -mt-8 max-w-7xl mx-auto px-4">
      <div className="text-center pt-0 pb-2 mb-10">
        <h1>Our Retail Management</h1>
        <p className="text-gray-650 text-xs md:text-sm uppercase tracking-wider mt-2 font-medium">
          Management & Leadership
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto"
      >
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="bg-white border border-gray-200 hover:border-rosegold-500 hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center rounded-xl"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-rosegold-500 p-1 mb-4">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-lg font-playfair font-bold text-gray-900 mb-1 leading-tight">{member.name}</h3>
            <p className="text-[10px] uppercase tracking-widest text-rosegold-500 font-bold">{member.role}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RetailManagement;
