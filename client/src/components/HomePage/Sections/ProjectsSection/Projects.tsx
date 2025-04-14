import ProjectsSectionLoadingSkeleton from "@/components/LoadingSkeletons/ProjectsSectionLoadingSkeleton";
import AnimatedText from "@/components/global/AnimatedText";
import BlockRendererClient from "@/components/global/BlockRendererClient";
import ErrorDisplay from "@/components/global/ErrorDisplay";
import LinkRenderer from "@/components/global/LinkRenderer";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";
// import { projects } from "@/data/Projects";
// import { GET_PROJECTS } from "@/graphql/Projects.query";
import { GET_PROJECT_SECTION_DATA } from "@/graphql/homePage/ProjectsSection.query";
import { mapProjectSectionData } from "@/lib/helpers/mapDataHelper";
import { MappedProjectSectionData } from "@/types/HomePage/ProjectSectionTypes";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ProjectCard from "../../../global/ProjectCard";

const Projects = () => {
  const [projectSectionData, setProjectSectionData] = useState<MappedProjectSectionData>();
  const { loading: sectionLoading, error: sectionError, data: sectionData } = useQuery(GET_PROJECT_SECTION_DATA);
  // const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(GET_PROJECTS);

  useEffect(() => {
    // if (sectionData?.homePage?.Sections && projectsData?.projects) {
    if (sectionData?.homePage?.Sections) {
      const projectSection = sectionData.homePage.Sections.find(
        (section: { __typename: string }) => 
        section.__typename === "ComponentSectionsMyProjectsSection"
      );

      if (projectSection) {
        // const mappedData = mapProjectSectionData(projectSection, projectsData.projects);
        const mappedData = mapProjectSectionData(projectSection);
        setProjectSectionData(mappedData);
      }
    }
  // }, [sectionData, projectsData]);
  }, [sectionData]);

  console.log("projectSectionData:", projectSectionData)

  if (sectionLoading) return <ProjectsSectionLoadingSkeleton />;
  // if (sectionLoading || projectsLoading) return <ProjectsSectionLoadingSkeleton />;
  if (sectionError) return <ErrorDisplay message={sectionError.message} />;
  // if (projectsError) return <ErrorDisplay message={projectsError.message} />;

  return (
    <section id="projects" className="pt-20 pb-32 px-4 relative bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <AnimatedText
            text={
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                {projectSectionData?.sectionTitle}
              </h2>
            }
            animation="slide-up"
          />
          <AnimatedText
            text={
              <div className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {projectSectionData?.sectionDescription  && (
                <BlockRendererClient content={projectSectionData?.sectionDescription} />
                )}
              </div>
            }
            animation="fade-in"
            delay={200}
          />
        </div>

        <div className="grid gap-8 stagger-animation">
          <ProjectCard 
            cardDisplayLimit={4}
            index={0}
            gridCols={2}
          />
        </div>

        <div className="text-center mt-12">
          {projectSectionData?.cta && (
            <LinkRenderer
              type={projectSectionData.cta.type || "Reference"}
              url={projectSectionData.cta.url || "#"}
              className="inline-block"
            >
              <InteractiveHoverButton>
                {projectSectionData.cta.name || "View All Projects"}
              </InteractiveHoverButton>
            </LinkRenderer>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
