'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import RootBackground from '@/components/shared/RootBackground';
import SpotlightCard from '@/components/SpotlightCard';
import { FiTwitter, FiMail, FiGithub } from 'react-icons/fi';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

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
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-light tracking-tight gradient-text">Contact</h1>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                Choose your preferred channel. I typically respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Twitter placeholder */}
              <div className="opacity-60">
                <SpotlightCard className="h-full bg-white/10 border border-white/15 p-12 text-center rounded-2xl">
                  <div className="mx-auto mb-6 grid place-items-center w-10 h-10 rounded-full border border-white/20 text-gray-300">
                    <FiTwitter />
                  </div>
                  <div className="text-2xl font-semibold text-gray-500">—</div>
                  <div className="mt-2 text-sm text-gray-500">Twitter</div>
                </SpotlightCard>
              </div>

              {/* Email */}
              <a href="mailto:aly.al.shimi@gmail.com" target="_blank" rel="noopener noreferrer">
                <SpotlightCard className="h-full bg-white/10 border border-white/15 p-12 text-center rounded-2xl hover:bg-white/15 transition-colors">
                  <div className="mx-auto mb-6 grid place-items-center w-10 h-10 rounded-full border border-white/20 text-gray-300">
                    <FiMail />
                  </div>
                  <div className="text-2xl font-semibold text-white">aly.al.shimi@gmail.com</div>
                  <div className="mt-2 text-sm text-gray-400">Email</div>
                </SpotlightCard>
              </a>

              {/* GitHub */}
              <a href="https://github.com/aliahmed-io" target="_blank" rel="noopener noreferrer">
                <SpotlightCard className="h-full bg-white/10 border border-white/15 p-12 text-center rounded-2xl hover:bg-white/15 transition-colors">
                  <div className="mx-auto mb-6 grid place-items-center w-10 h-10 rounded-full border border-white/20 text-gray-300">
                    <FiGithub />
                  </div>
                  <div className="text-2xl font-semibold text-white">aliahmed-io</div>
                  <div className="mt-2 text-sm text-gray-400">GitHub</div>
                </SpotlightCard>
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-8 text-center text-gray-500 text-sm">
          <div className="max-w-4xl mx-auto">Response within 24 hours.</div>
        </section>
      </div>
    </div>
  );
}