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
        <div className="max-w-7xl mx-auto px-6 md:px-24 flex flex-col md:flex-row justify-between items-center text-zinc-600 font-mono text-[10px] gap-6 uppercase tracking-[0.3em]">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-[#d92525]">System.Status_Nominal</span>
            <span>© {new Date().getFullYear()} UJJWAL RAW.</span>
          </div>
          
          <div className="flex gap-8 text-zinc-500">
            <a href="mailto:rawatujjwal06@gmail.com" className="hover:text-[#d92525] transition-colors">Contact</a>
            <span>Location: New Delhi, IN</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
