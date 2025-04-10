import { BaseEditor, Descendant } from 'slate';
// import { ReactEditor } from 'slate-react';

export type ParagraphElement = {
    type: 'paragraph';
    children: CustomText[];
  };
  
  export type CustomText = {
    text: string;
    bold?: boolean;
    italic?: boolean;
  };
  
  export type CustomElement = ParagraphElement;
  
  declare module 'slate' {
    interface CustomTypes {
      Editor: BaseEditor;
      Element: CustomElement;
      Text: CustomText;
    }
  }

// Helper
// export const renderRichText = (nodes: Descendant[]) => {
//   return nodes.map((node, i) => {
//     if ('text' in node) {
//       return <span key={i}>{node.text}</span>;
//     }

//     switch (node.type) {
//       case 'paragraph':
//         return <p key={i}>{renderRichText(node.children)}</p>;
//       // Add more cases as needed (like headings, links, lists, etc.)
//       default:
//         return null;
//     }
//   });
// };


// export const renderRichText = (nodes: Descendant[]) => {
//   return nodes.map((node, i) => {
//     if ('text' in node) {
//       return <span key={i}>{node.text}</span>;
//     } else if (node.type === 'paragraph') {
//       // Use <div> for paragraphs to avoid nesting <div> inside <p>
//       return <div key={i} className="paragraph">{renderRichText(node.children)}</div>;
//     } else if (node.type === 'bold') {
//       return <strong key={i}>{renderRichText(node.children)}</strong>;
//     } else if (node.type === 'italic') {
//       return <em key={i}>{renderRichText(node.children)}</em>;
//     }
//     // Handle other types like links or custom nodes here
//     return null;
//   });
// };


export const renderRichText = (nodes: Descendant[]) => {
  return nodes.map((node, i) => {
    if ('text' in node) {
      let content: React.ReactNode = node.text;
      
      // Apply text formatting if needed
      if (node.bold) content = <strong key={`bold-${i}`}>{content}</strong>;
      if (node.italic) content = <em key={`italic-${i}`}>{content}</em>;
      
      return <span key={i}>{content}</span>;
    } else if (node.type === 'paragraph') {
      return <span key={i} className="paragraph">{renderRichText(node.children)}</span>;
    } else if (node.type === 'bold') {
      return <strong key={i}>{renderRichText(node.children)}</strong>;
    } else if (node.type === 'italic') {
      return <em key={i}>{renderRichText(node.children)}</em>;
    }
    // Handle other types like links or custom nodes here
    return null;
  });
};