'use client';

import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Nav from "@/components/Nav";
import BlogFeature from "@/components/BlogFeature";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <div className="relative text-neutral-300 overflow-hidden bg-slate-950 lg:bg-gradient-to-r from-black via-slate-950 to-black">
      <Nav/>


      <div id="hero" className="section hero relative lg:bg-gradient-to-r from-black via-slate-950 to-black">
        <div className="bg-grid px-8">
          <Hero />
        </div>
      </div>

      <div id="experience" className="section experience px-8 lg:p-0">
        <Experience />
      </div>

      <div id="projects" className="section projects px-8 lg:p-0">
        <Projects />
      </div>

      {/* Commenting this out until I have more writing */}
      {/* <BlogFeature/> */}

      <div id="Achievements" className="section contact px-8 lg:p-0 mt-16">
        <Achievements />
      </div>

      <div id="contact" className="section contact px-8 lg:p-0">
        <Contact />
      </div>
    </div>
  );
}
