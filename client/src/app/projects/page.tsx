"use client";

import ProjectCard from "@/components/global/ProjectCard";
import { renderPageBackgroundIcon } from "@/data/Icons";

const BackgroundIcon = ({
  IconName,
  position,
  size,
}: {
  IconName: string;
  position: string;
  size: number;
}) => (
  <div
    className={`fixed ${position} transform translate-x-12 -translate-y-12 text-indigo-100 z-0 opacity-70 pointer-events-none`}
  >
    {renderPageBackgroundIcon(IconName, size, size)}
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen mt-15 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <BackgroundIcon
        IconName="CodeFolderIcon"
        position="top-2 left-270"
        size={800}
      />
      <BackgroundIcon
        IconName="CodeFolderIcon"
        position="bottom-0 right-350"
        size={400}
      />

      <main className="container mx-auto py-12 px-4 md:px-8 z-50">
        <ProjectCard cardDisplayLimit={6} gridCols={3} />
      </main>
    </div>
  );
};

export default ProjectsPage;
