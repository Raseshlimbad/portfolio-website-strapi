
const ProjectsSectionLoadingSkeleton = () => {
  return (
    <section className="pt-20 pb-32 px-4 relative bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        {/* Title and Description Skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-24 w-full max-w-2xl bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* CTA Button Skeleton */}
        <div className="text-center mt-12">
          <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionLoadingSkeleton;