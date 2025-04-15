// import React from "react";
// import { cn } from "@/lib/utils";
// import { Calendar, Clock, ArrowRight } from "lucide-react";
// import { Card, CardTitle, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";

// interface BlogDetailsCardProps {
//   title: string;
//   description: string;
//   date: string;
//   readTime: string;
//   image: string;
//   slug: string;
//   className?: string;
// }

// const BlogDetailsCard: React.FC<BlogDetailsCardProps> = ({
//   title,
//   description,
//   date,
//   readTime,
//   image,
//   slug,
//   className
// }) => {
//   return (
//     <Card
//       className={cn(
//         "overflow-hidden border border-border/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20",
//         className
//       )}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-3 h-full">
//         {/* Image Section - Takes 1/3 of the space on md screens */}
//         <div className="relative h-48 md:h-full">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover transition-transform duration-500 hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent opacity-70"></div>
//         </div>

//         {/* Content Section - Takes 2/3 of the space on md screens */}
//         <div className="md:col-span-2 flex flex-col h-full p-6">
//           <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
//             <div className="flex items-center">
//               <Calendar className="mr-1 h-3 w-3" />
//               <span>{date}</span>
//             </div>
//             <div className="flex items-center">
//               <Clock className="mr-1 h-3 w-3" />
//               <span>{readTime}</span>
//             </div>
//           </div>

//           <CardTitle className="text-2xl md:text-3xl mb-4">{title}</CardTitle>
//           <CardDescription className="flex-grow mb-4 line-clamp-3">
//             {description}
//           </CardDescription>

//           <div className="mt-auto">
//             <Button variant="ghost" className="p-0 hover:bg-transparent gap-2 hover:text-indigo-600 group" asChild>
//               <Link href={`/blogs/${slug}`}>
//                 Read more
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default BlogDetailsCard;


 

import BlockRendererClient, {
  extractTextFromBlocks,
} from "@/components/global/BlockRendererClient";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { formatBlogDate } from "@/lib/helpers/mapDataHelper";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";
import StrapiImageRenderer from "./StrapiImageRenderer";

interface BlogDetailsCardProps {
  index?: number;
  cardDisplayLimit?: number;
  gridCols?: 1 | 2 | 3 | 4;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blog: any; // Replace with your blog type
}

const BlogDetailsCard: React.FC<BlogDetailsCardProps> = ({
  index,
  cardDisplayLimit,
  blog,
}) => {
  if (
    cardDisplayLimit &&
    typeof index === "number" &&
    index >= cardDisplayLimit
  ) {
    return null;
  }

  const plainText = extractTextFromBlocks(blog.content);
  const { text: readingTimeText } = readingTime(plainText);

  return (
    <div className="space-y-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card
        className={cn(
          "overflow-hidden border border-border/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          {/* Image Section */}
          <div className="relative h-48 sm:h-64 lg:h-full">
            <StrapiImageRenderer
              imageUrl={blog.BlogImage?.Image.url}
              className="object-cover transition-transform duration-500 hover:scale-105 w-full h-full"
              altText={blog?.BlogImage?.altText}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent opacity-70"></div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 flex flex-col p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                <span>{formatBlogDate(blog.publishedAt).displayDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                <span>{readingTimeText}</span>
              </div>
            </div>

            <CardTitle className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4">
              {blog?.title}
            </CardTitle>
            <CardDescription className="flex-grow mb-4 line-clamp-2 sm:line-clamp-3">
              {blog.content && (
                <BlockRendererClient content={blog.content} />
              )}
            </CardDescription>

            <div className="mt-4 flex flex-wrap gap-4">
              <Button
                variant="ghost"
                className="p-0 hover:bg-transparent hover:text-indigo-600 group flex items-center gap-2"
                asChild
              >
                <Link href={`/blogs/${blog.slug}`}>
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogDetailsCard;
