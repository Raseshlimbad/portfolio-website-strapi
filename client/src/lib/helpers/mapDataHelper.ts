import { BlogData, MappedBlog, MappedBlogData } from "@/types/BlogTypes";
import { HeaderData, MappedHeaderData } from "@/types/HeaderTypes";
import { BlogSectionData, MappedBlogSectionData } from "@/types/HomePage/BlogsSectionTypes";
import {
  HeroSectionData,
  MappedHeroSectionData,
} from "@/types/HomePage/HeroSectionTypes";
import {
  MappedMySkillsSection,
  MySkillsSectionData,
} from "@/types/HomePage/MySkillsSecctionTypes";
import {
  MappedProjectSectionData,
  ProjectSectionData,
} from "@/types/HomePage/ProjectSectionTypes";
import {
  MappedTimelineData,
  TimelineData,
} from "@/types/HomePage/TimelineTypes";
import {
  MappedProject,
  MappedProjectData,
  ProjectData,
} from "@/types/ProjectsTypes";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export const BACKEND_BASE_URL = process.env
  .NEXT_PUBLIC_BACKEND_BASE_URL as string;

// Helper function to handle image URLs‚
export const strapiImageUrl = (imageURL: string) => {
  if (!imageURL) return "";
  try {
    // If it's already a valid URL, return it
    new URL(imageURL);
    return imageURL;
  } catch {
    // If it's a relative path, join it with the backend URL
    if (imageURL.startsWith("/")) {
      return new URL(imageURL, BACKEND_BASE_URL).toString();
    }
    // If it's neither, try to construct a URL with the backend
    return new URL(imageURL, BACKEND_BASE_URL).toString();
  }
};

