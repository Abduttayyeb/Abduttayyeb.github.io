import React from "react";
import { ABOUT } from "../data/content.js";
import { Award } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

export default function About() {
  return (
    <section id="about" className="section-anchor py-12 sm:py-14">
      <div className="site-container">
        <SectionHeader eyebrow="About" title="Thoughtful engineering with" accent="purpose." />
        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <div className="space-y-4">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="card-surface h-fit p-5 sm:p-6">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Certifications
            </h3>
            <ul className="space-y-4">
              {[
                "Azure Cloud Engineer Associate",
                "GCP Cloud Engineer Associate",
                "Databricks Data Engineer Associate (in progress)",
              ].map((certification) => (
                <li key={certification} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <Award size={17} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
