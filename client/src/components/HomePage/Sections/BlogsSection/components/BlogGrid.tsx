import React from "react";
import BlogCard from "./BlogCard"; // Import the BlogCard component
import { motion } from "framer-motion";

interface BlogGridProps {
  blogs: Array<{
    id: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    image: string;
    slug: string;
  }>;
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {blogs.map((blog) => (
        <motion.div
          key={blog.id}
          className="transform transition-all duration-300 hover:-translate-y-1"
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <BlogCard
            title={blog.title}
            description={blog.description}
            date={blog.date}
            readTime={blog.readTime}
            image={blog.image}
            slug={blog.slug}
            className="border border-indigo-50 shadow-md hover:shadow-lg hover:shadow-indigo-100/40 bg-white"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogGrid;
