'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BsStars, BsCpu, BsPalette, BsBox } from 'react-icons/bs';
import TextReveal from '@/components/TextReveal';

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
    id: 'ar',
    icon: BsBox,
    title: 'AR Experiences',
    description: 'Augmented reality try-on and product visualization that bridge the gap between digital and physical retail.',
    color: 'var(--ar-color)',
    glow: 'var(--ar-glow)',
    className: 'spec-ar',
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

// Horizontal Scroll Showcase
function HorizontalShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={sectionRef} className="relative z-10 h-[200vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section header */}
        <div className="px-6 mb-8 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4 block">
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl font-light heading-display">
              Specialized in four key areas
            </h2>
          </motion.div>
        </div>

        {/* Horizontal cards */}
        <div className="px-6 overflow-visible">
          <motion.div
            style={{ x }}
            className="flex gap-8"
          >
            {specializations.map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.id}
                  className={`group relative flex-shrink-0 w-[80vw] md:w-[40vw] ${spec.className}`}
                >
                  <div
                    className="relative h-full p-10 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-[var(--spec-color)]/30 hover:bg-white/[0.04] overflow-hidden"
                  >
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at 50% 0%, ${spec.glow}, transparent 40%)`,
                      }}
                    />

                    {/* Large faded number */}
                    <span className="absolute top-6 right-8 text-[120px] font-light leading-none text-white/[0.03] pointer-events-none select-none">
                      {String(specializations.indexOf(spec) + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${spec.color}20, transparent)`,
                        border: `1px solid ${spec.color}30`,
                      }}
                    >
                      <Icon
                        className="w-8 h-8 transition-colors duration-300"
                        style={{ color: spec.color }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                      {spec.title}
                    </h3>
                    <p className="relative text-[var(--text-secondary)] text-base leading-relaxed max-w-md">
                      {spec.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="relative mt-8 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: spec.color }}>
                      <span>Explore</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Impact Stats Section
function ImpactStats() {
  const stats = [
    {
      label: 'AI Advanced Search',
      value: '5x',
      desc: 'Higher conversion rate for users engaging with AI search traffic.',
      source: 'SuperPrompt'
    },
    {
      label: 'AI Sales Chatbots',
      value: '67%',
      desc: 'Average increase in revenue using AI-driven sales agents.',
      source: 'Salesforce'
    },
    {
      label: 'AI Cart Recovery',
      value: '35%',
      desc: 'Abandoned carts successfully recovered via AI automation.',
      source: 'Envive.ai'
    },
    {
      label: 'AR Conversion Lift',
      value: '94%',
      desc: 'Higher purchase intent for AR-engaged shoppers.',
      source: 'Shopify'
    },
    {
      label: '3D User Engagement',
      value: '82%',
      desc: 'Shoppers who interact with 3D assets when available.',
      source: 'Gartner'
    },
    {
      label: 'UX Design ROI',
      value: '$100',
      desc: 'Return for every $1 invested in premium UX design.',
      source: 'Forrester'
    }
  ];

  return (
    <section className="relative z-10 py-32 px-6 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4 block">
            The Data
          </span>
          <h2 className="text-3xl md:text-5xl font-light heading-display">
            Why precision technology matters
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-12 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl xl:text-6xl font-light mb-4 gradient-text-accent">
                {stat.value}
              </div>
              <h3 className="text-[11px] md:text-xs font-medium text-white mb-2 uppercase tracking-wider">
                {stat.label}
              </h3>
              <p className="text-[11px] md:text-xs text-[var(--text-secondary)] leading-relaxed mb-4 max-w-[200px] mx-auto min-h-[2rem]">
                {stat.desc}
              </p>
              <span className="text-[9px] text-[var(--text-muted)] uppercase tracking-widest block opacity-60">
                Source: {stat.source}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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

        {/* Featured Project Card - Aethelon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/projects/aethelon" className="group block">
            <div className="relative rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-[var(--design-color)]/30">
              {/* Project image area */}
              <div className="relative h-[400px] bg-gradient-to-b from-[var(--design-color)]/5 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/projects/aethelon.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 -mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--design-color)]/10 text-[var(--design-color)] border border-[var(--design-color)]/20">
                    Featured
                  </span>
                  <span className="text-[var(--text-muted)] text-sm">Mar 2026</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-[var(--design-color)] transition-colors duration-300">
                  Aethelon: Premium Luxury Retail
                </h3>

                <p className="text-[var(--text-secondary)] max-w-2xl mb-6">
                  A cinematic, high-performance e-commerce platform for luxury retail featuring sub-500ms load times, integrated AR product visualizers, and a centralized AI operational CMS.
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js 16', 'AR/3D', 'Tailwind CSS', 'Gemini AI'].map((tech) => (
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
  const glowOpacity = useTransform(scrollY, [0, 400], [0, 0.6]);
  const glowScale = useTransform(scrollY, [0, 800], [0.8, 1.2]);

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
      {/* Background - Mesh Gradient */}
      <div className="mesh-gradient">
        <div className="mesh-orb orb-1" />
        <div className="mesh-orb orb-2" />
        <div className="mesh-orb orb-3" />
      </div>
      
      {/* Subtle noise texture overlay */}
      <div className="fixed inset-0 z-0 opacity-10 noise-overlay pointer-events-none" />


      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        {/* Scroll-triggered ambient glow */}
        <motion.div 
          style={{ opacity: glowOpacity, scale: glowScale }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--accent-primary)20%,transparent_70%)] opacity-20 blur-[120px]" />
        </motion.div>

        <div className="max-w-5xl mx-auto text-center pt-32 relative z-10">
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

          {/* Main headline — split-word reveal */}
          <div className="mb-8">
            <TextReveal
              text="Fullstack Developer"
              as="h1"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light heading-display text-white"
              delay={0.4}
              staggerDelay={0.08}
            />
            <TextReveal
              text="AI • 3D • Design"
              as="h1"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light heading-display gradient-text-accent mt-2"
              delay={0.8}
              staggerDelay={0.1}
            />
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-12"
          >
            I build premium web experiences that combine cutting-edge AI,
            immersive AR/3D interactions, and thoughtful design to create real business value.
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


        </div>
      </motion.section>

      {/* Specializations — Horizontal Scroll Showcase */}
      <HorizontalShowcase />

      {/* Impact Stats Section */}
      <ImpactStats />

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
              href="https://www.instagram.com/aly.al.shimi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-white transition-colors"
            >
              Instagram
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