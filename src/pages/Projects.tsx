import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Carve Studio",
      description: "A creative studio platform showcasing artistic work and design services with modern UI/UX and interactive elements.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://carvestudio10.netlify.app/",
      githubUrl: "https://github.com/richiekay10/carve-studio",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Draw with Kay",
      description: "An interactive drawing application with creative tools, canvas functionality, and artistic features for digital artwork creation.",
      technologies: ["React", "Canvas API", "JavaScript", "CSS3"],
      liveUrl: "https://drawwithkay.netlify.app/",
      githubUrl: "https://github.com/richiekay10/draw-with-kay",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Kay Interior Design",
      description: "A professional interior design portfolio showcasing residential and commercial projects with elegant design presentations.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      liveUrl: "https://kayinteriordemo.netlify.app/",
      githubUrl: "https://github.com/richiekay10/kay-interior-demo",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "MB Demo Site",
      description: "A comprehensive business demo website featuring modern design principles, interactive components, and professional presentation.",
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      liveUrl: "https://mbdemosite.netlify.app/",
      githubUrl: "https://github.com/richiekay10/mb-demo-site",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Health Tracker",
      description: "A comprehensive health monitoring application with fitness tracking, health metrics, and progress visualization features.",
      technologies: ["React", "Chart.js", "LocalStorage", "Responsive Design"],
      liveUrl: "https://healthtrackerdemo.netlify.app/",
      githubUrl: "https://github.com/richiekay10/health-tracker-demo",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "GCI Timer",
      description: "A professional timer application with multiple timing modes, notifications, and customizable settings for productivity enhancement.",
      technologies: ["React", "JavaScript", "Web APIs", "CSS3"],
      liveUrl: "https://gcitimer1.netlify.app/",
      githubUrl: "https://github.com/richiekay10/gci-timer",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Diet Tracker",
      description: "A nutrition tracking application with meal planning, calorie counting, and dietary goal management for healthy living.",
      technologies: ["React", "JavaScript", "LocalStorage", "Chart.js"],
      liveUrl: "https://diettrackerdemo.netlify.app/",
      githubUrl: "https://github.com/richiekay10/diet-tracker-demo",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      title: "Video Chat App",
      description: "A real-time video communication application with chat features, screen sharing, and multi-user video conferencing capabilities.",
      technologies: ["React", "WebRTC", "Socket.io", "Node.js"],
      liveUrl: "https://videochatappdemo.netlify.app/",
      githubUrl: "https://github.com/richiekay10/video-chat-app-demo",
      image: "/placeholder.svg"
    },
    {
      id: 9,
      title: "Music Player App",
      description: "A feature-rich music player with playlist management, audio controls, and modern interface for seamless music experience.",
      technologies: ["React", "Web Audio API", "JavaScript", "CSS3"],
      liveUrl: "https://musicplayerappdemo.netlify.app/",
      githubUrl: "https://github.com/richiekay10/music-player-app-demo",
      image: "/placeholder.svg"
    },
    {
      id: 10,
      title: "Airline Ticketing App",
      description: "A comprehensive airline booking system with flight search, seat selection, payment processing, and ticket management features.",
      technologies: ["React", "TypeScript", "Payment API", "Responsive Design"],
      liveUrl: "https://airlineticketingappdemo.netlify.app/",
      githubUrl: "https://github.com/richiekay10/airline-ticketing-app-demo",
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
