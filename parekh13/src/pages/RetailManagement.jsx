import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Pooja Patel', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80' },
  { id: 3, name: 'Sneha Reddy', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&h=400&q=80' },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative pt-10 sm:pt-14 pb-2 flex flex-col items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our Retail Management
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 pt-2">
        <p className="text-center text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed text-[#504257] font-medium">
          Mayura Royal Textile Mall is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 sm:gap-6 max-w-4xl mx-auto text-center justify-items-center"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-md bg-white rounded-2xl p-4 sm:p-6 w-full max-w-[240px] flex flex-col items-center"
              style={{ border: '1.5px solid #EADBC8' }}>
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 border-2 border-[#C5A059]/40 group-hover:border-[#C5A059] transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/40">
                  <a href={`mailto:${member.name.toLowerCase().replace(' ', '')}@mayuraroyal.com`} className="text-white hover:text-[#C5A059] transition-colors">
                    <Mail size={16} />
                  </a>
                </div>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-[#2A083E] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {member.name}
              </h3>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-extrabold text-[#C5A059] text-center leading-tight">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
