// 'use client'

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { experiences } from "@/data/AboutMeData";
// import { renderTimelineIcon } from "@/data/Icons";

// interface Experience {
//   year: string;
//   title: string;
//   description: string;
//   icon: string;
// }

// const TimelineSection = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(3);
//   const timelineRefsDesktop = useRef<(HTMLDivElement | null)[]>([]);
//   const timelineRefsMobile = useRef<(HTMLDivElement | null)[]>([]);

//   const debounce = <T extends (...args: unknown[]) => void>(
//     func: T,
//     wait: number
//   ) => {
//     let timeout: ReturnType<typeof setTimeout> | undefined;
//     return (...args: Parameters<T>) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func(...args), wait);
//     };
//   };

//   useEffect(() => {
//     const options: IntersectionObserverInit = {
//       root: null,
//       rootMargin: "-50% 0px -50% 0px",
//       threshold: 0,
//     };

//     const callback: IntersectionObserverCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = parseInt(
//             (entry.target as HTMLDivElement).dataset.index!,
//             10
//           );
//           setActiveIndex(index);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(callback, options);

//     timelineRefsDesktop.current.forEach((ref, index) => {
//       if (ref) {
//         (ref as HTMLDivElement).dataset.index = index.toString();
//         observer.observe(ref);
//       }
//     });

//     return () => {
//       timelineRefsDesktop.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = debounce(() => {
//       if (window.innerWidth >= 768) return;

//       const viewportHeight = window.innerHeight;
//       const viewportMiddle = viewportHeight / 2;

//       let closestIndex = 0;
//       let closestDistance = Infinity;

//       timelineRefsMobile.current.forEach((ref, index) => {
//         if (!ref) return;

//         const rect = ref.getBoundingClientRect();
//         const cardMiddle = rect.top + rect.height / 2;
//         const distance = Math.abs(cardMiddle - viewportMiddle);

//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestIndex = index;
//         }
//       });

//       setActiveIndex(closestIndex);
//     }, 100);

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto relative">
//       {/* Animated Central Timeline Line */}
//       <motion.div
//         className="block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-indigo-400 dark:bg-indigo-600"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       ></motion.div>

//       {/* Timeline events */}
//       <div className="relative">
//         {experiences.map((exp: Experience, index: number) => (
//           <motion.div
//             key={exp.year}
//             className="mb-8 md:mb-24 relative"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             {/* Mobile View */}
//             <div className="md:hidden">
//               <motion.div
//                 ref={(el) => (timelineRefsMobile.current[index] = el)}
//                 className={`p-6 rounded-lg shadow-md transition-all duration-300 ${
//                   activeIndex === index
//                     ? "bg-white dark:bg-gray-800 ring-2 ring-indigo-300 dark:ring-indigo-800"
//                     : "bg-gray-50 dark:bg-gray-900"
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="flex items-center space-x-3 mb-3">
//                   <div
//                     className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
//                       activeIndex === index
//                         ? "bg-indigo-600 text-white"
//                         : "bg-indigo-400 text-white"
//                     }`}
//                   >
//                     {renderTimelineIcon(exp.icon)}
//                   </div>
//                   <h3
//                     className={`text-xl font-bold ${
//                       activeIndex === index
//                         ? "text-indigo-600 dark:text-indigo-400"
//                         : "text-gray-700 dark:text-gray-300"
//                     }`}
//                   >
//                     {exp.year}
//                   </h3>
//                 </div>
//                 <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
//                   {exp.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">
//                   {exp.description}
//                 </p>
//               </motion.div>
//             </div>

//             {/* Desktop View */}
//             <div className="hidden md:block">
//               <motion.div
//                 ref={(el) => (timelineRefsDesktop.current[index] = el)}
//                 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 cursor-pointer"
//                 onClick={() => setActiveIndex(index)}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <div
//                   className={`absolute top-1/2 ${
//                     index % 2 === 0
//                       ? "left-0 transform -translate-y-1/2 -translate-x-full"
//                       : "right-0 transform -translate-y-1/2 translate-x-full"
//                   } text-center mr-4`}
//                 >
//                   <h3
//                     className={`text-xl font-bold mx-10 ${
//                       activeIndex === index
//                         ? "text-indigo-600 dark:text-indigo-400"
//                         : "text-gray-700 dark:text-gray-300"
//                     }`}
//                   >
//                     {exp.year}
//                   </h3>
//                 </div>

