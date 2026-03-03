"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/content";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function item(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  };
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 max-w-3xl mx-auto">
      {/* Label */}
      <motion.p
        {...item(0.15)}
        className="text-xs font-medium tracking-widest text-ink-secondary uppercase mb-8"
      >
        Portfolio
      </motion.p>

      {/* Name */}
      <div className="overflow-hidden mb-2">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease }}
          className="text-[clamp(3.5rem,10vw,7rem)] font-semibold tracking-tightest text-ink leading-[0.92]"
        >
          {personal.firstName}
        </motion.h1>
      </div>
      <div className="overflow-hidden mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease }}
          className="text-[clamp(3.5rem,10vw,7rem)] font-semibold tracking-tightest text-ink leading-[0.92]"
        >
          {personal.lastName}
        </motion.h1>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.55, ease }}
        style={{ transformOrigin: "left" }}
        className="h-px w-full bg-border mb-8"
      />

      {/* Bio + meta row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <motion.p
          {...item(0.65)}
          className="text-base text-ink-secondary leading-relaxed max-w-md"
        >
          {personal.bio}
        </motion.p>

        <motion.div {...item(0.75)} className="flex flex-col gap-2 text-xs text-ink-secondary shrink-0">
          {personal.photo && (
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border mb-1">
              <Image
                src={`/${personal.photo}`}
                alt={personal.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <span>{personal.title}</span>
          <span>{personal.location}</span>
          <div className="flex items-center gap-3 mt-1">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-secondary hover:text-ink transition-colors duration-200"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-secondary hover:text-ink transition-colors duration-200"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="text-ink-secondary hover:text-ink transition-colors duration-200"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="mt-20 flex items-center gap-2 text-xs text-ink-secondary"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
