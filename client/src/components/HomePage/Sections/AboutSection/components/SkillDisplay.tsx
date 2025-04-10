'use client'

import { renderSkillIcon } from "@/data/Icons";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the Skill type
interface Skill {
  title: string;
  description: string;
  skills: string[];
}

interface SkillsDisplayProps {
  skills: Skill[];
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({ skills }) => {
  const [activeTab, setActiveTab] = useState<string>(skills[0]?.title || ""); // Default to the first skill category

  // Find the active skill based on the active tab
  const activeSkill = skills.find((skill) => skill.title === activeTab);

  return (
    <div className="w-full">
      {/* Tabs (Mobile & Desktop) */}
      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
        {skills.map((skill) => (
          <motion.button
            key={skill.title}
            onClick={() => setActiveTab(skill.title)}
            className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 my-1 ${
              activeTab === skill.title
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 hover:bg-indigo-100"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill.title}
          </motion.button>
        ))}
      </div>

      {/* Content for the active tab */}
      <div className="hidden md:block">
      {activeSkill && (
        <motion.div
          className="flex flex-col items-center text-center p-6 border-t border-indigo-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Description with fade-out and fade-in transition on tab change */}
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-4 max-w-md"
            key={activeSkill.description} // Key helps reset the animation when description changes
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {activeSkill.description}
          </motion.p>

          {/* skills */}
          <div className="flex flex-wrap justify-center gap-2">
            {activeSkill.skills.map((skill) => (
              <motion.span
                key={skill}
                className="px-3 py-1 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {renderSkillIcon(skill, 60, 60)}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
      </div>

      {/* Mobile view (separate layout for small screens) */}
      <div className="md:hidden">
        {/* Active skill description for mobile */}
        {activeSkill && (
          <motion.div
            className="flex flex-col items-center text-center p-6 border-t border-indigo-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4 max-w-md"
              key={activeSkill.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {activeSkill.description}
            </motion.p>

            <div className="flex flex-wrap justify-center gap-2">
              {activeSkill.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {renderSkillIcon(skill, 50, 50)} {/* Smaller icons for mobile */}
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