export const formatBlogDate = (publishedAt: string) => {
  const date = new Date(publishedAt);
  const now = new Date();

  // Format date in Indian style (DD/MM/YYYY)
  const formattedDate = date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Calculate days difference
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  // If more than 2 days old, return formatted date
  if (diffInDays > 2) {
    return { formattedDate, displayDate: formattedDate };
  }

  // Calculate time difference for recent posts
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let timeAgo;
  if (diffInSeconds < 60) {
    timeAgo = `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    timeAgo = `${Math.floor(diffInSeconds / 60)} minutes ago`;
  } else if (diffInSeconds < 86400) {
    timeAgo = `${Math.floor(diffInSeconds / 3600)} hours ago`;
  } else {
    timeAgo = `${Math.floor(diffInSeconds / 86400)} days ago`;
  }

  return { formattedDate, displayDate: timeAgo };
};

// Map header data
export const mapHeaderData = (headerData: HeaderData): MappedHeaderData => {
  return {
    logo: {
      altText: headerData.LOGO?.altText ?? null,
      image: headerData.LOGO?.image ?? null,
      url: headerData.LOGO?.url ?? null,
    },
    navItems:
      headerData.NavItems?.map((item) => ({
        name: item?.Name,
        type: item?.Type,
        url: item?.url,
      })) || [],
  };
};

// Map hero section data
export const mapHeroSectionData = (
  heroSectionData: HeroSectionData
): MappedHeroSectionData => {
  return {
    Title: heroSectionData.Title ?? "",
    SubTitle: heroSectionData.SubTitle ?? "",
    OccupationLabel: heroSectionData.OccupationLabel ?? "",
    CTAs:
      heroSectionData.CTAs?.map((cta) => ({
        Name: cta.Name,
        Type: cta.Type,
        url: cta.url,
      })) || [],
  };
};

// Map timeline data
export const mapTimelineData = (
  timelineSection: TimelineData
): MappedTimelineData => {
  return {
    timelineItems:
      timelineSection?.Timeline_Nodes?.map((node) => ({
        year: node?.TimelineYear?.toString().replace(/,/g, "") ?? "", // Remove all commas from year
        title: node?.TextBlock?.Title ?? "",
        description:
          node?.TextBlock?.Paragraph?.map((para) =>
            para.children?.map((child) => child.text).join(" ")
          ) // Handle Paragraph array
            .join(" ") ?? "", // Concatenate all texts from paragraphs
        icon: {
          name: node?.TimelineIcon?.IconName ?? "",
          svgUrl: strapiImageUrl(node?.TimelineIcon?.IconSVG?.url ?? ""),
          svgAltText: node?.TimelineIcon?.IconSVG?.alternativeText ?? "", // Handle missing alternativeText
          relatedText: node?.TimelineIcon?.ReletedText ?? "", // Handle missing ReletedText
        },
        link: node?.TimelineIcon?.Link
          ? {
              name: node?.TimelineIcon?.Link?.Name ?? "",
              url: node?.TimelineIcon?.Link?.url ?? "",
              type: node?.TimelineIcon?.Link?.Type ?? "",
            }
          : null,
      })) || [],
  };
};

export const mapMySkillsSectionData = (
  mySkillsSection: MySkillsSectionData
): MappedMySkillsSection => {
  return {
    sectionTitle: mySkillsSection.SectionTitle ?? "",
    skillCategories: mySkillsSection.SkillCategories.map((category) => ({
      categoryName: category.SkillCategoryName ?? "",
      categoryDescription:
        (category.SkillCategoryDescription as BlocksContent) ?? null,
      icons: category.Skill_Icons.map((icon) => ({
        name: icon.IconName ?? "",
        svgUrl: strapiImageUrl(icon.IconSVG.url ?? ""),
        svgAltText: icon.IconSVG.alternativeText ?? "",
        relatedText: icon.ReletedText ?? "",
        link: icon.Link
          ? {
              name: icon.Link.Name ?? "",
              type: icon.Link.Type ?? "",
              url: icon.Link.url ?? "",
            }
          : null,
      })),
    })),
  };
};

export const mapProjectSectionData = (
  projectSection: ProjectSectionData
  // projects: ProjectData[] = []
): MappedProjectSectionData => {
  return {
    sectionTitle: projectSection?.SectionTitle ?? "",
    sectionDescription: projectSection?.SectionDescription?.Paragraph ?? null,
    cta: {
      name: projectSection?.CTA?.Name ?? "View All Projects",
      type: projectSection?.CTA?.Type ?? "Reference",
      url: projectSection?.CTA?.url ?? "#",
    },
  };
};

export const mapProjectData = (data: ProjectData): MappedProjectData => {
  if (!data || !Array.isArray(data.projects)) {
    throw new Error("Project data is undefined or not an array");
  }

  const mappedProjects = data.projects.map(
    (project): MappedProject => ({
      title: project.Title ?? "",
      description: project.Description ?? "", // adjust this if you use rich text
      image: {
        url: strapiImageUrl(project.Image?.Image?.url ?? ""),
        altText: project.Image?.Image?.alternativeText ?? "",
      },
      categoryIcon: {
        name: project.ProjectCategoryIcon?.IconName ?? "",
        svgUrl: strapiImageUrl(project.ProjectCategoryIcon?.IconSVG?.url ?? ""),
        svgAltText: project.ProjectCategoryIcon?.IconSVG?.alternativeText ?? "",
        link: {
          name: project.ProjectCategoryIcon?.Link?.Name ?? "",
          type: project.ProjectCategoryIcon?.Link?.Type ?? "Reference",
          url: project.ProjectCategoryIcon?.Link?.url ?? "#",
        },
      },
      ProjectLinks: (project.ProjectLinks ?? []).map((link) => ({
        IconName: link?.IconName ?? "",
        IconSVG: {
          url: link?.IconSVG?.url ?? "",
          alternativeText: link?.IconSVG?.alternativeText ?? "",
        },
        Link: {
          Name: link?.Link.Name ?? "",
          Type: link?.Link.Type ?? "Reference",
          url: link?.Link.url ?? "#",
        },
      })),
      TechnologyStack: {
        Text: project.TechnologyStack?.Text ?? "",
      },
    })
  );

  return {
    projects: mappedProjects,
  };
};

export const mapBlogSectionData = (
  projectSection: BlogSectionData
): MappedBlogSectionData => {
  return {
    sectionTitle: projectSection?.SectionTitle ?? "",
    sectionDescription: projectSection?.SectionDescription ?? null,
    cta: {
      name: projectSection?.CTA?.Name ?? "View All Projects",
      type: projectSection?.CTA?.Type ?? "Reference",
      url: projectSection?.CTA?.url ?? "#",
    },
  };
};



export const mapBlogData = (data: BlogData): MappedBlogData => {
  if (!data || !Array.isArray(data.blogs)) {
    throw new Error("Blog data is undefined or not an array");
  }

  const mappedBlogs = data.blogs.map(
    (blog): MappedBlog => ({
      slug: blog.documentId?? "",
      title: blog.Title ?? "",
      summary: blog.Summary ?? "",
      publishedAt: blog.publishedAt ?? "",
      category: blog.Category ?? "",
      content: blog.Content ?? "",
      BlogImage: {
        Image: {
          url: strapiImageUrl(blog.BlogImage?.Image?.url ?? ""),
        },
        altText: blog.BlogImage?.altText ?? "",
      },
      Links: blog.Links.map((link) => ({
        url: link.url?? "",
        Name: link.Name?? "",
        Type: link.Type?? "",
      })),
    })
  );

  return {
    blogs: mappedBlogs,
  };
};
