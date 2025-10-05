'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import RootBackground from '@/components/shared/RootBackground';
import SpotlightCard from '@/components/SpotlightCard';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
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
      <RootBackground />

      <div className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
            >
              <SpotlightCard className="p-10 md:p-12 bg-white/5 border border-white/10 rounded-2xl">
                <h1 className="text-4xl md:text-6xl font-light tracking-tight gradient-text mb-6">About</h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
                  I build premium, high‑performance web experiences with a calm, formal aesthetic. My focus areas are
                  interactive 3D for immersive product storytelling and custom AI integrations that deliver tangible
                  business outcomes.
                </p>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>

        {/* Primary content grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Mission & Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <SpotlightCard className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl">
                  <h2 className="text-2xl font-light mb-3">Mission & Philosophy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Technology should be clear, purposeful, and respectful of the user’s time. I design systems that are
                    robust, scalable, and aligned to measurable business goals.
                  </p>
                </SpotlightCard>
              </motion.div>

              {/* Specializations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              >
                <SpotlightCard className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl">
                  <h2 className="text-2xl font-light mb-3">Specializations</h2>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Interactive 3D product experiences</li>
                    <li>• Custom AI (search, chat, automation)</li>
                    <li>• Calm, performant UI engineering</li>
                    <li>• Scalable, modern full‑stack architecture</li>
                  </ul>
                </SpotlightCard>
              </motion.div>

              {/* Tooling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                <SpotlightCard className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl">
                  <h2 className="text-2xl font-light mb-3">Tooling</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'TypeScript', 'React', 'Tailwind', 'Three.js', 'GSAP', 'AI APIs'].map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/10 text-xs text-gray-300 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Approach cards */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: '3D Experiences',
                  body:
                    'Turn static products into immersive, high‑fidelity viewers that increase engagement and buyer confidence.'
                },
                {
                  title: 'AI Integrations',
                  body:
                    'Design and connect custom AI—smart search, assistants, and automation—to real workflows and KPIs.'
                },
                {
                  title: 'Full‑stack Craft',
                  body:
                    'Calm interfaces on top of clean, scalable architecture. Every decision is deliberate and measurable.'
                }
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 * i }}
                >
                  <SpotlightCard className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl">
                    <h3 className="text-xl font-light mb-2">{card.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{card.body}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <SpotlightCard className="p-10 md:p-12 bg-white/5 border border-white/10 rounded-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-light">Let’s build something valuable</h2>
                <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
                  Explore the projects or reach out to discuss the right approach for your product.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => router.push('/projects')}
                    className="px-8 py-4 bg-white/10 glass border border-white/15 text-white font-light rounded-xl hover:bg-white/15 transition-all duration-500 text-sm tracking-wider uppercase"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => router.push('/contact')}
                    className="px-8 py-4 border border-white/20 text-white font-light rounded-xl hover:border-white/30 hover:bg-white/5 transition-all duration-500 text-sm tracking-wider uppercase"
                  >
                    Contact
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
