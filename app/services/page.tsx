'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  BsStars,
  BsCpu,
  BsPalette,
  BsCheck2,
  BsArrowRight,
  BsLightning
} from 'react-icons/bs';

// Dynamically import background
const Galaxy = dynamic(() => import('@/components/Galaxy'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[var(--bg-primary)]" />,
});

// Service tiers
const serviceTiers = [
  {
    id: 'landing',
    name: 'Cinematic Landing Page',
    price: '$2,800',
    description: 'An award-winning, high-conversion landing page designed to captivate your audience. Features cinematic animations and immersive storytelling.',
    ideal: 'Product launches, Luxury brands, and Portfolios.',
    features: [
      'Awwwards-quality design',
      'Scroll-driven animations',
      'Interactive 3D hero section',
      'Cinematic storytelling',
      'Mobile-first responsive',
      'Performance optimized',
    ],
    color: 'var(--design-color)',
    popular: false,
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Application',
    price: '$4,500',
    description: 'A complete, custom e-commerce or business platform with a built-in CMS, user authentication, and database integration.',
    ideal: 'SaaS products, E-commerce stores, and complex web apps.',
    features: [
      'Custom UI/UX design',
      'Next.js 15 / React 19',
      'CMS & Admin Dashboard',
      'Payment Processing (Stripe)',
      'User Authentication',
      'Database Design',
    ],
    color: 'var(--text-secondary)',
    popular: true,
  },
  {
    id: 'immersive',
    name: 'The "Award-Winning" Exp.',
    subtitle: 'AI + 3D Integration',
    price: '$6,500+',
    description: 'The ultimate digital experience. Combines cinematic design with advanced AI features and complex 3D interactivity.',
    ideal: 'Market leaders looking to dominate their industry with innovation.',
    features: [
      'All Landing & Full-Stack features',
      'Advanced WebGL / Three.js',
      'Custom AI Agent integration',
      'Real-time audio/video',
      'Physics-based interactions',
      'White-glove support',
    ],
    color: 'var(--accent-primary)',
    popular: false,
  },
];

// Add-on services
const addOns = [
  {
    icon: BsCpu,
    name: '3D Viewer Integration',
    price: '$2,500',
    description: 'Integrate a high-performance, interactive 3D product viewer into your existing e-commerce site.',
    outcome: 'Increased user confidence and higher conversion rates.',
    color: 'var(--three-d-color)',
  },
  {
    icon: BsStars,
    name: 'AI Chatbot Integration',
    price: '$3,000',
    description: 'Integrate a custom-trained AI chatbot into your website for instant customer support.',
    outcome: 'Improved customer satisfaction and reduced operational overhead.',
    color: 'var(--ai-color)',
  },
  {
    icon: BsPalette,
    name: 'General Feature Development',
    price: '$1,800',
    description: 'Build and integrate standard full-stack features like custom dashboards or booking systems.',
    outcome: 'Enhanced functionality tailored to your specific business needs.',
    color: 'var(--design-color)',
  },
];

export default function ServicesPage() {
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
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4 block">
                Services
              </span>
              <h1 className="text-4xl md:text-6xl font-light heading-display mb-6">
                Premium development with
                <br />
                <span className="gradient-text-accent">fixed pricing</span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Specialized development services focused on delivering tangible business outcomes.
                Value-based, fixed-price packages—no hourly surprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Tiers */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light heading-display">
                Full Website Development
              </h2>
              <p className="text-[var(--text-secondary)] mt-2">
                Complete, high-performance web applications built on modern, scalable foundations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {serviceTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-6 z-10">
                      <span className="px-4 py-1 text-xs font-medium bg-[var(--accent-primary)] text-white rounded-full flex items-center gap-1.5">
                        <BsLightning className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div
                    className={`h-full p-8 rounded-2xl border transition-all duration-300 ${tier.popular
                      ? 'border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5 hover:border-[var(--accent-primary)]/50'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                      }`}
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-medium mb-1">{tier.name}</h3>
                      {tier.subtitle && (
                        <span className="text-sm text-[var(--accent-primary)]">{tier.subtitle}</span>
                      )}
                    </div>

                    <div className="mb-6">
                      <span className="text-4xl font-light">{tier.price}</span>
                      <span className="text-[var(--text-muted)] ml-2">USD</span>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="mb-6 pb-6 border-b border-white/5">
                      <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Ideal for</span>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{tier.ideal}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <BsCheck2
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            style={{ color: tier.popular ? 'var(--accent-primary)' : 'var(--text-muted)' }}
                          />
                          <span className="text-[var(--text-secondary)]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${tier.popular
                        ? 'bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary)]/90'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                        }`}
                    >
                      <span>Get Started</span>
                      <BsArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light heading-display">
                Feature & Niche Integration
              </h2>
              <p className="text-[var(--text-secondary)] mt-2">
                For clients with established websites who need specialized, high-impact features.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => {
                const Icon = addon.icon;
                return (
                  <motion.div
                    key={addon.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="h-full p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{
                          background: `${addon.color}15`,
                          border: `1px solid ${addon.color}30`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: addon.color }} />
                      </div>

                      <h3 className="text-lg font-medium mb-2">{addon.name}</h3>

                      <div className="mb-4">
                        <span className="text-2xl font-light">{addon.price}</span>
                        <span className="text-[var(--text-muted)] ml-2 text-sm">USD</span>
                      </div>

                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {addon.description}
                      </p>

                      <div className="pt-4 border-t border-white/5">
                        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Outcome</span>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">{addon.outcome}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02]"
            >
              <h2 className="text-2xl font-light mb-8 text-center">How It Works</h2>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Discovery', desc: 'We discuss your goals, requirements, and vision.' },
                  { step: '02', title: 'Proposal', desc: 'I provide a detailed scope and fixed price.' },
                  { step: '03', title: 'Build', desc: 'Development with regular updates and feedback.' },
                  { step: '04', title: 'Launch', desc: 'Deployment, testing, and handover.' },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-light text-[var(--accent-primary)] mb-3">{item.step}</div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
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
                Ready to get started?
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
                Let&apos;s discuss your project requirements and find the perfect solution for your business needs.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Start Your Project</span>
                <BsArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
