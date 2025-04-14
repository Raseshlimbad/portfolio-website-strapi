import React from "react";
import { Card } from "@/components/ui/card";

const BlogDetailCardLoadingSkeleton = () => {
  return (
    <div className="space-y-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {[1, 2].map((item) => (
        <Card
          key={item}
          className="overflow-hidden transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
            {/* Image skeleton */}
            <div className="relative h-48 sm:h-64 lg:h-full">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent opacity-70" />
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2 flex flex-col p-4 sm:p-6 lg:p-8">
              {/* Date and read time skeleton */}
              <div className="flex flex-wrap gap-4 mb-4">
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
              <div className="h-8 sm:h-9 lg:h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse" />

              {/* Description skeleton */}
              <div className="space-y-2 mb-6 flex-grow">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Button skeleton */}
              <div className="mt-4">
                <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogDetailCardLoadingSkeleton;