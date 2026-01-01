'use client';

import { motion } from 'motion/react';
import { useEffect, useState, use } from 'react';
import dynamic from 'next/dynamic';
import { VscArrowLeft } from 'react-icons/vsc';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getProjectData } from '@/lib/projectsData';
import Image from 'next/image';

// Dynamically import heavy components
const Galaxy = dynamic(() => import('@/components/Galaxy'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black" />
});

const RootBackground = dynamic(() => import('@/components/shared/RootBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black" />
});

const ParticleCard = dynamic(() => import('@/components/MagicBento').then(mod => ({ default: mod.ParticleCard })), {
  ssr: false,
  loading: () => <div className="w-full bg-white/5 border border-white/10 rounded-2xl animate-pulse" />
});

interface ProjectPageProps {
  params: Promise<{
    project: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Unwrap params using React.use()
  const { project: projectSlug } = use(params);

  // Load project data
  const project = getProjectData(projectSlug);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) {
    notFound();
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Root background + galaxy */}
      <RootBackground />
      <div className="fixed inset-0 z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.6}
          glowIntensity={0.15}
          saturation={0}
          hueShift={140}
          speed={0.05}
          rotationSpeed={0.05}
          repulsionStrength={1}
          transparent={true}
        />
      </div>

      {/* Page content — Bento-based surface everywhere */}
      <div className="relative z-10 min-h-screen">
        {/* Top padding section */}
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Hero card with image */}
              <ParticleCard className="p-0 mb-8 bg-white/10 border border-white/15 rounded-2xl overflow-hidden" particleCount={0} glowColor="255,255,255" enableTilt={false} enableMagnetism={false} clickEffect={false}>
                {/* Project Image */}
                {project.image && (
                  <div className="relative w-full aspect-video bg-gradient-to-b from-gray-900 to-black overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <div className="flex items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => router.push('/projects')}
                        aria-label="Back to projects"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <VscArrowLeft size={18} />
                        <span className="text-sm">Back</span>
                      </button>

                      <div>
                        <div className="text-xs text-gray-400 mb-1">{project.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: project.color }} />
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">{project.title}</h1>
                  <p className="text-lg text-gray-300 max-w-3xl mb-6">{project.description}</p>

                  {/* View Live Project Button */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-light rounded-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 text-sm tracking-wider uppercase"
                    >
                      <span>View Live Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </ParticleCard>
            </motion.div>
          </div>
        </section>

        {/* Main grid — each item is a ParticleCard for consistency */}
        <section className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="grid gap-6 md:grid-cols-4">
                {/* Problem */}
                <div className="md:col-span-2 md:row-span-2">
                  <ParticleCard className="p-6 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={12} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                    <h3 className="text-2xl font-medium mb-3">The Problem</h3>
                    <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                  </ParticleCard>
                </div>

                {/* Solution (large) */}
                <div className="md:col-span-2 md:row-span-2">
                  <ParticleCard className="p-6 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={12} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                    <h3 className="text-2xl font-medium mb-3">The Solution</h3>
                    <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                  </ParticleCard>
                </div>

                {/* Features */}
                {project.features && project.features.map((feature, index) => (
                  <div key={`feat-${index}`}>
                    <ParticleCard className="p-4 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={8} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                      <div className="text-gray-400 text-xs mb-1">Feature {index + 1}</div>
                      <div className="text-gray-200">{feature}</div>
                    </ParticleCard>
                  </div>
                ))}

                {/* Tech Stack */}
                <div className="md:col-span-2">
                  <ParticleCard className="p-6 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={10} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                    <h3 className="text-xl font-medium mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack && project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/15 text-xs text-gray-300 rounded-full border border-white/15">{tech}</span>
                      ))}
                    </div>
                  </ParticleCard>
                </div>

                {/* Business Impact */}
                <div className="md:col-span-2">
                  <ParticleCard className="p-6 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={10} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                    <h3 className="text-xl font-medium mb-3">Business Impact</h3>
                    <ul className="space-y-2">
                      {project.impact && project.impact.map((impact, index) => (
                        <li key={`imp-${index}`} className="text-gray-300">• {impact}</li>
                      ))}
                    </ul>
                  </ParticleCard>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


      </div>

      {/* no dock */}
    </div>
  );
}
