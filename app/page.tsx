"use client";
import About from "@/_components/About";
import ContactForm from "@/_components/ContactForm";
import Hero from "@/_components/Hero";
import Projects from "@/_components/Projects";
import Skills from "@/_components/Skill";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="scroll-smooth">
      <Hero />
      <Skills />
      <Projects />
      <About setOpen={setOpen} />
      <ContactForm open={open} setOpen={setOpen} />
    </div>
  );
}
