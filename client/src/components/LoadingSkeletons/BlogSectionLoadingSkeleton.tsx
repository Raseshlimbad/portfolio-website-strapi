import React from "react";
import { Container } from "@/components/ui/container";
import BlogCardLoadingSkeleton from "./BlogCardLoadingSkeleton";

const BlogSectionLoadingSkeleton = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <Container>
        {/* Title and Description Skeletons */}
        <div className="text-center mb-16">
          <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 max-w-2xl bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Blog Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <BlogCardLoadingSkeleton />
          <BlogCardLoadingSkeleton />
          <BlogCardLoadingSkeleton />
        </div>

        {/* View All Button Skeleton */}
        <div className="text-center mt-12">
          <div className="h-10 w-36 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto animate-pulse" />
        </div>
      </Container>
    </section>
  );
};

export default BlogSectionLoadingSkeleton;