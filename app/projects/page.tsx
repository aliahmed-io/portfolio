'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { getAllProjectsData } from '@/lib/projectsData';
import { BsStars, BsCpu, BsPalette, BsArrowRight, BsCodeSlash } from 'react-icons/bs';

// Dynamically import background
const Galaxy = dynamic(() => import('@/components/Galaxy'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[var(--bg-primary)]" />,
});

// Filter categories
const categories = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'design', label: 'Design', icon: BsPalette },
  { id: 'ai', label: 'AI', icon: BsStars },
  { id: '3d', label: '3D', icon: BsCpu },
  { id: 'fullstack', label: 'Full-Stack', icon: BsCodeSlash },
];

// Map projects to categories
const projectCategories: Record<string, string[]> = {
  'naturo': ['design', '3d'],
  'vonex': ['design'],
  'rive-droite': ['design', 'ai'],
  'vantiq': ['design', '3d'],
  'maison-lumiere': ['design', '3d'],
  'lundev-furniture': ['design', '3d'],
  'artura': ['design', '3d'],
  'imaginify': ['ai', 'fullstack'],
  'novexa': ['fullstack', 'ai'],
  'axion-assistant': ['ai', 'fullstack'],
  'lumen': ['fullstack'],
  'nexus': ['fullstack'],
  'revo': ['design', '3d'],
};

// Category colors
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'ai': { bg: 'var(--ai-color)', text: 'var(--ai-color)', border: 'var(--ai-color)' },
  '3d': { bg: 'var(--three-d-color)', text: 'var(--three-d-color)', border: 'var(--three-d-color)' },
  'design': { bg: 'var(--design-color)', text: 'var(--design-color)', border: 'var(--design-color)' },
  'fullstack': { bg: 'var(--fullstack-color)', text: '#000000', border: 'var(--fullstack-color)' },
};

interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  tech: string[];
  image?: string;
  color: string;
}

// Project Card Component
function ProjectCard({
  project,
  index,
  isFeatured = false
}: {
  project: Project;
  index: number;
  isFeatured?: boolean;
}) {
  const cats = projectCategories[project.id] || [];
  const primaryCat = cats[0] || 'fullstack';
  const catColor = categoryColors[primaryCat];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={isFeatured ? 'md:col-span-2' : ''}
    >
      <Link href={`/projects/${project.id}`} className="group block h-full">
        <div className="relative h-full rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-primary)]" />
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-transparent" />

            {/* Category badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {cats.slice(0, 2).map((cat) => {
                const Icon = categories.find(c => c.id === cat)?.icon;
                return (
                  <span
                    key={cat}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm"
                    style={{
                      background: `${categoryColors[cat]?.bg}15`,
                      color: categoryColors[cat]?.text,
                      border: `1px solid ${categoryColors[cat]?.border}30`,
                    }}
                  >
                    {Icon && <Icon className="w-3 h-3" />}
                    {cat.toUpperCase()}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-[var(--text-muted)]">{project.date}</span>
            </div>

            <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs text-[var(--text-muted)] bg-white/5 rounded-md border border-white/5"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2.5 py-1 text-xs text-[var(--text-muted)] bg-white/5 rounded-md border border-white/5">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            {/* View link */}
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors">
              <span>View Project</span>
              <BsArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = getAllProjectsData();

  // Filter projects
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => projectCategories[p.id]?.includes(activeFilter));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 opacity-50">
        <Galaxy
          speed={0.1}
          rotationSpeed={0.05}
          density={0.3}
          glowIntensity={0.08}
          hueShift={280}
          saturation={0.4}
          mouseInteraction={true}
          transparent={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <span className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4 block">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-light heading-display mb-6">
                Selected <span className="gradient-text-accent">Projects</span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                A collection of my best work, showcasing AI integration,
                immersive 3D experiences, and premium full-stack development.
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeFilter === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-white/5 text-[var(--text-secondary)] hover:bg-white/10 hover:text-white border border-white/10'
                      }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {cat.label}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              layout
              className="grid md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isFeatured={project.id === 'novexa'}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-[var(--text-muted)]">No projects found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-light heading-display mb-6">
                Have a project in mind?
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
                I&apos;m always excited to work on innovative projects that push the boundaries of web experiences.
              </p>
              <Link href="/contact" className="btn-primary">
                Let&apos;s Discuss
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}