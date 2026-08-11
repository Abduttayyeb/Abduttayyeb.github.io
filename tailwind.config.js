/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050915",
        surface: "#0B1131",
        surfaceAlt: "#111C42",
        line: "#2C3F88",
        bronze: "#8B82FF",
        silver: "#C3C8FF",
        gold: "#A18CFF",
        ink_text: "#F5F8FF",
        muted: "#A2B0DD",
        faint: "#6F85AF",
      },
      fontFamily: {
        display: ["'Poppins'", "ui-sans-serif", "sans-serif"],
        body: ["'Inter'", "ui-sans-serif", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
