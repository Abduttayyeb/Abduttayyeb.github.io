import React from "react";
import { PROFILE, TICKER } from "../data/content.js";

export default function Hero() {
  return (
    <section id="home" className="section-connected px-6 md:px-10 pt-16 md:pt-24">
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Text side */}
        <div>
          <p className="font-body text-[11px] uppercase tracking-[0.5em] text-silver/50 mb-4">
            {PROFILE.location.toUpperCase()} — OPEN TO REMOTE WORK
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] text-ink_text mb-4 max-w-2xl">
            Innovative Software Solutions
          </h1>
          <p className="font-display text-2xl md:text-3xl text-bronze/90 mb-8 max-w-xl">
            Connected data engineering and product experiences.
          </p>
          <p className="font-body text-base md:text-lg text-muted max-w-2xl mb-10">
            Azure Databricks, PySpark, Delta Lake, and product builds that scale.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-bronze to-gold px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink shadow-[0_18px_50px_rgba(139,130,255,0.22)] transition hover:opacity-95"
            >
              About me
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-silver/30 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink_text transition hover:bg-white/5 hover:border-bronze"
            >
              Let's talk
            </a>
          </div>
        </div>

        {/* Visual side — abstract monogram instead of a stock/fake photo.
            Swap this block for an <img> of your own headshot if you'd like. */}
        <div className="relative flex items-center justify-center py-10">
          <div className="absolute -left-6 top-8 h-56 w-56 md:h-72 md:w-72 rounded-full border border-bronze/20" />
          <div className="absolute right-4 top-12 h-48 w-48 md:h-64 md:w-64 rounded-full border border-silver/20" />
          <div className="absolute h-48 w-48 md:h-60 md:w-60 rounded-full bg-gradient-to-br from-[#5FA3FF]/25 via-transparent to-[#B8C9F0]/12 blur-3xl" />
          <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full bg-white/5 border border-line flex items-center justify-center">
            <span className="font-display text-5xl md:text-7xl font-semibold text-ink_text">
              {PROFILE.initials}
            </span>
          </div>
        </div>
      </div>

      {/* Tech ticker strip */}
      <div className="relative max-w-6xl mx-auto mt-20 border-t border-b border-line py-6 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-mono text-sm text-faint">
          {TICKER.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
