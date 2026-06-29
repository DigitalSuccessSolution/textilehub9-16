import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { 
      id: 1, 
      title: 'Annual General Meeting 2026', 
      description: 'The Annual General Meeting of shareholders is scheduled to discuss corporate performance, board transitions, and long-term targets.',
      date: 'Nov 01, 2026' 
    },
    { 
      id: 2, 
      title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', 
      description: 'The Mumbai depot warehouse facility will be closed for structural repairs and stock auditing. Normal dispatch resumes October 23rd.',
      date: 'Oct 20, 2026' 
    },
    { 
      id: 3, 
      title: 'Introduction of e-Way Bill Integration in Partner Portal', 
      description: 'Partner portals have been integrated with official e-Way databases. Please consult the online manual for updating logistics workflows.',
      date: 'Sep 15, 2026' 
    },
    { 
      id: 4, 
      title: 'Recruitment Drive for Zonal Sales Managers', 
      description: 'We are expanding our retail footprints. Applications are open for Zonal Sales Managers in Delhi NCR and Gujarat areas.',
      date: 'Aug 22, 2026' 
    },
  ];

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Notice Board</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Official Corporate Announcements</p>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="group bg-white border border-gray-200 px-6 py-5 flex items-start gap-4 hover:shadow-lg hover:border-rosegold-500 transition-all duration-300"
          >
            {/* Bell icon remains */}
            <div className="p-3 bg-pearl-100 group-hover:bg-rosegold-500/10 shrink-0 transition-colors">
              <Bell size={20} className="text-gray-450 group-hover:text-rosegold-500 transition-colors" />
            </div>
            <div className="flex-grow">
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block mb-1">{notice.date}</span>
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide mb-1.5">{notice.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{notice.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
