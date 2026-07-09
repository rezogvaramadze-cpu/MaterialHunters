import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { WORKS } from "./data";

export default function Archive() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[#00ff41] selection:text-black">
      {/* NOISE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <header className="p-8 border-b-8 border-white bg-[#ff003c] sticky top-0 z-40 flex justify-between items-center">
        <Link to="/" className="font-mono font-bold text-white uppercase flex items-center gap-2 hover:text-black transition-colors mix-blend-difference">
          <ArrowLeft /> ESCAPE TO MAIN
        </Link>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter glitch-text mix-blend-difference" data-text="FULL ARCHIVE">
          FULL ARCHIVE
        </h1>
        <ShieldAlert className="w-8 h-8 text-black animate-ping" />
      </header>

      <main className="p-4 md:p-8 space-y-16 lg:space-y-32">
        {WORKS.map((work, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            key={work.id} 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 border-[12px] border-white p-4 md:p-8 relative ${idx % 2 === 0 ? 'bg-zinc-900' : 'bg-black'}`}
          >
            {/* INDEX MARKER */}
            <div className="absolute top-0 right-0 bg-[#00ff41] text-black font-black text-6xl md:text-8xl p-4 leading-none transform translate-x-4 -translate-y-4 md:translate-x-8 md:-translate-y-8 z-10">
              {String(idx + 1).padStart(2, '0')}
            </div>

            <div className="space-y-6 z-20">
              <div className="inline-block bg-[#fff952] text-black font-mono font-bold px-4 py-1 text-xl border-2 border-black transform -rotate-2">
                {work.year}
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase text-transparent stroke-text leading-none break-words">
                {work.title}
              </h2>
              <div className="font-mono text-[#ff003c] font-bold text-lg uppercase border-l-4 border-current pl-4">
                PERFORMERS: {work.performers}
              </div>
              <div className="text-lg md:text-xl font-medium leading-relaxed whitespace-pre-wrap">
                {work.text}
              </div>
            </div>

            <div className="border-4 border-[#00ff41] bg-black p-2 relative group z-20">
                <div className="absolute top-2 left-2 bg-[#ff003c] text-white font-mono text-xs px-2 py-1 z-30 uppercase animate-pulse">
                    REC // {work.id}
                </div>
                <div className="aspect-video w-full bg-zinc-800 relative">
                  <iframe 
                    className="w-full h-full absolute inset-0 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                    src={`https://www.youtube.com/embed/${work.video}?controls=1&modestbranding=1&rel=0`} 
                    title={work.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
            </div>
          </motion.div>
        ))}
      </main>

      <footer className="p-8 border-t-[12px] border-[#00ff41] bg-black text-center font-mono text-xl uppercase font-black">
        END OF RECORDS // <Link to="/" className="text-[#ff003c] hover:text-white transition-colors underline">RETURN TO SOURCE</Link>
      </footer>
    </div>
  );
}
