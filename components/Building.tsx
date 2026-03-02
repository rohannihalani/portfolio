"use client";

import { motion } from "framer-motion";
import { building } from "@/data/content";
import { FadeIn, Stagger } from "./FadeIn";
import SectionLabel from "./SectionLabel";

export default function Building() {
  return (
    <section id="building" className="py-24 px-6 bg-surface-secondary">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel index="01" label="Currently Building" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-3xl font-semibold tracking-tighter text-ink mb-12">
            What I&apos;m working on
          </h2>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 gap-4" stagger={0.1} delay={0.1}>
          {building.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-ink/20 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.name}</h3>
                  <p className="text-xs text-ink-secondary mt-0.5">{item.role}</p>
                </div>
                <span className="text-[10px] font-medium tracking-wider uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {item.status}
                </span>
              </div>

              <p className="text-sm text-ink-secondary leading-relaxed mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-ink-secondary bg-surface-secondary px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-ink link-hover"
                >
                  View project →
                </a>
              )}
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
