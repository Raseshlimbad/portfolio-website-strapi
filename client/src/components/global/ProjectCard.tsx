/* eslint-disable @typescript-eslint/no-explicit-any */
import AnimatedText from "@/components/global/AnimatedText";
import { GET_PROJECTS } from "@/graphql/Projects.query";
import { MappedProjectData, mapProjectData } from "@/lib/helpers/mapDataHelper";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import ProjectCardLoadingSkeleton from "../LoadingSkeletons/ProjectCardLoadingSkeleton";
import BlockRendererClient from "./BlockRendererClient";
import ErrorDisplay from "./ErrorDisplay";
import StrapiImageRenderer from "./StrapiImageRenderer";

interface ProjectCardProps {
  index?: number;
  cardDisplayLimit?: number;
  gridCols?: number;  // New prop for grid columns
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  cardDisplayLimit,
  gridCols = 3, // Default to 3 columns
}) => {
  const {
    loading: projectsLoading,
    error: projectsError,
    data: projectsData,
  } = useQuery(GET_PROJECTS);
  const [projects, setProjects] = useState<MappedProjectData>();

  // console.log("Raw Projects Data:", projectsData?.projects[0].Title);
  console.log(
    "Raw Projects Data:",
    projectsData?.projects.map((project: any) => project?.Title)
  );

  useEffect(() => {
    if (projectsData) {
      const mappedData = mapProjectData(projectsData);
      setProjects(mappedData);
      console.log("Raw Projects Data inside useEffect:", projectsData.projects);
      console.log("Mapped Project Data:", mappedData);
    }
  }, [projectsData]);

  console.log("Project Data:", projects);
  console.log("Project Data:", projects?.projects.map((project: any) => project?.image?.url));

  if (
    cardDisplayLimit &&
    typeof index === "number" &&
    index >= cardDisplayLimit
  ) {
    return null;
  }

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[gridCols];

  if (projectsLoading) return <ProjectCardLoadingSkeleton />;
  if (projectsError) return <ErrorDisplay message={projectsError.message} />;
  
  return (
    <div className={`grid ${gridColsClass} gap-8 md:gap-10 lg:gap-12`}>
      {projects?.projects &&
        projects.projects.map((project) => (
          <AnimatedText
            key={project.title}
            text={
              <div className="p-6 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900 shadow-md hover:border-black w-[500px]">
                <div className="flex items-center gap-4 mb-4">
                  <StrapiImageRenderer
                    imageUrl={project.categoryIcon.svgUrl}
                    className="w-8 h-8"
                    altText={project.categoryIcon.svgAltText}
                    isSvg={true}
                    width={24}
                    height={24}
                  />
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {project.title}
                  </h3>
                </div>
                <span className="text-muted-foreground">
                  {project?.description && (
                    <BlockRendererClient content={project?.description} />
                  )}
                </span>

                <StrapiImageRenderer
                  imageUrl={project.image.url}
                  className="rounded-lg w-full h-auto object-cover"
                  altText={project.image.altText}
                  // isSvg={false}
                  width={446}
                  height={297}
                  
                />
                <div className="mt-8 flex justify-between">
                  {project?.ProjectLinks &&
                    project?.ProjectLinks.map((link) => (
                      <div
                        key={link.IconName}
                        className="text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-100 px-2 py-1 rounded-md flex flex justify-center"
                      >
                        <span className="flex items-center align-middle gap-1 hover:text-indigo-600">
                          {/* <ExternalLink size={18} /> */}
                          <StrapiImageRenderer
                            imageUrl={link.IconSVG.url}
                            altText={link.IconSVG.alternativeText}
                            isSvg={true}
                            width={24}
                            height={24}
                          />
                          {link.IconName}
                          {/* Live Demo */}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            }
            animation="fade-in"
            delay={(index ?? 0) * 100}
          />
        ))}
    </div>
  );
};

export default ProjectCard;
