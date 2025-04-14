// import React from "react";
// import { cn } from "@/lib/utils"; // Utility for conditional classnames
// import { Calendar, Clock, ArrowRight } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";

// interface BlogCardProps {
//   title: string;
//   description: string;
//   date: string;
//   readTime: string;
//   image: string;
//   slug: string;
//   className?: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, readTime, image, slug, className }) => {
//   return (
//     <Card
//       className={cn(
//         "overflow-hidden border border-border/30 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20",
//         className
//       )}
//     >
//       <div className="flex flex-col h-full">
//         {/* Image Section */}
//         <div className="aspect-video w-full relative overflow-hidden">
//           <Image
//             src={image}
//             alt={title}
//             layout="responsive"
//             width={800}
//             height={450}
//             className="object-cover transition-transform duration-500 hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-70"></div>
//         </div>

//         {/* Header Section */}
//         <CardHeader className="pb-2">
//           <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
//             <div className="flex items-center">
//               <Calendar className="mr-1 h-3 w-3" />
//               <span>{date}</span>
//             </div>
//             <div className="flex items-center">
//               <Clock className="mr-1 h-3 w-3" />
//               <span>{readTime}</span>
//             </div>
//           </div>
//           <CardTitle className="text-xl md:text-2xl line-clamp-2">{title}</CardTitle>
//           <CardDescription className="line-clamp-2 md:line-clamp-3">{description}</CardDescription>
//         </CardHeader>

//         {/* Footer Section */}
//         <CardFooter className="pt-0">
//           <Button variant="ghost" className="p-0 hover:bg-transparent gap-2 hover:text-primary group" asChild>
//             <Link href={`/blogs/${slug}`}>
//               Read more
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </Button>
//         </CardFooter>
//       </div>
//     </Card>
//   );
// };

// export default BlogCard;

import ErrorDisplay from "@/components/global/ErrorDisplay";
import StrapiImageRenderer from "@/components/global/StrapiImageRenderer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GET_BLOGS } from "@/graphql/Blogs.query";
import { mapBlogData } from "@/lib/helpers/mapDataHelper";
import { MappedBlogData } from "@/types/BlogTypes";
import { LinkData } from "@/types/global/LinkTypes";
import { useQuery } from "@apollo/client";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface BlogCardProps {
  index?: number;
  cardDisplayLimit?: number;
  gridCols?: 1 | 2 | 3 | 4;
}

const BlogCard: React.FC<BlogCardProps> = ({
  index,
  cardDisplayLimit,
  gridCols = 3,
}) => {
  const {
    error: blogsError,
    data: blogsData,
  } = useQuery(GET_BLOGS);
  const [blogs, setBlogs] = useState<MappedBlogData>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // console.log("Blogs Data raw:", blogsData?.blogs?.map((blog: any) => blog));

  useEffect(() => {
    if (blogsData) {
      const mappedData = mapBlogData(blogsData);
      setBlogs(mappedData);
    }
  }, [blogsData]);

  if (
    cardDisplayLimit &&
    typeof index === "number" &&
    index >= cardDisplayLimit
  ) {
    return null;
  }

  // console.log("Blogs:", blogs);

  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[gridCols];

  if (blogsError) return <ErrorDisplay message={blogsError.message} />;

  return (
    <div className={`grid ${gridColsClass} gap-6 w-full`}>
      {blogs?.blogs &&
        blogs.blogs.map((blog) => (
          <Card
            key={blog.title}
            className="overflow-hidden border border-border/30 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
          >
            <div className="flex flex-col h-full">
              <div className="aspect-video w-full relative overflow-hidden">
                <StrapiImageRenderer
                  imageUrl={blog?.BlogImage?.Image?.url}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  width={500}
                  // height={450}
                  altText={blog?.BlogImage?.altText}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-70"></div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{`${Math.ceil(
                      blog.content.length / 200
                    )} min read`}</span>
                  </div>
                </div>
                <CardTitle className="text-xl md:text-2xl line-clamp-2">
                  {blog.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 md:line-clamp-3">
                  {blog.summary}
                </CardDescription>
              </CardHeader>

              <CardFooter className="pt-0">
              {blog?.Links?.map((link: LinkData) => (
                <Button
                  variant="ghost"
                  className="p-0 hover:bg-transparent gap-2 hover:text-primary group"
                  asChild
                  key={link.Name}
                >
                  
                    <Link
                      href={`/blogs/${blog.slug}`}
                      
                    >
                      {link.Name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                  ))}
                {/* <Button variant="ghost" className="p-0 hover:bg-transparent gap-2 hover:text-primary group" asChild>
                  <Link href={`/blogs/${blog.title.toLowerCase().replace(/ /g, '-')}`}>
                  Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button> */}
              </CardFooter>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default BlogCard;
