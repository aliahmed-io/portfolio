'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Dynamically import components for better performance
const RootBackground = dynamic(() => import('@/components/shared/RootBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black" />
});

const GlareHover = dynamic(() => import('@/components/GlareHover'), {
  ssr: false,
  loading: () => <div className="w-full bg-white/5 border border-white/10 rounded-2xl animate-pulse" />
});

export default function ServicesPage() {
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
      {/* Root Background Component */}
      <RootBackground />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-light tracking-tight gradient-text">
                Services
              </h1>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                I provide specialized development services focused on delivering tangible business outcomes. My approach is built on a partnership model with value-based, fixed-price packages.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tier 1: Full Website Development */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-4">Full Website Development</h2>
                <p className="text-gray-400 font-light">For clients who need a complete, high-performance web application built on a modern, scalable foundation.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className=""
                >
                  <GlareHover className="bg-white/10 glass border border-white/15 rounded-2xl p-8 hover:bg-white/15 hover:border-white/25 transition-all duration-500" width="100%" height="auto" borderRadius="1rem" borderColor="#2a2a2a" glareColor="#ffffff" glareOpacity={0.25} glareAngle={-35} glareSize={200}>
                    <h3 className="text-2xl font-light mb-4">Foundational Full-Stack</h3>
                    <p className="text-gray-300 mb-6 font-light leading-relaxed">
                      A complete, custom e-commerce or business website with a built-in CMS, designed to convert visitors into customers.
                    </p>
                    <div className="text-3xl font-light mb-4">$3,500 USD</div>
                    <p className="text-sm text-gray-400 mb-6 font-light">
                      <strong>Ideal For:</strong> Businesses needing a high-quality online presence without advanced niche features.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300 font-light">
                      <li>• Custom UI/UX design</li>
                      <li>• Full-stack development (Next.js)</li>
                      <li>• Integrated CMS</li>
                      <li>• Core e-commerce functionality</li>
                    </ul>
                  </GlareHover>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <GlareHover className="bg-white/10 glass border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-500" width="100%" height="auto" borderRadius="1rem" borderColor="#3a3a3a" glareColor="#ffffff" glareOpacity={0.28} glareAngle={-35} glareSize={220}>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 font-light tracking-wider uppercase">
                      Popular
                    </div>
                    <h3 className="text-2xl font-light mb-4">Niche Full-Stack (3D or AI)</h3>
                    <p className="text-gray-300 mb-6 font-light leading-relaxed">
                      Everything in the Foundational package, plus a core integration of either an interactive 3D experience or a significant AI feature to create a market-leading platform.
                    </p>
                    <div className="text-3xl font-light mb-4">$5,000 USD</div>
                    <p className="text-sm text-gray-400 mb-6 font-light">
                      <strong>Ideal For:</strong> Ambitious brands looking to innovate and create a distinct competitive advantage.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300 font-light">
                      <li>• All Foundational features</li>
                      <li>• Choice of 3D product viewer</li>
                      <li>• Custom AI integration</li>
                      <li>• Smart search or advanced chatbot</li>
                    </ul>
                  </GlareHover>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tier 2: Feature & Niche Integration */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-4">Feature & Niche Integration</h2>
                <p className="text-gray-400 font-light">For clients who have an established website and need to integrate specialized, high-impact features.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-white/10 glass border border-white/15 rounded-2xl p-6 hover:bg-white/15 hover:border-white/25 transition-all duration-500"
                >
                  <h3 className="text-xl font-light mb-3">3D Viewer Integration</h3>
                  <p className="text-gray-300 mb-4 text-sm font-light leading-relaxed">
                    Integrate a high-performance, interactive 3D product viewer into your existing e-commerce site.
                  </p>
                  <div className="text-2xl font-light mb-4">$2,500 USD</div>
                  <p className="text-xs text-gray-400 font-light">
                    <strong>Outcome:</strong> Increased user confidence and higher conversion rates.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-white/10 glass border border-white/15 rounded-2xl p-6 hover:bg-white/15 hover:border-white/25 transition-all duration-500"
                >
                  <h3 className="text-xl font-light mb-3">AI Chatbot Integration</h3>
                  <p className="text-gray-300 mb-4 text-sm font-light leading-relaxed">
                    Integrate a custom-trained AI chatbot into your website for instant customer support.
                  </p>
                  <div className="text-2xl font-light mb-4">$3,000 USD</div>
                  <p className="text-xs text-gray-400 font-light">
                    <strong>Outcome:</strong> Improved customer satisfaction and reduced operational overhead.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-white/10 glass border border-white/15 rounded-2xl p-6 hover:bg-white/15 hover:border-white/25 transition-all duration-500"
                >
                  <h3 className="text-xl font-light mb-3">General Feature Development</h3>
                  <p className="text-gray-300 mb-4 text-sm font-light leading-relaxed">
                    Build and integrate standard full-stack features like custom dashboards or booking systems.
                  </p>
                  <div className="text-2xl font-light mb-4">$1,800 USD</div>
                  <p className="text-xs text-gray-400 font-light">
                    <strong>Outcome:</strong> Enhanced functionality tailored to your specific business needs.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-light">Ready to Get Started?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Let&apos;s discuss your project requirements and find the perfect solution for your business needs.
              </p>
              <button
                onClick={() => router.push('/contact')}
                className="px-10 py-4 bg-white/10 glass border border-white/15 text-white font-light rounded-xl hover:bg-white/15 transition-all duration-500 transform hover:scale-[1.02] text-sm tracking-wider uppercase"
              >
                Start Your Project
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
