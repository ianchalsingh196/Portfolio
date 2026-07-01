import { Github, ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Wanderlust-Website",
    description:
      "A full-stack travel listing web app where users can create, edit, and manage listings with authentication, image uploads, and reviews.",
    image: "/projects/project1.png",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary", "Passport"],
    github: "https://github.com/ianchalsingh196/Wanderlust-Website",
  },
  {
    title: "Todo-list App",
    description:
      "A sleek, responsive task management application designed for daily productivity. Features real-time task CRUD operations, persistent data storage using LocalStorage, and a modern, dark-themed UI.",
    image: "/projects/project2.png",
    tags: ["React.js", "Tailwind CSS", "React Router", "LocalStorage"],
    github: "https://github.com/ianchalsingh196/todo-list.git",
  },
  {
    title: "Weather-App",
    description:
      "A dynamic weather dashboard providing real-time meteorological data, featuring interactive UI updates, search functionality, and environment-secured API integration.",
    image: "/projects/project3.png",
    tags: ["React", "Weather API", "Material UI", "Tailwind CSS"],
    github: "https://github.com/ianchalsingh196/Weather_App.git",
  },
  {
    title: "Stock-Trading-Platform",
    description:
      "An interactive web application showcasing simulated equity trading, featuring mock portfolio valuation metrics, asset trackers, and crisp UI components built for financial overview data flows.",
    image: "/projects/project4.png", 
    tags: ["React", "Material UI", "Node.js", "REST APIs"],
    github: "https://github.com/ianchalsingh196/Stock-Trading-Platform.git",
  },
  {
    title: "Sigma-GPT",
    description:
      "An automated interface communicating directly with intelligent APIs, engineered to process structured parameters, handle runtime logic flows, and stream instantaneous response states.",
    image: "/projects/project5.png", 
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "AI APIs"],
    github: "https://github.com/ianchalsingh196/SigmaGPT.git",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0B1215]">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-white">
            Projects that{" "}
            <span className="font-serif italic font-normal text-emerald-400 glow-text">
              make an impact.
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Dynamic fluid grid that adjusts cleanly from 3-columns to 2-columns depending on screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-xl overflow-hidden animate-fade-in bg-[#0E1010]/30 border border-emerald-500/10 hover:border-emerald-400/30 transition-all duration-500 flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1215] via-[#0B1215]/40 to-transparent opacity-80" />

                  {/* Hover Overlay featuring only the GitHub connection link */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-emerald-500 text-[#0B1215] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {/* <a
//                     href={project.link}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <ArrowUpRight className="w-5 h-5" />
//                   </a> */}
                  </div>
                </div>

                {/* Content Container with scaled-up typography sizes */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    {/* Title size updated to text-xl */}
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 truncate">
                      {project.title}
                    </h3>
                  </div>
                  {/* Description size bumped to text-sm and text-slate-300 for premium clarity */}
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tag Tray pinned to the bottom */}
              <div className="p-6 pt-0 mt-auto">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-[#0B1215] text-slate-400 text-[10px] font-medium tracking-wide px-2.5 py-1 rounded border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/ianchalsingh196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton className="flex items-center gap-2 text-sm">
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
