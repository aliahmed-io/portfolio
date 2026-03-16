"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BsLinkedin, BsTwitterX, BsInstagram } from "react-icons/bs";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : "py-5 bg-transparent"
          }`}
      >
        <nav className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group relative"
            >
              <motion.span
                className="text-lg font-medium tracking-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-white">Ali</span>
                <span className="text-[var(--accent-primary)]">.</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${isActive
                          ? "text-white"
                          : "text-[var(--text-secondary)] hover:text-white"
                        }`}
                    >
                      <span className="relative z-10">{link.label}</span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded-full hover:bg-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/50 transition-all duration-300"
            >
              <span>Let&apos;s Talk</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-4 ml-4 pr-4 border-r border-white/10">
              <a
                href="https://www.linkedin.com/in/ali-ahmed-703080380/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300"
                title="LinkedIn"
              >
                <BsLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/ali_shimi_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
                title="Twitter"
              >
                <BsTwitterX className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-white rounded-full origin-center"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 w-full bg-white rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-white rounded-full origin-center"
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl">
                <ul className="space-y-1">
                  {links.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive
                              ? "bg-[var(--accent-primary)]/10 text-white border border-[var(--accent-primary)]/20"
                              : "text-[var(--text-secondary)] hover:text-white hover:bg-white/5"
                            }`}
                        >
                          {link.label}
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-medium text-white bg-[var(--accent-primary)] rounded-xl hover:bg-[var(--accent-primary)]/90 transition-colors"
                  >
                    <span>Let&apos;s Talk</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Social Links - Mobile */}
                <div className="mt-4 flex justify-center gap-6">
                  <a
                    href="https://www.linkedin.com/in/ali-ahmed-703080380/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--accent-primary)]"
                  >
                    <BsLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/ali_shimi_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
                  >
                    <BsTwitterX className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/aly.al.shimi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#E1306C]"
                  >
                    <BsInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}