import React from "react";
import AnimatedText from "@/components/global/AnimatedText";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";
import Link from "next/link";
import { projects } from "@/data/Projects";
import ProjectCard from "../../../global/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-20 pb-32 px-4 relative bg-secondary/50"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <AnimatedText
            text={
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                My Projects
              </h2>
            }
            animation="slide-up"
          />
          <AnimatedText
            text={
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and
                experience as a full-stack developer.
              </p>
            }
            animation="fade-in"
            delay={200}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 stagger-animation">
          {projects.map((project, index) => (
            <AnimatedText
              key={project.title}
              text={<ProjectCard {...project} index={index} />}
              animation="fade-in"
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={"/projects"}>
            <InteractiveHoverButton>View All Projects</InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
