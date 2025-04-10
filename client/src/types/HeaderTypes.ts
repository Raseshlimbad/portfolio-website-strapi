// Interface for Logo data
export interface Logo {
    altText: string | null;
    image: {
      alternativeText: string | null;
      url: string | null;
    } | null;
    url: {
      Name: string;
      Type: string;
      url: string;
    } | null;
  }
  
  // Interface for each navigation item
  export interface NavItem {
    name: string;
    type: string;
    url: string;
  }
  
  // Interface for the input data (the headerData)
  export interface HeaderData {
    LOGO?: Logo;
    NavItems?: Array<{
      Name: string;
      Type: string;
      url: string;
    }>;
  }
  
  // Interface for the mapped output data
  export interface MappedHeaderData {
      logo: {
        altText: string | null;
        image: { alternativeText: string | null; url: string | null } | null;
        url: { Name: string; Type: string; url: string } | null;
      };
    navItems: Array<{
      name: string;
      type: string;
      url: string;
    }>;
  }
  