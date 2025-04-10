"use client";

import React from "react";
import { motion } from "framer-motion";

const TimelineLoadingSkeleton = () => {

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Animated Central Timeline Line Skeleton */}
      <motion.div className="block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-300 animate-pulse"></motion.div>

      {/* Timeline events skeleton */}
      <div className="relative">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="mb-8 md:mb-24 relative animate-pulse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Mobile View Skeleton */}
            <div className="md:hidden">
              <motion.div className="p-6 rounded-lg shadow-md bg-gray-300 dark:bg-gray-600">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                  <div className="h-6 w-36 bg-gray-400 rounded-full"></div>
                </div>
                <div className="h-8 w-48 bg-gray-400 rounded-lg mb-2"></div>
                <div className="h-6 w-64 bg-gray-400 rounded-lg"></div>
              </motion.div>
            </div>

            {/* Desktop View Skeleton */}
            <div className="hidden md:block">
              <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 cursor-pointer">
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full text-center mr-4">
                  <div className="h-6 w-36 bg-gray-400 rounded-lg"></div>
                </div>

                {/* Timeline Node (Circle with Icon) Skeleton */}
                <div className="flex items-center justify-center w-16 h-16 bg-gray-400 rounded-full"></div>
              </motion.div>

              {/* Content Card Skeleton */}
              <div className="mt-8 md:mt-0 md:w-5/12 md:ml-auto">
                <motion.div className="p-6 rounded-lg shadow-md bg-gray-300 dark:bg-gray-600">
                  <div className="h-6 w-48 bg-gray-400 rounded-lg mb-2"></div>
                  <div className="h-6 w-64 bg-gray-400 rounded-lg"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineLoadingSkeleton;
