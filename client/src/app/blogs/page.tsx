"use client";

import AnimatedText from "@/components/global/AnimatedText";
import { extractTextFromBlocks } from "@/components/global/BlockRendererClient";
import BlogDetailsCard from "@/components/global/BlogDetailsCard";
import ErrorDisplay from "@/components/global/ErrorDisplay";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { renderPageBackgroundIcon } from "@/data/Icons";
import { GET_BLOGS } from "@/graphql/Blogs.query";
import { mapBlogData } from "@/lib/helpers/mapDataHelper";
import { MappedBlogData } from "@/types/BlogTypes";
import { useQuery } from "@apollo/client";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const BackgroundIcon = ({
  IconName,
  position,
  size,
}: {
  IconName: string;
  position: string;
  size: number;
}) => (
  <div
    className={`fixed ${position} transform translate-x-12 -translate-y-12 text-indigo-100 z-0 opacity-70 pointer-events-none`}
  >
    {renderPageBackgroundIcon(IconName, size, size)}
  </div>
);

const BlogPage = () => {
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
  const [searchQuery, setSearchQuery] = useState("");
  
  const {
    loading: blogsLoading,
    error: blogsError,
    data: blogsData,
  } = useQuery(GET_BLOGS);
  const [blogs, setBlogs] = useState<MappedBlogData>();

  useEffect(() => {
    if (blogsData) {
      const mappedData = mapBlogData(blogsData);
      setBlogs(mappedData);
    }
  }, [blogsData]);

  console.log("Blogs:", blogs);

  const filteredAndSortedBlogs = useMemo(() => {
    let result = [...blogs?.blogs ?? []];

    // Filter blogs based on search query
    if (searchQuery) {
      result = result.filter((blog) => {
        const contentText = blog.content
          ? extractTextFromBlocks(blog.content).toLowerCase()
          : "";
        
        return (
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contentText.includes(searchQuery.toLowerCase())
        );
      });
    }

    // Sort blogs based on publishedAt date
    result.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return sortOrder === "latest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

    return result;
  }, [blogs, sortOrder, searchQuery]);

  if (blogsLoading) return <p>Loading...</p>;
  if (blogsError) return <ErrorDisplay message={blogsError.message} />;

  return (
    <div className="min-h-screen mt-15 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <BackgroundIcon
        IconName="BlogTwoPagerIcon"
        position="top-2 left-270"
        size={800}
      />
      <BackgroundIcon
        IconName="BlogTwoPagerIcon"
        position="bottom-0 right-350"
        size={400}
      />

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
                <SelectValue placeholder="Sort by date" />
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
                    cardDisplayLimit={200}
                    index={index}
                    slug={blog.slug}
                    blog={blog}
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











// "use client";

// import React, { useState, useMemo } from "react";
// import { renderPageBackgroundIcon } from "@/data/Icons";
// import BlogDetailsCard from "@/components/global/BlogDetailsCard";
// import { Blogs } from "@/data/BlogsData";
// import AnimatedText from "@/components/global/AnimatedText";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";

// const BackgroundIcon = ({
//   IconName,
//   position,
//   size,
// }: {
//   IconName: string;
//   position: string;
//   size: number;
// }) => (
//   <div
//     className={`fixed ${position} transform translate-x-12 -translate-y-12 text-indigo-100 z-0 opacity-70 pointer-events-none`}
//   >
//     {renderPageBackgroundIcon(IconName, size, size)}
//   </div>
// );

// const BlogPage = () => {
//   const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredAndSortedBlogs = useMemo(() => {
//     let result = [...Blogs];

//     // Filter blogs based on search query
//     if (searchQuery) {
//       result = result.filter(
//         (blog) =>
//           blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           blog.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Sort blogs based on date
//     result.sort((a, b) => {
//       const dateA = new Date(a.date);
//       const dateB = new Date(b.date);
//       return sortOrder === "latest"
//         ? dateB.getTime() - dateA.getTime()
//         : dateA.getTime() - dateB.getTime();
//     });

//     return result;
//   }, [Blogs, sortOrder, searchQuery]);

//   return (
//     <div className="min-h-screen mt-15 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
//       <BackgroundIcon
//         IconName="BlogTwoPagerIcon"
//         position="top-2 left-270"
//         size={800}
//       />
//       <BackgroundIcon
//         IconName="BlogTwoPagerIcon"
//         position="bottom-0 right-350"
//         size={400}
//       />

//       <main className="container mx-auto py-12 px-4 md:px-8 z-20 bg-gray-50 dark:bg-gray-900">
//         <div className="flex flex-col md:flex-row gap-4 mb-8 z-20">
//           <div className="relative flex-1">
//             <Input
//               type="text"
//               placeholder="Search blogs..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10 bg-white dark:bg-gray-800"
//             />
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
//           </div>

//           <div className="z-20">
//             <Select
//               value={sortOrder}
//               onValueChange={(value: "latest" | "oldest") =>
//                 setSortOrder(value)
//               }
//             >
//               <SelectTrigger className="w-[180px] bg-white dark:bg-gray-800">
//                 <SelectValue placeholder="Sort by" />
//               </SelectTrigger>
//               <SelectContent className="bg-white dark:bg-gray-800">
//                 <SelectItem value="latest">Latest First</SelectItem>
//                 <SelectItem value="oldest">Oldest First</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         <div className="flex flex-col gap-8">
//           {filteredAndSortedBlogs.length > 0 ? (
//             filteredAndSortedBlogs.map((blog, index) => (
//               <AnimatedText
//                 key={blog.slug}
//                 text={
//                   <BlogDetailsCard
//                     cardDisplayLimit={200}
//                     slug={blog.slug}
//                     // className="bg-white dark:bg-gray-800"
//                   />
//                 }
//                 animation="fade-in"
//                 delay={index * 200}
//               />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 p-4 rounded-lg">
//               No blogs found matching your search.
//             </p>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BlogPage;
