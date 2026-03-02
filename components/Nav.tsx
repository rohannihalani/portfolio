"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/data/content";

const links = [
  { label: "Building", href: "#building" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <AnimatePresence>
          {scrolled && (
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium text-ink tracking-tight"
            >
              {personal.firstName} {personal.lastName}
            </motion.a>
          )}
        </AnimatePresence>

        <nav className={`flex items-center gap-6 ${!scrolled ? "ml-auto" : ""}`}>
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs font-medium text-ink-secondary hover:text-ink transition-colors duration-200 link-hover"
            >
              {label}
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="text-xs font-medium text-ink bg-ink text-white px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
