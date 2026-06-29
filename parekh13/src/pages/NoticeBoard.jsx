import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', description: 'The annual meeting for stakeholders to discuss the fiscal performance and future growth strategies of Mayura Royal.' },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026', description: 'Our Mumbai distribution center will be temporarily closed for 48 hours starting from Oct 20th for annual audit and maintenance.' },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', description: 'We have launched direct API integration for e-Way bills to streamline B2B orders and logistics for all distributors.' },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', description: 'Looking for dynamic leaders with 5+ years of experience in retail expansion to manage our growing South-Indian market footprint.' },
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
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
              className="group p-5 bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-md rounded-2xl animate-none"
              style={{
                border: '1.5px solid #EADBC8',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg bg-[rgba(197,160,89,0.08)] border border-[rgba(197,160,89,0.2)]">
                    <Bell size={18} color="#C5A059" />
                  </div>
                </div>
                <div className="flex flex-col mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2 text-[#786B80]">{notice.date}</span>
                  <h3 className="text-[16px] font-bold leading-snug transition-colors text-[#2A083E] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {notice.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-[#504257] font-medium">
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
