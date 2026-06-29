import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', experience: '₹5,00,000 - ₹8,00,000 / Year', description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', experience: '₹6,00,000 - ₹9,00,000 / Year', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', experience: '₹3,00,000 - ₹5,00,000 / Year', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', experience: '₹4,00,000 - ₹6,00,000 / Year', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

const Career = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAF8F5' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2C362B]"
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
              className="group flex flex-col justify-between rounded-2xl bg-white transition-all duration-300 hover:shadow-md p-6"
              style={{ border: '1.5px solid #E8E3D9' }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 leading-snug text-[#2C362B]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {job.title}
                </h3>

                <div className="flex flex-col gap-3 mb-5">
                  <div className="flex items-center gap-2 text-[12px] font-semibold text-[#5D645D]">
                    <MapPin size={14} color="#5F6F5E" className="shrink-0" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-semibold text-[#5D645D]">
                    <Briefcase size={14} color="#5F6F5E" className="shrink-0" />{job.experience}
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-semibold text-[#5D645D]">
                    <Mail size={14} color="#5F6F5E" className="shrink-0" />
                    <a href="mailto:careers@sandhyatextilemall.com" className="hover:underline text-[#5F6F5E] truncate">
                      careers@sandhyatextilemall.com
                    </a>
                  </div>
                </div>

                <p className="text-[13px] leading-relaxed mb-6 text-[#454B45] font-medium line-clamp-4">{job.description}</p>
              </div>

              <div className="w-full shrink-0 border-t pt-4 border-[#E8E3D9]/60 mt-auto">
                <button
                  className="w-full py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-95 text-white btn-primary shadow-sm animate-none"
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
