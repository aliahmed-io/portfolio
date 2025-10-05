"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
            Ali Ahmed
          </Link>
          <ul className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wider uppercase transition-colors ${
                    pathname === link.href ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(v => !v)}
              className="px-3 py-2 text-xs tracking-wider uppercase text-gray-300 border border-white/10 rounded-md hover:text-white"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>
    </header>
    {open && (
      <div className="fixed top-16 left-0 right-0 z-[60] md:hidden">
        <div className="mx-4 rounded-xl border border-white/10 bg-black/75 backdrop-blur-md">
          <ul className="p-3 space-y-1">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm tracking-wider uppercase transition-colors ${
                    pathname === link.href ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
    </>
  );
}