import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', description: 'The Annual General Meeting of Sandhya Textile Mall is scheduled to be held on November 1st at the registered corporate office. All stakeholders are requested to attend.' },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026', description: 'Our Mumbai warehouse depot will remain closed for bi-annual maintenance and inventory audits. Business operations will resume standard schedules from Oct 22.' },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', description: 'To streamline B2B dispatches, all registered distributors are requested to complete their e-way bill registration in the partner portal.' },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', description: 'We are inviting applications for Zonal Sales Managers across South and West India regions. Interested candidates can apply via our Careers page.' },
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
              className="group rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300 hover:shadow-md flex flex-col"
              style={{ border: '1.5px solid #E8E3D9' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(95,111,94,0.1)', border: '1px solid rgba(95,111,94,0.2)' }}>
                  <Bell size={18} color="#5F6F5E" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E857E]">{notice.date}</span>
              </div>
              <h3 className="text-[15px] font-bold leading-snug mb-3 text-[#2C362B]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {notice.title}
              </h3>
              <p className="text-[12.5px] leading-relaxed text-[#5D645D] font-medium">
                {notice.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
