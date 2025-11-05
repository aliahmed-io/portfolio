/**
 * Client-side project data
 * This file contains the project metadata that can be safely used in client components
 */

export interface ProjectMetadata {
  date: string;
  tech: string[];
  color: string;
}

export const projectsMetadata: Record<string, ProjectMetadata> = {
  'axion-assistant': {
    date: 'Sep 2025',
    tech: ['Next.js', 'React', 'TypeScript', 'Google Gemini API'],
    color: '#0ea5e9'
  },
  'imaginify': {
    date: 'Aug 2025',
    tech: ['Next.js', 'React', 'TypeScript', 'Cloudinary AI', 'Stripe API'],
    color: '#e11d48'
  },
  'lumen': {
    date: 'may 2025',
    tech: ['Next.js', 'React', 'TypeScript', 'Convex', 'Stream SDK'],
    color: '#eab308'
  },
  'nexus': {
    date: 'june 2025',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL'],
    color: '#0ea5e9'
  },
  'revo': {
    date: 'july 2025',
    tech: ['Next.js', 'React', 'Three.js', 'React Three Fiber', 'GSAP'],
    color: '#e11d48'
  }
};

// Hardcoded project data for client-side use
// This matches the structure from MDX files
export const projectsData: Record<string, {
  title: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  impact: string[];
  techStack: string[];
  date: string;
  color: string;
  link?: string;
  image?: string;
}> = {
  'axion-assistant': {
    title: 'Axion Assistant: An Intelligent Conversational AI',
    description: 'A lightweight, high-performance AI chatbot built to provide instant, 24/7 customer support and automate business communications.',
    date: 'Sep 2025',
    color: '#0ea5e9',
    link: 'https://axiom-nu-eight.vercel.app/',
    image: '/images/projects/Axion-assistant.png',
    problem: "In today's digital economy, customers expect instant answers. Businesses that rely on traditional support channels like email or phone often struggle with limited availability, high operational costs, and poor customer satisfaction.",
    solution: "I developed axion Assistant, a lightweight, intelligent, and easily integrable chatbot solution. Built on a modern Next.js stack, it leverages Google's Gemini API to provide natural, context-aware, and helpful conversations.",
    features: [
      'Advanced Conversational AI: Utilizes the Google Generative AI SDK to understand user intent and provide accurate, relevant responses',
      'Premium User Experience: Clean interface, real-time responses, and a "typing" indicator to feel responsive and alive',
      'Full Markdown Rendering: Beautifully format responses, including bold text, lists, tables, and styled code blocks with copy-to-clipboard',
      'Lightweight & Performant: Built with a minimal footprint for easy integration without slowing down page load times',
    ],
    impact: [
      'Automate up to 80% of common customer inquiries, freeing up human support staff',
      'Provide instant, 24/7 support, dramatically increasing customer satisfaction',
      'Serve as a powerful lead generation tool, engaging visitors at peak interest',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Google Gemini API', 'React-Markdown', 'Tailwind CSS'],
  },
  'imaginify': {
    title: 'Imaginify: AI-Powered SaaS & Digital Asset Management',
    description: 'A complete, production-ready AI SaaS platform for intelligent image manipulation, featuring a credit-based payment system and AI-powered semantic search.',
    date: 'Aug 2025',
    color: '#e11d48',
    link: 'https://artify-ijgxypzob-ali-ahmeds-projects-547e04c0.vercel.app',
    image: '/images/projects/imaginify.png',
    problem: 'Modern businesses and content creators face fragmented workflows across multiple AI image editing tools and inefficient asset management with manual tagging and filename searches.',
    solution: "I engineered Imaginify, a complete AI Software-as-a-Service platform that integrates Cloudinary's powerful AI for image manipulation and features a sophisticated semantic search engine.",
    features: [
      'Full Suite of AI Editing Tools: Image Restore, Generative Fill, Object Removal, Recolor, Background Removal',
      'AI-Powered Semantic Search: Search image library using natural language, reducing asset discovery time by 90%',
      'Secure User Authentication: Robust system for user registration, login, and profile management, powered by Clerk',
      'Credit-Based Monetization: Seamlessly integrated with Stripe API for flexible, pay-as-you-go credit system',
    ],
    impact: [
      'Reduce asset discovery time by an estimated 90%',
      'Demonstrate end-to-end capability to build commercially viable AI applications',
      'Track critical SaaS metrics like MRR, LTV, and user engagement',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Cloudinary AI', 'Stripe API', 'Clerk', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Shadcn/UI'],
  },
  'lumen': {
    title: 'Lumen: A Real-Time Communication Platform',
    description: 'A full-stack, real-time chat and video application demonstrating expertise in building scalable, interactive platforms with modern serverless technologies.',
    date: 'may 2025',
    color: '#eab308',
    link: 'https://lumen-ebon.vercel.app',
    image: '/images/projects/lumen.png',
    problem: 'Businesses need to foster instant community engagement, provide immediate customer support, and enable seamless team collaboration. Building reliable, scalable, real-time infrastructure is notoriously complex and resource-intensive.',
    solution: 'I built Lumen, a complete real-time communication platform leveraging Stream for Chat and Video SDKs and Convex as the real-time, serverless backend.',
    features: [
      'Instant Messaging & Group Channels: Full-featured chat with real-time message delivery and presence indicators',
      "High-Quality Video & Voice Calling: Crystal-clear, low-latency communication powered by Stream's Video SDK",
      'Secure User Authentication: Robust system for user registration, login, and profile management, powered by Clerk',
      'Fully Responsive UI: Seamless user experience across all devices, from desktop to mobile',
    ],
    impact: [
      'Demonstrate expertise in WebSockets and real-time data synchronization',
      'Prove ability to integrate sophisticated third-party APIs',
      'Foundation for building next-generation interactive web applications',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Convex', 'Stream Chat SDK', 'Stream Video SDK', 'Clerk', 'Tailwind CSS'],
  },
  'nexus': {
    title: 'Nexus: A Foundational Full-Stack E-commerce Platform',
    description: 'A clean, modern, and high-performance e-commerce platform built from the ground up, featuring a fully integrated, custom-built Content Management System (CMS).',
    date: 'june 2025',
    color: '#0ea5e9',
    link: 'https://nexus-zeta-two-88.vercel.app',
    image: '/images/projects/nexus.png',
    problem: 'Many small to medium-sized businesses need a professional, custom e-commerce solution but are trapped between restrictive templates and expensive agencies.',
    solution: 'Nexus is a foundational e-commerce platform built from scratch to be fast, scalable, and easy to manage. It features a fully integrated, custom-built CMS giving clients complete control.',
    features: [
      'Custom-Built CMS: Simple and powerful interface for managing the entire store',
      'High-Performance Architecture: Built with Next.js for fast page loads and excellent SEO',
      'Modern Authentication: Secure and easy-to-use login and registration flows using Kinde',
      'Advanced Data & Caching: Prisma for type-safe database access and Upstash Redis for high-speed caching',
    ],
    impact: [
      'Perfect proof of concept for Foundational Full-Stack service package',
      "Professional, high-quality e-commerce solution that's easy to manage",
      "Scalable foundation that can grow with the client's business",
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Kinde', 'Upstash (Redis)', 'UploadThing', 'Tailwind CSS', 'Recharts'],
  },
  'revo': {
    title: 'Suburbia Skate: An Immersive 3D E-commerce Experience',
    description: 'A full-stack e-commerce site for a premium skateboard brand, featuring a high-fidelity, interactive 3D product viewer to boost conversions.',
    date: 'july 2025',
    color: '#e11d48',
    link: 'https://revoali.netlify.app',
    image: '/images/projects/sunurbia-skate.png',
    problem: 'For premium, visually-driven brands, standard 2D product photos fail to convey true quality and craftsmanship, leading to low buyer confidence, high cart abandonment, and missed revenue.',
    solution: 'I developed Suburbia Skate, a full-stack e-commerce platform featuring a high-performance, interactive 3D product viewer built with Three.js and React Three Fiber, powered by GSAP animations.',
    features: [
      'Interactive 3D Product Viewer: Smooth, high-fidelity 3D model optimized for fast web performance',
      'Headless CMS Integration: Full control over content with Prismic for easy management',
      'Advanced Animation: GSAP for sophisticated, high-performance animations and page transitions',
      'Virtual Showroom Experience: Mimics the tangible experience of a physical retail store',
    ],
    impact: [
      'Projected to increase average user session duration by over 150%',
      'Estimated to improve add-to-cart rates by up to 30%',
      'Lift overall sales conversion rate by 1.5 to 2.0 percentage points above industry average',
    ],
    techStack: ['Next.js', 'React', 'Three.js', 'React Three Fiber', 'GSAP', 'Prismic (Headless CMS)', 'Tailwind CSS'],
  },
};

export function getProjectData(slug: string) {
  return projectsData[slug] || null;
}

export function getAllProjectsData() {
  return Object.entries(projectsData).map(([slug, data]) => ({
    id: slug,
    title: data.title.split(':')[0].trim(),
    description: data.description,
    date: data.date,
    tech: data.techStack, // Return full tech stack for accurate count
    image: data.image,
    color: data.color,
  }));
}
