import React from "react";
import { STACK } from "../data/content.js";

export default function Stack() {
  return (
    <section id="stack" className="px-6 md:px-10 py-24 border-y border-line">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-widest text-faint mb-10">STACK</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(STACK).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-silver mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-line text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
