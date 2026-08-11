import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { PROFILE } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-14 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <p className="font-display text-lg font-semibold text-ink_text">{PROFILE.name}</p>
        <p className="font-body text-sm text-muted">
          Designed & built by {PROFILE.name.split(" ")[0]}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href={`mailto:${PROFILE.email}`} aria-label="Email">
            <Mail size={18} className="text-muted hover:text-bronze transition-colors" />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} className="text-muted hover:text-bronze transition-colors" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} className="text-muted hover:text-bronze transition-colors" />
          </a>
          <a href={PROFILE.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
            <Twitter size={18} className="text-muted hover:text-bronze transition-colors" />
          </a>
        </div>
        <p className="font-mono text-[11px] text-faint">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}
