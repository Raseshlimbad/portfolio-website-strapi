import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/global/AnimatedText";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  icon: React.ReactNode;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
  icon,
  index,
}) => {
  return (
    <div className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/40">
      <AnimatedText
        text={
          <div className="p-6 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900 shadow-md hover:border-black">
            <div className="flex items-center gap-4 mb-4">
              {icon}
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {title}
              </h3>
            </div>
            <p className="text-muted-foreground">{description}</p>
            <Image
              src={image}
              alt={title}
              className="mt-4 rounded-lg w-full h-auto object-cover"
              width={446}
              height={297}
            />
            <ul className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="px-2 py-1 text-xs text-indigo-700 font-medium bg-indigo-100 dark:bg-indigo-800 rounded-md"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-between">
              <Link
                href={liveUrl}
                className="text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-100 px-2 py-1 rounded-md"
              >
                <span className="flex items-center align-middle gap-1">
                  <ExternalLink size={18} />
                  Live Demo
                </span>
              </Link>
              <Link
                href={githubUrl}
                className="text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-100 px-2 py-1 rounded-md"
              >
                <span className="flex items-center align-middle gap-1">
                  <Github size={18} />
                  GitHub
                </span>
              </Link>
            </div>
          </div>
        }
        animation="fade-in"
        delay={index * 100}
      />
    </div>
  );
};

export default ProjectCard;