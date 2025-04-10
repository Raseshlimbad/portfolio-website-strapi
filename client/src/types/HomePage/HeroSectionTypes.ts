export interface HeroSectionCTA {
    Name: string;
    Type: string;
    url: string;
  }
  
  export interface HeroSectionData {
    Title: string;
    SubTitle: string;
    OccupationLabel: string;
    CTAs: HeroSectionCTA[];
  }
  
  export interface MappedHeroSectionData {
    Title: string;
    SubTitle: string;
    OccupationLabel: string;
    CTAs: HeroSectionCTA[];
  }