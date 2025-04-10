import React from "react";
import MySkillsSection from "./components/MySkillsSection";
import TimelineSection from "./components/TimelineSection";


const AboutSection = () => {
  return (
    <section id="about" className="pt-20 pb-32 px-4 md:px-8 lg:px-16 relative">
      {/* Timeline Section */}
      <TimelineSection/>

      {/* Skills Section */}
      <MySkillsSection />
    </section>
  );
};

export default AboutSection;
