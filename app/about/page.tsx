'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BsStars,
  BsCpu,
  BsPalette,
  BsCode,
  BsLightning,
  BsGear,
  BsArrowRight,
  BsBox
} from 'react-icons/bs';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiStripe,
  SiOpenai
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

// Removed Galaxy background for Luxury Atelier style

// Skills data
const skillCategories = [
  {
    title: 'Frontend',
    icon: BsCode,
    skills: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    icon: BsGear,
    skills: [
      { name: 'Node.js', icon: BsLightning },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Stripe', icon: SiStripe },
    ],
  },
  {
    title: 'Specializations',
    icon: BsStars,
    skills: [
      { name: 'AI APIs', icon: SiOpenai },
      { name: 'Three.js', icon: TbBrandThreejs },
      { name: 'GSAP', icon: BsLightning },
      { name: 'Motion', icon: BsPalette },
    ],
  },
];

// Approach cards
const approaches = [
  {
    icon: BsStars,
    title: 'AI Integration',
    description: 'I design and connect custom AI solutions—smart search, chatbots, and automation—to real workflows and measurable KPIs.',
    color: 'var(--ai-color)',
    className: 'spec-ai',
  },
  {
    icon: BsCpu,
    title: '3D Experiences',
    description: 'I build immersive, high-fidelity 3D viewers that turn static products into engaging experiences that boost conversions.',
    color: 'var(--three-d-color)',
    className: 'spec-3d',
  },
  {
    icon: BsBox,
    title: 'AR Experiences',
    description: 'I create augmented reality solutions that bridge the gap between digital and physical, from product try-ons to spatial interfaces.',
    color: 'var(--ar-color)',
    className: 'spec-ar',
  },
  {
    icon: BsPalette,
    title: 'Premium Design',
    description: 'I craft calm, performant interfaces on top of clean, scalable architecture. Every decision is deliberate and purposeful.',
    color: 'var(--design-color)',
    className: 'spec-design',
  },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

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
      {/* Background - using a subtle noise and static dark bg */}
      <div className="fixed inset-0 z-0 opacity-20 noise-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4 block">
                About Me
              </span>
              <h1 className="text-4xl md:text-6xl font-light heading-display mb-6">
                Building the future of
                <br />
                <span className="gradient-text-accent">web experiences</span>
              </h1>
            </motion.div>

            {/* Intro Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
            >
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6">
                I&apos;m a fullstack developer who builds premium, high-performance web experiences
                with a focus on <span className="text-white">AI integration</span>, <span className="text-white">AR/3D interactions</span>,
                and <span className="text-white">thoughtful design</span>.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                My work sits at the intersection of technology and creativity. I believe that
                exceptional digital products should be clear, purposeful, and respectful of the
                user&apos;s time—while still delivering that &quot;wow&quot; factor that makes them memorable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light heading-display">
                My Approach
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approaches.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group ${item.className}`}
                  >
                    <div className="relative h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                        style={{
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>

                      <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light heading-display">
                Technical Stack
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, catIndex) => {
                const CategoryIcon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 flex items-center justify-center">
                        <CategoryIcon className="w-5 h-5 text-[var(--accent-primary)]" />
                      </div>
                      <h3 className="text-lg font-medium">{category.title}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5"
                          >
                            <SkillIcon className="w-4 h-4 text-[var(--text-muted)]" />
                            <span className="text-sm text-[var(--text-secondary)]">{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02]"
            >
              <h2 className="text-2xl font-light mb-8 text-center">What I Value</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Quality Over Quantity',
                    description: 'I take on fewer projects to ensure each one receives the attention and care it deserves.'
                  },
                  {
                    title: 'Clear Communication',
                    description: 'I believe in transparent, honest communication throughout every project phase.'
                  },
                  {
                    title: 'Results-Driven',
                    description: 'Every decision is tied to measurable outcomes and real business impact.'
                  },
                  {
                    title: 'Continuous Learning',
                    description: 'I stay current with emerging technologies to deliver cutting-edge solutions.'
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
                Let&apos;s build something <span className="gradient-text-accent">valuable</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
                Explore my projects or reach out to discuss how I can help with your next venture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
                  <span>View Projects</span>
                  <BsArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
