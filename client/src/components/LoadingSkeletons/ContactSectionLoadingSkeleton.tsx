const ContactSectionLoadingSkeleton = () => {
  return (
    <div className="max-w-[1500px] mx-8 md:mx-20 2xl:mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section Skeleton */}
        <div className="flex flex-col space-y-6 md:border-r border-gray-200 md:pr-6">
          <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Middle Section Skeleton */}
        <div className="md:border-r border-gray-200 md:pr-6">
          <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse mb-6" />
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="relative">
                  <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse" />
                </div>
              </div>
            ))}
            <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse mt-4" />
          </div>
        </div>

        {/* Right Section Skeleton */}
        <div className="hidden lg:block">
          <div className="h-[400px] w-full bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ContactSectionLoadingSkeleton;
