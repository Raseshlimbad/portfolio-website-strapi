"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Blogs } from "@/data/BlogsData";
import AnimatedText from "@/components/global/AnimatedText";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { renderPageBackgroundIcon } from "@/data/Icons";

interface BlogPageProps {
  params: Promise<{
    blog: string;
  }>;
}

const TableOfContents = ({ sections }: { sections: string[] }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden lg:block sticky top-24 w-64 h-fit p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={cn(
                "block text-sm py-1 px-2 rounded transition-colors",
                "hover:bg-gray-100 dark:hover:bg-gray-700",
                activeSection === section
                  ? "text-primary bg-gray-200 dark:bg-gray-700"
                  : "text-muted-foreground"
              )}
            >
              {section.replace(/-/g, " ")}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const BackgroundIcon = ({IconName, position, size }: {IconName: string, position: string; size: number }) => (
  <div className={`fixed ${position} transform translate-x-12 -translate-y-12 text-indigo-200 z-0 opacity-70 pointer-events-none`}>
    {renderPageBackgroundIcon(IconName, size, size)}
  </div>
);

const BlogPage = ({ params }: BlogPageProps) => {
  const resolvedParams = React.use(params);
  const blog = Blogs.find((b) => b.slug === resolvedParams.blog);
  const sections = ["introduction", "main-content", "conclusion"];

  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen mt-15 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative">
      {/* Background Icons */}
      <BackgroundIcon IconName="BlogTwoPagerIcon" position="top-2 left-270" size={800} />
      <BackgroundIcon IconName="BlogTwoPagerIcon" position="bottom-0 right-350" size={400} />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex gap-8">
          <TableOfContents sections={sections} />
          
          <div className="flex-1 max-w-6xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/blogs" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blogs
                </Link>
              </Button>
            </div>

            {/* Blog Header */}
            <header className="mb-8">
              <AnimatedText
                text={
                  <h1 className="text-4xl md:text-5xl font-bold text-primary">
                    {blog.title}
                  </h1>
                }
                animation="slide-up"
              />
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Blog Content with Sections */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section id="introduction">
                <h2>Introduction</h2>
                <AnimatedText
                  text={<div className="leading-relaxed">{blog.description}</div>}
                  animation="fade-in"
                  delay={200}
                />
              </section>

              <section id="main-content">
                <h2>Main Content</h2>
                <AnimatedText
                  text={<div className="leading-relaxed">{blog.description}</div>}
                  animation="fade-in"
                  delay={300}
                />
              </section>

              <section id="conclusion">
                <h2>Conclusion</h2>
                <AnimatedText
                  text={<div className="leading-relaxed">{blog.description}</div>}
                  animation="fade-in"
                  delay={400}
                />
              </section>
            </div>

            {/* Navigation Footer */}
            <footer className="mt-16 pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <Button variant="ghost" asChild>
                  <Link href="/blogs" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to All Posts
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPage;