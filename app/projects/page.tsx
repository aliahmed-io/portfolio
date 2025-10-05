'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
// solid black background (no RootBackground)
import PixelCard from '@/components/PixelCard';
 
import { useRouter } from 'next/navigation';

const projects = [
  {
    id: 'axiom-assistant',
    title: 'Axiom Assistant',
    description: 'An intelligent conversational AI chatbot built to provide instant, 24/7 customer support and automate business communications.',
    tech: ['Next.js', 'React', 'TypeScript', 'Google Gemini API'],
    stars: '29K',
    date: 'Dec 2024'
  },
  {
    id: 'imaginify',
    title: 'Imaginify',
    description: 'A complete AI SaaS platform for intelligent image manipulation, featuring semantic search and credit-based payments.',
    tech: ['Next.js', 'React', 'TypeScript', 'Cloudinary AI', 'Stripe API'],
    stars: '22K',
    date: 'Nov 2024'
  },
  {
    id: 'lumen',
    title: 'Lumen',
    description: 'A full-stack real-time chat and video application demonstrating expertise in scalable, interactive platforms.',
    tech: ['Next.js', 'React', 'TypeScript', 'Convex', 'Stream SDK'],
    stars: '10K',
    date: 'Oct 2024'
  },
  {
    id: 'nexus',
    title: 'Nexus',
    description: 'A clean, modern e-commerce platform with fully integrated custom CMS for complete business control.',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL'],
    stars: '7.4K',
    date: 'Sep 2024'
  },
  {
    id: 'suburbia-skate',
    title: 'Suburbia Skate',
    description: 'An immersive 3D e-commerce experience featuring interactive product viewers to boost conversions.',
    tech: ['Next.js', 'React', 'Three.js', 'React Three Fiber', 'GSAP'],
    stars: '3K',
    date: 'Aug 2024'
  }
];

export default function ProjectsPage() {
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
      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-light tracking-tight gradient-text">
                Projects
              </h1>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                Some of the projects are from work and some are on my own time. Each one represents a unique challenge solved with innovative technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => router.push(`/projects/${project.id}`)}
                >
                  <PixelCard variant="default" className="h-full">
                    <div className="absolute inset-0 p-8 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1 font-light tracking-wider">{project.date}</div>
                        <div className="text-xs text-gray-600 font-light">{project.stars} stars</div>
                      </div>
                      </div>
                    
                    <h3 className="text-xl font-light mb-4 group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/15 text-xs text-gray-300 rounded-full backdrop-blur-sm font-light tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-white/15 text-xs text-gray-400 rounded-full backdrop-blur-sm font-light tracking-wider">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-white/60 text-xs font-light tracking-widest uppercase group-hover:text-white transition-colors duration-300">
                      Read more →
                    </div>
                    </div>
                  </PixelCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}