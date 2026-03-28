"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    id: "EXP_01",
    role: "Cloud Transformation & Strategy Intern",
    company: "NTRO — Prime Minister's Office (PMO)",
    period: "Jan 2025 – July 2025",
    bullets: [
      "Spearheaded a government-wide digital transformation initiative, migrating legacy mainframes to hybrid cloud infrastructure — 30% reduction in OPEX.",
      "Unified 5+ cross-functional teams via Agile workflows, accelerating project delivery by 40%.",
      "Engineered executive-level dashboards using VMware, Grafana, and Prometheus — boosting 24/7 operational productivity by 30%.",
      "Architected personalized web applications using REST APIs, AJAX, HTML/CSS/JS, .NET, and CRUD operations, streamlining daily workflows by 50%.",
    ],
    tech: ["VMware", "Grafana", "Hybrid Cloud", "Agile", "REST APIs", ".NET"],
  },
  {
    id: "EXP_02",
    role: "Business Insights & Data Analyst",
    company: "IDFC FIRST Bank",
    period: "June 2023 – Aug 2023",
    bullets: [
      "Developed predictive CLV and CAC models to optimize marketing allocation and double campaign ROI.",
      "Achieved 99.99% system reliability by transitioning from monolithic to microservices; accelerated release cycles by 20% using Git.",
      "Optimized large-scale datasets (10+ TB/day) to identify revenue leakage, improving revenue recognition by 30% across SAP and CRM systems.",
    ],
    tech: ["Microservices", "SAP", "Predictive ML", "Git", "Python", "SQL"],
  },
  {
    id: "EXP_03",
    role: "Investment Banking Analyst",
    company: "Finlatics",
    period: "Jan 2022 – Mar 2022",
    bullets: [
      "Formulated investment theses and exit strategies for a simulated PE fund, projecting 5x portfolio growth.",
      "Engineered high-frequency transaction simulations to stress-test financial models, enhancing throughput by 20%.",
    ],
    tech: ["Financial Modeling", "C++", "HFT Simulation", "Private Equity"],
  },
];

const VOLUNTEERING = [
  {
    id: "VOL_01",
    role: "Fundraising Volunteer",
    org: "WWF-India",
    period: "Aug 2025 – Sep 2025 · 2 mos",
    cause: "Animal Welfare",
    desc: "Contributed to fundraising efforts for wildlife conservation and animal welfare initiatives under WWF-India's mandate.",
  },
];

const EDUCATION = [
  {
    id: "EDU_01",
    degree: "Master of Computer Applications",
    specialization: "Cloud Computing & SaaS",
    institution: "Amity Institute of Information Technology, Amity University",
    location: "Noida, India",
    period: "2024 – 2026",
    grade: null,
    honours: [],
    courses: ["Cloud Architecture", "Enterprise Data Management", "Distributed Systems", "Software Engineering", "AI & ML", "Agile Methodologies"],
  },
  {
    id: "EDU_02",
    degree: "Bachelor of Technology",
    specialization: "Computer Science Engineering",
    institution: "SRM University AP",
    location: "Andhra Pradesh, India",
    period: "2021 – 2025",
    grade: "First Class",
    honours: [
      "Merit Scholar",
      "National Patent Author — Cloud Computing & Distributed Systems (Published: Indian Patent Office / IPO Journal)",
    ],
    courses: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks", "Database Systems", "Software Engineering"],
  },
];

