// import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
// import { ReactNode } from 'react';

// interface BlockRendererClientProps {
//   content: BlocksContent;
//   className?: string;
// }

// interface BlockProps {
//   children: ReactNode;
// }

// interface HeadingProps extends BlockProps {
//   level: 1 | 2 | 3 | 4 | 5 | 6;
// }

// const BlockRendererClient = ({ content, className = "" }: BlockRendererClientProps) => {
//   if (!content) return null;

//   return (
//     <BlocksRenderer
//       content={content}
//       blocks={{
//         paragraph: ({ children }: BlockProps) => (
//           <p className={`text-muted-foreground ${className}`}>{children}</p>
//         ),
//         heading: ({ children, level }: HeadingProps) => {
//           switch (level) {
//             // ... rest of the switch case
//           }
//         },
//         list: {
//           ordered: ({ children }: BlockProps) => (
//             <ol className="list-decimal ml-4 mb-4">{children}</ol>
//           ),
//           unordered: ({ children }: BlockProps) => (
//             <ul className="list-disc ml-4 mb-4">{children}</ul>
//           ),
//         },
//         code: ({ children }: BlockProps) => (
//           <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
//             <code>{children}</code>
//           </pre>
//         ),
//         quote: ({ children }: BlockProps) => (
//           <blockquote className="border-l-4 border-indigo-500 pl-4 italic mb-4">
//             {children}
//           </blockquote>
//         ),
//       }}
//       modifiers={{
//         bold: ({ children }: BlockProps) => <strong className="font-bold">{children}</strong>,
//         italic: ({ children }: BlockProps) => <em className="italic">{children}</em>,
//         underline: ({ children }: BlockProps) => <u className="underline">{children}</u>,
//         strikethrough: ({ children }: BlockProps) => <s className="line-through">{children}</s>,
//         code: ({ children }: BlockProps) => (
//           <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
//             {children}
//           </code>
//         ),
//       }}
//     />
//   );
// };

// export default BlockRendererClient;





// original code ####################################################################################

// import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

// interface BlockRendererClientProps {
//   content: BlocksContent;
//   className?: string;
// }

// const BlockRendererClient = ({ content, className = "" }: BlockRendererClientProps) => {
//   if (!content) return null;

//   return (
//     <BlocksRenderer
//       content={content}
//       blocks={{
//         paragraph: ({ children }) => (
//           <p className={`text-muted-foreground ${className}`}>{children}</p>
//         ),
//         heading: ({ children, level }) => {
//           switch (level) {
//             case 1:
//               return <h1 className="text-4xl font-bold mb-4">{children}</h1>;
//             case 2:
//               return <h2 className="text-3xl font-bold mb-3">{children}</h2>;
//             case 3:
//               return <h3 className="text-2xl font-bold mb-2">{children}</h3>;
//             case 4:
//               return <h4 className="text-xl font-bold mb-2">{children}</h4>;
//             default:
//               return <h5 className="text-lg font-bold mb-1">{children}</h5>;
//           }
//         },
//         list: {
//           ordered: ({ children }) => (
//             <ol className="list-decimal ml-4 mb-4">{children}</ol>
//           ),
//           unordered: ({ children }) => (
//             <ul className="list-disc ml-4 mb-4">{children}</ul>
//           ),
//         },
//         code: ({ children }) => (
//           <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
//             <code>{children}</code>
//           </pre>
//         ),
//         quote: ({ children }) => (
//           <blockquote className="border-l-4 border-indigo-500 pl-4 italic mb-4">
//             {children}
//           </blockquote>
//         ),
//       }}
//       modifiers={{
//         bold: ({ children }) => <strong className="font-bold">{children}</strong>,
//         italic: ({ children }) => <em className="italic">{children}</em>,
//         underline: ({ children }) => <u className="underline">{children}</u>,
//         strikethrough: ({ children }) => <s className="line-through">{children}</s>,
//         code: ({ children }) => (
//           <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
//             {children}
//           </code>
//         ),
//       }}
//     />
//   );
// };

// export default BlockRendererClient;



import { BlocksRenderer, type BlocksContent,} from '@strapi/blocks-react-renderer';
import React, { ReactNode } from 'react';

interface BlockRendererClientProps {
  content: BlocksContent;
  className?: string;
}

// Adjusted BlockProps to handle different types of content nodes
interface BlockProps {
  children: ReactNode;
}

// Define the custom block renderer types based on Strapi's expected node types
const BlockRendererClient = ({ content, className = "" }: BlockRendererClientProps) => {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // Paragraph block renderer
        paragraph: ({ children }) => (
          <p className={`text-muted-foreground ${className}`}>{children}</p>
        ),
        // Heading block renderer
        heading: ({ children, level }) => {
          const headingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
          return React.createElement(
            headingTag,
            { className: `text-${level === 1 ? "4xl" : level === 2 ? "3xl" : level === 3 ? "2xl" : level === 4 ? "xl" : level === 5 ? "lg" : "base"} font-bold mb-4 ${className}` },
            children
          );
        },
        // List block renderer
        // list: {
        //   ordered: ({ children }: GetPropsFromNode<OrderedListBlockNode>) => (
        //     <ol className="list-decimal ml-4 mb-4">{children}</ol>
        //   ),
        //   unordered: ({ children }: GetPropsFromNode<UnorderedListBlockNode>) => (
        //     <ul className="list-disc ml-4 mb-4">{children}</ul>
        //   ),
        // },
        // // Code block renderer
        // code: ({ children }: BlockProps) => (
        //   <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
        //     <code>{children}</code>
        //   </pre>
        // ),
        // // Quote block renderer
        // quote: ({ children }: BlockProps) => (
        //   <blockquote className="border-l-4 border-indigo-500 pl-4 italic mb-4">
        //     {children}
        //   </blockquote>
        // ),
      }}
      modifiers={{
        bold: ({ children }: BlockProps) => <strong className="font-bold">{children}</strong>,
        italic: ({ children }: BlockProps) => <em className="italic">{children}</em>,
        underline: ({ children }: BlockProps) => <u className="underline">{children}</u>,
        strikethrough: ({ children }: BlockProps) => <s className="line-through">{children}</s>,
        code: ({ children }: BlockProps) => (
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {children}
          </code>
        ),
      }}
    />
  );
};

export default BlockRendererClient;
