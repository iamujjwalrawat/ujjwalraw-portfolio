"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Apple-like smooth mappings
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-15vh"]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Section 2: 25% to 55%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.55], ["10vh", "0vh", "-10vh"]);

  // Section 3: 60% to 90%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.65, 0.95], ["10vh", "0vh", "-10vh"]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center px-6 md:px-24">
      
      {/* SECTION 1: INTRODUCTION */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[#d92525] uppercase tracking-[0.2em] text-xs inline-block bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-[#d92525]/30">
              Portfolio Access
            </span>
          </motion.div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter text-white drop-shadow-2xl select-none leading-none"
        >
          UJJWAL <br className="md:hidden"/>RAW<span className="text-[#d92525]">.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 text-xl md:text-3xl font-light text-zinc-300 max-w-2xl drop-shadow-lg tracking-tight"
        >
          AI and Technology Strategist.
        </motion.p>
      </motion.div>

      {/* SECTION 2: THE MANIFESTO */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left max-w-5xl px-6 md:px-24"
      >
        <div className="bg-black/20 p-8 md:p-12 border-l border-[#d92525]/50 backdrop-blur-xl rounded-r-3xl shadow-2xl relative overflow-hidden group">
          {/* Apple-style internal glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
          
          <span className="relative font-mono text-[#d92525] uppercase tracking-[0.2em] text-xs mb-6 block">
             Summary
          </span>
          <h2 className="relative text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            <span className="text-zinc-500">Bridging</span> <br/>technical execution<br/>
            and <span className="text-[#d92525] italic font-serif">business objectives</span>.
          </h2>
        </div>
      </motion.div>

      {/* SECTION 3: CALL TO ACTION */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right pr-6 md:pr-24 right-0"
      >
        <div className="bg-black/20 p-8 md:p-12 border-r border-[#d92525]/50 backdrop-blur-xl rounded-l-3xl shadow-2xl relative overflow-hidden flex flex-col items-end">
          
          <span className="relative font-mono text-[#d92525] uppercase tracking-[0.2em] text-xs mb-6 block">
            Curriculum Vitae
          </span>
          <h2 className="relative text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-3xl mb-12">
            Driving <span className="underline decoration-[#d92525] decoration-[4px] underline-offset-8">transformation</span><br/>
            <span className="text-zinc-500 font-light">for the PMO & beyond.</span>
          </h2>

          <div className="pointer-events-auto">
            <a 
              href="/resume.pdf" 
              download="Ujjwal_Raw_Resume.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-zinc-900 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_40px_-10px_rgba(217,37,37,0.3)] hover:shadow-[0_0_60px_-15px_rgba(217,37,37,0.6)]"
            >
              {/* Apple-style hover sweep but in Fight Club red */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#d92525] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')] opacity-[0.05] pointer-events-none`} />
              
              <span className="relative font-mono text-sm tracking-widest uppercase text-white font-bold flex items-center gap-3">
                Access Resume.pdf
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
