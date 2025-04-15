import Link from "next/link";
import { LinkRendererProps } from "@/types/global/LinkTypes";

const LinkRenderer = ({ type, url, children, className = "" }: LinkRendererProps) => {
  switch (type) {
    case "Reference":
      // Internal links using Next.js Link
      return (
        <Link href={url} className={className}>
          {children}
        </Link>
      );

    case "Anchor":
      // Anchor links (hash links) for same-page navigation
      return (
        <Link
        href={`#${url}`}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector(`#${url}`);
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {children}
      </Link>
      );

    case "External":
      // External links with security attributes
      return (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </Link>
      );

    default:
      return <span className={className}>{children}</span>;
  }
};

export default LinkRenderer;