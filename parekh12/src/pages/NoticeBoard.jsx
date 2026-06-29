import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', description: 'Join us for our Annual General Meeting where we will discuss our strategic vision for the next decade and review our financial performance.' },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026', description: 'Please be informed that the Mumbai depot will remain closed for routine maintenance and stock audit for 3 days.' },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', description: 'We have successfully integrated e-Way bill generation directly within our B2B partner portal to streamline your dispatch process.' },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', description: 'We are expanding our presence in South India and are looking for experienced Zonal Sales Managers. Walk-in interviews scheduled.' },
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#1A1B23' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6]"
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
              className="group p-5 bg-[#242530] cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              style={{
                border: '1.5px solid #343545',
                borderTop: '4px solid #C89B5F',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(200, 155, 95, 0.06)', border: '1px solid rgba(200, 155, 95, 0.2)' }}>
                    <Bell size={18} color={'#C89B5F'} />
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2 text-[#9CA3AF]">{notice.date}</span>
                  <h3 className="text-[15px] font-bold leading-snug transition-colors line-clamp-2 text-[#F3F4F6] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {notice.title}
                  </h3>
                  <p className="text-[12.5px] text-[#9CA3AF] leading-relaxed line-clamp-3">
                    {notice.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#343545] mt-auto">
                 <span className="text-[11px] font-bold tracking-wide text-[#C89B5F]">Read More</span>
                 <ChevronRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" color="#C89B5F" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
