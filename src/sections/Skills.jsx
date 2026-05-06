import React from 'react';
import { Terminal, Cpu, Database, Globe } from 'lucide-react';

export const Skills = () => {
  const skills = [
    {
      title: "Full-Stack Engineering",
      icon: <Globe className="text-emerald-400" size={32} />,
      description: "Expertise in building responsive web applications using the MERN Stack and Next.js. I architected projects like TaskPlanet,Wanderlust-Website,Todo-list and Weather-App managing complex state and secure backend routing.",
      tags: ["React", "Next.js", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Core Fundamentals & DSA",
      icon: <Terminal className="text-emerald-400" size={32} />,
      description: "Strong foundation in Java and Data Structures & Algorithms. Actively following a 150-day learning roadmap to ensure logic remains sharp and optimized.",
      tags: ["Java", "DSA", "C++", "Logic Building"]
    },
    {
      title: "Electrical & Digital Engineering",
      icon: <Cpu className="text-emerald-400" size={32} />,
      description: "Academic focus at Rajkiya Engineering College on Digital Electronics, including K-maps, Logic Gates, and electrical transformer analysis.",
      tags: ["Digital Electronics", "K-maps", "Logic Gates", "Circuits"]
    },
    {
      title: "DevOps & Tools",
      icon: <Database className="text-emerald-400" size={32} />,
      description: "Professional development workflow using Vite, Git, and secure environment handling for modern web application deployment.",
      tags: ["Git", "GitHub", "Vite", "Postman", "REST APIs"]
    }
  ];

  return (
    /* Changed bg to #0B1215 to match your journey section exactly */
    <section id="skills" className="bg-[#0B1215] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Unified Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">
            TECHNICAL STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="italic font-serif font-normal text-primary glow-text">Expertise.</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
            Beyond the syntax: how I apply my toolkit to real-world challenges and engineering problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              /* Using a slightly more transparent background for the cards to blend with the new teal-black */
              className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500"
            >
              <div className="mb-6 bg-emerald-500/10 w-fit p-3 rounded-xl group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{skill.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-[#0B1215] text-gray-400 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-gray-700 group-hover:border-emerald-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};