const PROJECTS = [
  {
    id: "PATENT",
    title: "National Patent: Real-Time Cloud Ordering System",
    category: "Cloud Architecture",
    desc: "Application #202541058252A — Invented a cloud-native ordering architecture (Published: IPO Journal 26/06/25). Designed a cloud-synchronized inventory database with tokenized transaction security and geolocation modules for logistics.",
    tech: ["Cloud", "Security SDK", "System Design", "Geolocation APIs"],
    link: "https://drive.google.com/file/d/1vCvmQAc9g798zG5AogB1C-OpC_dwrt89/view",
    linkLabel: "View Patent Details",
  },
  {
    id: "MEDUSA",
    title: "Medusa Cart Clone",
    category: "Headless e-Commerce",
    desc: "Architected a scalable, headless (API-first) e-commerce solution using Next.js, GCP, and MedusaJS. Integrated Apple Pay and a session analysis engine.",
    tech: ["Next.js", "GCP", "MedusaJS", "Apple Pay"],
    link: "https://github.com/iamujjwalrawat/MedusaCartClone",
    linkLabel: "View on GitHub",
  },
  {
    id: "FREAQ",
    title: "FreaQ — HFT Simulation Engine",
    category: "Low-Latency Simulation",
    desc: "Developed a low-latency High-Frequency Trading engine using C++ and Docker, integrated with GenAI for market anomaly detection.",
    tech: ["C++", "Docker", "GenAI", "HFT"],
    link: "https://github.com/iamujjwalrawat/FreaQ-AN-HFT-Trading-Application",
    linkLabel: "View on GitHub",
  },
];

const CERTIFICATIONS = [
  {
    title: "Microsoft Azure Developer Associate (AZ-204)",
    link: "https://learn.microsoft.com/en-gb/users/ujjwalraw/credentials/25da83fe77f665fc",
    issuer: "Microsoft",
  },
  {
    title: "HashiCorp Terraform Associate (003)",
    link: "https://www.credly.com/badges/c73f0a02-9ba9-470d-a05e-f12165500909/linked_in_profile",
    issuer: "HashiCorp",
  },
  {
    title: "Snowflake GenAI Professional",
    link: "https://www.credly.com/badges/44cd3bbe-5ec9-44e2-9dfe-b40359fa9efb",
    issuer: "Snowflake",
  },
  {
    title: "McKinsey Forward Learner Program",
    link: "https://drive.google.com/file/d/1wukWNURec7XhNodLP9c3lKAR015y6ZYv/view",
    issuer: "McKinsey & Company",
  },
  {
    title: "Building with the Claude API",
    link: "https://verify.skilljar.com/c/o833xs8yyx35",
    issuer: "Anthropic",
  },
];

const HONOURS = [
  {
    id: "HON_01",
    title: "Encore 2022 — Finalist",
    subtitle: "Storytelling Competition on Entrepreneurship (Green IT)",
    issuer: "Jaipuria Institute of Management, Indore",
    date: "Jan 2022",
    desc: "Finalist in a national storytelling competition. Pitched an idea on improving malls and buildings using Pro-Renewable Materials for sustainable construction and maintenance.",
    tags: ["Green IT", "Entrepreneurship", "Sustainability"],
  },
  {
    id: "HON_02",
    title: "WHAT IF — Winner",
    subtitle: "Monthly Article Writing Competition · November 2021 Edition",
    issuer: "The Bhopal School of Social Sciences",
    date: "Nov 2021",
    desc: "Won the November 2021 edition of the monthly article writing competition. Associated with SRM University, AP.",
    tags: ["Writing", "Research", "SRM University AP"],
  },
  {
    id: "HON_03",
    title: "AR with Snapchat Lens Studio",
    subtitle: "Snap Badge — Community Recognition",
    issuer: "Snap, Inc.",
    date: "Jan 2021",
    desc: "Built 3 viral Lenses using Snapchat's Lens Studio. Lenses went live for 3 months. Created 3D and AI face-mask recognition. Earned the official Snap Badge from Snap, Inc.'s Community.",
    tags: ["Augmented Reality", "3D Design", "AI Face Recognition", "Lens Studio"],
  },
];

const AWARDS = [
  "Runner Up — Organon (Analytica), IIM Rohtak",
  "Participant — MedusaJS Hackathon 2022",
];

