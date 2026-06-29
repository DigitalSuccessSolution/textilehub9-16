import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { 
      id: 1, 
      title: 'Annual General Meeting 2026', 
      description: 'The Annual General Meeting of shareholders and management partners of Heritage Garments is scheduled to align company values, review retail trajectories, and coordinate the upcoming winter launch.',
      date: 'Nov 01, 2026' 
    },
    { 
      id: 2, 
      title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', 
      description: 'Our principal Mumbai storage facility will operate under limited capacity for yearly equipment upgrades, stock audits, and textile safety inspection protocols.',
      date: 'Oct 20, 2026' 
    },
    { 
      id: 3, 
      title: 'Introduction of e-Way Bill Integration in Partner Portal', 
      description: 'We are deploying a new partner dashboard update that automates e-Way bill processing directly via our logistics system, streamlining merchant billing procedures.',
      date: 'Sep 15, 2026' 
    },
    { 
      id: 4, 
      title: 'Recruitment Drive for Zonal Sales Managers', 
      description: 'Heritage Garments is searching for retail managers to direct operations, lead local marketing initiatives, and oversee boutique sales divisions in Southern zones.',
      date: 'Aug 22, 2026' 
    },
  ];

  return (
    <div className="pb-16 -mt-8 max-w-4xl mx-auto px-4">
      <div className="text-center pt-0 pb-2 mb-8">
        <h1>Notice Board</h1>
        <p className="text-gray-655 text-xs md:text-sm uppercase tracking-wider mt-2 font-medium">
          Official Updates & Announcements
        </p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="group bg-white border border-gray-200 px-6 py-6 flex items-start gap-5 hover:shadow-md transition-all duration-300 rounded-xl"
          >
            <div className="p-3 shrink-0 bg-rosegold-500/10 rounded-lg">
              <Bell size={20} className="text-rosegold-500" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-rosegold-500 font-bold uppercase tracking-wider block mb-2">{notice.date}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight uppercase font-playfair">{notice.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{notice.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
