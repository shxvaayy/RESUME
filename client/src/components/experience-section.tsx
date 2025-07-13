import { Calendar, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Spyne.Ai, Gurugram",
      period: "Oct 2024 – July 2025",
      color: "blue",
      achievements: [
        "Enhanced company and contact data quality by leveraging HubSpot and ZoomInfo, optimizing outreach efforts and improving accuracy by 30%.",
        "Automated web scraping workflows using Selenium and BeautifulSoup to boost data collection efficiency by 25%.",
        "Designed advanced analysis pipelines to identify key trends, enabling actionable insights and boosting marketing ROI by 20%.",
        "Developed interactive dashboards and comprehensive visual reports using Power BI and Excel, enhancing stakeholder decision-making."
      ]
    },
    {
      title: "Data Science Intern",
      company: "Diginique Techlabs, IIT Roorkee",
      period: "June 2024 – Aug 2024",
      color: "purple",
      achievements: [
        "Built a data-driven movie recommender utilizing Python, pandas, numpy, and sklearn with 85% accuracy.",
        "Engineered an advanced movie recommendation system using KNN algorithms, increasing engagement metrics by over 40%.",
        "Analyzed data trends to present actionable insights, improving model performance by 30% through innovative KNN techniques."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[var(--dark-secondary)]/50 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative bg-[var(--dark-card)] p-8 rounded-xl border border-gray-700 card-hover">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={exp.color === 'blue' ? '/api/spyne-logo.png' : '/api/iit-logo.jpeg'}
                      alt={exp.company}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${exp.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}>
                      {exp.title}
                    </h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0 flex items-center">
                  <Calendar className="mr-2 w-4 h-4" />
                  {exp.period}
                </div>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {exp.color === 'blue' ? (
                  <>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">30%</div>
                      <div className="text-sm text-gray-400">Accuracy Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">25%</div>
                      <div className="text-sm text-gray-400">Efficiency Boost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">20%</div>
                      <div className="text-sm text-gray-400">Marketing ROI</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">85%</div>
                      <div className="text-sm text-gray-400">Model Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">40%</div>
                      <div className="text-sm text-gray-400">Engagement Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">30%</div>
                      <div className="text-sm text-gray-400">Performance Boost</div>
                    </div>
                  </>
                )}
              </div>
              
              <ul className="space-y-3 text-gray-300">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <CheckCircle className={`mr-3 mt-1 w-5 h-5 ${exp.color === 'blue' ? 'text-green-400' : 'text-purple-400'}`} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
