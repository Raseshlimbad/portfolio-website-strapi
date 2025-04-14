import React from "react";

const BlogCardLoadingSkeleton = () => {
  return (
    <div className="transform transition-all duration-300 w-[500px]">
      <div className="overflow-hidden  h-full rounded-xl bg-white/70 backdrop-blur-sm">
        {/* Image skeleton */}
        <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        
        {/* Content section */}
        <div className="p-6">
          {/* Date and read time skeleton */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
              <div className="w-20 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
              <div className="w-16 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          </div>

          {/* Title skeleton */}
          <div className="h-7 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3 animate-pulse" />
          
          {/* Description skeleton */}
          <div className="space-y-2 mb-6">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          {/* Button skeleton */}
          <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardLoadingSkeleton;