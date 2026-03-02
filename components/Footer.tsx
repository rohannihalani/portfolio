"use client";

import { personal } from "@/data/content";
import { FadeIn } from "./FadeIn";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 bg-ink text-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-[clamp(2rem,6vw,4rem)] font-semibold tracking-tighter leading-none mb-10">
            Let&apos;s connect.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 link-hover"
              >
                {personal.email}
              </a>
              <div className="flex items-center gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <MailIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <p className="text-xs text-white/30 tabular-nums">
              © {year} {personal.name}
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
