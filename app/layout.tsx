import "./globals.css";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "../components/shared/Analytics";
import NavBar from "../components/shared/NavBar";
import AvailabilityTicker from "../components/AvailabilityTicker";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
  fallback: ['system-ui', 'arial'],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aliahmed.dev"),
  title: {
    default: "Ali Ahmed | Fullstack Developer — AI, 3D & Premium Web Experiences",
    template: "%s | Ali Ahmed",
  },
  description: "Award-winning fullstack developer specializing in AI integration, interactive 3D experiences, and premium web applications that drive business growth.",
  keywords: ["fullstack developer", "AI integration", "3D web experiences", "React", "Next.js", "Three.js", "web development"],
  authors: [{ name: "Ali Ahmed" }],
  creator: "Ali Ahmed",
  openGraph: {
    title: "Ali Ahmed | Fullstack Developer — AI, 3D & Premium Design",
    description: "Building high-value digital experiences with a focus on interactive 3D and custom AI solutions.",
    url: "https://aliahmed.dev",
    siteName: "Ali Ahmed Portfolio",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Ahmed - Fullstack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ali Ahmed | AI & 3D Web Specialist",
    card: "summary_large_image",
    creator: "@ali_shimi_dev",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://beamanalytics.b-cdn.net" />
        <Analytics />
      </head>
      <body
        suppressHydrationWarning
        className={`${outfit.className} text-white antialiased`}
        style={{
          background: 'var(--bg-primary)',
        }}
      >
        {/* Subtle noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Availability Ticker */}
        <AvailabilityTicker />

        {/* Navigation */}
        <NavBar />

        {/* Main content */}
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}