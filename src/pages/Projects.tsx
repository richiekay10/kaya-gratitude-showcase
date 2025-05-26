
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/richiekay10/ecommerce-platform",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/richiekay10/task-manager",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      technologies: ["React", "TypeScript", "OpenWeather API"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/richiekay10/weather-dashboard",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization and automated reporting features.",
      technologies: ["React", "Python", "Flask", "Chart.js"],
      liveUrl: "https://example-analytics.com",
      githubUrl: "https://github.com/richiekay10/social-analytics",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "An educational platform with course creation, student enrollment, progress tracking, and interactive learning modules.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      liveUrl: "https://example-lms.com",
      githubUrl: "https://github.com/richiekay10/learning-management",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracking with portfolio management, alerts, and market analysis features.",
      technologies: ["React", "Redux", "CoinGecko API"],
      liveUrl: "https://example-crypto.com",
      githubUrl: "https://github.com/richiekay10/crypto-tracker",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Restaurant Booking System",
      description: "A complete restaurant management system with table reservations, menu management, and customer feedback integration.",
      technologies: ["React", "Node.js", "MySQL", "Socket.io"],
      liveUrl: "https://example-restaurant.com",
      githubUrl: "https://github.com/richiekay10/restaurant-booking",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      description: "A comprehensive fitness application with workout planning, progress tracking, nutrition logging, and social features.",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example-fitness.com",
      githubUrl: "https://github.com/richiekay10/fitness-tracker",
      image: "/placeholder.svg"
    },
    {
      id: 9,
      title: "Real Estate Platform",
      description: "A modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management.",
      technologies: ["React", "Next.js", "Prisma", "Supabase"],
      liveUrl: "https://example-realestate.com",
      githubUrl: "https://github.com/richiekay10/real-estate-platform",
      image: "/placeholder.svg"
    },
    {
      id: 10,
      title: "AI Chatbot Interface",
      description: "An intelligent chatbot interface with natural language processing, conversation history, and customizable responses.",
      technologies: ["React", "Python", "OpenAI API", "WebSocket"],
      liveUrl: "https://example-chatbot.com",
      githubUrl: "https://github.com/richiekay10/ai-chatbot",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="pt-20 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-blue-600/20 dark:from-blue-400/20 dark:to-blue-500/20 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
