'use client'

import { useEffect } from "react";
import Hero from "./Sections/HeroSection/Hero";
import AboutSection from "./Sections/AboutSection/About";
import Projects from "./Sections/ProjectsSection/Projects";
import BlogsSection from "./Sections/BlogsSection/BlogsSection";
import ContactMe from "./Sections/ContactMeSection/ContactMe";

const Homepage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="bg-gradient-to-b from-slate-50 to-indigo-50 pb-10">
        <AboutSection />
        <Projects />
        <BlogsSection />
        <ContactMe />
      </div>
    </div>
  );
};

export default Homepage;