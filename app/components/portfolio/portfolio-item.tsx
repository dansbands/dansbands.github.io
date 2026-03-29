"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { SCROLL_KEY } from "./scroll-restorer";

interface PortfolioItemProps {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  extendedDescription?: string;
  technologies: string[];
  features: string[];
  links: { title: string; url: string }[]; // Updated links structure
  /** When set, replaces the expand panel with a direct navigation button */
  caseStudyUrl?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  image,
  title,
  subtitle,
  date,
  description,
  extendedDescription,
  technologies,
  features,
  links,
  caseStudyUrl,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const imageWidth = typeof image === "string" ? 1200 : image.width;
  const imageHeight = typeof image === "string" ? 750 : image.height;

  return (
    <div className="row portfolio-row">
      <div className="col-md-1" />
      <div className="col-md-5 portfolio-media">
        <Image
          className="portfolio-image"
          src={image}
          alt={`${title} project screenshot`}
          width={imageWidth}
          height={imageHeight}
          sizes="(max-width: 991px) 100vw, 380px"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="col-md-5 portfolio-text">
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
        <h6 style={{ color: "silver" }}>{date}</h6>
        <p className="p1">{description}</p>
        {caseStudyUrl ? (
          <Link
            href={caseStudyUrl}
            className="portfolio-case-study-link"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              ) {
                return;
              }
              sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
            }}
          >
            Read Full Case Study <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <>
            <div className={`p2-1 ${isExpanded ? "expanded" : "collapsed"}`}>
              <p className="p1">{extendedDescription}</p>
              <ul>
                <li>+ Technologies: {technologies.join(", ")}</li>
                {features?.map((feature, index) => (
                  <li key={index}>+ {feature}</li>
                ))}
              </ul>
              <p>
                {links.map((link, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="view"
                    >
                      {link.title}
                    </a>
                    {index < links.length - 1 && " | "}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="less-1"
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </>
        )}
      </div>
      <div className="col-md-1" />
    </div>
  );
};

export default PortfolioItem;
