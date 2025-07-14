import { useInView } from "../hooks/use-in-view";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [hasBeenInView1, setHasBeenInView1] = useState(false);
  const [hasBeenInView2, setHasBeenInView2] = useState(false);
  const [hasBeenInView3, setHasBeenInView3] = useState(false);

  useEffect(() => { if (inView1) setHasBeenInView1(true); }, [inView1]);
  useEffect(() => { if (inView2) setHasBeenInView2(true); }, [inView2]);
  useEffect(() => { if (inView3) setHasBeenInView3(true); }, [inView3]);

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate AI & Data Science professional with expertise in machine learning, data analysis, and full-stack development. Currently pursuing Executive Post Graduate in AI and Data Science at IIT Roorkee.
          </p>
        </div>
        
        {/* Education Journey */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Education Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line rounded-full"></div>
            
            {/* Education Items */}
            <div className="space-y-12">
              {/* IIT Roorkee */}
              <div ref={ref1} className={`flex flex-col md:flex-row items-center justify-between transition-all duration-700 ${hasBeenInView1 ? 'animate-edu-fadein-1 opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="w-full md:w-5/12 text-right md:pr-8 mb-4 md:mb-0">
                  <div className="bg-[var(--dark-card)] p-6 rounded-xl border border-blue-500/30 card-hover transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative">
                    <div className="flex items-center justify-end mb-4">
                      <img 
                        src="/api/iit-logo.jpeg" 
                        alt="IIT Roorkee"
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-blue-400 mb-2">IIT Roorkee</h4>
                    <p className="text-gray-300 mb-2">Executive Post Graduate in AI and Data Science</p>
                    <p className="text-sm text-gray-500">Sep 2024 – Sep 2025</p>
                  </div>
                </div>
                <div className="w-full md:w-2/12 flex justify-center items-center mb-4 md:mb-0">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-black shadow-lg shadow-blue-500/50"></div>
                </div>
                <div className="w-full md:w-5/12"></div>
              </div>
              
              {/* D.R. Akhilesh Das Gupta Institute */}
              <div ref={ref2} className={`flex flex-col md:flex-row items-center justify-between transition-all duration-700 ${hasBeenInView2 ? 'animate-edu-fadein-2 opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="w-full md:w-5/12"></div>
                <div className="w-full md:w-2/12 flex justify-center items-center mb-4 md:mb-0">
                  <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-black shadow-lg shadow-green-500/50"></div>
                </div>
                <div className="w-full md:w-5/12 md:pl-8">
                  <div className="bg-[var(--dark-card)] p-6 rounded-xl border border-green-500/30 card-hover transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative">
                    <div className="flex items-center mb-4">
                      <img 
                        src="/api/adg-logo.png" 
                        alt="D.R. Akhilesh Das Gupta Institute"
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">D.R. Akhilesh Das Gupta Institute</h4>
                    <p className="text-gray-300 mb-2">Bachelor of Technology in AI & Data Science</p>
                    <p className="text-sm text-gray-500">2021 – 2025</p>
                    <p className="text-sm text-gray-500">CGPA: 8.0</p>
                  </div>
                </div>
              </div>
              
              {/* Birla Vidya Niketan */}
              <div ref={ref3} className={`flex flex-col md:flex-row items-center justify-between transition-all duration-700 ${hasBeenInView3 ? 'animate-edu-fadein-3 opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="w-full md:w-5/12 text-right md:pr-8 mb-4 md:mb-0">
                  <div className="bg-[var(--dark-card)] p-6 rounded-xl border border-purple-500/30 card-hover transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative">
                    <div className="flex items-center justify-end mb-4">
                      <img 
                        src="/api/birla-logo.png" 
                        alt="Birla Vidya Niketan"
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-purple-400 mb-2">Birla Vidya Niketan</h4>
                    <p className="text-gray-300 mb-2">High School</p>
                    <p className="text-sm text-gray-500">2007 – 2021</p>
                  </div>
                </div>
                <div className="w-full md:w-2/12 flex justify-center items-center mb-4 md:mb-0">
                  <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-black shadow-lg shadow-purple-500/50"></div>
                </div>
                <div className="w-full md:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
