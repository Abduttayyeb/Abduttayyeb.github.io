import React from "react";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";
import siptImage from "../images/sipt.png";
import fakhriToolsImage from "../images/fakhri_tools.png";
import paytrackImage from "../images/paytrack.png";

const imageMap = {
  "sipt.png": siptImage,
  "fakhri_tools.png": fakhriToolsImage,
  "paytrack.png": paytrackImage,
};

const STATUS_LABEL = {
  live: "Live",
  progress: "In progress",
  concept: "Concept",
  case: "Case study",
};

function DataWireframe({ type }) {
  if (type === "vitals") {
    return (
      <svg viewBox="0 0 320 160" className="h-full w-full p-4" aria-hidden="true">
        <g fill="none" stroke="var(--color-line)" strokeWidth="1.2">
          <path d="M28 112C62 112 70 66 104 66s42 32 76 32 42-48 76-48" />
          <path d="M28 132h264" strokeDasharray="3 6" />
        </g>
        <path d="M28 112c18 0 24-11 36-23 13-12 19-23 40-23s26 17 40 27 21 5 36 5 22-26 40-38 25-10 36-10" fill="none" stroke="var(--color-faint)" strokeWidth="2" />
        <g fill="var(--color-page)" stroke="var(--color-faint)" strokeWidth="1.2">
          <circle cx="28" cy="112" r="6" />
          <circle cx="104" cy="66" r="6" />
          <circle cx="180" cy="98" r="6" />
          <circle cx="256" cy="50" r="7" stroke="var(--color-teal)" />
        </g>
        <circle cx="256" cy="50" r="3" fill="var(--color-teal)" />
        <text x="23" y="148" fill="var(--color-faint)" fontSize="9">INGEST</text>
        <text x="84" y="48" fill="var(--color-faint)" fontSize="9">STREAM</text>
        <text x="159" y="120" fill="var(--color-faint)" fontSize="9">DELTA LAKE</text>
        <text x="242" y="31" fill="var(--color-teal)" fontSize="9">ALERT</text>
      </svg>
    );
  }

  if (type === "medallion") {
    return (
      <svg viewBox="0 0 320 160" className="h-full w-full p-4" aria-hidden="true">
        <g fill="none" stroke="var(--color-line)" strokeWidth="1">
          <path d="M48 128h225M68 120V50h54v70M133 120V34h54v86M198 120V17h54v103" />
        </g>
        <path d="M68 82h54v38H68zM133 58h54v62h-54z" fill="var(--color-tag)" stroke="var(--color-line)" />
        <path d="M198 17h54v103h-54z" fill="var(--color-highlight)" stroke="var(--color-teal)" />
        <g fill="var(--color-faint)" fontSize="10">
          <text x="74" y="143">BRONZE</text>
          <text x="142" y="143">SILVER</text>
        </g>
        <text x="207" y="143" fill="var(--color-teal)" fontSize="10">GOLD</text>
        <g fill="var(--color-page)" stroke="var(--color-faint)">
          <circle cx="95" cy="82" r="4" />
          <circle cx="160" cy="58" r="4" />
          <circle cx="225" cy="17" r="4" stroke="var(--color-teal)" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 160" className="h-full w-full p-4" aria-hidden="true">
      <g fill="none" stroke="var(--color-line)" strokeWidth="1.5">
        <path d="M98 80h23m78 0h23" />
      </g>
      <g fill="var(--color-page)" stroke="var(--color-faint)" strokeWidth="1.2">
        <rect x="10" y="54" width="92" height="52" rx="9" />
        <rect x="114" y="54" width="92" height="52" rx="9" />
        <rect x="218" y="54" width="92" height="52" rx="9" stroke="var(--color-teal)" />
      </g>
      <g fill="var(--color-faint)" fontSize="12" textAnchor="middle">
        <text x="56" y="84">Databricks</text>
        <text x="160" y="84">BigQuery</text>
      </g>
      <text x="264" y="84" fill="var(--color-teal)" fontSize="11" textAnchor="middle">OpenMetadata</text>
      <g fill="var(--color-page)" stroke="var(--color-faint)" strokeWidth="1">
        <circle cx="102" cy="80" r="4" />
        <circle cx="114" cy="80" r="4" />
        <circle cx="206" cy="80" r="4" />
        <circle cx="218" cy="80" r="4" stroke="var(--color-teal)" />
      </g>
    </svg>
  );
}

function ProjectCard({ project }) {
  const isProduct = project.category === "product";
  const image = project.image && imageMap[project.image];

  return (
    <article className="card-surface group flex h-full flex-col p-4 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="mx-auto mb-4 aspect-[16/10] max-h-[170px] w-full max-w-[272px] shrink-0 overflow-hidden rounded-[var(--radius-card)] border border-line bg-card">
          {isProduct && image ? (
            <img
              src={image}
              alt=""
              className={`h-full w-full object-cover object-top ${project.title === "PayTrack" ? "scale-150 origin-top" : ""}`}
            />
          ) : (
            <DataWireframe type={project.visual} />
          )}
      </div>
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-display text-[15px] font-semibold text-navy">{project.title}</h3>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-white/70 px-2 py-1 font-mono text-[10px] tracking-wide text-muted">
            {project.status === "live" && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
            {STATUS_LABEL[project.status]}
          </span>
        </div>
        <p className="mb-3 line-clamp-2 min-h-10 text-[13px] leading-5 text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-line bg-tag px-2 py-1 font-mono text-[11px] leading-4 tracking-wide text-muted">
              {item}
            </span>
          ))}
        </div>
        {isProduct && (
          <div className="mt-auto pt-4">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-teal">
                View site <ArrowRight size={14} />
              </a>
            ) : (
              <span aria-disabled="true" className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm font-medium text-faint">
                View site <ArrowRight size={14} />
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function WorkGroup({ title, category }) {
  const items = PROJECTS.filter((project) => project.category === category);

  return (
    <div className="mt-12 first:mt-10">
      <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">{title}</h3>
      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-anchor section-space">
      <div className="site-container">
        <SectionHeader eyebrow="Work" title="Selected work that" accent="ships." />
        <WorkGroup title="Data & AI" category="data" />
        <WorkGroup title="Product & Web" category="product" />
      </div>
    </section>
  );
}
