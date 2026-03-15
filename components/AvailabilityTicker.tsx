'use client';

import { motion } from 'motion/react';

export default function AvailabilityTicker() {
  const items = [
    "Available for projects",
    "Luxury E-Commerce",
    "AR/3D",
    "AI Systems",
    "Next.js 16 Expert",
    "Available for projects",
    "Luxury E-Commerce",
    "AR/3D",
    "AI Systems",
    "Next.js 16 Expert",
  ];

  return (
    <div className="w-full bg-[var(--accent-primary)] py-1 overflow-hidden border-b border-black/5 select-none relative z-[60]">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-8 px-4"
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-black group">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
            </div>
          ))}
        </motion.div>
        
        {/* Second copy for seamless loop */}
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-8 px-4"
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-black group">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
