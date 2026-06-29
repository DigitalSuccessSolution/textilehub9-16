import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', type: 'Full-time', salary: '₹6,00,000 - ₹9,00,000 P.A.', description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', type: 'Full-time', salary: '₹8,00,000 - ₹12,00,000 P.A.', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', type: 'Full-time', salary: '₹4,00,000 - ₹7,00,000 P.A.', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-time', salary: '₹5,00,000 - ₹8,00,000 P.A.', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

const Career = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Careers
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={job.id}
              className="group flex flex-col justify-between bg-white transition-all duration-300 hover:shadow-md p-6 sm:p-8 rounded-2xl"
              style={{ border: '1.5px solid #EADBC8' }}
            >
              <div>
                <h3 className="text-xl font-bold mb-3 leading-tight text-[#2A083E]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {job.title}
                </h3>

                <div className="flex flex-col gap-2.5 mb-4">
                  <div className="flex items-center gap-2 text-[12px] font-semibold text-[#786B80]">
                    <MapPin size={13} color="#C5A059" className="shrink-0" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-semibold text-[#786B80]">
                    <span className="text-[#C5A059] font-bold">Salary:</span> {job.salary}
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-semibold text-[#786B80] truncate">
                    <Mail size={13} color="#C5A059" className="shrink-0" />
                    <a href="mailto:careers@mayuraroyaltextile.com" className="hover:underline text-[#C5A059] truncate">
                      careers@mayuraroyaltextile.com
                    </a>
                  </div>
                </div>

                <p className="text-[13px] leading-relaxed mb-6 text-[#504257] font-medium">{job.description}</p>
              </div>

              <div className="border-t pt-4 border-[#EADBC8] mt-auto">
                <button
                  className="w-full py-3 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-95 text-white btn-primary shadow-sm"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
