import React from "react";
import Link from "next/link";
import { featuredBlogs } from "@/data/BlogsData";
import { Container } from "@/components/ui/container";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";
import BlogGrid from "./components/BlogGrid";
import { motion } from "framer-motion";

const BlogsSection = () => {
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
            My Blog Posts
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Sharing thoughts and insights about web development and technology
          </motion.p>
        </div>

        {/* Blog Grid Component */}
        <BlogGrid blogs={featuredBlogs} />

        {/* View All Posts Button*/}
        <div className="text-center">
          <Link href="/blogs">
            <InteractiveHoverButton>View All Posts</InteractiveHoverButton>
          </Link>
        </div>
      </Container>
    </motion.section>
  );
};

export default BlogsSection;
