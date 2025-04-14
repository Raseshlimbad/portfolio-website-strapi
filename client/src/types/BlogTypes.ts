import { LinkData } from "./global/LinkTypes";

export interface BlogData {
  blogs: {
    documentId: string;
    Title: string;
    Summary: string;
    publishedAt: string;
    Category: string;
    Content: string;
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
  content: string;
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


