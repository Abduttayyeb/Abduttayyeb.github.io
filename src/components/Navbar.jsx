import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "../data/content.js";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#home" className="font-display text-base font-semibold tracking-wide text-ink_text">
          {PROFILE.initials}
          <span className="text-bronze">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-5 font-body text-[11px] uppercase tracking-[0.18em] text-silver/55">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink_text transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full border border-bronze/50 text-bronze hover:bg-bronze/12 hover:text-ink transition-colors"
          >
            GOT A PROJECT?
          </a>
        </nav>

        <button
          className="md:hidden text-ink_text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line px-6 py-6 flex flex-col gap-5 font-mono text-sm text-muted">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-bronze">
            GOT A PROJECT?
          </a>
        </div>
      )}
    </header>
  );
}
