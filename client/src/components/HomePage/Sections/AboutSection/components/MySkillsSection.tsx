import React from "react";
import { motion } from "framer-motion";
import SkillsDisplay from "./SkillDisplay";

interface Skill {
  title: string;
  description: string;
  skills: string[];
}

interface MySkillsSectionProps {
  skillCategories: Skill[];
}

const MySkillsSection: React.FC<MySkillsSectionProps> = ({ skillCategories }) => {
  return (
    <motion.div
      className="container mx-auto max-w-5xl mt-24 pt-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Title with animation */}
      <motion.h3
        className="text-2xl md:text-4xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        My Skills
      </motion.h3>

      {/* SkillsDisplay with a staggered fade-in animation for each skill */}
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            transition: {
              staggerChildren: 0.3,
            },
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <SkillsDisplay skills={skillCategories} />
      </motion.div>
    </motion.div>
  );
};

export default MySkillsSection;
