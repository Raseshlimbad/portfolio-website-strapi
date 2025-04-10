import React from "react";
import { ArrowDown } from "lucide-react";

const HeroLoadingSkeleton = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Skeleton Background */}
      <div className="absolute inset-0 -z-10 bg-gray-200 animate-pulse" />

      {/* Skeleton Content */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-6 overflow-hidden">
          <div className="h-6 w-36 bg-gray-300 rounded-full mx-auto animate-pulse" />
        </div>

        <div className="mb-6 overflow-hidden">
          <div className="h-12 w-64 bg-gray-300 rounded-lg mx-auto animate-pulse" />
        </div>

        <div className="mb-10 overflow-hidden">
          <div className="h-8 w-80 bg-gray-300 rounded-lg mx-auto animate-pulse" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 overflow-hidden">
          <div className="h-12 w-48 bg-gray-400 rounded-xl mx-auto animate-pulse" />
          <div className="h-12 w-48 bg-transparent border-2 border-gray-300 rounded-xl mx-auto animate-pulse" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} className="text-gray-300 animate-pulse" />
        </a>
      </div>
    </section>
  );
};

export default HeroLoadingSkeleton;
