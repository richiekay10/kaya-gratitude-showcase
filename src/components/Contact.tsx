
import { Mail, Phone, Github, Instagram } from "lucide-react";

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "richmondkafrifa13@gmail.com",
      href: "mailto:richmondkafrifa13@gmail.com",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+233 50 900 4658",
      href: "https://wa.me/233509004658",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "richiekay10",
      href: "https://github.com/richiekay10",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@kay_gratitude",
      href: "https://www.instagram.com/kay_gratitude?igsh=bGFrcGRzOHpwdnJk",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-500">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities, innovative projects, and creative collaborations.
            </p>
            <a
              href="mailto:richmondkafrifa13@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Me a Message
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700/50 mt-20 pt-8">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Richmond Afrifa. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
