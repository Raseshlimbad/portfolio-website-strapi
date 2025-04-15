/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import React, { JSX, ReactNode } from 'react';
import Link from 'next/link';

// Add Image import at the top
import Image from 'next/image';

interface BlocksComponents {
  [key: string]: any;
}

interface ModifiersComponents {
  bold: ({ children }: { children: ReactNode }) => JSX.Element;
  italic: ({ children }: { children: ReactNode }) => JSX.Element;
  underline: ({ children }: { children: ReactNode }) => JSX.Element;
  strikethrough: ({ children }: { children: ReactNode }) => JSX.Element;
  code: ({ children }: { children: ReactNode }) => JSX.Element;
  link: ({ children, url }: { children: ReactNode; url: string }) => JSX.Element;
}

interface BlockRendererClientProps {
  content: any;
  className?: string;
}

interface BlockProps {
  children: any;
}

interface ListItemProps {
  children: any;
}

interface LinkProps {
  children: any;
  url: string;
}

interface ImageProps {
  image: {
    url: string;
    alternativeText?: string;
    caption?: string;
  };
}

const BlockRendererClient = ({ content, className = "" }: BlockRendererClientProps) => {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }: BlockProps) => (
          <p className={`text-muted-foreground mb-4 ${className}`}>{children}</p>
        ),
        heading: ({ children, level }: { children: ReactNode; level: number }) => {
          const headingTag = `h${level}` as keyof JSX.IntrinsicElements;
          return React.createElement(
            headingTag,
            { className: `text-${level === 1 ? "4xl" : level === 2 ? "3xl" : level === 3 ? "2xl" : level === 4 ? "xl" : level === 5 ? "lg" : "base"} font-bold mb-4 ${className}` },
            children
          );
        },
        list: ({ children, format }: { children: ReactNode; format: 'ordered' | 'unordered' }) => {
          const ListComponent = format === 'ordered' ? 'ol' : 'ul';
          return (
            <ListComponent className={`list-${format === 'ordered' ? 'decimal' : 'disc'} ml-6 mb-4 space-y-2 ${className}`}>
              {children}
            </ListComponent>
          );
        },
        'list-item': ({ children }: ListItemProps) => (
          <li className="text-muted-foreground">{children}</li>
        ),
        quote: ({ children }: BlockProps) => (
          <blockquote className="border-l-4 border-primary pl-4 italic my-4">
            {children}
          </blockquote>
        ),
        code: ({ children }: BlockProps) => (
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
            <code>{children}</code>
          </pre>
        ),
        image: ({ image }: ImageProps) => (
          <div className="my-4 relative aspect-video">
            <Image
              src={image.url}
              alt={image.alternativeText || ''}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            {image.caption && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {image.caption}
              </p>
            )}
          </div>
        ),
      } as BlocksComponents}
      modifiers={{
        bold: ({ children }: BlockProps) => <strong className="font-bold">{children}</strong>,
        italic: ({ children }: BlockProps) => <em className="italic">{children}</em>,
        underline: ({ children }: BlockProps) => <u className="underline">{children}</u>,
        strikethrough: ({ children }: BlockProps) => <s className="line-through">{children}</s>,
        code: ({ children }: BlockProps) => (
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm">
            {children}
          </code>
        ),
        link: ({ children, url }: LinkProps) => (
          <Link 
            href={url} 
            className="text-primary hover:underline"
            target={url.startsWith('http') ? '_blank' : '_self'}
            rel={url.startsWith('http') ? 'noopener noreferrer' : ''}
          >
            {children}
          </Link>
        ),
      } as ModifiersComponents}
    />
  );
};

export default BlockRendererClient;


export const extractTextFromBlocks = (blocks: BlocksContent): string => {
  const extract = (block: any): string => {
    // Handle text nodes
    if (block.type === 'text') {
      return block.text || '';
    }

    // Recursively handle blocks with children (like paragraph, heading, etc.)
    if (block.children && Array.isArray(block.children)) {
      return block.children.map(extract).join(' ');
    }

    return '';
  };

  return blocks.map(extract).join(' ');
};




