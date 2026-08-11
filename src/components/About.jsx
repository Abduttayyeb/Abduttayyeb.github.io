import React from "react";
import { Database, Cloud, Code2 } from "lucide-react";
import { SERVICES, STATS } from "../data/content.js";

const ICONS = [Database, Cloud, Code2];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Services rail */}
        <div className="flex flex-col gap-10 relative">
          <div
            className="hidden md:block absolute left-[19px] top-4 bottom-4 w-px bg-line"
            aria-hidden="true"
          />
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={s.title} className="relative flex items-start gap-5">
                <div className="relative z-10 w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-line flex items-center justify-center">
                  <Icon size={18} className="text-bronze" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink_text mb-1">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-muted">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bio + stats */}
        <div>
          <p className="font-mono text-xs tracking-widest text-faint mb-3">ABOUT ME</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink_text mb-6">
            About me
          </h2>
          <p className="font-body text-base leading-relaxed text-muted mb-4">
            I'm a Senior Data Engineer working across Azure Databricks, PySpark, and Delta Lake —
            designing lakehouse platforms, streaming pipelines, and Unity Catalog architectures for
            production workloads. I hold Azure and GCP Associate Cloud Engineer certifications and
            I'm currently working toward the Databricks Data Engineer Professional certification.
          </p>
          <p className="font-body text-base leading-relaxed text-muted mb-10">
            Alongside that, I build products for small businesses and myself — React apps, PWAs, and
            company sites — because shipping something a real user touches keeps the engineering
            honest.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-line pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-ink_text">
                  {s.value}
                  <span className="text-bronze">+</span>
                </p>
                <p className="font-body text-xs text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
