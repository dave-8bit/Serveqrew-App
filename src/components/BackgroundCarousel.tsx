import { motion } from "framer-motion";

const RAINDROP_DATA = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  left: `${(i * 13.7) % 100}%`, 
  duration: 1.2 + (i % 5) * 0.4, // Slightly slower for a more "dreamy" feel
  delay: (i % 10) * 0.3,
}));

export default function BackgroundCarousel() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50">
      
      {/* 1. The Blobs (Bottom Layer) */}
      <div className="absolute inset-0 z-10">
        {[
          { color: "bg-sky-400", top: "5%", left: "5%" },
          { color: "bg-indigo-400", top: "50%", left: "60%" },
          { color: "bg-blue-300", top: "20%", left: "30%" },
        ].map((blob, i) => (
          <div
            key={i}
            className={`absolute h-[500px] w-[500px] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 ${blob.color}`}
            style={{ top: blob.top, left: blob.left }}
          />
        ))}
      </div>

      {/* 2. The Blur Overlay (Middle Layer - Softens the blobs) */}
      <div className="absolute inset-0 z-20 bg-white/30 backdrop-blur-[4px]" />

      {/* 3. The Rain (Top Layer - Sharp and Clear) */}
      <div className="absolute inset-0 z-30"> 
        {RAINDROP_DATA.map((drop) => (
          <motion.div
            key={`rain-${drop.id}`}
            // Stylized: Thin, gradient-like streak
            className="absolute w-[1px] h-[70px] bg-gradient-to-b from-transparent via-sky-400/40 to-transparent" 
            initial={{ y: "-10vh", left: drop.left }}
            animate={{ y: "110vh" }}
            transition={{
              duration: drop.duration,
              repeat: Infinity,
              delay: drop.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}