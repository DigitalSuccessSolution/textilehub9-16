import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', description: 'Join us for our Annual General Meeting to discuss yearly performance and future plans.' },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026', description: 'The Mumbai depot will remain closed for scheduled maintenance operations.' },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', description: 'We have integrated e-Way bill generation directly into the partner portal.' },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', description: 'We are expanding our sales team across all zones. Apply within.' },
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Notice Board
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-5 bg-white cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              style={{
                border: '1.5px solid #E8E3D9',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(95,111,94,0.06)', border: '1px solid rgba(95,111,94,0.2)' }}>
                    <Bell size={18} color={'#7E857E'} />
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2 text-[#7E857E]">{notice.date}</span>
                  <h3 className="text-[14px] font-bold leading-snug transition-colors line-clamp-2 text-[#2C362B] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {notice.title}
                  </h3>
                  <p className="text-[12px] text-[#5D645D] line-clamp-3 leading-relaxed">
                    {notice.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#E8E3D9]/60 mt-auto">
                 <span className="text-[11px] font-bold tracking-wide text-[#5F6F5E]">Read More</span>
                 <ChevronRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" color="#5F6F5E" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
