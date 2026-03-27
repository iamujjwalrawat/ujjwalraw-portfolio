"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  
  // Custom states for Splash Screen
  const [entered, setEntered] = useState(false);
  const autoFrameIndex = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  const scrollFrameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setLoaded(true);
        }
      }
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      let currentFrame;
      if (!entered) {
        // Auto-play dynamically before entering
        autoFrameIndex.current = (autoFrameIndex.current + 0.3) % FRAME_COUNT;
        currentFrame = Math.floor(autoFrameIndex.current);
      } else {
        // Scrub dynamically after entering
        currentFrame = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(scrollFrameIndex.get())));
      }
      
      const img = images[currentFrame];

      if (img && img.complete && img.naturalHeight !== 0) {
        const canvas = canvasRef.current!;
        const { width: cW, height: cH } = canvas;
        const { width: iW, height: iH } = img;

        const ratio = Math.max(cW / iW, cH / iH);
        const newW = iW * ratio;
        const newH = iH * ratio;
        const offsetX = (cW - newW) / 2;
        const offsetY = (cH - newH) / 2;

        ctx.clearRect(0, 0, cW, cH);
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(img, offsetX, offsetY, newW, newH);
        
        ctx.fillStyle = "rgba(10, 10, 10, 0.5)"; // Deep grit overlay
        ctx.fillRect(0, 0, cW, cH);
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [loaded, scrollFrameIndex, images, entered]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#000]">
      {/* Disable scrolling while in splash screen */}
      {!entered && (
        <style dangerouslySetInnerHTML={{__html: `body { overflow: hidden; }`}} />
      )}
      
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#000]">
        
        {/* Splash screen Enter the World Button */}
        <AnimatePresence>
          {!entered && loaded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            >
              <button
                onClick={() => setEntered(true)}
                className="group relative px-12 py-5 rounded-full overflow-hidden bg-white/5 border border-white/20 hover:border-[#d92525] hover:bg-black/80 transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_-10px_rgba(217,37,37,0.7)] transform hover:scale-105"
                style={{
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.3)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                <span className="relative z-10 font-bold tracking-widest uppercase text-white drop-shadow-md flex items-center gap-3">
                  Enter The World
                </span>
                {/* 3D bevel effect */}
                <div className="absolute inset-0 rounded-full inset-ring inset-ring-white/10 opacity-50 pointer-events-none" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        
        {/* Only show scroll overlays once entered */}
        <div className={`transition-opacity duration-1000 ${entered ? 'opacity-100' : 'opacity-0'}`}>
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
        
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)]" />
      </div>
    </section>
  );
}
