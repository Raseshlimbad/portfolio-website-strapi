const HeaderLoadingSkeleton = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 py-5 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo Skeleton */}
        <div className="h-8 w-36 bg-gray-300 animate-pulse rounded-md" />

        {/* Desktop Navigation Skeleton */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded-md"></div>
        </nav>

        {/* Mobile Menu Button Skeleton */}
        <button className="md:hidden text-indigo-600">
          <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full" />
        </button>
      </div>
    </header>
  );
};

export default HeaderLoadingSkeleton;