const SKILLS = [
  {
    category: "Business Intelligence",
    items: ["MS Office Suite", "Tableau", "Power BI", "Google Analytics", "Looker", "SAP"],
  },
  {
    category: "Data & Strategy",
    items: ["SQL (MySQL, NoSQL)", "Python (Pandas, NumPy)", "Financial Modeling", "Market Research", "A/B Testing"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Kubernetes", "VMware", "RedHat", "Terraform", "Docker"],
  },
  {
    category: "Languages",
    items: ["C/C++", "Java", "JavaScript", "Swift", "Bash/Shell Scripting"],
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 min-h-screen bg-[#0a0a0a] text-zinc-100 py-32 px-6 md:px-24">
      {/* Top line accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d92525] to-transparent opacity-20" />
      <div className="absolute top-0 inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(217,37,37,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto space-y-32">

        {/* ─── EXPERIENCE ─── */}
        <div id="experience">
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

          <div className="space-y-6">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative backdrop-blur-3xl bg-white/[0.02] border border-white/10 hover:border-[#d92525]/40 transition-all duration-500 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#d92525]/0 via-[#d92525]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-[#d92525] mb-2 block">
                        {exp.id} / ACTIVE
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-zinc-400 font-medium mt-1 uppercase tracking-wider text-sm">
                        {exp.company}
                      </h4>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 border border-zinc-800 px-4 py-2 rounded-full h-fit whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-zinc-400 font-light text-sm leading-relaxed">
                        <span className="text-[#d92525] mt-1.5 text-[8px]">▶</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
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

        {/* ─── VOLUNTEERING ─── */}
        <div id="volunteering">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <span className="font-mono text-[#d92525] uppercase tracking-widest text-xs mb-4 block">
              // Community.Service
            </span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Volunteering <span className="text-zinc-600 font-serif italic">& Causes</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {VOLUNTEERING.map((vol, i) => (
              <motion.div
                key={vol.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative backdrop-blur-3xl bg-white/[0.02] border border-white/10 hover:border-[#d92525]/40 transition-all duration-500 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#d92525]/0 via-[#d92525]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-[#d92525] mb-2 block">
                        {vol.id} / VOLUNTEER
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                        {vol.role}
                      </h3>
                      <h4 className="text-zinc-400 font-medium mt-1 uppercase tracking-wider text-sm">
                        {vol.org}
                      </h4>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 self-start">
                      <span className="font-mono text-xs text-zinc-500 border border-zinc-800 px-4 py-2 rounded-full whitespace-nowrap">
                        {vol.period}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-500 border border-emerald-900/50 bg-emerald-900/20 px-3 py-1 rounded-full uppercase tracking-widest">
                        {vol.cause}
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed flex items-start gap-3">
                    <span className="text-[#d92525] mt-1.5 text-[8px]">▶</span>
                    {vol.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── EDUCATION ─── */}
        <div id="education">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <span className="font-mono text-[#d92525] uppercase tracking-widest text-xs mb-4 block">
              // Academic.Records
            </span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Education <span className="text-zinc-600 font-serif italic">& Training</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative backdrop-blur-3xl bg-white/[0.02] border border-white/10 hover:border-[#d92525]/40 transition-all duration-500 rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d92525]/0 to-[#d92525]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] tracking-widest text-[#d92525]">{edu.id}</span>
                    <span className="font-mono text-xs text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-[#d92525] font-mono text-xs uppercase tracking-wider mb-1">{edu.specialization}</p>
                  <p className="text-zinc-300 font-medium mb-1">{edu.institution}</p>
                  <p className="text-zinc-500 text-sm mb-4">{edu.location}</p>

                  {/* Grade badge */}
                  {edu.grade && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Grade:</span>
                      <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] uppercase tracking-widest rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                  )}

                  {/* Honours */}
                  {edu.honours.length > 0 && (
                    <div className="mb-5 space-y-2">
                      {edu.honours.map((h, j) => (
                        <div key={j} className="flex items-start gap-2 text-zinc-300 text-xs font-light">
                          <span className="text-amber-400 mt-1 text-[8px] shrink-0">★</span>
                          {h}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c) => (
                      <span key={c} className="px-2 py-1 bg-black/50 text-zinc-400 font-mono text-[9px] rounded border border-zinc-900">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── PROJECTS ─── */}
        <div id="projects">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <span className="font-mono text-[#d92525] uppercase tracking-[0.2em] text-xs mb-4 block">
              // Engineering.Output
            </span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Selected <span className="text-zinc-600 font-serif italic">Projects</span>
            </h2>
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
                  <p className="text-zinc-400 font-light mb-6 flex-1 leading-relaxed text-sm">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-zinc-900 text-zinc-300 font-mono text-[9px] uppercase rounded-md border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 font-mono text-xs uppercase tracking-widest text-[#d92525] hover:text-white transition-colors flex items-center gap-2"
                    >
                      {project.linkLabel}
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

        {/* ─── CERTIFICATIONS ─── */}
        <div id="certifications">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <span className="font-mono text-[#d92525] uppercase tracking-widest text-xs mb-4 block">
              // Credentials.Verified
            </span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Certifications <span className="text-zinc-600 font-serif italic">& Awards</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 bg-white/[0.02] border border-white/10 hover:border-[#d92525]/50 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d92525]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">{cert.issuer}</p>
                  <h4 className="text-white font-semibold text-sm leading-snug mb-3 group-hover:text-[#d92525] transition-colors">{cert.title}</h4>
                  <span className="font-mono text-[10px] text-[#d92525] uppercase tracking-widest flex items-center gap-1.5">
                    Verify Credential
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl"
          >
            <h3 className="font-mono text-[#d92525] uppercase tracking-widest text-xs mb-6">// Awards & Recognition</h3>
            <div className="flex flex-col gap-3">
              {AWARDS.map((award, i) => (
                <div key={i} className="flex items-center gap-4 text-zinc-300 text-sm font-light">
                  <span className="text-[#d92525] text-[8px]">▶</span>
                  {award}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── HONOURS & ACHIEVEMENTS ─── */}
        <div id="honours">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <span className="font-mono text-[#d92525] uppercase tracking-widest text-xs mb-4 block">
              // Honours.Unlocked
            </span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Honours <span className="text-zinc-600 font-serif italic">& Achievements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HONOURS.map((hon, i) => (
              <motion.div
                key={hon.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition-all duration-500 rounded-2xl overflow-hidden p-8 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Header row */}
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-mono text-[10px] tracking-widest text-amber-500">{hon.id}</span>
                    <span className="font-mono text-[10px] text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded-full">{hon.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors leading-tight">
                    {hon.title}
                  </h3>
                  <p className="font-mono text-[10px] text-amber-500/70 uppercase tracking-wider mb-2">{hon.subtitle}</p>

                  {/* Issuer */}
                  <p className="text-zinc-500 text-xs mb-4 font-mono">
                    Issued by {hon.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm font-light leading-relaxed flex-1 mb-5">
                    {hon.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {hon.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-amber-500/5 border border-amber-500/20 text-amber-500/70 font-mono text-[9px] uppercase rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── SKILLS ─── */}
        <div id="skills">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <span className="font-mono text-[#d92525] uppercase tracking-widest text-xs mb-4 block">
              // Technical.Stack
            </span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Skills <span className="text-zinc-600 font-serif italic">& Tools</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/10 hover:border-[#d92525]/30 rounded-2xl transition-all duration-300"
              >
                <h3 className="font-mono text-[#d92525] uppercase tracking-widest text-xs mb-5">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-black/60 text-zinc-200 font-mono text-[10px] uppercase rounded-full border border-zinc-800 hover:border-[#d92525]/50 hover:text-white transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
