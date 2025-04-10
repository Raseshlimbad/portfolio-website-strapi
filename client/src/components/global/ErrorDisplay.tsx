import { motion } from "framer-motion";
import React from "react";

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <motion.div
      className="container mx-auto max-w-2xl py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 text-center">
        <motion.div
          className="text-red-600 dark:text-red-400 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </motion.div>
        <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-2">
          Error Occurred
        </h3>
        <p className="text-red-600 dark:text-red-400">{message}</p>
      </div>
    </motion.div>
  );
};

export default ErrorDisplay;