import { ChevronLeft, ChevronRight, Medal, ExternalLink } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Delta (Full Stack Web Development)",
    issuer: "Apna College",
    date: "Issued Dec 2025", // You can update this with the specific completion date
    description: "Successfully completed an intensive program covering the MERN stack, including MongoDB, Express.js, React, and Node.js.",
    image: "/Apna-College.png", // Use the screenshot of your certificate here
    link: "https://certificate.apnacollege.com/verify/68fba979397d5bd28608f268"
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera / Meta",
    date: "Issued Aug 2025",
    description: "Comprehensive program covering React, Version Control, UX/UI principles, and JavaScript patterns.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
    link: "#"
  },
  {
    title: "Advanced TypeScript & Design Patterns",
    issuer: "Frontend Masters",
    date: "Issued May 2025",
    description: "Advanced mastery of type systems, generics, and scalable architectural patterns in TypeScript.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
    link: "#"
  }
];

export const Certificates = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % certificates.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Recognition & Growth
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certificates &{" "}
            <span className="font-serif italic font-normal text-white">
              Achievements.
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Content Card */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Medal className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center pt-4">
                {/* Certificate Image */}
                <div className="relative group overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={certificates[activeIdx].image}
                    alt={certificates[activeIdx].title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={certificates[activeIdx].link}
                      className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold"
                    >
                      View Credential <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="flex flex-col justify-center">
                  <div className="text-primary font-medium mb-2">
                    {certificates[activeIdx].issuer}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {certificates[activeIdx].title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {certificates[activeIdx].description}
                  </p>
                  <div className="text-sm font-mono text-secondary-foreground/60 uppercase tracking-widest">
                    {certificates[activeIdx].date}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all border border-white/5"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all border border-white/5"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};