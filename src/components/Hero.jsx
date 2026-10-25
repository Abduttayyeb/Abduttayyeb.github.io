import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/content.js";
import databricksLogo from "../images/brands/databricks.svg";
import sparkLogo from "../images/brands/apache-spark.svg";
import snowflakeLogo from "../images/brands/snowflake.svg";
import azureLogo from "../images/brands/azure.svg";
import googleCloudLogo from "../images/brands/google-cloud.svg";

const SKILL_LOGOS = [
  { name: "Databricks", src: databricksLogo },
  { name: "Apache Spark", src: sparkLogo },
  { name: "Snowflake", src: snowflakeLogo },
  { name: "Azure", src: azureLogo },
  { name: "Google Cloud", src: googleCloudLogo },
];

function DataBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      viewBox="0 0 1200 570"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="none" stroke="#9cb9c7" strokeWidth="1">
        <path d="M0 240 C180 240 170 120 320 120 S470 240 600 240 790 100 930 130 1080 240 1200 240" />
        <path d="M0 315 C160 315 210 420 340 390 S480 300 600 315 790 425 920 390 1080 315 1200 315" strokeDasharray="4 7" />
        <path d="M600 0 C600 120 510 155 510 250 S600 390 600 570" strokeDasharray="3 8" />
      </g>
      <g fill="#f8fdff" stroke="#9cb9c7" strokeWidth="1">
        <circle cx="160" cy="202" r="7" />
        <circle cx="320" cy="120" r="6" />
        <circle cx="480" cy="194" r="7" />
        <circle cx="720" cy="195" r="6" />
        <circle cx="930" cy="130" r="7" />
        <circle cx="1070" cy="204" r="6" />
        <rect x="270" y="375" width="12" height="12" rx="3" />
        <rect x="902" y="382" width="12" height="12" rx="3" />
      </g>
      <g fill="#32c5d0">
        <circle cx="320" cy="120" r="3" />
        <circle cx="720" cy="195" r="3" />
        <circle cx="930" cy="130" r="3" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_50%_34%,rgba(191,238,243,0.55),transparent_53%),linear-gradient(180deg,#f4f9fc_0%,#f8fbfd_78%,#ffffff_100%)] px-5 pb-2 pt-14 sm:px-8 sm:pb-3 sm:pt-20 md:pb-4 md:pt-24">
      <DataBackdrop />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 shadow-sm sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {PROFILE.location} <span className="text-slate-300">/</span> Data &amp; AI
          </p>
          <h1 className="font-display text-[2.65rem] font-semibold leading-[1.03] tracking-[-0.055em] text-slate-900 sm:text-6xl md:text-[4.5rem]">
            Building data platforms
            <br className="hidden sm:block" /> that{" "}
            <span className="bg-gradient-to-r from-cyan-700 to-teal-500 bg-clip-text text-transparent">
              think.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-body text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7">
            {PROFILE.sub}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
              Explore my work <ArrowDown size={15} />
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white"
            >
              View resume <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <p className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-body text-xs leading-5 text-slate-500 sm:text-sm">
          <span>Azure and GCP certified</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Preparing for Databricks Data Engineer Associate</span>
        </p>
        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {SKILL_LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              className="h-6 w-auto max-w-[88px] object-contain grayscale opacity-55 transition duration-300 hover:grayscale-0 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
