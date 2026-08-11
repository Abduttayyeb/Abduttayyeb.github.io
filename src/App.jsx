import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Stack from "./components/Stack.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen font-body bg-gradient-to-b from-[#050712] via-[#07122c] to-[#090d1c] text-ink_text">
      <Navbar />
      <Hero />
      <div className="section-connected">
        <About />
        <Projects />
      </div>
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
