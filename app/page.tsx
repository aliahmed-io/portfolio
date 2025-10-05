'use client';

import { motion } from 'motion/react';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Dynamically import RootBackground for better performance
const RootBackground = dynamic(() => import('@/components/shared/RootBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black" />
});

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Root Background Component - Lazy loaded */}
      <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black" />}>
        <RootBackground speed={0.2} rotationSpeed={0.2} density={0.4} glowIntensity={0.08} hueShift={0} />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-12"
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              >
                <span className="gradient-text">Ali Ahmed</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Specialist Web Developer focused on Interactive 3D Experiences and Custom AI Integration
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
              >
                <button
                  onClick={() => router.push('/projects')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 text-white font-light rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-[1.02] text-sm tracking-wider uppercase"
                >
                  View Projects
                </button>
                <button
                  onClick={() => router.push('/about')}
                  className="px-8 py-4 border border-white/20 text-white font-light rounded-2xl hover:border-white/30 hover:bg-white/5 transition-all duration-500 text-sm tracking-wider uppercase"
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Subtle Footer */}
        <motion.footer 
          className="text-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <div className="text-xs text-gray-600 tracking-widest uppercase">
            Building Premium Digital Experiences
          </div>
        </motion.footer>
      </div>
    </div>
  );
}