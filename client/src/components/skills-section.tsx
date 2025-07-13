export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "blue",
      skills: ["Python", "SQL"]
    },
    {
      title: "Data Analysis Tools",
      color: "green",
      skills: ["Power BI", "Tableau", "Excel"]
    },
    {
      title: "Machine Learning & AI",
      color: "purple",
      skills: ["Regression", "Classification", "LSTM", "CNN"]
    },
    {
      title: "Web Scraping & Automation",
      color: "yellow",
      skills: ["Selenium", "BeautifulSoup"]
    },
    {
      title: "Data Management",
      color: "red",
      skills: ["HubSpot", "ZoomInfo", "CRM"]
    },
    {
      title: "Soft Skills",
      color: "cyan",
      skills: ["Teamwork", "Collaboration", "Reporting"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-400 bg-blue-500/20 text-blue-300",
      green: "text-green-400 bg-green-500/20 text-green-300",
      purple: "text-purple-400 bg-purple-500/20 text-purple-300",
      yellow: "text-yellow-400 bg-yellow-500/20 text-yellow-300",
      red: "text-red-400 bg-red-500/20 text-red-300",
      cyan: "text-cyan-400 bg-cyan-500/20 text-cyan-300"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-[var(--dark-secondary)]/50 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const [titleColor, , skillClasses] = colorClasses.split(' ');
            
            return (
              <div key={index} className="bg-[var(--dark-card)] p-6 rounded-xl border border-gray-700 card-hover">
                <h3 className={`text-xl font-bold mb-4 ${titleColor}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className={`px-3 py-1 ${category.color === 'blue' ? 'bg-blue-500/20 text-blue-300' : 
                                  category.color === 'green' ? 'bg-green-500/20 text-green-300' :
                                  category.color === 'purple' ? 'bg-purple-500/20 text-purple-300' :
                                  category.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-300' :
                                  category.color === 'red' ? 'bg-red-500/20 text-red-300' :
                                  'bg-cyan-500/20 text-cyan-300'} rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
