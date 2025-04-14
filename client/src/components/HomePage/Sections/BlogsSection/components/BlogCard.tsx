import React from "react";
import { cn } from "@/lib/utils"; // Utility for conditional classnames
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, readTime, image, slug, className }) => {
  return (
    <Card
      className={cn(
        "overflow-hidden border border-border/30 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20",
        className
      )}
    >
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="aspect-video w-full relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={800}
            height={450}
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-70"></div>
        </div>

        {/* Header Section */}
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <CardTitle className="text-xl md:text-2xl line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-2 md:line-clamp-3">{description}</CardDescription>
        </CardHeader>

        {/* Footer Section */}
        <CardFooter className="pt-0">
          <Button variant="ghost" className="p-0 hover:bg-transparent gap-2 hover:text-primary group" asChild>
            <Link href={`/blogs/${slug}`}>
              Read more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default BlogCard;
