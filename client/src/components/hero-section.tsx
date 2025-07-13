import { Download, Mail, Code, Leaf } from "lucide-react";
import { SiPython } from "react-icons/si";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Python Icon */}
        <div className="absolute top-20 left-20 hidden lg:block">
          <div className="w-16 h-16 bg-[var(--dark-card)] rounded-xl flex items-center justify-center card-hover">
            <SiPython className="text-3xl text-blue-400" />
          </div>
        </div>
        
        {/* Profile Circle */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold animate-pulse-slow overflow-hidden">
            <img 
              src="/api/dp.png" 
              alt="Shivay Mehra"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold" style={{display: 'none'}}>
              SM
            </div>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 animate-float" style={{
          background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.1em'
        }}>
          SHIVAY MEHRA
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-light px-4">
          AI & Data Science Specialist
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-[var(--dark-card)] rounded-full text-xs sm:text-sm font-medium border border-blue-500/30 card-hover">
            <Code className="inline mr-2 w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            IIT Roorkee Graduate
          </span>
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-[var(--dark-card)] rounded-full text-xs sm:text-sm font-medium border border-green-500/30 card-hover">
            <SiPython className="inline mr-2 w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
            ML & AI Expert
          </span>
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-[var(--dark-card)] rounded-full text-xs sm:text-sm font-medium border border-purple-500/30 card-hover">
            <Mail className="inline mr-2 w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            Data Analyst
          </span>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a
            href="/api/download-resume"
            download="Shivay_Mehra_Resume.pdf"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          
          <button
            onClick={scrollToContact}
            className="border border-blue-500 text-blue-400 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            Get In Touch
          </button>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-20 right-20 hidden lg:block">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center animate-float">
            <Leaf className="text-green-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
