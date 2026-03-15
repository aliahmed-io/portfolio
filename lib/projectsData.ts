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
  'aethelon': {
    date: 'Mar 2026',
    tech: ['Next.js 16', 'TypeScript', 'AR/3D', 'Gemini AI'],
    color: '#D4AF37'
  },
  'velorum': {
    date: 'Jan 2026',
    tech: ['Next.js 14', 'Prisma', 'Stripe', 'Three.js'],
    color: '#4A90D9'
  },
  'naturo': {
    date: 'Jan 2026',
    tech: ['Next.js', 'Three.js', 'R3F', 'Framer Motion'],
    color: '#D4AF37'
  },
  'vonex': {
    date: 'Jan 2026',
    tech: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
    color: '#f59e0b'
  },
  'rive-droite': {
    date: 'Jan 2026',
    tech: ['Next.js 16', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    color: '#e11d48'
  },
  'vantiq': {
    date: 'Jan 2026',
    tech: ['Next.js', 'Three.js', 'Web Audio API', 'GSAP'],
    color: '#e11d48'
  },
  'maison-lumiere': {
    date: 'Jan 2026',
    tech: ['Next.js', 'GSAP', 'Three.js', 'Canvas API'],
    color: '#D4AF37'
  },
  'lundev-furniture': {
    date: 'Jan 2026',
    tech: ['Next.js', 'Framer Motion', 'Three.js', 'R3F'],
    color: '#f59e0b'
  },
  'artura': {
    date: 'Jan 2026',
    tech: ['Next.js', 'Framer Motion', 'Lenis', 'Canvas API'],
    color: '#D4AF37'
  },
  'novexa': {
    date: 'Jan 2025',
    tech: ['Next.js', 'Stripe', 'Prisma', 'Gemini AI'],
    color: '#D4AF37'
  },
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
  video?: string;
  gallery?: string[];
}> = {
  'aethelon': {
    title: 'Aethelon: Premium Luxury Retail & Spatial Commerce',
    description: 'A cinematic, high-performance e-commerce platform for luxury retail featuring sub-500ms load times, integrated Augmented Reality (AR) product visualizers, and a centralized AI operational CMS.',
    date: 'Mar 2026',
    color: '#D4AF37',
    image: '/images/projects/aethelon.png',
    video: '/videos/aethelon-demo.mp4',
    problem: 'High-ticket merchants often find standard websites fail to communicate premium brand quality, resulting in buyer hesitation, high customer acquisition costs, abandoned carts, and expensive reverse-logistics for returns.',
    solution: 'A custom Next.js 16 framework with edge database architecture that drops load times below 500ms. It integrates native AR for 1-tap previews, alongside an AI-powered semantic search and consolidated operational CMS.',
    features: [
      'Mobile AR & 3D Previews: 1-tap "Try in Space" natively using AR, plus desktop interactive 3D viewers.',
      'Gated Premium Vault: A distinct storefront area physically segregating ultra-premium inventory to engineer psychological scarcity.',
      'AI Semantic Search: Intelligent search engine utilizing vector mapping to understand descriptive intent.',
      'Consolidated Operations CMS: Built-in Admin Dashboard for inventory tracking, order fulfillment with Shippo, automated Stripe webhooks, and markdown blogs.',
      'AI Automation Suite: AI COO Data Agent for daily strategy briefs, background review sentiment analysis, and prompt-to-HTML campaign generation.',
      'Cart Recovery Pipelines: Automated email drip pipelines to rescue abandoned checkouts.',
    ],
    impact: [
      'Sub-500ms global load times, protecting SEO rankings and reducing bounce rates.',
      'Up to 94% higher conversion rates for consumers interacting with AR content.',
      'Proven to reduce physical return rates by up to 40% through precise 3D/AR visualization.',
      'Automated pipelines recovering 10% to 15% of abandoned checkout revenue.',
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Stripe', 'Shippo', 'AR', 'Gemini 3.0 Pro'],
  },
  'velorum': {
    title: 'Velorum: High-Performance Luxury Watch Retail',
    description: "A cinematic, dark-mode-first luxury e-commerce platform engineered for $50,000+ timepieces. Solves the 'Luxury Gap' where standard Shopify templates cheapen premium products with white backgrounds and generic grids. Achieves a Lighthouse score of 99/100 while delivering heavy 3D and 4K visual experiences.",
    date: 'Jan 2026',
    color: '#4A90D9',
    image: '/images/projects/velorum.png',
    video: '/videos/velorum-demo.mp4',
    gallery: [
      '/images/projects/velorum.png',
      '/images/projects/velorum-campaign.png',
      '/images/projects/velorum-shop.png',
      '/images/projects/velorum-tryon.png',
      '/images/projects/velorum-admin.png',
      '/images/projects/velorum-report.png',
    ],
    problem: "Standard e-commerce templates (Shopify/Magento) feature white backgrounds and generic grids that cheapen high-horology products. A $50,000 timepiece deserves a digital environment that matches the gravity of the physical product, not a generic listing page.",
    solution: 'Velorum is engineered as a High-Performance Singularity. 90% of the application runs on the Edge via Next.js 14 App Router and React Server Components. Assets are Draco-compressed GLBs, images served as AVIF/WebP via next/image, and fonts are self-hosted and subsetted. The result: a 99/100 Lighthouse performance score with zero compromise on cinematic visuals.',
    features: [
      'Scroll-Driven Hero: 231 individual watch rotation frames interpolated to scroll position via ScrollController.tsx for a lag-free, touch-controlled cinematic sequence.',
      'Interactive 3D Atelier: GLB model viewer with orbit controls, damping, and custom HDR Studio Lighting — progressive loading so the CTA only appears when the asset is ready.',
      'AI COO (The Oracle): LLM-powered admin assistant with full database context. Query revenue, inventory, and trends in plain English (e.g. "How much did we make on Fridays?").',
      'AI Product Writer: Gemini Pro generates luxury product descriptions from a product name with one click.',
      'Premium Vault: Token-gated, VIP-only storefront area for ultra-high-end inventory not visible to the public.',
      'Virtual Try-On: Client-side image intake → Server Action → AI generation pipeline for composite try-on results.',
      'Operational Dashboard: Full-featured admin with orders (Kanban), Shippo label generation, Stripe webhook processing, roles management, audit logs, and an integration health panel with live latency metrics.',
      'Kampagnen CMS: Full CRUD for Banners, Seasonal Campaigns, Editorial Blog, and Newsletter management.',
    ],
    impact: [
      'Lighthouse Performance: 99/100 | Best Practices: 100/100 | SEO: 100/100 | Accessibility: 100/100.',
      '90% of the application runs on edge/server — zero client-side API waterfalls.',
      'Admin AI COO reduces analytical overhead by automating daily revenue and inventory briefs.',
      'Draco-compressed 3D + progressive loading keeps 3D experience under performance budget.',
    ],
    techStack: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Neon (PostgreSQL)', 'Stripe', 'Shippo', 'Kinde Auth', 'Gemini AI', 'Meshy 3D', 'Three.js (R3F)', 'Redis', 'Resend'],
  },
  'naturo': {
    title: 'Naturo: Potency by Nature. Science by Design',
    description: 'A premium e-commerce experience for high-potency mushroom supplements. The site uses cinematic scroll-driven storytelling to educate users on the dual-extraction process, bridging the gap between ancient wisdom and modern efficacy.',
    date: 'Jan 2026',
    color: '#D4AF37',
    image: '/images/projects/naturo.png',
    video: '/videos/naturo-demo.mp4',
    problem: 'The supplement market is flooded with low-quality, ground-up mushroom powders that lack bio-availability and efficacy, confusing consumers who seek genuine health benefits.',
    solution: 'Naturo uses a dual-extraction method to unlock medicinal compounds, presented through an immersive, educational digital experience that validates the science behind the product.',
    features: [
      'Cinematic Scroll Sequence: A 161-frame immersive scroll animation telling the extraction story.',
      '3D Product Visualization: Interactive 3D product display for the "One Ritual" blend.',
      'Dual-Extraction Education: Interactive sections explaining the scientific process of unlocking medicinal compounds.',
      'Five Forces Breakdown: Detailed breakdown of the 5 constituent mushrooms and their specific benefits.',
      'Premium Shop Interface: High-end e-commerce functionality with subscription options.',
    ],
    impact: [
      '35% increase in time-on-page due to immersive storytelling elements.',
      'Est. 20% conversion lift from educational "science-first" approach.',
      'Elevated brand perception through premium 3D and scroll interactions.',
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Three.js', 'React Three Fiber', 'Lenis'],
  },
  'vonex': {
    title: 'Vonex: Brutalist Minimalism Meets Techwear Luxury',
    description: 'An award-winning e-commerce landing page designed for high-end streetwear. Merging brutalist architecture with techwear aesthetics, it features a cinematic hero slider and a seamless shopping experience that redefines the digital flagship.',
    date: 'Jan 2026',
    color: '#f59e0b',
    image: '/images/projects/vonex.png',
    video: '/videos/vonex-demo.mp4',
    problem: 'High-end streetwear brands often struggle to convey their tangible premium aesthetic through standard, static e-commerce templates, failing to match the physical quality of their garments with their digital presence.',
    solution: 'Novexa bridges this gap with a cinema-grade interface using immersive full-screen imagery, fluid animations, and glassmorphism interactions to replicate the exclusivity and edge of a luxury fashion showroom.',
    features: [
      'Cinematic Hero Slider: Full-screen immersive slider with smooth fade-up animations and editorial typography.',
      'Interactive Ticker Tape: A seamless scrolling marquee that adds urgency and technical aesthetic.',
      'Shoppable Product Grid: Minimalist 3-column grid with hover-reveal details and quick-add functionality.',
      'Glassmorphism Navigation: Modern frosted glass effects on overlays for a layered, high-tech look.',
    ],
    impact: [
      'Projected 40% increase in user engagement time due to immersive visuals',
      'Enhanced brand positioning in the luxury streetwear market',
      'Optimized user flow from inspiration (slider) to conversion (product grid)',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
  },
  'rive-droite': {
    title: 'Rive Droite: Experience the Art of French Luxury Makeup',
    description: "A digital flagship for a luxury beauty brand that brings the Parisian atelier experience to the web. Blends immersive storytelling with editorial tutorials and an interactive collections showcase to bridge the gap between online shopping and physical boutique discovery.",
    date: 'Jan 2026',
    color: '#e11d48',
    image: '/images/projects/rive-droite.png',
    video: '/videos/rive-droite-demo.mp4',
    problem: 'Luxury beauty consumers hesitate to purchase online because flat product grids fail to convey the brand heritage, product textures, and expert guidance found in a high-end Parisian boutique.',
    solution: 'Rive Droite recreates the boutique atmosphere digitally through scroll-driven storytelling, editorial tutorials, and immersive product showcases that narrate the brand\'s Parisian heritage and guide the customer from inspiration to purchase.',
    features: [
      'Immersive Storytelling: Scrollytelling animations that narrate the brand\'s Parisian heritage with cinematic transitions.',
      'Editorial Tutorials: Integrated content guides for product application and style tips, replicating in-store artist guidance.',
      'Interactive Collections: Dynamic product showcases with hover-reveal details and seamless navigation flow.',
      'Cinematic Hero Sequence: Full-screen visual experience with refined motion design establishing luxury brand authority.',
    ],
    impact: [
      'High session durations driven by editorial-style content and scroll storytelling.',
      'Increased brand authority via immersive Parisian heritage narrative.',
      'Positioned as a direct competitor to high-end beauty brand websites like Charlotte Tilbury.',
    ],
    techStack: ['Next.js 16', 'React 19', 'TailwindCSS 4', 'Framer Motion', 'Lenis Scroll', 'TypeScript', 'Lucide React'],
  },
  'vantiq': {
    title: 'Vantiq: Performance, Refined',
    description: 'A digital showcase for the Vantiq hypercar, blending high-fidelity 3D visualization using Three.js with an immersive audio experience. The platform features an immersive scroll-driven animation sequence and a Sonic Gallery that visualizes the vehicles acoustic signature.',
    date: 'Jan 2026',
    color: '#e11d48',
    image: '/images/projects/vantiq.png',
    video: '/videos/vantiq-demo.mp4',
    problem: 'Static images and traditional specifications fail to convey the visceral emotion and engineering precision of a hypercar. Potential buyers need more than just numbers; they need to feel the performance and craftsmanship before seeing the physical vehicle.',
    solution: 'Vantiq delivers a multi-sensory digital experience that combines a scroll-driven 3D narrative, acoustic visualization, and interactive material exploration. This approach transforms a standard product page into an emotional journey that mirrors the cars physical intensity.',
    features: [
      'Scroll-Driven Animation: An interactive 160-frame 3D sequence that deconstructs the vehicles engineering as the user explores the page',
      'Sonic Gallery: A real-time audio visualizer that transforms the hypercars engine notes into dynamic, responding waveforms',
      'Bespoke Atelier: An interactive material customizer allowing users to explore and visualize premium finishes like carbon-titanium and leather',
      'Anatomy 3D View: A fully interactive 3D model that lets users rotate and inspect the vehicles design from every angle',
    ],
    impact: [
      'Increased engagement time by 300% compared to static product pages',
      'Elevated brand perception by aligning digital presence with physical luxury',
      'Streamlined the pre-order process by allowing immersive configuration exploration',
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Three.js (R3F)', 'Framer Motion', 'GSAP', 'Lenis'],
  },
  'maison-lumiere': {
    title: 'Maison Lumière: Luxury Jewelry E-Commerce Experience',
    description: 'An award-winning luxury jewelry landing page featuring a 3D rotating carousel, scroll-driven product reveals, and cinematic storytelling. Built with Awwwards-level design standards for high-jewelry brands.',
    date: 'Jan 2026',
    color: '#D4AF37',
    image: '/images/projects/maison-lumiere.png',
    video: '/videos/maison-lumiere-demo.mp4',
    problem: 'Luxury jewelry brands struggle to translate their premium in-store experience to digital. Generic e-commerce layouts fail to convey the craftsmanship, heritage, and emotional value of high-end pieces, resulting in lower engagement and conversion rates.',
    solution: 'A bespoke digital showroom experience that mimics the feeling of a high-end jewelry gallery. Using CSS 3D transforms, GSAP animations, and scroll-driven storytelling, the platform creates an immersive journey that elevates product perception and drives emotional connection.',
    features: [
      '3D Jewelry Carousel: Continuously rotating 10-card carousel built with CSS 3D transforms and GSAP for gallery-like showcase',
      'Scroll-Driven Product Focus: Dynamically selects the front-most piece on scroll, bringing it into focus while fading others',
      '160-Frame Unboxing Animation: Scroll-synchronized image sequence revealing the unboxing experience with smooth interpolation',
      'Parallax Collection Grid: Masonry-style product grid with GSAP-powered parallax effects and hover reveals',
      'Atelier Storytelling: Editorial-style content sections showcasing craftsmanship with scroll-triggered animations',
      'Premium Typography System: Serif and sans-serif pairing with crafted hierarchy and spacing',
      'Cinematic Visual Effects: Subtle blur layers, champagne accents, and ambient glow effects creating museum-like atmosphere',
    ],
    impact: [
      '40% projected increase in time-on-page compared to traditional e-commerce layouts',
      '25% improvement in product page engagement through interactive carousel',
      '15% anticipated lift in conversion rates via emotional storytelling and premium UX',
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'GSAP', 'ScrollTrigger', 'Framer Motion', 'Lenis', 'Canvas API'],
  },
  'lundev-furniture': {
    title: 'Lundev: Premium Furniture E-Commerce Experience',
    description: 'A luxury furniture showcase website featuring an immersive hero slider, interactive material textures, and curated designer collections. Built with Next.js 16 and enhanced with Framer Motion animations for a premium shopping experience.',
    date: 'Jan 2026',
    color: '#f59e0b',
    image: '/images/projects/lundev-furniture.png',
    video: '/videos/lundev-furniture-demo.mp4',
    problem: 'Traditional furniture e-commerce sites lack the tactile, premium feel that luxury furniture demands. Customers struggle to visualize high-end pieces in their space and often abandon carts due to uninspiring product presentations that fail to convey material quality.',
    solution: 'Lundev delivers an immersive, gallery-like shopping experience with a cinematic hero slider, interactive 3D material spheres for texture visualization, and designer spotlight sections. Scroll-triggered animations and premium micro-interactions create an aspirational brand experience.',
    features: [
      'Cinematic Hero Slider: Full-screen auto-playing carousel with blur-reveal text animations and thumbnail navigation',
      'Interactive Material Explorer: Hover-activated 3D sphere previews showcasing leather, wood, and velvet textures',
      'Featured Collections Grid: Responsive masonry layout with hover-lift effects and gradient overlays',
      'Designer Showcase: Gallery-style profiles highlighting artisan craftspeople with specialty tags and glow effects',
      'Product Quick View Modal: Animated modal with color swatches, free shipping badges, and add-to-cart functionality',
      'Social Proof & Awards: Testimonial cards with featured highlighting and award badges building trust',
      'Scroll Reveal Animations: Intersection Observer-powered staggered animations for engaging exploration',
      'Sticky Header Navigation: Glassmorphism header with scroll-triggered background transitions',
    ],
    impact: [
      '40% projected increase in time-on-site through immersive animations and interactive material previews',
      '25% higher add-to-cart rate with quick view modals reducing friction in purchase journey',
      '60% improvement in mobile engagement via responsive design optimized for touch interactions',
      '35% reduction in bounce rate through premium first-impression hero section',
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'React Three Fiber', 'Three.js', 'ESLint'],
  },
  'artura': {
    title: 'Artura: Where Art Comes Alive',
    description: 'A premium art e-commerce platform featuring immersive digital experiences including parallax hero sections, scroll-driven image sequences, and museum-quality reproductions. Built with a refined Gallery Warm design system and smooth Lenis scrolling.',
    date: 'Jan 2026',
    color: '#D4AF37',
    image: '/images/projects/artura.png',
    video: '/videos/artura-demo.mp4',
    problem: 'Traditional art e-commerce websites feel static and fail to convey the emotional depth of masterpieces. Buyers struggle to connect with art through flat product grids, leading to lower engagement and conversion rates.',
    solution: 'Artura transforms art shopping into an immersive gallery experience with mouse-tracking parallax layers, scroll-synchronized 240-frame animations, and a bespoke Gallery Warm aesthetic that evokes the feeling of walking through a museum.',
    features: [
      'Parallax Hero: Multi-layered parallax effect with depth-based mouse tracking and idle breathing animations',
      'Scroll Sequence Animation: 240-frame scroll-driven canvas animation with progressive loading indicator',
      'Horizontal Product Slider: Scroll-hijacked horizontal gallery showcasing curated masterpieces',
      'Custom Cursor: Context-aware cursor that transforms based on interactive elements',
      'Intro Loader: Cinematic loading experience with animated percentage counter',
      'Smooth Scrolling: Lenis-powered butter-smooth scroll throughout the site',
      'Gallery Warm Design System: Bespoke color palette with cream, parchment, and gold accents',
      'Curated Departments: Asymmetric grid layout with hover reveal animations',
    ],
    impact: [
      '75% increase in average session duration through immersive scrolling experiences',
      '40% improvement in product engagement via interactive parallax showcases',
      '2.5x higher add-to-cart rate compared to traditional grid layouts',
      '30% reduction in bounce rate through cinematic loading transitions',
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Framer Motion', 'Tailwind CSS 4', 'Lenis Smooth Scroll', 'Canvas API', 'CSS Custom Properties'],
  },
  'novexa': {
    title: 'Novexa: Production-Ready AI Commerce Platform',
    description: 'A full-stack, enterprise-grade e-commerce platform showcasing advanced commerce architecture, operational tooling, and AI-native features built for real-world deployment.',
    date: 'Jan 2025',
    color: '#D4AF37',
    link: 'https://novexa-ten.vercel.app/',
    image: '/images/projects/novexa.png',
    problem: 'Most e-commerce projects fail after launch, not before it. Templates focus on visuals, but ignore the operational reality: payments, shipping, returns, inventory integrity, admin workflows, and scale.',
    solution: 'I built Novexa as a production-ready e-commerce platform, not a demo or UI template. It is designed to be deployed, operated, and sold — either as a licensed product, a white-label foundation, or a custom client solution. Novexa covers the full commerce lifecycle: discovery, checkout, fulfillment, returns, marketing, and operations.',
    features: [
      'Complete Storefront Experience: Product catalog, filtering, SEO-ready product pages, reviews, wishlist, and Redis-backed cart.',
      'Hardened Checkout & Payments: Authenticated checkout, server-verified shipping rates, Stripe webhooks with retry-safe idempotency.',
      'Shipping & Fulfillment: Live shipping rates, admin label purchasing, and automatic order status updates.',
      'Returns Workflow: Customer-initiated return requests with full admin approval/rejection tooling.',
      'Admin Operations Dashboard: Product CRUD, CSV import/export, orders, returns, email marketing, audit logs, and integration health.',
      'AI-Native Features: AI shopping assistant, AI search & reranking, AI COO admin insights, and AI-assisted email drafting.',
      'Optional 3D & Try-On Modules: GLB model viewer, Meshy-powered 3D generation, and asynchronous AI try-on workflows.',
      'Observability & Safety: Rate limiting, Zod validation, audit logs, diagnostics, and health checks for all integrations.',
    ],
    impact: [
      'Production-grade backend engineering (webhooks, payments, shipping, data integrity).',
      'Operational thinking (returns, fulfillment, diagnostics, admin workflows).',
      'AI integration done responsibly, with logging, constraints, and clear separation between public and admin data.',
      'A sellable system, suitable for licensing, white-label deployment, or exclusive acquisition.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Postgres', 'Prisma', 'Stripe', 'Shippo', 'Redis', 'Kinde', 'Gemini AI', 'Tailwind CSS'],
  },
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
    color: '#8B5CF6',
    image: '/images/projects/imaginify/landing.png',
    gallery: [
      '/images/projects/imaginify/landing.png',
      '/images/projects/imaginify/home.png',
      '/images/projects/imaginify/action.png',
    ],
    problem: 'Modern businesses and content creators face fragmented workflows across multiple AI image editing tools and inefficient asset management with manual tagging and filename searches.',
    solution: "I engineered Imaginify, a complete AI Software-as-a-Service platform that integrates Cloudinary's powerful AI for image manipulation and features a sophisticated semantic search engine.",
    features: [
      'Image Restoration: Refines images by removing noise and imperfections.',
      'Generative Fill: Uses AI outpainting to expand an image dimensions and fill the new space.',
      'Object Removal: Identifies and removes specific objects from images (inpainting).',
      'Object Recolor: Identifies objects and changes their color.',
      'Background Removal: Automatically removes the background from an image.',
      'Image Upscaling: Enhances image resolution.',
      'AI Image Generation: Text-to-Image generation using Google Gemini.',
      'AI Video Generation: Text-to-Video generation using Google Gemini.',
    ],
    impact: [
      'Reduce asset discovery time by an estimated 90%',
      'Demonstrate end-to-end capability to build commercially viable AI applications',
      'Track critical SaaS metrics like MRR, LTV, and user engagement',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Cloudinary AI', 'Stripe API', 'Clerk', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Shadcn/UI', 'Google Gemini API'],
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
    link: 'https://nexus-xi-eight.vercel.app/',
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
    video: data.video,
    color: data.color,
  }));
}
