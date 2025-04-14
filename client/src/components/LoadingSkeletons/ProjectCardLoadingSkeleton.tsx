import React from "react";

const SingleProjectCard = () => (
  <div className="transform transition-all duration-300">
    <div className="p-6 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-8 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
      <div className="mt-4 w-full h-[297px] bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
      <div className="mt-8 flex justify-between">
        <div className="w-28 h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
        <div className="w-28 h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
      </div>
    </div>
  </div>
);

const ProjectCardLoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {[...Array(9)].map((_, index) => (
        <SingleProjectCard key={index} />
      ))}
    </div>
  );
};

export default ProjectCardLoadingSkeleton;