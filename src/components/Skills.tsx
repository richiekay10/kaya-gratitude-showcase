
const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-orange-500" },
    { name: "React", level: 90, color: "from-blue-400 to-cyan-500" },
    { name: "Node.js", level: 88, color: "from-green-400 to-emerald-500" },
    { name: "Python", level: 85, color: "from-blue-500 to-indigo-600" },
    { name: "TypeScript", level: 87, color: "from-blue-600 to-purple-600" },
    { name: "MongoDB", level: 83, color: "from-green-500 to-teal-600" },
    { name: "Firebase", level: 80, color: "from-orange-400 to-red-500" },
    { name: "Supabase", level: 78, color: "from-emerald-400 to-cyan-500" },
    { name: "SASS", level: 85, color: "from-pink-400 to-rose-500" },
    { name: "AWS", level: 75, color: "from-orange-500 to-amber-600" }
  ];

  const technologies = [
    "React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB", 
    "Firebase", "Supabase", "SASS", "AWS", "Express.js", "Next.js", "Git", "Docker"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-white mb-8">Proficiency Levels</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
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
            <h3 className="text-2xl font-semibold text-white mb-8">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/70 border border-slate-700/50 rounded-full text-gray-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <h4 className="text-xl font-semibold text-white mb-4">What I Bring to the Table</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Full-stack development with modern frameworks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Cloud deployment and DevOps practices
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Responsive and accessible UI/UX design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
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
