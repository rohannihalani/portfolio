"use client";

import { projects } from "@/data/content";
import { FadeIn, Stagger } from "./FadeIn";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface-secondary">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel index="03" label="Projects" />
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-3xl font-semibold tracking-tighter text-ink mb-12">Things I&apos;ve built</h2>
        </FadeIn>

        <Stagger className="flex flex-col gap-4" stagger={0.1} delay={0.1}>
          {projects.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-ink/20 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-sm font-semibold text-ink leading-snug">{p.name}</h3>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs text-ink-secondary hover:text-ink transition-colors link-hover"
                  >
                    ↗
                  </a>
                )}
              </div>
              <p className="text-sm text-ink-secondary leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-ink-secondary bg-surface-secondary px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
