import BlockRendererClient from "@/components/global/BlockRendererClient";
import ErrorDisplay from "@/components/global/ErrorDisplay";
import LinkRenderer from "@/components/global/LinkRenderer";
import BlogSectionLoadingSkeleton from "@/components/LoadingSkeletons/BlogSectionLoadingSkeleton";
import { Container } from "@/components/ui/container";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";
import { GET_BLOG_SECTION_DATA } from "@/graphql/homePage/BlogSection.query";
import { mapBlogSectionData } from "@/lib/helpers/mapDataHelper";
import { MappedBlogSectionData } from "@/types/HomePage/BlogsSectionTypes";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";

const BlogsSection = () => {
  const [BlogSectionData, setBlogSectionData] =
    useState<MappedBlogSectionData>();
  const {
    loading: sectionLoading,
    error: sectionError,
    data: sectionData,
  } = useQuery(GET_BLOG_SECTION_DATA);
  console.log("sectionData:", sectionData?.homePage?.Sections);
  useEffect(() => {
    if (sectionData?.homePage?.Sections) {
      const BlogSection = sectionData.homePage.Sections.find(
        (section: { __typename: string }) =>
          section.__typename === "ComponentSectionsMyBlogPostsSection"
      );

      if (BlogSection) {
        const mappedData = mapBlogSectionData(BlogSection);
        setBlogSectionData(mappedData);
      }
    }
  }, [sectionData]);

  console.log("projectSectionData:", BlogSectionData);

  if (sectionLoading) return <BlogSectionLoadingSkeleton />;
  if (sectionError) return <ErrorDisplay message={sectionError.message} />;
  return (
    <motion.section
      id="blogs"
      className="py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-indigo-600 mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* My Blog Posts */}
            {BlogSectionData?.sectionTitle}
          </motion.h2>
          <motion.span
            className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Sharing thoughts and insights about web development and technology */}
            {BlogSectionData?.sectionDescription && (
              <BlockRendererClient
                content={BlogSectionData?.sectionDescription}
              />
            )}
          </motion.span>
        </div>

        <BlogCard cardDisplayLimit={3} gridCols={3} />

        <div className="text-center mt-12">
        {BlogSectionData?.cta && (
            <LinkRenderer
              type={BlogSectionData.cta.type}
              url={BlogSectionData.cta.url || "#"}
              className="inline-block"
            >
              <InteractiveHoverButton>
                {BlogSectionData.cta.name}
              </InteractiveHoverButton>
            </LinkRenderer>
          )}
        </div>
      </Container>
    </motion.section>
  );
};

export default BlogsSection;