//                 {/* Timeline Node (Circle with Icon) */}
//                 <div
//                   className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 ${
//                     activeIndex === index
//                       ? "bg-indigo-600 text-white ring-4 ring-indigo-200 dark:ring-indigo-900"
//                       : "bg-indigo-400 text-white"
//                   }`}
//                 >
//                   {renderTimelineIcon(exp.icon)}
//                 </div>
//               </motion.div>

//               {/* Content card */}
//               <div
//                 className={`mt-8 md:mt-0 md:w-5/12 ${
//                   index % 2 === 0 ? "md:ml-auto" : "md:mr-auto md:pl-0"
//                 }`}
//               >
//                 <motion.div
//                   className={`p-6 rounded-lg shadow-md transition-all duration-300 ${
//                     activeIndex === index
//                       ? "bg-white dark:bg-gray-800 ring-2 ring-indigo-300 dark:ring-indigo-800"
//                       : "bg-gray-50 dark:bg-gray-900"
//                   }`}
//                   whileHover={{ y: -5 }}
//                 >
//                   <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
//                     {exp.title}
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     {exp.description}
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TimelineSection;







'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/AboutMeData";
import { renderTimelineIcon } from "@/data/Icons";

interface Experience {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(3);
  const timelineRefsDesktop = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRefsMobile = useRef<(HTMLDivElement | null)[]>([]);

  const debounce = <T extends (...args: unknown[]) => void>(
    func: T,
    wait: number
  ) => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            (entry.target as HTMLDivElement).dataset.index!,
            10
          );
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    timelineRefsDesktop.current.forEach((ref, index) => {
      if (ref) {
        (ref as HTMLDivElement).dataset.index = index.toString();
        observer.observe(ref);
      }
    });

    return () => {
      timelineRefsDesktop.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.innerWidth >= 768) return;

      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      timelineRefsMobile.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const cardMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(cardMiddle - viewportMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Animated Central Timeline Line */}
      <motion.div
        className="block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-indigo-400 dark:bg-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>

      {/* Timeline events */}
      <div className="relative">
        {experiences.map((exp: Experience, index: number) => (
          <motion.div
            key={exp.year}
            className="mb-8 md:mb-24 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Mobile View */}
            <div className="md:hidden">
              <motion.div
                ref={(el) => (timelineRefsMobile.current[index] = el)}
                className={`p-6 rounded-lg shadow-md transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white dark:bg-gray-800 ring-2 ring-indigo-300 dark:ring-indigo-800"
                    : "bg-gray-50 dark:bg-gray-900"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-indigo-600 text-white"
                        : "bg-indigo-400 text-white"
                    }`}
                  >
                    {renderTimelineIcon(exp.icon)}
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      activeIndex === index
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {exp.year}
                  </h3>
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {exp.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </motion.div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <motion.div
                ref={(el) => (timelineRefsDesktop.current[index] = el)}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 cursor-pointer"
                onClick={() => setActiveIndex(index)}
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
                  <h3
                    className={`text-xl font-bold mx-10 ${
                      activeIndex === index
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {exp.year}
                  </h3>
                </div>

                {/* Timeline Node (Circle with Icon) */}
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-indigo-600 text-white ring-20 ring-indigo-200 dark:ring-indigo-900"
                      : "bg-indigo-400 text-white"
                  }`}
                >
                  {renderTimelineIcon(exp.icon)}
                </div>
              </motion.div>

              {/* Content card */}
              <div
                className={`mt-8 md:mt-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto md:pl-0"
                }`}
              >
                <motion.div
                  className={`p-6 rounded-lg shadow-md transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-white dark:bg-gray-800 ring-2 ring-indigo-300 dark:ring-indigo-800"
                      : "bg-gray-50 dark:bg-gray-900"
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
