import React from 'react';
import { Terminal, Cpu, Database, Globe } from 'lucide-react';

export const Skills = () => {
  const skills = [
    {
      title: "Full-Stack Engineering",
      icon: <Globe className="currentColor" size={32} />,
      description: (
        <>
          Expertise in building responsive web applications using the <span className="text-emerald-400 font-medium">MERN Stack, Next.js, and Material UI</span>. I architected projects like <span className="text-white font-semibold">Stock-Trading Platform, Sigma-GPT, Wanderlust-Website, Todo-list, and Weather-App</span>, managing complex state and secure backend routing.
        </>
      ),
      tags: ["React", "Next.js", "Node.js", "MongoDB", "Material UI"]
    },
    {
      title: "Core Fundamentals & DSA",
      icon: <Terminal className="currentColor" size={32} />,
      description: (
        <>
          Strong foundation in <span className="text-emerald-400 font-medium">Java, C++, and C</span> applied to advanced problem-solving. Actively maintaining a consistent computational logic stream via <span className="text-emerald-400 font-semibold">Data Structures & Algorithms</span>, while concurrently expanding technical depth into core <span className="text-emerald-400 font-medium">Computer Science subjects</span>.
        </>
      ),
      tags: ["Java", "DSA", "C++", "CS Fundamentals", "Logic Building"]
    },
    {
      title: "AI & Automation",
      icon: <Cpu className="currentColor" size={32} />,
      description: (
        <>
          Expanding technical capabilities into <span className="text-emerald-400 font-medium">Artificial Intelligence and Machine Learning</span> workflows. Focused on leveraging core programming architecture to build intelligent predictive models, automations, and data analytics.
        </>
      ),
      tags: ["AI/ML", "Python Foundations", "Data Logic", "Automation"]
    },
    {
      title: "DevOps & Tools",
      icon: <Database className="currentColor" size={32} />,
      description: (
        <>
          Professional development workflow utilizing <span className="text-emerald-400 font-medium">Vite, Git, and GitHub</span> alongside modern containerization systems like <span className="text-emerald-400 font-semibold">Docker and Kubernetes</span> for secure deployment pipelines.
        </>
      ),
      tags: ["Docker", "Kubernetes", "Git", "GitHub", "Vite"]
    }
  ];

  return (
    <section id="skills" className="bg-[#0B1215] pt-36 pb-24 px-6 font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Unified Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">
            TECHNICAL STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="italic font-serif font-normal text-emerald-400 glow-text">Expertise.</span>
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
              className="group glass p-8 rounded-2xl border border-emerald-500/20 bg-[#0E1010]/40 hover:border-emerald-400/40 hover:bg-[#0E1010]/70 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Logo fill interaction block */}
                <div className="mb-6 bg-emerald-500/10 text-emerald-400 w-fit p-3 rounded-xl transform group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-[#0B1215] transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <div className="transition-colors duration-300">
                    {skill.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 transition-colors group-hover:text-emerald-400">
                  {skill.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed text-base">
                  {skill.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-[#0B1215] text-gray-400 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-slate-800 group-hover:border-emerald-500/30 transition-colors duration-300"
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