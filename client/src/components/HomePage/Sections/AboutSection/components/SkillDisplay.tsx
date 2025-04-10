"use client";

import StrapiImageRenderer from "@/components/global/StrapiImageRenderer";
import {
  MappedSkillCategory,
  MappedSkillIcon,
} from "@/types/HomePage/MySkillsSecctionTypes";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface SkillsDisplayProps {
  skillCategories: MappedSkillCategory[]; // Array of MappedSkillCategory
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({ skillCategories }) => {
  // Initialize state with useEffect to ensure data is available
  const [activeTab, setActiveTab] = useState<string>("");

  // Set initial active tab when data is available
  useEffect(() => {
    if (skillCategories && skillCategories.length > 0) {
      setActiveTab(skillCategories[0].categoryName);
    }
  }, [skillCategories]);

  // Find the active skill category based on the active tab
  const activeCategory = skillCategories.find(
    (category) => category.categoryName === activeTab
  );

  // Don't render until we have data and an active tab
  if (!skillCategories.length || !activeTab) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Tabs (Mobile & Desktop) */}
      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
        {skillCategories.map((category) => (
          <motion.button
            key={category.categoryName}
            onClick={() => setActiveTab(category.categoryName)}
            className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 my-1 ${
              activeTab === category.categoryName
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 hover:bg-indigo-100"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {category.categoryName}
          </motion.button>
        ))}
      </div>

      {/* Content for the active tab */}
      <div className="hidden md:block">
        {activeCategory && (
          <motion.div
            className="flex flex-col items-center text-center p-6 border-t border-indigo-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Description with fade-out and fade-in transition on tab change */}
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4 max-w-md"
              key={activeCategory.categoryDescription} // Key helps reset the animation when description changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {activeCategory.categoryDescription}
            </motion.p>

            {/* skills */}
            <div className="flex flex-wrap justify-center gap-2">
              {activeCategory.icons.map((icon: MappedSkillIcon) => (
                <motion.span
                  key={icon.name}
                  className="px-3 py-1 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <StrapiImageRenderer
                    imageUrl={icon.svgUrl}
                    altText={icon.svgAltText}
                    height={80}
                    width={80}
                    isSvg={true}
                    className="text-indigo-600"
                  />
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Mobile view (separate layout for small screens) */}
      <div className="md:hidden">
        {/* Active skill category description for mobile */}
        {activeCategory && (
          <motion.div
            className="flex flex-col items-center text-center p-6 border-t border-indigo-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4 max-w-md"
              key={activeCategory.categoryDescription}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {activeCategory.categoryDescription}
            </motion.p>

            <div className="flex flex-wrap justify-center gap-2">
              {activeCategory.icons.map((icon: MappedSkillIcon) => (
                <motion.span
                  key={icon.name}
                  className="px-3 py-1 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <StrapiImageRenderer
                    imageUrl={icon.svgUrl}
                    altText={icon.svgAltText}
                    height={70}
                    width={70}
                    isSvg={true}
                    className="[&>img]:invert-[.35] [&>img]:sepia-[.20] [&>img]:saturate-[5] [&>img]:hue-rotate-[205deg] [&>img]:brightness-[.95]"
                  />
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkillsDisplay;
