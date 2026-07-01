import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Disc
} from "lucide-react";

export const Contact = () => {
  const emailAddress = "anchalsingh19654@gmail.com";
  const subject = encodeURIComponent("Portfolio Inquiry / Collaboration");
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/Anchalsingh06", // You can drop your personal profile slug here later
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://www.github.com/ianchalsingh196",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter className="w-5 h-5" />,
      link: "https://x.com/AnchalSing44445",
    },
    {
      name: "Discord",
      icon: <Disc className="w-5 h-5" />,
      link: "https://discord.com/users/deepikasingh0165",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0B1215] text-slate-300 font-sans relative overflow-hidden">
      {/* Structural theme background glow decorations */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context Details & Info Blocks */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Let's talk!
              </h2>
              <p className="text-slate-400 text-base leading-relaxed max-w-md">
                I am currently open to full-stack web development projects, freelance opportunities,
                and engineering collaborations. Whether you have a technical question or just want to connect, feel free to reach out.
              </p>
            </div>

            {/* Direct Contact Info Row Blocks */}
            <div className="space-y-4 max-w-md">
              <a 
                href={mailtoLink} 
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0E1010]/60 border border-emerald-500/10 hover:border-emerald-400/30 hover:bg-[#0E1010]/90 transition-all duration-300 group"
              >
                <div className="text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-slate-300 font-medium text-sm md:text-base break-all">
                  {emailAddress}
                </span>
              </a>

              <a 
                href="tel:+919554452808" 
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0E1010]/60 border border-emerald-500/10 hover:border-emerald-400/30 hover:bg-[#0E1010]/90 transition-all duration-300 group"
              >
                <div className="text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-slate-300 font-medium text-sm md:text-base">
                  +91 9554452808
                </span>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0E1010]/60 border border-emerald-500/10 cursor-default">
                <div className="text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-slate-300 font-medium text-sm md:text-base leading-snug">
                  Faridabad, Harbaspur, Jaunpur, Uttar Pradesh
                </span>
              </div>
            </div>

            {/* Horizontal Social Links Ecosystem */}
            <div className="pt-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                Social Ecosystem
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 bg-[#0E1010]/60 border border-emerald-500/10 rounded-xl text-slate-400 hover:text-emerald-400 hover:border-emerald-400/30 hover:-translate-y-1 transition-all duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Large Premium Gradient CTA Card */}
          <div className="lg:col-span-7 h-full">
            <div className="h-full min-h-[400px] bg-gradient-to-br from-[#0E1010] via-[#0E1010]/90 to-emerald-950/20 border border-emerald-500/10 p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500">
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-md">
                  Ready to collaborate on the next big project?
                </h3>
                
                <p className="text-base text-slate-400 max-w-lg leading-relaxed">
                  I bring a mix of <span className="text-white font-medium">Full-Stack engineering</span> and scalable application development with modern architectures. Let's discuss how I can add immediate value to your team.
                </p>

                <div className="pt-4">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0B1215] font-bold text-sm rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/5 hover:shadow-emerald-400/10 hover:scale-[1.02]"
                  >
                    Send an Inquiry
                  </a>
                </div>
              </div>

              {/* Decorative graphic backdrop circles */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-900/5 blur-3xl rounded-full pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};