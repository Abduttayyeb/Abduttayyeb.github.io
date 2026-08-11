import React, { useState } from "react";
import { PROFILE } from "../data/content.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // No backend is wired up. This opens the visitor's email client with the
  // message pre-filled. Swap this for a real form handler (Formspree,
  // Resend, your own API route, etc.) when you're ready.
  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your site"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="font-mono text-xs tracking-widest text-bronze mb-4">CONTACT</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink_text leading-tight">
            Have a project?
            <br /> Let's talk.
          </h2>
          <p className="font-body text-muted mt-6 max-w-sm">
            Prefer email directly? Reach me at{" "}
            <a href={`mailto:${PROFILE.email}`} className="text-bronze border-b border-bronze/40">
              {PROFILE.email}
            </a>
            .
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {["name", "email"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="font-mono text-xs text-faint block mb-2">
                {field.toUpperCase()}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                required
                value={form[field]}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-line focus:border-bronze outline-none py-2 font-body text-ink_text transition-colors"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="font-mono text-xs text-faint block mb-2">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-line focus:border-bronze outline-none py-2 font-body text-ink_text transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="self-start px-6 py-3 rounded-full font-mono text-xs bg-bronze text-ink hover:opacity-90 transition"
          >
            {sent ? "OPENING YOUR EMAIL APP…" : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  );
}
