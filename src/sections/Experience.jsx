import React from 'react';

const experiences = [
  {
    period: "2026 — Present",
    role: "Full-Stack Development",
    company: "Personal Projects & Learning",
    description: "Building scalable web applications using the MERN stack and Next.js. Documenting structural growth and software architectures to deploy modular solutions.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Docker"],
    current: true,
  },
  {
    period: "2026 — Present",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description: "Partnering with clients to architect and deploy custom, high-performance web applications. Managing software delivery from prototype wireframes to live hosting pipelines.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    current: true,
  },
  {
    period: "2026 — Present",
    role: "Open Source & DSA Enthusiast",
    company: "Self-Driven Learning",
    description: "Mastering complex algorithmic logic tracking arrays, trees, and dynamic programming execution structures in Java to ensure optimized system performance profiles.",
    technologies: ["Java", "DSA", "Git", "GitHub"],
    current: false,
  },
  {
    period: "2025 — Present",
    role: "Frontend Development Student",
    company: "Rajkiya Engineering College",
    description: "Developing clean, structured responsive web interfaces, optimizing document data rendering speeds, and coordinating standard client connection endpoints.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Vite"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0B1215] font-sans">
      {/* Absolute theme glow items */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase animate-fade-in">
            My Growth Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-white">
            Building with{" "}
            <span className="font-serif italic font-normal text-emerald-400 glow-text">
              purpose and precision.
            </span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-xl animate-fade-in animation-delay-200">
            A timeline of my development journey, from exploring the fundamentals of the web to building full-stack applications and solving complex technical challenges.
          </p>
        </div>

        {/* Timeline Graphic Asset */}
        <div className="relative">
          {/* Main vertical line synchronized to the theme accent */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:-translate-x-1/2" />

          {/* Experience Items Wrapper */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Node Ring Element */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-emerald-400 rounded-full -translate-x-1/2 ring-4 ring-[#0B1215] z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  )}
                </div>

                {/* Alternating Layout Content Container */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="group glass p-8 rounded-2xl border border-emerald-500/10 bg-[#0E1010]/40 hover:border-emerald-400/30 hover:bg-[#0E1010]/70 transition-all duration-500">
                    {/* Bumped to text-sm font-bold */}
                    <span className="text-sm font-bold tracking-wide text-emerald-400">
                      {exp.period}
                    </span>
                    {/* Bumped to text-2xl */}
                    <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    {/* Bumped to text-base */}
                    <p className="text-slate-300 font-medium text-base mt-1">{exp.company}</p>
                    {/* Bumped to text-sm and text-slate-300 for premium readability */}
                    <p className="text-slate-300 text-sm leading-relaxed mt-4">
                      {exp.description}
                    </p>
                    
                    {/* Technology Tag Collection */}
                    <div
                      className={`flex flex-wrap gap-2 mt-6 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="bg-[#0B1215] text-slate-400 text-[11px] px-3 py-1 rounded-full border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};