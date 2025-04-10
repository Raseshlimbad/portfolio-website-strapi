import { GET_MY_SKILLS_SECTION_QUERY } from "@/graphql/homePage/MySkillsSection.query";
import { mapMySkillsSectionData } from "@/lib/helpers/mapDataHelper";
import { MappedMySkillsSection } from "@/types/HomePage/MySkillsSecctionTypes";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SkillsDisplay from "./SkillDisplay";
import MySkillsSectionSkeleton from "@/components/LoadingSkeletons/MySkillsSectionSkeleton";
import ErrorDisplay from "@/components/global/ErrorDisplay";

const MySkillsSection = () => {

  const [mySkillsSectionData, setMySkillsSectionData] = useState<MappedMySkillsSection>();

  const { loading, error, data } = useQuery(GET_MY_SKILLS_SECTION_QUERY);

    // Filtering the MySkills Section correctly and mapping the data
    useEffect(() => {
      if (data?.homePage?.Sections) {
        // Find the section
        const heroSection = data.homePage.Sections.find(
          (section: { __typename: string }) => section.__typename === "ComponentSectionsMySkillsSection"
        );
  
        if (heroSection) {
          const mappedData = mapMySkillsSectionData(heroSection);
          setMySkillsSectionData(mappedData);
        }
      }
    }, [data]);

  console.log("My Skills Data:", mySkillsSectionData?.skillCategories);


  if (loading) return <MySkillsSectionSkeleton />;
  if (error) return <ErrorDisplay message={error.message} />;


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
        {mySkillsSectionData?.sectionTitle}
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
        {/* <SkillsDisplay skillCategories={mySkillsSectionData?.skillCategories} /> */}
        <SkillsDisplay skillCategories={mySkillsSectionData?.skillCategories || []} />
      </motion.div>
    </motion.div>
  );
};

export default MySkillsSection;
