import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const notices = [
  { 
    id: 1, 
    title: 'Annual General Meeting 2026', 
    date: 'Nov 01, 2026', 
    description: 'The board of directors requests all stakeholders to attend the upcoming AGM at our headquarters or join virtually.' 
  },
  { 
    id: 2, 
    title: 'Warehouse Closure Notice (Mumbai Depot)', 
    date: 'Oct 20, 2026', 
    description: 'Our central warehouse in Mumbai will remain closed for bi-annual maintenance and audit stock count. Deliveries will resume post-audit.' 
  },
  { 
    id: 3, 
    title: 'Introduction of e-Way Bill Integration', 
    date: 'Sep 15, 2026', 
    description: 'Detailed walkthrough documentation on our updated portal APIs for integrated retail compliance billing.' 
  },
  { 
    id: 4, 
    title: 'Recruitment Drive for Zonal Sales Managers', 
    date: 'Aug 22, 2026', 
    description: 'Open positions for retail sales managers across North and South divisions. Applications open until end of month.' 
  },
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430]"
            style={{ fontFamily: "'Marcellus', serif" }}>
            Notice Board
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-5 bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              style={{
                border: '1.5px solid #EADCD2',
                borderTop: '4px solid #A24E51',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(162,78,81,0.12)', border: '1px solid rgba(162,78,81,0.2)' }}>
                    <Bell size={18} color="#A24E51" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2 text-[#706863]">{notice.date}</span>
                  <h3 className="text-[15px] font-bold leading-snug text-[#3C3430] mb-2"
                    style={{ fontFamily: "'Marcellus', serif" }}>
                    {notice.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-[#706863] font-medium">
                    {notice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
