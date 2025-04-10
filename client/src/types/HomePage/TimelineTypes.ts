// // This would represent the raw GraphQL response
// export interface TimelineData {
//     homePage: {
//       Sections: Array<{
//         __typename: string;
//         Timeline_Nodes: Array<{
//           TimelineYear: string;
//           TextBlock: {
//             Title: string;
//             Paragraph: string;
//           };
//           TimelineIcon: {
//             IconName: string;
//             IconSVG: {
//               url: string;
//               alternativeText: string;
//             };
//             ReletedText: string;
//             Link: {
//               Name: string;
//               url: string;
//               Type: string;
//             };
//           };
//         }>;
//       }>;
//     };
//   }
  
//   // This represents the mapped structure that you will use in the front-end
//   export interface MappedTimelineData {
//     timelineItems: Array<{
//       year: string;
//       title: string;
//       description: string;
//       icon: {
//         name: string;
//         svgUrl: string;
//         svgAltText: string;
//         relatedText: string;
//       };
//       link: {
//         name: string;
//         url: string;
//         type: string;
//       } | null;
//     }>;
//   }
  












export interface TimelineData {
    homePage: {
      Sections: Array<{
        __typename: string;
        Timeline_Nodes: Array<{
          TimelineYear: string;
          TextBlock: {
            Title: string;
            Paragraph: Array<{ // Update Paragraph to an array of objects
              children: Array<{ 
                type: string; 
                text: string; 
              }>;
            }>;
          };
          TimelineIcon: {
            IconName: string;
            IconSVG: {
              url: string;
              alternativeText: string | null; // Allow null for missing alternative text
            };
            ReletedText: string | null; // Allow null for missing related text
            Link: {
              Name: string | null; // Link Name is nullable
              url: string | null;  // Link URL is nullable
              Type: string | null; // Link Type is nullable
            };
          };
        }>;
      }>;
    };
  }

  

  export interface MappedTimelineData {
    timelineItems: Array<{
      year: string;
      title: string;
      description: string;
      icon: {
        name: string;
        svgUrl: string;
        svgAltText: string | null; // Handle null values for alternative text
        relatedText: string | null; // Handle null for related text
      };
      link: {
        name: string | null;
        url: string | null;
        type: string | null;
      } | null; // Link can be null
    }>;
  }
  