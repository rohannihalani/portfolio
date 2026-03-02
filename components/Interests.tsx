"use client";

import { interests } from "@/data/content";
import { FadeIn, Stagger } from "./FadeIn";
import SectionLabel from "./SectionLabel";

export default function Interests() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel index="06" label="Interests" />
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-3xl font-semibold tracking-tighter text-ink mb-12">
            Outside of code
          </h2>
        </FadeIn>

        <Stagger className="flex flex-wrap gap-3" stagger={0.06} delay={0.1}>
          {interests.map((interest) => (
            <span
              key={interest}
              className="text-sm font-medium text-ink-secondary border border-border rounded-full px-4 py-2 hover:border-ink/40 hover:text-ink transition-all duration-200"
            >
              {interest}
            </span>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
