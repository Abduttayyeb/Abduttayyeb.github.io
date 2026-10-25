import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "../data/content.js";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/95 backdrop-blur-sm">
      <div className="site-container flex items-center justify-between py-4">
        <a
          href="#top"
          className="whitespace-nowrap rounded-sm font-display text-base font-semibold tracking-tight text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal sm:text-[17px]"
          aria-label={`${PROFILE.name} — back to top`}
        >
          <span className="sm:hidden">{PROFILE.shortName}</span>
          <span className="hidden sm:inline">{PROFILE.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-body text-sm text-muted">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-slate-500"
          >
            Get in touch
          </a>
        </nav>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line px-6 py-5 flex flex-col gap-4 font-body text-sm text-muted">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-ink"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
