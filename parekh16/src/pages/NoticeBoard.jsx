import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { 
      id: 1, 
      title: 'Annual General Meeting 2026', 
      date: 'Nov 01, 2026',
      description: 'The Annual General Meeting of Royal Weaves will be held at our Mumbai Corporate Office to discuss key expansion strategies and financial reports.'
    },
    { 
      id: 2, 
      title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', 
      date: 'Oct 20, 2026',
      description: 'Our Mumbai central warehouse depot will remain closed for bi-annual maintenance and inventory audits. Kindly schedule bulk collections accordingly.'
    },
    { 
      id: 3, 
      title: 'Introduction of e-Way Bill Integration in Partner Portal', 
      date: 'Sep 15, 2026',
      description: 'We are launching direct API integration for automated e-Way bills. Traders can now auto-generate logistics documents on our wholesale partner portal.'
    },
    { 
      id: 4, 
      title: 'Recruitment Drive for Zonal Sales Managers', 
      date: 'Aug 22, 2026',
      description: 'Royal Weaves is expanding its national reach. We are hosting walk-in interviews for experienced Zonal Sales Managers for North and West regions.'
    },
  ];

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
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
            className="group bg-white border border-gray-200 px-8 py-6 flex items-start gap-5 hover:shadow-lg transition-all duration-300 rounded-3xl"
          >
            <div className="p-3 shrink-0 bg-pearl-100 border border-gray-150 rounded-lg">
              <Bell size={20} className="text-rosegold-500" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{notice.date}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide mb-2">
                {notice.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {notice.description}
              </p>
            </div>
            <ChevronRight size={20} className="text-gray-400 group-hover:text-rosegold-500 transition-colors shrink-0 self-center" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
