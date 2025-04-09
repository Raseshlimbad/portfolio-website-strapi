"use client";

import React, { useState, useMemo } from "react";
import { renderPageBackgroundIcon } from "@/data/Icons";
import BlogDetailsCard from "@/components/global/BlogDetailsCard";
import { Blogs } from "@/data/BlogsData";
import AnimatedText from "@/components/global/AnimatedText";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const BackgroundIcon = ({IconName, position, size }: {IconName: string, position: string; size: number }) => (
  <div className={`fixed ${position} transform translate-x-12 -translate-y-12 text-indigo-100 z-0 opacity-70 pointer-events-none`}>
    {renderPageBackgroundIcon(IconName, size, size)}
  </div>
);

const BlogPage = () => {
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAndSortedBlogs = useMemo(() => {
    let result = [...Blogs];
    
    // Filter blogs based on search query
    if (searchQuery) {
      result = result.filter(blog => 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort blogs based on date
    result.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "latest" ? 
        dateB.getTime() - dateA.getTime() : 
        dateA.getTime() - dateB.getTime();
    });

    return result;
  }, [Blogs, sortOrder, searchQuery]);

  return (
    <div className="min-h-screen mt-15 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <BackgroundIcon IconName="BlogTwoPagerIcon" position="top-2 left-270" size={800} />
      <BackgroundIcon IconName="BlogTwoPagerIcon" position="bottom-0 right-350" size={400} />

      <main className="container mx-auto py-12 px-4 md:px-8 z-20 bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col md:flex-row gap-4 mb-8 z-20">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white dark:bg-gray-800"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          
          <div className="z-20">
            <Select
              value={sortOrder}
              onValueChange={(value: "latest" | "oldest") => setSortOrder(value)}
            >
              <SelectTrigger className="w-[180px] bg-white dark:bg-gray-800">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800">
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex flex-col gap-8">
          {filteredAndSortedBlogs.length > 0 ? (
            filteredAndSortedBlogs.map((blog, index) => (
              <AnimatedText
                key={blog.slug}
                text={
                  <BlogDetailsCard
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                    readTime={blog.readTime}
                    image={blog.image}
                    slug={blog.slug}
                    className="bg-white dark:bg-gray-800"
                  />
                }
                animation="fade-in"
                delay={index * 200}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 p-4 rounded-lg">
              No blogs found matching your search.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;