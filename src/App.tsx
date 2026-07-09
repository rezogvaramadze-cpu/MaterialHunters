import { motion } from "motion/react";
import { ShieldAlert, TerminalSquare, Skull } from "lucide-react";
import { Link } from "react-router-dom";
import { WORKS } from "./data";

const MEMBERS = [
  'DACHI CHEZHIA', 'DEMNA DALAKISHVILI', 'REZI GVARAMADZE', 
  'TAMARA MAGHLAPERIDZE', 'GEORGE NAMGALADZE', 'NATALIA NEBIERIDZE', 
  'MARIAM KARCHKHADZE', 'GEORGE-SHOTA KARTOZIA'
];

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[#ff003c] selection:text-white">
      {/* NOISE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* HERO */}
      <header className="relative w-full min-h-screen flex flex-col items-center justify-center border-b-[20px] border-[#00ff41] bg-black text-[#00ff41] overflow-hidden p-4">
        <div className="absolute top-4 left-4 font-mono text-sm md:text-base font-bold bg-[#ff003c] text-white p-2 border-2 border-[#ff003c] z-20">
          SYS.DATE: {new Date().getFullYear()} // GEO // TOXIC_MODE: ON
        </div>
        <div className="absolute top-4 right-4 z-20">
            <ShieldAlert className="w-12 h-12 text-[#ff003c] animate-pulse" />
        </div>

        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="z-10 relative flex flex-col items-center"
        >
          <h1 
            className="text-[15vw] md:text-[12vw] font-black leading-[0.8] uppercase text-center text-transparent stroke-text glitch-text"
            data-text="MATERIAL"
          >
            MATERIAL
          </h1>
          <h1 
            className="text-[15vw] md:text-[12vw] font-black leading-[0.8] uppercase text-center text-[#ff003c] glitch-text mt-[-4vw]"
            data-text="HUNTERS"
          >
            HUNTERS
          </h1>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <TerminalSquare className="w-full h-full p-20 text-[#fff952]" />
        </div>

        {/* MARQUEE */}
        <div className="absolute bottom-12 left-0 w-full bg-[#ff003c] text-black font-mono text-2xl md:text-4xl font-black whitespace-nowrap py-4 border-y-8 border-black transform -rotate-3 scale-110 z-20 overflow-hidden">
          <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
              className="inline-block"
          >
              {MEMBERS.map(m => <span key={m} className="mx-8">{m} <Skull className="inline-block w-8 h-8 mb-2" /></span>)}
              {MEMBERS.map(m => <span key={m+"2"} className="mx-8">{m} <Skull className="inline-block w-8 h-8 mb-2" /></span>)}
          </motion.div>
        </div>
      </header>

      {/* MANIFESTO - BRUTAL CYNICISM */}
      <section className="p-8 md:p-16 lg:p-24 bg-black text-white grid md:grid-cols-12 gap-8 md:gap-16 border-b-[16px] border-[#ff003c] relative">
        <div className="md:col-span-7 space-y-8 text-3xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.1]">
          <h2 className="text-[#00ff41] glitch-text" data-text="THE TIME HAS COME FOR US TO BECOME MADMEN IN YOUR CHAIN.">
            The time has come for us to become madmen in your chain.
          </h2>
          <p className="text-[#fff952] font-bold text-2xl md:text-4xl lowercase">
            we construct art from the junk of contemporary existence. everything in which you live your life is mere waste.
          </p>
        </div>
        
        <div className="md:col-span-5 font-mono text-sm md:text-xl space-y-8 bg-zinc-900 p-8 border-[12px] border-[#00ff41] transform rotate-2">
          <p className="border-l-8 border-[#ff003c] pl-4">
            In a world where war threatens us with extinction, a reality where social catastrophes take their toll on our souls... What do we call performing? We call it reduction. Reduction of doing, reduction of simulation, reduction of performing itself.
          </p>
          <div className="bg-[#ff003c] text-white p-6 font-black uppercase transform -rotate-3 text-2xl">
            Consumption is not a basic instinct and it has no value.
          </div>
          <p className="border-r-8 border-[#fff952] pr-4 text-right">
            We are its clearest example. The unrelenting desire to become waste, to be discarded, to embrace the stench.
          </p>
        </div>
      </section>

      {/* ARCHIVE LINK SECTION */}
      <section className="py-32 px-4 md:px-8 bg-[#fff952] text-black relative flex justify-center items-center overflow-hidden border-b-[24px] border-black">
        <div className="absolute inset-0 flex flex-wrap gap-4 opacity-10 text-black font-black text-6xl break-all leading-none pointer-events-none">
            {Array(50).fill("WASTE JUNK DECAY ").map((t, i) => <span key={i}>{t}</span>)}
        </div>
        
        <Link to="/archive" className="relative z-20 group">
          <div className="bg-black text-[#00ff41] border-[16px] border-[#ff003c] p-12 md:p-24 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter glitch-text mb-4" data-text="ENTER THE ARCHIVE">
              ENTER THE ARCHIVE
            </h2>
            <p className="font-mono text-white text-xl md:text-3xl font-bold uppercase">
              {WORKS.length} records of visual data waiting to infect your screen.
            </p>
          </div>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white p-8 md:p-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-black uppercase">
            <div className="text-4xl md:text-7xl tracking-tighter text-[#ff003c] glitch-text" data-text="MATERIAL HUNTERS">
                MATERIAL <br/> HUNTERS
            </div>
            <div className="font-mono text-sm md:text-lg text-center md:text-right space-y-2 border-r-4 border-[#00ff41] pr-4">
                <p>GEORGIA | SINCE 2015</p>
                <p>INTERDISCIPLINARY ARTIST COLLECTIVE</p>
                <p>CONTACT: MATERIAL.HUNTERS@GMAIL.COM</p>
                <a href="https://www.instagram.com/materialhunters/" target="_blank" rel="noreferrer" className="inline-block mt-4 bg-[#fff952] text-black px-6 py-3 font-bold hover:bg-[#ff003c] hover:text-white transition-colors">
                    INSTAGRAM // INJECT
                </a>
            </div>
        </div>
      </footer>
    </div>
  );
}
