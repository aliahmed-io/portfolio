'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { BsStars, BsCpu, BsPalette } from 'react-icons/bs';

// Dynamically import 3D background
const Galaxy = dynamic(() => import('@/components/Galaxy'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[var(--bg-primary)]" />,
});

// Specialization data
const specializations = [
  {
    id: 'ai',
    icon: BsStars,
    title: 'AI Integration',
    description: 'Custom AI solutions: chatbots, smart search, and automation that drive real business outcomes.',
    color: 'var(--ai-color)',
    glow: 'var(--ai-glow)',
    className: 'spec-ai',
  },
  {
    id: '3d',
    icon: BsCpu,
    title: '3D Experiences',
    description: 'Interactive product viewers and immersive scenes that boost engagement and conversions.',
    color: 'var(--three-d-color)',
    glow: 'var(--three-d-glow)',
    className: 'spec-3d',
  },
  {
    id: 'design',
    icon: BsPalette,
    title: 'Premium Design',
    description: 'Award-winning interfaces with attention to every pixel, every interaction, every moment.',
    color: 'var(--design-color)',
    glow: 'var(--design-glow)',
    className: 'spec-design',
  },
];

// Specialization Card Component
function SpecializationCard({
  spec,
  index
}: {
  spec: typeof specializations[0];
  index: number;
}) {
  const Icon = spec.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative ${spec.className}`}
    >
      <div
        className="relative h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-[var(--spec-color)]/30 hover:bg-white/[0.04] overflow-hidden"
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at 50% 0%, ${spec.glow}, transparent 40%)`,
          }}
        />

        {/* Icon */}
        <div
          className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${spec.color}20, transparent)`,
            border: `1px solid ${spec.color}30`,
          }}
        >
          <Icon
            className="w-7 h-7 transition-colors duration-300"
            style={{ color: spec.color }}
          />
        </div>

        {/* Content */}
        <h3 className="relative text-xl font-medium text-white mb-3 tracking-tight">
          {spec.title}
        </h3>
        <p className="relative text-[var(--text-secondary)] text-sm leading-relaxed">
          {spec.description}
        </p>

        {/* Arrow indicator */}
        <div className="relative mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: spec.color }}>
          <span>Explore</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// Featured Project Preview
function FeaturedProjectPreview() {
  return (
    <motion.section
      className="relative py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-light heading-display">
            Projects that push boundaries
          </h2>
        </motion.div>

        {/* Featured Project Card - Novexa */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/projects/novexa" className="group block">
            <div className="relative rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-[var(--design-color)]/30">
              {/* Project image area */}
              <div className="relative h-[400px] bg-gradient-to-b from-[var(--design-color)]/5 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/projects/novexa.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 -mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--design-color)]/10 text-[var(--design-color)] border border-[var(--design-color)]/20">
                    Featured
                  </span>
                  <span className="text-[var(--text-muted)] text-sm">Jan 2025</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-[var(--design-color)] transition-colors duration-300">
                  Novexa: AI Commerce Platform
                </h3>

                <p className="text-[var(--text-secondary)] max-w-2xl mb-6">
                  Production-ready e-commerce with AI shopping assistant, smart search, 3D viewer integration, and complete operations dashboard.
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js', 'AI Integration', 'Stripe', 'Prisma'].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs text-[var(--text-muted)] bg-white/5 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-white font-medium group-hover:text-[var(--design-color)] transition-colors">
                  <span>View Project</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300"
          >
            <span>View All Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  // Simple scroll-based parallax without target ref (avoids hydration issues)
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, 100]);

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
      {/* 3D Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-[var(--bg-primary)]" />}>
        <div className="fixed inset-0 z-0">
          <Galaxy
            speed={0.15}
            rotationSpeed={0.08}
            density={0.5}
            glowIntensity={0.12}
            hueShift={280}
            saturation={0.6}
            mouseInteraction={true}
            mouseRepulsion={true}
            repulsionStrength={1.5}
            transparent={true}
          />
        </div>
      </Suspense>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-5xl mx-auto text-center pt-20">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[var(--text-secondary)] bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for projects
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light heading-display mb-8"
          >
            <span className="block text-white">Fullstack Developer</span>
            <span className="block mt-2 gradient-text-accent">AI • 3D • Design</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-12"
          >
            I build premium web experiences that combine cutting-edge AI,
            immersive 3D interactions, and thoughtful design to create real business value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn-secondary">
              Let&apos;s Talk
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Specializations Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4 block">
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl font-light heading-display">
              Specialized in three key areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <SpecializationCard key={spec.id} spec={spec} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <FeaturedProjectPreview />

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light heading-display mb-6">
              Ready to build something
              <span className="gradient-text-accent"> exceptional</span>?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how AI, 3D, and premium design can transform your product and drive measurable results.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Ali Ahmed. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/aliahmed-io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/ali_shimi_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:aly.al.shimi@gmail.com"
              className="text-[var(--text-muted)] hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}