import { cn } from "@/lib/utils";

interface StrapiImageSkeletonProps {
  width?: number;
  height?: number;
  className?: string;
  isSvg?: boolean;
}

const StrapiImageSkeleton = ({
  width = 500,
  height = 300,
  className = '',
  isSvg = false,
}: StrapiImageSkeletonProps) => {
  return (
    <div
      className={cn(
        'bg-gray-200 dark:bg-gray-700 animate-pulse rounded',
        isSvg ? 'inline-block' : '',
        className
      )}
      style={{
        width: width,
        height: height,
      }}
      aria-label="Loading image..."
    />
  );
};

export default StrapiImageSkeleton;