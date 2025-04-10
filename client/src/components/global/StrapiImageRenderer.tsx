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

  // useEffect(() => {
  //   if (isSvg && fullImageUrl) {
  //     fetch(fullImageUrl)
  //       .then((res) => res.text())
  //       .then((text) => {
  //         if (svgColor) {
  //           // Replace all fill colors with the provided color
  //           const coloredSvg = text.replace(/fill=".*?"/g, `fill="${svgColor}"`);
  //           setSvgContent(coloredSvg);
  //         } else {
  //           setSvgContent(text);
  //         }
  //       })
  //       .catch((err) => {
  //         console.error('Failed to load SVG:', err);
  //       });
  //   }
  // }, [fullImageUrl, svgColor, isSvg]);

  useEffect(() => {
    if (isSvg && fullImageUrl) {
      fetch(fullImageUrl)
        .then((res) => res.text())
        .then((text) => {
          let updatedSvg = text;
  
          // Remove any existing width/height attributes on the <svg> tag
          updatedSvg = updatedSvg.replace(/<svg[^>]*>/, (match) => {
            return match
              .replace(/\s(width|height)=".*?"/g, '') // Remove width and height if present
              .replace(
                /^<svg/,
                `<svg width="${width}" height="${height}"`
              ); // Add width and height
          });
  
          // Optional: Replace all fill colors
          if (svgColor) {
            updatedSvg = updatedSvg.replace(/fill=".*?"/g, `fill="${svgColor}"`);
          }
  
          setSvgContent(updatedSvg);
        })
        .catch((err) => {
          console.error('Failed to load SVG:', err);
        });
    }
  }, [fullImageUrl, svgColor, width, height, isSvg]);
  

  if (!fullImageUrl) {
    return null;
  }

  // Inline SVG
  if (isSvg && svgContent) {
    return (
      <div
        className={cn('inline-block', className)}
        // style={{ width, height }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        aria-label={altText}
      />
    );
  }

  // Regular image
  return (
    <Image
      src={fullImageUrl}
      alt={altText}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};

export default StrapiImageRenderer;
