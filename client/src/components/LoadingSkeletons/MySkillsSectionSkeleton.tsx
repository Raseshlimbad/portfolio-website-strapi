
const MySkillsSectionSkeleton = () => {
  return (
    <div className="container mx-auto max-w-5xl mt-24 pt-30">
      {/* Title Skeleton */}
      <div className="flex justify-center mb-8">
        <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
      </div>

      {/* Skills Display Skeleton */}
      <div className="w-full">
        {/* Tabs Skeleton */}
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="px-4 py-2 my-1 bg-gray-200 dark:bg-gray-700 rounded-lg w-24 h-10 animate-pulse"
            />
          ))}
        </div>

        {/* Content Skeleton */}
        <div className="flex flex-col items-center text-center p-6 border-t border-gray-200 dark:border-gray-700">
          {/* Description Skeleton */}
          <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-8 animate-pulse" />

          {/* Skills Icons Grid Skeleton */}
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkillsSectionSkeleton;