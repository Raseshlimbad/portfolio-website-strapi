"use client";
import { GET_FOOTER_DATA } from "@/graphql/settings/Footer.query";
import { mapFooterData } from "@/lib/helpers/mapDataHelper";
import { MappedFooterData } from "@/types/FooterTypes";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ErrorDisplay from "../global/ErrorDisplay";
import LinkRenderer from "../global/LinkRenderer";
import StrapiImageRenderer from "../global/StrapiImageRenderer";
import FooterLoadingSkeleton from "../LoadingSkeletons/FooterLoadingSkeleton";

const Footer = () => {
  const [footerData, setFooterData] = useState<MappedFooterData>();

  const { loading, error, data } = useQuery(GET_FOOTER_DATA);

  // console.log("data:", data?.setting?.Settings);
  // console.log(
  //   "data:",
  //   data?.setting?.Settings.find(
  //     (section: { __typename: string }) =>
  //       section.__typename === "ComponentComponentFooter"
  //   )
  // );

  // Formatted Data
  useEffect(() => {
    if (data?.setting?.Settings) {
      const footer = data?.setting?.Settings.find(
        (section: { __typename: string }) =>
          section.__typename === "ComponentComponentFooter"
      );

      if (footer) {
        setFooterData(mapFooterData(footer));
      }
    }
  }, [data]);

  // console.log("Footer Data:", footerData);

  const currentYear = new Date().getFullYear();
  if (loading) return <FooterLoadingSkeleton />;
  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorDisplay message={"Error Fetching Header"} />;
  return (
    <footer className="py-6 px-4 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile-first layout */}
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:items-center md:justify-between">
          {/* Copyright Text */}
          <p className="text-sm text-gray-600 text-center md:text-left">
            {/* © {currentYear} Portfolio. All rights reserved. */}©{" "}
            {currentYear} {footerData?.copyrightStatement}
          </p>

          {/* Links & Social Media */}
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            {/* Navigation Links */}
            <div className="flex space-x-6">
              <LinkRenderer
                url={footerData?.privacyPolicy?.url || "#"}
                type={footerData?.privacyPolicy?.Type || "Reference"}
              >
                <span>{footerData?.privacyPolicy?.Name}</span>
              </LinkRenderer>
            </div>
            <div className="flex space-x-6">
              <LinkRenderer
                url={footerData?.termsOfService?.url || "#"}
                type={footerData?.termsOfService?.Type || "Reference"}
              >
                <span>{footerData?.termsOfService?.Name}</span>
              </LinkRenderer>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 z-20">
              {footerData?.socialLinks &&
                footerData.socialLinks.map((link) => (
                  <StrapiImageRenderer
                    imageUrl={link.iconSvg.url}
                    altText={link?.iconSvg.alternativeText}
                    isSvg={true}
                    link={link.link}
                    className={"text-indigo-600"}
                    width={24}
                    height={24}
                    key={link.iconName}
                  />
                ))}
            </div>

            {/* Scroll to Top Button */}
            <StrapiImageRenderer
              imageUrl={footerData?.backToTopButton?.iconSvg?.url || ""}
              altText={footerData?.backToTopButton?.iconSvg.alternativeText}
              isSvg={true}
              link={footerData?.backToTopButton?.link}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-md transition-all duration-200 z-20"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
