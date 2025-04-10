import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps) => {
  return (
    <div className={cn("w-full h-screen flex items-center justify-center", className)}>
      <div className="flex flex-col items-center gap-4">
        {/* Main circle */}
        {/* <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" /> */}
        
        {/* Loading text with skeleton effect */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-4 w-24 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded animate-pulse" />
          <div className="h-3 w-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Loading;