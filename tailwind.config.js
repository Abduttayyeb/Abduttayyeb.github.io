/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        page: "var(--color-page)",
        glow: "var(--color-glow)",
        hero: "var(--color-glow)",
        ink: "var(--color-navy)",
        navy: "var(--color-navy)",
        muted: "var(--color-muted)",
        faint: "var(--color-faint)",
        line: "rgb(var(--color-line-rgb) / <alpha-value>)",
        card: "var(--color-card)",
        cardHead: "var(--color-card)",
        tag: "var(--color-tag)",
        tagText: "var(--color-muted)",
        cta: "var(--color-navy)",
        teal: "var(--color-teal)",
      },
      fontFamily: {
        display: ["'Inter'", "ui-sans-serif", "sans-serif"],
        body: ["'Inter'", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      backgroundImage: {
        "soft-glow": "var(--background-soft-glow)",
        "teal-accent": "var(--background-teal-accent)",
      },
    },
  },
  plugins: [],
};
