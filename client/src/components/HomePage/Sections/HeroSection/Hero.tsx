import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import AnimatedText from "@/components/global/AnimatedText";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GET_HERO_SECTION_QUERY } from "@/graphql/homePage/heroSection.query";
import { useQuery } from "@apollo/client";
import { mapHeroSectionData } from "@/lib/helpers/mapDataHelper";
import { MappedHeroSectionData } from "@/types/HomePage/HeroSectionTypes";
import HeroLoadingSkeleton from "@/components/LoadingSkeletons/HeroLoadingSkeleton";
import { redirect } from "next/navigation";

const Hero = () => {
  const [heroSectionData, setHeroSectionData] = useState<MappedHeroSectionData>();

  const { loading, error, data } = useQuery(GET_HERO_SECTION_QUERY);

    // Filtering the Hero Section correctly and mapping the data
    useEffect(() => {
      if (data?.homePage?.Sections) {
        // Find the section
        const heroSection = data.homePage.Sections.find(
          (section: { __typename: string }) => section.__typename === "ComponentSectionsHeroSection"
        );
  
        if (heroSection) {
          const mappedData = mapHeroSectionData(heroSection);
          setHeroSectionData(mappedData);
        }
      }
    }, [data]);

  // console.log("Hero Section Data:", heroSectionData);


  if (loading) return <HeroLoadingSkeleton />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated background with new design */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-indigo-400 dark:from-teal-600 dark:to-indigo-700 opacity-80" />

        {/* Radial Gradient */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.3),rgba(var(--background),0))]" />

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Blob 1 */}
          <div className="blob blob-teal h-[700px] w-[700px] opacity-30 absolute -top-48 -left-80 rounded-full bg-teal-400 dark:bg-teal-500 animate-blob animation-duration-5000"></div>

          {/* Blob 2 */}
          <div className="blob blob-indigo h-[700px] w-[700px] opacity-35 absolute top-[20%] left-[25%] rounded-full bg-indigo-300 dark:bg-indigo-500 animate-blob animation-duration-7000 animation-delay-3000"></div>

          {/* Blob 3 */}
          <div className="blob blob-pink h-[700px] w-[700px] opacity-30 absolute bottom-[10%] right-[20%] rounded-full bg-pink-400 dark:bg-pink-500 animate-blob animation-duration-8000 animation-delay-5000"></div>

          {/* Animated Circles */}
          <div className="absolute top-[30%] left-[10%] h-[300px] w-[300px] rounded-full border-4 border-teal-400 dark:border-teal-500 animate-spin-slow"></div>
          <div className="absolute bottom-[20%] right-[5%] h-[250px] w-[250px] rounded-full border-4 border-indigo-400 dark:border-indigo-500 animate-spin-reverse"></div>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto stagger-animation">
        <div className="mb-6 overflow-hidden">
          <AnimatedText
            text={
              <span className="inline-block text-md bg-white/60 font-bold px-4 py-1.5 rounded-full text-primary border-2 border-primary">
                {heroSectionData?.OccupationLabel}
              </span>
            }
            animation="fade-in"
          />
        </div>

        <div className="mb-6 overflow-hidden">
          <AnimatedText
            text={
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {heroSectionData?.Title}
              </h1>
            }
            animation="slide-up"
            delay={200}
          />
        </div>

        <div className="mb-10 overflow-hidden">
          <AnimatedText
            text={
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {heroSectionData?.SubTitle}
              </p>
            }
            animation="fade-in"
            delay={400}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 overflow-hidden">
          <AnimatedText
            text={
              <AnimatedButton
                variant="gradient"
                gradientFrom="from-blue-600"
                gradientTo="to-purple-600"
                size="lg"
                className="px-8 py-6 text-base font-medium rounded-xl shadow-md"
                onClick={() =>
                  heroSectionData?.CTAs[0].Type === "Anchor"?
                  document
                    .getElementById(`${heroSectionData?.CTAs[0].url}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                    :redirect(`/${heroSectionData?.CTAs[0].url}`)
                }
              >
                {heroSectionData?.CTAs[0].Name}
              </AnimatedButton>
            }
            animation="scale-in"
            delay={600}
          />

          <AnimatedText
            text={
              <AnimatedButton
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-medium rounded-xl"
                onClick={() =>
                  heroSectionData?.CTAs[1].Type === "Anchor"?
                  document
                    .getElementById(`${heroSectionData?.CTAs[0].url}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                    :redirect(`/${heroSectionData?.CTAs[0].url}`)
                }
              >
                {heroSectionData?.CTAs[1].Name}
              </AnimatedButton>
            }
            animation="scale-in"
            delay={700}
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
