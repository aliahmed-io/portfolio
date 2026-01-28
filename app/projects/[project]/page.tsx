'use client';

import { motion } from 'motion/react';
import { useEffect, useState, use } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getProjectData } from '@/lib/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeft, BsBoxArrowUpRight, BsCheckCircle } from 'react-icons/bs';

// Dynamically import background
const Galaxy = dynamic(() => import('@/components/Galaxy'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[var(--bg-primary)]" />,
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
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <Galaxy
          speed={0.08}
          rotationSpeed={0.04}
          density={0.25}
          glowIntensity={0.08}
          hueShift={280}
          saturation={0.4}
          mouseInteraction={true}
          transparent={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <button
                onClick={() => router.push('/projects')}
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-white transition-colors group"
              >
                <BsArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm">Back to Projects</span>
              </button>
            </motion.div>

            {/* Project Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <span className="text-sm text-[var(--text-muted)]">{project.date}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-light heading-display mb-6 max-w-4xl">
                {project.title}
              </h1>

              <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* CTA */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[var(--accent-primary)] rounded-full hover:bg-[var(--accent-primary)]/90 transition-colors"
                >
                  <span>View Live Project</span>
                  <BsBoxArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </div>
        </section>

        {/* Project Gallery or Single Image */}
        {project.gallery ? (
          <section className="px-6 pb-16">
            <div className="max-w-6xl mx-auto space-y-8">
              {project.gallery.map((img, index) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-white/5"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/20 via-transparent to-transparent" />
                </motion.div>
              ))}
            </div>
          </section>
        ) : project.video ? (
          <section className="px-6 pb-16">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black"
              >
                <video
                  src={project.video}
                  controls
                  poster={project.image}
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </section>
        ) : project.image ? (
          <section className="px-6 pb-16">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/5"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/50 via-transparent to-transparent" />
              </motion.div>
            </div>
          </section>
        ) : null}

        {/* Problem & Solution */}
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 text-lg">!</span>
                  </div>
                  <h2 className="text-xl font-medium">The Problem</h2>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <BsCheckCircle className="text-green-400 w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-medium">The Solution</h2>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <section className="px-6 pb-16">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-light mb-8"
              >
                Key Features
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-xs font-medium"
                        style={{
                          background: `${project.color}20`,
                          color: project.color,
                          border: `1px solid ${project.color}40`
                        }}
                      >
                        {index + 1}
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                        {feature}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack & Impact */}
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <h2 className="text-xl font-medium mb-5">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm text-[var(--text-secondary)] bg-white/5 rounded-lg border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Business Impact */}
              {project.impact && project.impact.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
                >
                  <h2 className="text-xl font-medium mb-5">Business Impact</h2>
                  <ul className="space-y-3">
                    {project.impact.map((impact, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                        <BsCheckCircle
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: project.color }}
                        />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
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
                Interested in similar work?
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
                Let&apos;s discuss how I can help bring your project to life with the same level of quality and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start a Conversation
                </Link>
                <Link href="/projects" className="btn-secondary">
                  View More Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
