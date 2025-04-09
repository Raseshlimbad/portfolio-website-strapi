import React from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface BlogDetailsCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  className?: string;
}

const BlogDetailsCard: React.FC<BlogDetailsCardProps> = ({ 
  title, 
  description, 
  date, 
  readTime, 
  image, 
  slug, 
  className 
}) => {
  return (
    <Card
      className={cn(
        "overflow-hidden border border-border/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        {/* Image Section - Takes 1/3 of the space on md screens */}
        <div className="relative h-48 md:h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent opacity-70"></div>
        </div>

        {/* Content Section - Takes 2/3 of the space on md screens */}
        <div className="md:col-span-2 flex flex-col h-full p-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>

          <CardTitle className="text-2xl md:text-3xl mb-4">{title}</CardTitle>
          <CardDescription className="flex-grow mb-4 line-clamp-3">
            {description}
          </CardDescription>

          <div className="mt-auto">
            <Button variant="ghost" className="p-0 hover:bg-transparent gap-2 hover:text-indigo-600 group" asChild>
              <Link href={`/blogs/${slug}`}>
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogDetailsCard;