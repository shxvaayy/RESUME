import { ExternalLink, Github, Code, Eye, TrendingUp } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "WritoryOfficial.com",
      description: "Full Stack Poetry Contest Platform",
      gradient: "from-blue-500 to-purple-600",
      backgroundImage: "/api/writory-bg.png",
      icon: <Code className="text-6xl text-white" />,
      color: "blue",
      technologies: [
        { icon: <Code className="mr-2 w-4 h-4" />, text: "React.js, Node.js, Firebase" },
        { icon: <Code className="mr-2 w-4 h-4" />, text: "Cloudinary, Google API" },
        { icon: <TrendingUp className="mr-2 w-4 h-4" />, text: "70% Reduced Manual Operations" }
      ],
      codeLink: "https://github.com/shxvaayy/Full-stack-poetry-contest-app"
    },
    {
      title: "Stock Market Prediction",
      description: "Machine Learning Price Forecasting",
      gradient: "from-green-500 to-blue-600",
      backgroundImage: "/api/stock-bg.png",
      icon: <TrendingUp className="text-6xl text-white" />,
      color: "green",
      technologies: [
        { icon: <Code className="mr-2 w-4 h-4" />, text: "Python, LSTM, Keras" },
        { icon: <TrendingUp className="mr-2 w-4 h-4" />, text: "75% Accuracy Rate" },
        { icon: <Eye className="mr-2 w-4 h-4" />, text: "Real-time Dashboard" }
      ],
      codeLink: "https://github.com/shxvaayy/Stock-price-prediction"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative project-card p-8 rounded-xl backdrop-blur-sm card-hover">
              <div className="mb-6">
                <div 
                  className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center mb-4 relative overflow-hidden`}
                  style={project.backgroundImage ? {
                    backgroundImage: `url(${project.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  } : {}}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${
                project.color === 'blue' ? 'text-blue-400' : 
                project.color === 'purple' ? 'text-purple-400' : 
                'text-green-400'
              }`}>
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="space-y-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center text-sm text-gray-400">
                    {tech.icon}
                    {tech.text}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between">
                {project.title === "WritoryOfficial.com" ? (
                  <a 
                    href="https://writoryofficial.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      project.color === 'blue' ? 'text-blue-400 hover:text-blue-300' : 
                      project.color === 'purple' ? 'text-purple-400 hover:text-purple-300' : 
                      'text-green-400 hover:text-green-300'
                    } transition-colors flex items-center`}
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <button className={`${
                    project.color === 'blue' ? 'text-blue-400 hover:text-blue-300' : 
                    project.color === 'purple' ? 'text-purple-400 hover:text-purple-300' : 
                    'text-green-400 hover:text-green-300'
                  } transition-colors flex items-center`}>
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Live Demo
                  </button>
                )}
                <a 
                  href={project.codeLink || "https://github.com/shxvaayy"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <Github className="mr-2 w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
