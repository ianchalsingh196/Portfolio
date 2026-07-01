import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white block lg:inline">
                {" "}one component at a time.
              </span>
            </h2>
            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed animate-fade-in animation-delay-200">

              <p>
                I am a full-stack developer specializing in the <span className="text-primary font-medium">MERN stack, Next.js, and modern JavaScript architectures</span>. Having successfully engineered scalable web applications from frontend to secure backend routing, I focus on building robust, production-ready digital experiences.
              </p>
              <p>
                As an engineering student, I am currently deep-diving into <span className="text-primary font-medium">Data Structures & Algorithms (DSA) with Java</span> to optimize code efficiency while expanding my technical horizon into <span className="text-primary font-medium">AI/ML workflows</span>. I blend solid core engineering fundamentals with practical full-stack expertise to build intelligent, resilient software.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border border-l-4 border-primary animate-fade-in animation-delay-300 bg-[#0E1010]/60 backdrop-blur-sm">
              <p className="text-base md:text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group glass p-6 rounded-2xl animate-fade-in flex flex-col justify-center min-h-[140px] border border-slate-800/40 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20 shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};