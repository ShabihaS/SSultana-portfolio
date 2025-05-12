import { RevealOnScroll } from "../RevealOnscroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const backendSkills = [
    "C#",
    ".NET Core Web API",
    "Entity Framework Core (Code First)",
    "SQL Server",
    "RESTful APIs",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-700/10 text-indigo-500 py-1 px-3 rounded-full text-sm 
hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(99,102,241,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm 
hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(99,102,241,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - National
                  University of bangladesh 2006
                </li>
                <li>
                  Relevant Coursework: Certificate IV in Information Technology
                  -TAFE (2021)
                </li>
              </ul>
            </div>
            ,<br />
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern Programmer at Weigh-More Solution (2024 - Present){" "}
                  </h4>
                  <p>
                    • Assist in software development (coding, testing,
                    debugging). • Version control (GitHub, Devops) • Cloud
                    infrastructure (Azure) • Write clean, efficient, and
                    maintainable code.( C#, HTML, CSS ,JavaScript and React) •
                    Conduct testing and assist with debugging. • Document code
                    and processes clearly. • Learn new technologies and stay
                    updated on industry trends. • Participate in code reviews
                    for continuous improvement. • Assist in project management
                    and task tracking. • Provide technical support to teams and
                    users. • Work with cross-functional teams (designers,
                    analysts, developers).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Inventory And Facility Coordinator (July 2019 - Sep 2021)
                  </h4>
                  <p>
                    • Managed inventory systems to ensure accurate stock levels,
                    timely replenishments, and efficient allocation of
                    materials. • Monitored and maintained warehouse
                    organization, ensuring compliance with safety and
                    cleanliness standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Team leader at DHL (Oct 2016 – Jun 2019)
                  </h4>
                  <p>
                    • Supervised a team of 35 staff members, ensuring daily
                    operational targets were met in alignment with DHL
                    performance standards. • Utilized SAP and Manhattan WMS to
                    manage inventory, track stock movements, and maintain data
                    accuracy across the Distribution Centre (DC).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
