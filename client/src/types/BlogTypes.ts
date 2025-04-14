import { BlocksContent } from "@strapi/blocks-react-renderer";
import { LinkData } from "./global/LinkTypes";

export interface BlogData {
  blogs: {
    documentId: string;
    Title: string;
    Summary: string;
    publishedAt: string;
    Category: string;
    Content: BlocksContent;
    BlogImage: {
      Image: {
        url: string;
      };
      altText: string;
    };
    Links: LinkData[];
  }[];
}

export interface MappedBlog {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  category: string;
  content: BlocksContent;
  BlogImage: {
    Image: {
      url: string;
    };
    altText: string;
  };
  Links: LinkData[];
}

export interface MappedBlogData {
  blogs: MappedBlog[];
}


