import { motion } from "framer-motion";

export default function BackgroundCarousel() {
  const blobs = [
    { color: "bg-sky-400", top: "5%", left: "5%", duration: 25, delay: 0 },
    { color: "bg-indigo-400", top: "50%", left: "60%", duration: 30, delay: 2 },
    { color: "bg-blue-300", top: "30%", left: "20%", duration: 22, delay: 5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute h-[500px] w-[500px] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 ${blob.color}`}
          animate={{
            // Complex movement path
            x: [0, 150, -100, 80, 0],
            y: [0, 90, 150, -60, 0],
            // Organic shape shifting
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "60% 40% 30% 70% / 50% 60% 40% 60%",
              "40% 60% 70% 30% / 40% 50% 60% 50%",
            ],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            delay: blob.delay,
            ease: "easeInOut", // Smoother than linear
          }}
          style={{ 
            top: blob.top, 
            left: blob.left,
          }}
        />
      ))}
    </div>
  );
}
