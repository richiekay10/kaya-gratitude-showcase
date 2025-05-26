
import { Mail, Phone, Github, Instagram } from "lucide-react";

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "richmondkafrifa13@gmail.com",
      href: "mailto:richmondkafrifa13@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+233 50 900 4658",
      href: "https://wa.me/233509004658",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "richiekay10",
      href: "https://github.com/richiekay10",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@kay_gratitude",
      href: "https://www.instagram.com/kay_gratitude?igsh=bGFrcGRzOHpwdnJk",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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
              className="group p-6 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{item.label}</h3>
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-500">
          <div className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              I'm always open to discussing new opportunities, innovative projects, and creative collaborations.
            </p>
            <a
              href="mailto:richmondkafrifa13@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Me a Message
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 dark:border-slate-700/50 mt-20 pt-8">
        <div className="text-center text-slate-500 dark:text-slate-400">
          <p>&copy; 2024 Richmond Afrifa. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
