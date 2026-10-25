import React from "react";
import { ArrowRight } from "lucide-react";
import { PROFILE } from "../data/content.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Footer() {
  const mailto = `mailto:${PROFILE.email}`;

  return (
    <footer>
      <section id="contact" className="section-anchor glow-surface border-y border-line">
        <div className="site-container section-space flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeader eyebrow="Contact" title="Have a project? Let's" accent="talk." />
            <a href={mailto} className="mt-5 inline-block text-sm text-muted transition-colors hover:text-navy">
              {PROFILE.email}
            </a>
          </div>
          <a href={mailto} className="primary-button w-fit">
            Email me <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <div className="site-container flex flex-col gap-3 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <div className="flex flex-wrap items-center gap-2">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-navy">
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-navy">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href={mailto} className="transition-colors hover:text-navy">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
