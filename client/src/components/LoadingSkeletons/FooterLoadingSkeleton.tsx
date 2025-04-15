import React from "react";

const FooterLoadingSkeleton = () => {
  return (
    <footer className="py-6 px-4 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:items-center md:justify-between">
          {/* Copyright Text Skeleton */}
          <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto md:mx-0" />

          {/* Links & Social Media Skeleton */}
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            {/* Navigation Links Skeleton */}
            <div className="flex space-x-6">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
            <div className="flex space-x-6">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            {/* Social Media Links Skeleton */}
            <div className="flex space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                />
              ))}
            </div>

            {/* Scroll to Top Button Skeleton */}
            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLoadingSkeleton;