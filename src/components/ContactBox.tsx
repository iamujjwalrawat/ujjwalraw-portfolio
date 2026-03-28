"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactBox() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-20 bg-[#000] text-zinc-100 py-32 px-6 md:px-24 border-t border-zinc-900 border-dashed">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[#d92525] uppercase tracking-[0.2em] text-xs mb-6 block">
             Get in touch
          </span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
            Let's <span className="text-zinc-600 font-serif italic text-4xl md:text-6xl">Connect</span>
          </h2>
          
          <div className="space-y-6 font-mono text-sm tracking-wider text-zinc-400">
            <p className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <span className="text-[#d92525] block w-4 h-4 rounded-full bg-black border border-[#d92525] group-hover:bg-[#d92525] transition-colors" />
              <a href="mailto:rawatujjwal06@gmail.com">rawatujjwal06@gmail.com</a>
            </p>
            <p className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <span className="text-[#d92525] block w-4 h-4 rounded-full bg-black border border-[#d92525]" />
              <a href="tel:+919315332162">(+91) 9315332162</a>
            </p>
            <p className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <span className="text-[#d92525] block w-4 h-4 rounded-full bg-black border border-[#d92525]" />
              New Delhi, India
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <a href="https://www.linkedin.com/in/iamujjwalrawat/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-zinc-900/50 hover:bg-white hover:text-black border border-zinc-800 transition-all font-mono text-xs uppercase tracking-widest rounded-full">
              LinkedIn
            </a>
            <a href="https://github.com/iamujjwalrawat" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-zinc-900/50 hover:bg-white hover:text-black border border-zinc-800 transition-all font-mono text-xs uppercase tracking-widest rounded-full">
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Netlify Functional Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-900/20 p-8 md:p-12 border border-white/10 backdrop-blur-3xl rounded-3xl relative overflow-hidden"
        >
          {/* subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d92525]/10 blur-[100px] pointer-events-none" />

          {/* Custom SMTP Backend Form Integration */}
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 relative z-10"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="bg-transparent border-b border-zinc-800 focus:border-[#d92525] py-3 outline-none text-white transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="bg-transparent border-b border-zinc-800 focus:border-[#d92525] py-3 outline-none text-white transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                className="bg-transparent border-b border-zinc-800 focus:border-[#d92525] py-3 outline-none text-white transition-colors resize-none"
                placeholder="Write your message..."
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="group relative self-start px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? "Sending securely..." : "Send Message"}
                {!loading && (
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </span>
              <div className="absolute inset-0 bg-[#d92525] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            {status === "success" && (
              <p className="text-green-500 font-mono text-sm">Message sent successfully! I'll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="text-[#d92525] font-mono text-sm">Operation failed. Please try reaching me directly via email.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
