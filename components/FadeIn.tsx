"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export function FadeIn({ children, delay = 0, className, y = 20 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode[];
  className?: string;
  stagger?: number;
  delay?: number;
}

export function Stagger({ children, className, stagger = 0.08, delay = 0 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
        hidden: {},
      }}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
