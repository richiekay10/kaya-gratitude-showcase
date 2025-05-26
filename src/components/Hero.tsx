
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Richmond Afrifa
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span className="border-r-2 border-blue-400 animate-pulse">{displayText}</span>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative digital solutions with modern technologies. 
            Specializing in full-stack development with expertise in React, Node.js, Python, and cloud technologies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-500">
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </button>
          <a
            href="mailto:richmondkafrifa13@gmail.com"
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors duration-300">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
