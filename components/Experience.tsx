"use client";

import { experience, leadership } from "@/data/content";
import { FadeIn, Stagger } from "./FadeIn";
import SectionLabel from "./SectionLabel";

function TimelineItem({
  company,
  org,
  role,
  dates,
  location,
  bullets,
  description,
}: {
  company?: string;
  org?: string;
  role: string;
  dates: string;
  location: string;
  bullets?: string[];
  description?: string;
}) {
  const name = company ?? org ?? "";
  return (
    <div className="grid sm:grid-cols-[140px_1fr] gap-x-8 gap-y-1 py-8 border-b border-border last:border-0">
      <div className="sm:pt-0.5">
        <p className="text-xs text-ink-secondary tabular-nums">{dates}</p>
        <p className="text-xs text-ink-secondary mt-0.5">{location}</p>
      </div>
      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className="text-sm font-semibold text-ink">{name}</h3>
          <span className="text-ink-secondary text-xs">·</span>
          <span className="text-xs text-ink-secondary italic">{role}</span>
        </div>
        {bullets && (
          <ul className="space-y-1.5 mt-2">
            {bullets.map((b) => (
              <li key={b} className="text-sm text-ink-secondary leading-relaxed flex gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-border shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {description && (
          <p className="text-sm text-ink-secondary leading-relaxed mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel index="02" label="Experience" />
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-3xl font-semibold tracking-tighter text-ink mb-12">Work history</h2>
        </FadeIn>

        <Stagger stagger={0.07} delay={0.1}>
          {experience.map((e) => (
            <TimelineItem key={e.company} {...e} />
          ))}
        </Stagger>

        {/* Leadership subsection */}
        <FadeIn delay={0.1}>
          <div className="mt-16">
            <p className="text-xs font-medium tracking-widest text-ink-secondary uppercase mb-6">
              Leadership
            </p>
            <Stagger stagger={0.07}>
              {leadership.map((l) => (
                <TimelineItem key={l.org} {...l} />
              ))}
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
