import { motion } from "framer-motion";

const TimelineLoadingSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Animated Central Timeline Line */}
      <motion.div
        className="block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-300 dark:bg-gray-600 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>

      {/* Timeline events */}
      <div className="relative">
        {/* Placeholder for timeline nodes */}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="mb-8 md:mb-24 relative animate-pulse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Mobile View */}
            <div className="md:hidden">
              <motion.div
                className={`p-6 rounded-lg shadow-md bg-gray-200 dark:bg-gray-700`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {/* Skeleton Circle */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  {/* Skeleton Year */}
                  <div className="h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
                </div>
                <div className="h-6 w-64 bg-gray-300 dark:bg-gray-600 rounded-md mb-2"></div>
                {/* Skeleton Description */}
                <div className="h-4 w-48 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
              </motion.div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`absolute top-1/2 ${
                    index % 2 === 0
                      ? "left-0 transform -translate-y-1/2 -translate-x-full"
                      : "right-0 transform -translate-y-1/2 translate-x-full px-4"
                  } text-center mr-4`}
                >
                  {/* Skeleton Year */}
                  <div className="h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded-md mx-10"></div>
                </div>

                {/* Timeline Node (Circle with Icon) */}
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600`}
                ></div>
              </motion.div>

              {/* Content Card */}
              <div
                className={`mt-8 md:mt-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto md:pl-0"
                }`}
              >
                <motion.div
                  className={`p-6 rounded-lg shadow-md bg-gray-200 dark:bg-gray-700`}
                >
                  {/* Skeleton Title */}
                  <div className="h-6 w-48 bg-gray-300 dark:bg-gray-600 rounded-md mb-2"></div>
                  {/* Skeleton Description */}
                  <div className="h-4 w-64 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineLoadingSkeleton;
