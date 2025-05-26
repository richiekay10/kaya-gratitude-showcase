
const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 95, color: "from-blue-500 to-blue-600" },
    { name: "React", level: 90, color: "from-blue-600 to-blue-700" },
    { name: "Node.js", level: 88, color: "from-blue-500 to-blue-700" },
    { name: "Python", level: 85, color: "from-blue-600 to-blue-800" },
    { name: "TypeScript", level: 87, color: "from-blue-500 to-blue-800" },
    { name: "MongoDB", level: 83, color: "from-blue-600 to-blue-700" },
    { name: "Firebase", level: 80, color: "from-blue-500 to-blue-700" },
    { name: "Supabase", level: 78, color: "from-blue-600 to-blue-800" },
    { name: "SASS", level: 85, color: "from-blue-500 to-blue-600" },
    { name: "AWS", level: 75, color: "from-blue-600 to-blue-800" }
  ];

  const technologies = [
    "React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB", 
    "Firebase", "Supabase", "SASS", "AWS", "Express.js", "Next.js", "Git", "Docker"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8">Proficiency Levels</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} dark:${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="animate-fade-in delay-300">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 cursor-default shadow-sm"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-lg">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">What I Bring to the Table</h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  Full-stack development with modern frameworks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  Cloud deployment and DevOps practices
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  Responsive and accessible UI/UX design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  API development and database optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
