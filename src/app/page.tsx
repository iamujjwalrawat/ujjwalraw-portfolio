import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import ContactBox from "@/components/ContactBox";

export default function Home() {
  return (
    <main className="bg-[#111] w-full min-h-screen">
      <ScrollyCanvas />
      <Projects />
      <ContactBox />
      
      {/* Footer / End Frame */}
      <footer className="w-full bg-[#050505] py-16 border-t border-zinc-900/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            <a href="#experience" className="hover:text-[#d92525] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#d92525] transition-colors">Education</a>
            <a href="#projects" className="hover:text-[#d92525] transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-[#d92525] transition-colors">Certifications</a>
            <a href="#skills" className="hover:text-[#d92525] transition-colors">Skills</a>
            <a href="https://www.linkedin.com/in/iamujjwalrawat/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d92525] transition-colors">LinkedIn ↗</a>
            <a href="https://github.com/iamujjwalrawat" target="_blank" rel="noopener noreferrer" className="hover:text-[#d92525] transition-colors">GitHub ↗</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#d92525] transition-colors">Resume PDF ↗</a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-zinc-600 font-mono text-[10px] gap-6 uppercase tracking-[0.3em] border-t border-zinc-900 pt-8">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-[#d92525]">System.Status_Nominal</span>
              <span>© {new Date().getFullYear()} UJJWAL RAW.</span>
            </div>
            
            <div className="flex gap-8 text-zinc-500">
              <a href="mailto:rawatujjwal06@gmail.com" className="hover:text-[#d92525] transition-colors">rawatujjwal06@gmail.com</a>
              <span>New Delhi, IN</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
