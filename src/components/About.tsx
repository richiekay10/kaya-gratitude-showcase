
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Hello! I'm Richmond Afrifa, a passionate full-stack software engineer with a love for creating 
              innovative digital solutions. I specialize in building scalable web applications using modern 
              technologies and best practices.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey in software development has equipped me with expertise in both frontend and backend 
              technologies, allowing me to deliver complete solutions from concept to deployment. I'm particularly 
              passionate about creating user-centric applications that solve real-world problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              When I'm not coding, I enjoy staying up-to-date with the latest technology trends, contributing to 
              open-source projects, and mentoring aspiring developers in the community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in delay-300">
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-slate-600 dark:text-slate-300">Technologies</div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
              <div className="text-slate-600 dark:text-slate-300">Learning Mode</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
