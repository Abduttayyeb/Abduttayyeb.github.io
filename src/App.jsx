import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Stack from "./components/Stack.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div id="top" className="min-h-screen font-body bg-page text-ink">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Footer />
    </div>
  );
}
