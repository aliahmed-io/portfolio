'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Galaxy from '@/components/Galaxy';
import RootBackground from '@/components/shared/RootBackground';
import { VscArrowLeft } from 'react-icons/vsc';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import MagicBento, { ParticleCard } from '@/components/MagicBento';

// projectData unchanged (kept for brevity)
const projectData = {
  'axiom-assistant': {
    title: 'Axiom Assistant: An Intelligent Conversational AI',
    description:
      'A lightweight, high-performance AI chatbot built to provide instant, 24/7 customer support and automate business communications.',
    date: 'Dec 2024',
    stars: '29K',
    color: '#0ea5e9',
    problem:
      "In today's digital economy, customers expect instant answers. Businesses that rely on traditional support channels like email or phone often struggle with limited availability, high operational costs, and poor customer satisfaction.",
    solution:
      "I developed Axiom Assistant, a lightweight, intelligent, and easily integrable chatbot solution. Built on a modern Next.js stack, it leverages Google's Gemini API to provide natural, context-aware, and helpful conversations.",
    features: [
      'Advanced Conversational AI using Google Generative AI SDK',
      'Premium User Experience with clean interface and real-time responses',
      'Full Markdown Rendering with custom components for technical support',
      'Lightweight & Performant with minimal footprint for easy integration',
    ],
    impact: [
      'Automate up to 80% of common customer inquiries',
      'Provide instant, 24/7 support with dramatic customer satisfaction increase',
      'Serve as powerful lead generation tool engaging visitors at peak interest',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Google Gemini API', 'React-Markdown', 'Tailwind CSS'],
  },
  imaginify: {
    title: 'Imaginify: AI-Powered SaaS & Digital Asset Management',
    description:
      "A complete, production-ready AI SaaS platform for intelligent image manipulation, featuring a credit-based payment system and AI-powered semantic search.",
    date: 'Nov 2024',
    stars: '22K',
    color: '#e11d48',
    problem:
      'Modern businesses and content creators face fragmented workflows across multiple AI image editing tools and inefficient asset management with manual tagging and filename searches.',
    solution:
      "I engineered Imaginify, a complete AI Software-as-a-Service platform that integrates Cloudinary's powerful AI for image manipulation and features a sophisticated semantic search engine.",
    features: [
      'Full Suite of AI Editing Tools: Image Restore, Generative Fill, Object Removal, Recolor, Background Removal',
      'AI-Powered Semantic Search using natural language queries',
      'Secure User Authentication powered by Clerk',
      'Credit-Based Monetization seamlessly integrated with Stripe API',
    ],
    impact: [
      'Reduce asset discovery time by an estimated 90%',
      'Demonstrate end-to-end capability to build commercially viable AI applications',
      'Track critical SaaS metrics like MRR, LTV, and user engagement',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Cloudinary AI', 'Stripe API', 'Clerk', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Shadcn/UI'],
  },
  lumen: {
    title: 'Lumen: A Real-Time Communication Platform',
    description:
      "A full-stack, real-time chat and video application demonstrating expertise in building scalable, interactive platforms with modern serverless technologies.",
    date: 'Oct 2024',
    stars: '10K',
    color: '#eab308',
    problem:
      'Businesses need to foster instant community engagement, provide immediate customer support, and enable seamless team collaboration. Building reliable, scalable, real-time infrastructure is notoriously complex and resource-intensive.',
    solution:
      "I built Lumen, a complete real-time communication platform leveraging Stream for Chat and Video SDKs and Convex as the real-time, serverless backend.",
    features: [
      'Instant Messaging & Group Channels with real-time message delivery',
      "High-Quality Video & Voice Calling powered by Stream's Video SDK",
      'Secure User Authentication powered by Clerk',
      'Fully Responsive UI across all devices',
    ],
    impact: [
      'Demonstrate expertise in WebSockets and real-time data synchronization',
      'Prove ability to integrate sophisticated third-party APIs',
      'Foundation for building next-generation interactive web applications',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Convex', 'Stream Chat SDK', 'Stream Video SDK', 'Clerk', 'Tailwind CSS'],
  },
  nexus: {
    title: 'Nexus: A Foundational Full-Stack E-commerce Platform',
    description:
      "A clean, modern, and high-performance e-commerce platform built from the ground up, featuring a fully integrated, custom-built Content Management System (CMS).",
    date: 'Sep 2024',
    stars: '7.4K',
    color: '#0ea5e9',
    problem:
      "Many small to medium-sized businesses need a professional, custom e-commerce solution but are trapped between restrictive templates and expensive agencies.",
    solution:
      "Nexus is a foundational e-commerce platform built from scratch to be fast, scalable, and easy to manage. It features a fully integrated, custom-built CMS giving clients complete control.",
    features: [
      'Custom-Built CMS for managing the entire store',
      'High-Performance Architecture with Next.js for fast page loads',
      'Modern Authentication using Kinde',
      'Advanced Data & Caching with Prisma, PostgreSQL, and Upstash Redis',
    ],
    impact: [
      'Perfect proof of concept for Foundational Full-Stack service package',
      "Professional, high-quality e-commerce solution that's easy to manage",
      "Scalable foundation that can grow with the client's business",
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Kinde', 'Upstash Redis', 'UploadThing', 'Tailwind CSS', 'Recharts'],
  },
  'suburbia-skate': {
    title: 'Suburbia Skate: An Immersive 3D E-commerce Experience',
    description:
      'A full-stack e-commerce site for a premium skateboard brand, featuring a high-fidelity, interactive 3D product viewer to boost conversions.',
    date: 'Aug 2024',
    stars: '3K',
    color: '#e11d48',
    problem:
      'For premium, visually-driven brands, standard 2D product photos fail to convey true quality and craftsmanship, leading to low buyer confidence, high cart abandonment, and missed revenue.',
    solution:
      'I developed Suburbia Skate, a full-stack e-commerce platform featuring a high-performance, interactive 3D product viewer built with Three.js and React Three Fiber, powered by GSAP animations.',
    features: [
      'Interactive 3D Product Viewer optimized for fast web performance',
      'Headless CMS Integration with Prismic for easy content management',
      'Advanced Animation using GSAP for sophisticated page transitions',
      'Virtual showroom experience mimicking physical retail stores',
    ],
    impact: [
      'Projected to increase average user session duration by over 150%',
      'Estimated to improve add-to-cart rates by up to 30%',
      'Lift overall sales conversion rate by 1.5 to 2.0 percentage points above industry average',
    ],
    tech: ['Next.js', 'React', 'Three.js', 'React Three Fiber', 'GSAP', 'Prismic CMS', 'Tailwind CSS'],
  },
};

interface ProjectPageProps {
  params: {
    project: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const project = projectData[params.project as keyof typeof projectData];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) {
    notFound();
  }

  if (!mounted) {
  return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Root background + galaxy */}
      <RootBackground />
      <div className="fixed inset-0 z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.6}
          glowIntensity={0.15}
          saturation={0}
          hueShift={140}
          speed={0.05}
          rotationSpeed={0.05}
          repulsionStrength={1}
          transparent={true}
/>
    </div>

      {/* Page content — Bento-based surface everywhere */}
      <div className="relative z-10 min-h-screen">
        {/* Top padding section */}
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto">
             <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
               {/* Hero card — primary Bento surface */}
               <ParticleCard className="p-8 md:p-10 mb-8 bg-white/10 border border-white/15 rounded-2xl" particleCount={18} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => router.push('/projects')}
                      aria-label="Back to projects"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <VscArrowLeft size={18} />
                      <span className="text-sm">Back</span>
                    </button>

                    <div>
                      <div className="text-xs text-gray-400 mb-1">{project.date}</div>
                      <div className="text-sm font-mono text-gray-300">{project.stars} • stars</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: project.color }} />
                  </div>
                </div>

                 <div className="mt-6 md:mt-8">
                  <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">{project.title}</h1>
                  <p className="mt-4 text-lg text-gray-300 max-w-3xl">{project.description}</p>
                </div>
              </ParticleCard>
            </motion.div>
          </div>
        </section>

        {/* Main grid — each item is a ParticleCard for consistency */}
        <section className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="grid gap-6 md:grid-cols-4">
                {/* Overview (large) */}
                 <div className="md:col-span-2 md:row-span-2">
                   <ParticleCard className="p-6 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={12} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                    <div className="text-sm text-gray-400 mb-2">{project.date} • {project.stars}</div>
                    <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    {/* CTA inside the same Bento surface to keep unity */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        onClick={() => router.push('/contact')}
                        className="px-4 py-2 text-sm rounded-lg border border-white/10 bg-white/6 hover:bg-white/10 transition"
                      >
                        Start a conversation
                      </button>
                      <button
                        onClick={() => router.push('/projects')}
                        className="px-4 py-2 text-sm rounded-lg border border-white/10 text-gray-200 hover:text-white transition"
                      >
                        See other projects
                      </button>
                    </div>
                  </ParticleCard>
                </div>

                {/* Problem */}
                 <div className="md:col-span-2">
                   <ParticleCard className="p-6 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={10} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                    <h3 className="text-xl font-medium mb-2">The Problem</h3>
                    <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                  </ParticleCard>
                </div>

                {/* Solution (large) */}
                 <div className="md:col-span-2 md:row-span-2">
                   <ParticleCard className="p-6 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={12} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                    <h3 className="text-xl font-medium mb-2">The Solution</h3>
                    <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                  </ParticleCard>
                </div>

                {/* Features */}
                {project.features.map((feature, index) => (
                  <div key={`feat-${index}`}>
                    <ParticleCard className="p-4 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={8} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                      <div className="text-gray-400 text-xs mb-1">Feature {index + 1}</div>
                      <div className="text-gray-200">{feature}</div>
                    </ParticleCard>
                  </div>
                ))}

                {/* Tech Stack */}
                 <div className="md:col-span-2">
                   <ParticleCard className="p-6 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={10} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                    <h3 className="text-xl font-medium mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/15 text-xs text-gray-300 rounded-full border border-white/15">{tech}</span>
                      ))}
                    </div>
                  </ParticleCard>
                </div>

                {/* Business Impact */}
                 <div className="md:col-span-2">
                   <ParticleCard className="p-6 h-full bg-white/10 border border-white/15 rounded-2xl" particleCount={10} glowColor="255,255,255" enableTilt={true} enableMagnetism={true} clickEffect={false}>
                    <h3 className="text-xl font-medium mb-3">Business Impact</h3>
                    <ul className="space-y-2">
                      {project.impact.map((impact, index) => (
                        <li key={`imp-${index}`} className="text-gray-300">• {impact}</li>
                      ))}
                    </ul>
                  </ParticleCard>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

    
      </div>

      {/* no dock */}
    </div>
  );
}
