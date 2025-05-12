
import { RevealOnScroll } from "../RevealOnscroll";



export const Projects = () => {   
    return (<section id="projects" className="min-h-screen flex items-center justify-center py-20">


        <RevealOnScroll>
        <div className="max-w-5xl z-10 px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent text-center">
               Projects Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-2  "> Portfolio Website </h3>
            <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A modern, mobile-responsive portfolio built with HTML, CSS, JavaScript, React, and Tailwind CSS. 
            Showcases my front-end development skills, project experience, and clean UI design with a strong focus on usability and performance.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span
                        key={key}
                        className="bg-purple-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm 
hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(99,102,241,0.2)] transition"

                    >
                        {tech}
                    </span>
                ))} 

                
            </div>
            <div className="flex justify-between items-center">
                <a
                    href="https://github.com/ShabihaS/SSultana-portfolio"
                    className="text-purple-400 hover:text-indigo-300 transition-colors my-4"           >
                    View Project →
                    
                </a>
                </div>
                </div>
                <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-2  "> To Do App</h3>
            <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            To-Do App is a mobile-responsive task manager built with React. 
            It supports light and dark themes and allows users to track open tasks easily, helping stay organized across all devices.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span
                        key={key}
                        className="bg-purple-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm 
hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(99,102,241,0.2)] transition"
                    >
                        {tech}
                    </span>
                ))} 

                
            </div>
            <div className="flex justify-between items-center">
                <a
                    href="https://github.com/ShabihaS/todo-app"
                    className="text-purple-400 hover:text-indigo-300 transition-colors my-4"           >
                    View Project →
                    
                </a>
                </div>
                </div>
                <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-2  "> Spendsmart</h3>
            <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Spenssmart is a simple ASP.NET 8 MVC web app for tracking personal expenses.
             Built using Entity Framework with an in-memory database, it allows users to 
             create, view, edit, and delete expenses, and displays a running total using ViewBag.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span
                        key={key}
                        className="bg-purple-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm 
hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(99,102,241,0.2)] transition"
                    >
                        {tech}
                    </span>
                ))} 

                
            </div>
            <div className="flex justify-between items-center">
                <a
                    href="#https://github.com/ShabihaS/SpendSmart"
                    className="text-purple-400 hover:text-indigo-300 transition-colors my-4"           >
                    View Project →
                    
                </a>
                </div>
                </div>
      
                </div>
                </div>
              
                </RevealOnScroll>
                </section>
        

    );
};