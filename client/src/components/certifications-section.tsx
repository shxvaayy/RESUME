import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Data Science Workshop',
    org: 'IIT Kharagpur',
    desc: '2-Day Online Workshop covering advanced data science techniques and applications.',
    color: 'blue',
  },
  {
    title: 'AI & ML Workshop',
    org: 'IIT Roorkee',
    desc: 'Hands-on workshop on artificial intelligence and machine learning applications.',
    color: 'green',
  },
  {
    title: 'Deep Learning Workshop',
    org: 'IIT Delhi',
    desc: 'Advanced deep learning techniques and neural network architectures.',
    color: 'purple',
  },
  {
    title: 'Data Science Training',
    org: 'UnCodemy',
    desc: 'Comprehensive training program covering data science fundamentals and applications.',
    color: 'gray',
  },
];

const colorMap = {
  blue: 'text-blue-400 bg-blue-500/20',
  green: 'text-green-400 bg-green-500/20',
  purple: 'text-purple-400 bg-purple-500/20',
  gray: 'text-gray-400 bg-gray-500/20',
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certifications & Workshops
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-[var(--dark-card)] p-8 rounded-xl border border-gray-700 card-hover flex flex-col gap-2">
              <div className="flex items-center gap-4 mb-2">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl ${colorMap[cert.color as keyof typeof colorMap]}`}> 
                  <Award />
                </span>
                <div>
                  <div className={`font-bold text-lg ${colorMap[cert.color as keyof typeof colorMap].split(' ')[0]}`}>{cert.title}</div>
                  <div className="text-gray-400 text-sm">{cert.org}</div>
                </div>
              </div>
              <div className="text-gray-300 text-base mt-2">{cert.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 