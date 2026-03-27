"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    id: "EXP_01",
    role: "Cloud Transformation Intern",
    company: "NTRO - Prime Minister's Office (PMO)",
    desc: "Spearheaded government-wide digital transformation, migrating legacy mainframes to hybrid cloud. Engineered Grafana/Prometheus dashboards increasing 24/7 uptime.",
    tech: ["VMware", "Grafana", "Hybrid Cloud", "Agile"],
  },
  {
    id: "EXP_02",
    role: "Business Insights & Data Analyst",
    company: "IDFC FIRST Bank",
    desc: "Transitioned monolithic architecture to microservices achieving 99.99% system reliability. Optimised 10+TB/day financial datasets for enterprise CRM systems.",
    tech: ["Microservices", "SAP", "Predictive ML", "Git"],
  },
  {
    id: "EXP_03",
    role: "Investment Banking Analyst",
    company: "Finlatics",
    desc: "Engineered high-frequency transaction simulations for a simulated PE fund, projecting 5x portfolio growth and reducing platform latency.",
    tech: ["Financial Modeling", "C++", "HFT Simulation"],
  },
];

const PROJECTS = [
  {
    id: "PATENT_IN",
    title: "National Patent 202541058252A",
    category: "Real-Time Cloud Ordering",
    desc: "Invented a cloud-native architecture with tokenised transaction security and geolocation external dispatch APIs.",
    tech: ["Cloud", "Security SDK", "System Design"],
    link: "#", // User needs to insert patent link here if separate from CV
  },
  {
    id: "PRJ_02",
    title: "Medusa Cart Clone",
    category: "Headless e-Commerce",
    desc: "Architected scalable session-analysis e-commerce solution with integrated Apple Pay flows and mobile-first logic.",
    tech: ["Next.js", "GCP", "MedusaJS", "Apple Pay"],
  },
  {
    id: "PRJ_03",
    title: "FreaQ Engine",
    category: "Low-Latency Simulation",
    desc: "Developed a High-Frequency Trading engine integrating GenAI for real-time market anomaly and risk assessment.",
    tech: ["C++", "Docker", "GenAI"],
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 min-h-screen bg-[#0a0a0a] text-zinc-100 py-32 px-6 md:px-24">
      {/* Subtle Apple-tech radial gradient to blend with Fight Club darkness */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d92525] to-transparent opacity-20" />
      <div className="absolute top-0 inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(217,37,37,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* --- EXPERIENCES SECTION --- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="font-mono text-[#d92525] uppercase tracking-widest text-xs mb-4 block">
                // System.Logs
              </span>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                Operational <span className="text-zinc-600 font-serif italic">History</span>
              </h2>
            </div>
            <p className="max-w-xs text-zinc-500 font-mono text-xs uppercase opacity-80 border-l-2 border-[#d92525] pl-4">
              Restricted data regarding enterprise impact and high-availability execution.
            </p>
          </motion.div>

          <div className="space-y-4">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative backdrop-blur-3xl bg-white/[0.02] border border-white/10 hover:border-[#d92525]/40 transition-all duration-500 rounded-2xl overflow-hidden"
              >
                {/* Apple-style hover gradient / Fight club scanline mix */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d92525]/0 via-[#d92525]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row justify-between gap-8 md:items-center">
                  <div className="flex-1">
                    <span className="font-mono text-[10px] tracking-widest text-[#d92525] mb-2 block">
                      {exp.id} / ACTIVE
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-zinc-400 font-medium mb-4 uppercase tracking-wider text-sm">
                      {exp.company}
                    </h4>
                    <p className="text-zinc-500 font-light max-w-2xl leading-relaxed bg-black/40 p-4 rounded-xl border border-zinc-900/50">
                      {exp.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap md:flex-col gap-2 md:items-end justify-center w-full md:w-32">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-black/50 text-zinc-300 font-mono text-[10px] uppercase rounded-full border border-zinc-800 backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* --- PROJECTS SECTION --- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="font-mono text-[#d92525] uppercase tracking-widest text-xs mb-4 block">
                // Classified
              </span>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                Strategic <span className="text-zinc-600 font-serif italic">Assets</span>
              </h2>
            </div>
            <p className="max-w-xs text-zinc-500 font-mono text-xs uppercase opacity-80 border-l-2 border-[#d92525] pl-4">
              Patented architectures and experimental engineering modules.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative backdrop-blur-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-[#d92525]/30 transition-all duration-700 rounded-3xl flex flex-col h-full"
              >
                {/* Image / Header block simulating Apple-style sleekness */}
                <div className="aspect-[4/3] bg-black relative overflow-hidden flex items-center justify-center p-8 group-hover:bg-zinc-900 transition-colors duration-500">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,37,37,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="text-center z-10">
                    <span className="font-mono text-[#d92525] opacity-50 text-[10px] tracking-widest uppercase block mb-2">{project.category}</span>
                    <span className="font-black text-4xl md:text-5xl tracking-tighter text-white opacity-20 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
                      {project.id.split("_")[0]}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 bg-black/50 border-t border-white/5 relative z-20">
                  <h3 className="text-xl font-bold tracking-tight mb-4 text-white group-hover:text-[#d92525] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 font-light mb-8 flex-1 leading-relaxed text-sm">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-3 py-1 bg-zinc-900 text-zinc-300 font-mono text-[9px] uppercase rounded-md border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 font-mono text-xs uppercase tracking-widest text-[#d92525] hover:text-white transition-colors flex items-center gap-2">
                       View Document
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                       </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
