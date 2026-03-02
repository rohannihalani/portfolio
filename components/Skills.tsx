"use client";

import { skills } from "@/data/content";
import { FadeIn, Stagger } from "./FadeIn";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-surface-secondary">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel index="05" label="Skills" />
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-3xl font-semibold tracking-tighter text-ink mb-12">Technical toolkit</h2>
        </FadeIn>

        <Stagger stagger={0.07} delay={0.1} className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="grid sm:grid-cols-[140px_1fr] gap-x-8 gap-y-2 py-5 border-b border-border last:border-0">
              <p className="text-xs font-medium text-ink-secondary">{category}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium text-ink bg-white px-2.5 py-1 rounded-lg border border-border hover:border-ink/30 transition-colors duration-200"
                  >
                    {skill}
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
