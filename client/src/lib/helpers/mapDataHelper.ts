import { HeaderData, MappedHeaderData } from "@/types/HeaderTypes";
import { HeroSectionData, MappedHeroSectionData } from "@/types/HomePage/HeroSectionTypes";
import { MappedTimelineData, TimelineData } from "@/types/HomePage/TimelineTypes";

export const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL as string;

export const strapiImageUrl = (imageURL: string) => {
  if (!imageURL) return "";
  if (imageURL.startsWith("/")) {
    return `${BACKEND_BASE_URL}${imageURL}`;
  }
  return imageURL;
};


export const mapHeaderData = (headerData: HeaderData) : MappedHeaderData => {
  return {
      logo: {
        altText: headerData.LOGO?.altText ?? null,
        image: headerData.LOGO?.image ?? null,
        url: headerData.LOGO?.url ?? null,
      },
    navItems: headerData.NavItems?.map((item) => ({
      name: item?.Name,
      type: item?.Type,
      url: item?.url,
    })) || [],
  };
};

export const mapHeroSectionData = (heroSectionData: HeroSectionData): MappedHeroSectionData => {
  return {
    Title: heroSectionData.Title ?? "", 
    SubTitle: heroSectionData.SubTitle ?? "",
    OccupationLabel: heroSectionData.OccupationLabel ?? "",
    CTAs: heroSectionData.CTAs?.map((cta) => ({
      Name: cta.Name,
      Type: cta.Type,
      url: cta.url,
    })) || [],
  };
};


// export const mapTimelineData = (timelineData: TimelineData): MappedTimelineData => {
//     return {
//       timelineItems: timelineData.homePage?.Sections?.[0]?.Timeline_Nodes?.map((node) => ({
//         year: node?.TimelineYear ?? "",
//         title: node?.TextBlock?.Title ?? "",
//         description: node?.TextBlock?.Paragraph ?? "",
//         icon: {
//           name: node?.TimelineIcon?.IconName ?? "",
//           svgUrl: node?.TimelineIcon?.IconSVG?.url ?? "",
//           svgAltText: node?.TimelineIcon?.IconSVG?.alternativeText ?? "",
//           relatedText: node?.TimelineIcon?.ReletedText ?? "",
//         },
//         link: node?.TimelineIcon?.Link ? {
//           name: node?.TimelineIcon?.Link?.Name ?? "",
//           url: node?.TimelineIcon?.Link?.url ?? "",
//           type: node?.TimelineIcon?.Link?.Type ?? "",
//         } : null,
//       })) || [],
//     };
//   };


export const mapTimelineData = (timelineSection: TimelineData): MappedTimelineData => {
    return {
      timelineItems: timelineSection?.homePage?.Sections?.[2]?.Timeline_Nodes?.map((node) => ({
        year: node?.TimelineYear?.toString().replace(/,/g, "") ?? "", // Remove all commas from year
        title: node?.TextBlock?.Title ?? "",
        description: node?.TextBlock?.Paragraph
          ?.map((para) => para.children?.map((child) => child.text).join(' ')) // Handle Paragraph array
          .join(' ') ?? "", // Concatenate all texts from paragraphs
        icon: {
          name: node?.TimelineIcon?.IconName ?? "",
          svgUrl: strapiImageUrl(node?.TimelineIcon?.IconSVG?.url ?? ""),
          svgAltText: node?.TimelineIcon?.IconSVG?.alternativeText ?? "", // Handle missing alternativeText
          relatedText: node?.TimelineIcon?.ReletedText ?? "", // Handle missing ReletedText
        },
        link: node?.TimelineIcon?.Link ? {
          name: node?.TimelineIcon?.Link?.Name ?? "",
          url: node?.TimelineIcon?.Link?.url ?? "",
          type: node?.TimelineIcon?.Link?.Type ?? "",
        } : null,
      })) || [],
    };
  };
  
  