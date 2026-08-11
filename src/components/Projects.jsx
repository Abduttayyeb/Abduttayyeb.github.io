import React, { useState } from "react";
import { ArrowUpRight, Github, Circle, CircleDot, CircleDashed } from "lucide-react";
import { PROJECTS } from "../data/projects.js";
import siptImage from "../images/sipt.png";
import fakhriToolsImage from "../images/fakhri_tools.png";
import paytrackImage from "../images/paytrack.png";

const imageMap = {
  "sipt.png": siptImage,
  "fakhri_tools.png": fakhriToolsImage,
  "paytrack.png": paytrackImage,
};

const getProjectImage = (image) => imageMap[image] || "";

const STATUS_META = {
  live: { label: "Live", icon: CircleDot, className: "text-gold border-gold/40" },
  progress: { label: "In progress", icon: Circle, className: "text-bronze border-bronze/40" },
  concept: { label: "Concept", icon: CircleDashed, className: "text-faint border-line" },
};

const FILTERS = [
  { key: "all", label: "All" },
  { key: "data", label: "Data Engineering" },
  { key: "product", label: "Product & Web" },
];

// Visual placeholder for each project card — swap the inner content for a real
// screenshot (<img src="..." />) whenever you have one.
function ProjectVisual({ project }) {
  if (project.category === "data") {
    return (
      <div className="w-full h-full min-h-[220px] rounded-xl border border-line bg-white/5 p-5 font-mono text-xs text-muted overflow-hidden">
        <p className="text-bronze mb-2"># {project.title.toLowerCase().replace(/\s+/g, "_")}.pipeline</p>
        {project.stack.map((s, i) => (
          <p key={s} className="mb-1">
            <span className="text-faint">stage[{i}]</span> :: {s} <span className="text-gold">ok</span>
          </p>
        ))}
        <p className="mt-3 text-faint">status → {project.status}</p>
      </div>
    );
  }
  return (
    <div className="w-full h-full min-h-[220px] rounded-xl border border-line bg-white/5 overflow-hidden flex flex-col">
      {project.image ? (
        <img
          src={getProjectImage(project.image)}
          alt={project.title}
          className="h-52 w-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center h-52 bg-surfaceAlt text-center px-6">
          <p className="font-display text-lg text-faint">Screenshot: {project.title}</p>
        </div>
      )}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-lg text-ink_text mb-2">{project.title}</h3>
          <p className="font-body text-sm text-muted mb-4">{project.subtitle}</p>
          <p className="font-body text-sm leading-relaxed text-silver mb-5">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest text-faint mb-3">SELECTED WORK</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink_text">
              Projects
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-2 rounded-full border transition-colors ${
                  filter === f.key
                    ? "border-bronze text-bronze"
                    : "border-line text-muted hover:text-ink_text"
                }`}
              >
                {f.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-20">
          {filtered.map((p, i) => {
            const meta = STATUS_META[p.status];
            const Icon = meta.icon;
            const reversed = i % 2 === 1;
            return (
              <div
                key={p.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ProjectVisual project={p} />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl font-semibold text-ink_text">
                      {p.title}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-full border ${meta.className}`}
                    >
                      <Icon size={10} />
                      {meta.label.toUpperCase()}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted mb-4">{p.subtitle}</p>
                  <p className="font-body text-sm leading-relaxed text-silver mb-5">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bronze text-ink font-mono text-xs"
                      >
                        <Github size={14} /> VIEW GITHUB
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-ink_text border-b border-line hover:border-bronze transition-colors"
                      >
                        VIEW PROJECT <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
