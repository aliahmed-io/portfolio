import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "../components/shared/Analytics";
import NavBar from "../components/shared/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: {
    default: "Ali Ahmed | Specialist Web Developer (Interactive 3D & AI Integration)",
    template: "%s | aliahmed.dev",
  },
  description: "Specialist developer building immersive 3D e-commerce experiences and custom AI-powered web applications to drive business growth.",
  openGraph: {
    title: "Ali Ahmed | Specialist Web Developer (Interactive 3D & AI Integration)",
    description: "Building high-value digital experiences with a focus on interactive 3D and custom AI solutions.",
    url: "https://aliahmed.dev",
    siteName: "aliahmed.dev",
    locale: "en-US",
    type: "website",
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
    title: "Ali Ahmed | 3D & AI Web Specialist",
    card: "summary_large_image",
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
    <html lang="en" className={inter.variable}>
      <head>
        <Analytics />
      </head>
      <body
        className={`text-white antialiased ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
        style={{ background: 'radial-gradient(ellipse at top, rgba(10,10,10,0.85), #000 60%)' }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}