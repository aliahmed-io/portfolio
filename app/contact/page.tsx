'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import {
  BsTwitterX,
  BsInstagram,
  BsEnvelope,
  BsLinkedin,
  BsArrowUpRight
} from 'react-icons/bs';

// Dynamically import background
const Galaxy = dynamic(() => import('@/components/Galaxy'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[var(--bg-primary)]" />,
});

// Contact methods
const contactMethods = [
  {
    id: 'email',
    icon: BsEnvelope,
    title: 'Email',
    value: 'aly.al.shimi@gmail.com',
    href: 'mailto:aly.al.shimi@gmail.com',
    description: 'Best for detailed project inquiries',
    color: 'var(--accent-primary)',
  },
  {
    id: 'linkedin',
    icon: BsLinkedin,
    title: 'LinkedIn',
    value: 'Ali Ahmed',
    href: 'https://www.linkedin.com/in/ali-ahmed-703080380/',
    description: 'Professional networking & updates',
    color: '#0077B5',
  },
  {
    id: 'twitter',
    icon: BsTwitterX,
    title: 'Twitter / X',
    value: '@ali_shimi_dev',
    href: 'https://x.com/ali_shimi_dev',
    description: 'Quick questions & updates',
    color: 'var(--three-d-color)',
  },
  {
    id: 'instagram',
    icon: BsInstagram,
    title: 'Instagram',
    value: '@aly.al.shimi',
    href: 'https://www.instagram.com/aly.al.shimi/',
    description: 'Visual diary & updates',
    color: '#E1306C',
  },
];

export default function ContactPage() {
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
      <div className="fixed inset-0 z-0 opacity-60">
        <Galaxy
          speed={0.1}
          rotationSpeed={0.05}
          density={0.4}
          glowIntensity={0.1}
          hueShift={280}
          saturation={0.5}
          mouseInteraction={true}
          transparent={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full py-32 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4 block">
                Contact
              </span>
              <h1 className="text-4xl md:text-6xl font-light heading-display mb-6">
                Let&apos;s <span className="gradient-text-accent">connect</span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
                Have a project in mind or just want to chat?
                I typically respond within 24 hours.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.id}
                    href={method.href}
                    target={method.id !== 'email' ? '_blank' : undefined}
                    rel={method.id !== 'email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="group block"
                  >
                    <div className="relative h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(400px circle at 50% 0%, ${method.color}15, transparent 50%)`,
                        }}
                      />

                      {/* Icon */}
                      <div
                        className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `${method.color}15`,
                          border: `1px solid ${method.color}30`,
                        }}
                      >
                        <Icon
                          className="w-7 h-7 transition-colors duration-300"
                          style={{ color: method.color }}
                        />
                      </div>

                      {/* Content */}
                      <h3 className="relative text-lg font-medium text-white mb-1">
                        {method.title}
                      </h3>
                      <p
                        className="relative text-lg font-medium mb-3 group-hover:underline transition-colors duration-300"
                        style={{ color: method.color }}
                      >
                        {method.value}
                      </p>
                      <p className="relative text-sm text-[var(--text-muted)]">
                        {method.description}
                      </p>

                      {/* Arrow */}
                      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 group-hover:-translate-y-0 translate-x-2 translate-y-2">
                        <BsArrowUpRight className="w-5 h-5" style={{ color: method.color }} />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02] text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-green-400 font-medium">Available for new projects</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Looking for a partner on your next project?
              </h2>

              <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
                Whether you need an AI-powered solution, an immersive 3D experience,
                or a beautifully crafted web application, I&apos;m here to help turn your vision into reality.
              </p>

              <a
                href="mailto:aly.al.shimi@gmail.com?subject=Project%20Inquiry"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Start a Conversation</span>
                <BsEnvelope className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Response time note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-sm text-[var(--text-muted)] mt-12"
            >
              I typically respond within 24 hours on business days.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}