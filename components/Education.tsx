"use client";

import { education } from "@/data/content";
import { FadeIn } from "./FadeIn";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel index="04" label="Education" />
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-3xl font-semibold tracking-tighter text-ink mb-12">School</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-[140px_1fr] gap-x-8 gap-y-2">
            <div>
              <p className="text-xs text-ink-secondary tabular-nums">{education.dates}</p>
              <p className="text-xs text-ink-secondary mt-0.5">{education.location}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-ink">{education.school}</h3>
              <p className="text-sm text-ink-secondary mt-0.5">{education.degree}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-medium text-ink bg-surface-secondary px-2 py-0.5 rounded-md border border-border">
                  GPA {education.gpa}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-xs font-medium tracking-widest text-ink-secondary uppercase mb-3">
                  Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((c) => (
                    <span
                      key={c}
                      className="text-[11px] font-medium text-ink-secondary bg-surface-secondary px-2 py-0.5 rounded-md border border-border"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
