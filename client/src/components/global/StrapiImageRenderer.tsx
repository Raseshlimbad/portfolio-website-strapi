// import Image from 'next/image';
// import { strapiImageUrl } from '@/lib/helpers/mapDataHelper';
// import { cn } from '@/lib/utils';

// interface StrapiImageProps {
//   imageUrl: string;
//   altText?: string;
//   width?: number;
//   height?: number;
//   className?: string;
//   priority?: boolean;
//   svgColor?: string;
//   isSvg?: boolean;
// }

// const StrapiImageRenderer = ({
//   imageUrl,
//   altText = '',
//   width = 500,
//   height = 300,
//   className = '',
//   priority = false,
// //   svgColor,
//   isSvg = false,
// }: StrapiImageProps) => {
//   const fullImageUrl = strapiImageUrl(imageUrl);

//   if (!fullImageUrl) {
//     return null;
//   }

//   if (isSvg) {
//     return (
//       <div 
//         className={cn("inline-block", className)}
//         style={{ width, height }}
//       >
//         <Image
//           src={fullImageUrl}
//           alt={altText}
//           width={width}
//           height={height}
//           className={className}
//         />
//       </div>
//     );
//   }

//   return (
//     <Image
//       src={fullImageUrl}
//       alt={altText}
//       width={width}
//       height={height}
//       className={className}
//       priority={priority}
//     />
//   );
// };

// export default StrapiImageRenderer;


'use client';

import Image from 'next/image';
import { strapiImageUrl } from '@/lib/helpers/mapDataHelper';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import StrapiImageSkeleton from "../LoadingSkeletons/StrapiImageSkeleton";

interface StrapiImageProps {
  imageUrl: string;
  altText?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  svgColor?: string;     // <-- Allow setting fill color
  isSvg?: boolean;
}

const StrapiImageRenderer = ({
  imageUrl,
  altText = '',
  width = 500,
  height = 300,
  className = '',
  priority = false,
  svgColor,
  isSvg = false,
}: StrapiImageProps) => {
  const fullImageUrl = strapiImageUrl(imageUrl);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (isSvg && fullImageUrl) {
      fetch(fullImageUrl)
        .then((res) => res.text())
        .then((text) => {
          let updatedSvg = text;
          updatedSvg = updatedSvg.replace(/<svg[^>]*>/, (match) => {
            return match
              .replace(/\s(width|height)=".*?"/g, '')
              .replace(/^<svg/, `<svg width="${width}" height="${height}"`);
          });
          if (svgColor) {
            updatedSvg = updatedSvg.replace(/fill=".*?"/g, `fill="${svgColor}"`);
          }
          setSvgContent(updatedSvg);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Failed to load SVG:', err);
          setImageError(true);
          setIsLoading(false);
        });
    } else {
      // For regular images, we'll let Next.js Image component handle loading
      setIsLoading(false);
    }
  }, [fullImageUrl, svgColor, width, height, isSvg]);

  if (!fullImageUrl || imageError) {
    return null;
  }

  if (isLoading) {
    return (
      <StrapiImageSkeleton
        width={width}
        height={height}
        className={className}
        isSvg={isSvg}
      />
    );
  }

  if (isSvg && svgContent) {
    return (
      <div
        className={cn('inline-block', className)}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        aria-label={altText}
      />
    );
  }

  // Regular image with proper error handling
  return (
    <div className={cn('relative', className)} style={{ width, height }}>
      <Image
        src={fullImageUrl}
        alt={altText}
        fill
        className="object-cover rounded-lg"
        priority={priority}
        onError={() => setImageError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default StrapiImageRenderer;
