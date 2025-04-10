import { HeaderData, MappedHeaderData } from "@/types/HeaderTypes";
import {
  HeroSectionData,
  MappedHeroSectionData,
} from "@/types/HomePage/HeroSectionTypes";
import {
  MappedMySkillsSection,
  MySkillsSectionData,
} from "@/types/HomePage/MySkillsSecctionTypes";
import {
  MappedTimelineData,
  TimelineData,
} from "@/types/HomePage/TimelineTypes";

export const BACKEND_BASE_URL = process.env
  .NEXT_PUBLIC_BACKEND_BASE_URL as string;

// Helper function to handle image URLs
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

// Helper function to map MySkills data
// export const mapMySkillsSectionData = (
//   mySkillsSection: MySkillsSectionData
// ): MappedMySkillsSection => {
//   return {
//     // skillsSection: {
//       sectionTitle: mySkillsSection.SectionTitle ?? "", // Default to empty string if missing
//       skillCategories: mySkillsSection.SkillCategories.map((category) => ({
//         categoryName: category.SkillCategoryName ?? "",
//         categoryDescription: category.SkillCategoryDescription ?? [],
//         icons: category.Skill_Icons.map((icon) => ({
//           name: icon.IconName ?? "",
//           svgUrl: strapiImageUrl(icon.IconSVG.url ?? ""), // Assuming strapiImageUrl is a helper function
//           svgAltText: icon.IconSVG.alternativeText ?? "",
//           relatedText: icon.ReletedText ?? "",
//           link: icon.Link
//             ? {
//                 name: icon.Link.Name ?? "",
//                 type: icon.Link.Type ?? "",
//                 url: icon.Link.url ?? "",
//               }
//             : null,
//         })),
//       })),
//     // },
//   };
// };



export const mapMySkillsSectionData = (
  mySkillsSection: MySkillsSectionData
): MappedMySkillsSection => {
  return {
    sectionTitle: mySkillsSection.SectionTitle ?? "",
    skillCategories: mySkillsSection.SkillCategories.map((category) => ({
      categoryName: category.SkillCategoryName ?? "",
      categoryDescription: category.SkillCategoryDescription?.map((para) => 
        para.children?.map((child) => child.text).join(" ")
      ).join(" ") ?? "", // Process rich text during mapping
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