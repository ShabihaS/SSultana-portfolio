
import { RevealOnScroll } from "../RevealOnscroll";

export const Home = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll >     
          <div className="text-center z-10 px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent leading-tight

">
              Hi, I'm Shabiha sultana
            </h2>
  
            <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a junior software developer with a passion for building clean, 
            functional web applications. I'm focused on learning best practices, writing maintainable code, 
            and growing my skills across the full stack to create user-friendly and efficient digital experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168, 85, 247, 0.4)]"

              >
                View Projects
              </a>
  
              <a
                href="#contact"
                className="border border-purple-500/50 text-indigo-600 py-3 px-6 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:shadow-[[0_0_15px_rgba(139,92,246,0.3] hover:bg-purple-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
          </RevealOnScroll> 
      </section>
    );
  };