import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "shivaaymehra2@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on your next AI or Data Science project? Let's discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="flex justify-center">
          {/* Contact Info */}
          <div className="space-y-6 max-w-4xl w-full">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="bg-[var(--dark-card)] p-6 rounded-xl border border-gray-700 card-hover flex-1 max-w-md">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Email</h3>
                    <a 
                      href="mailto:shivaaymehra2@gmail.com" 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      shivaaymehra2@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-[var(--dark-card)] p-6 rounded-xl border border-gray-700 card-hover flex-1 max-w-md">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400">Phone</h3>
                    <p className="text-gray-300">+91-9667102405</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/shivay-mehra-8a66ba251/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/30 transition-colors"
              >
                <Linkedin className="text-blue-400 text-xl" />
              </a>
              <a 
                href="https://github.com/shxvaayy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center hover:bg-gray-600/30 transition-colors"
              >
                <Github className="text-gray-400 text-xl" />
              </a>
              <a 
                href="mailto:shivaaymehra2@gmail.com" 
                className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center hover:bg-green-600/30 transition-colors"
                onClick={e => { e.preventDefault(); handleCopy(); }}
                title={copied ? 'Copied!' : 'Copy email'}
              >
                <Mail className="text-green-400 text-xl" />
              </a>
              {copied && (
                <span className="absolute bottom-16 text-green-400 bg-[var(--dark-card)] px-3 py-1 rounded shadow-lg text-sm">Email copied!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
