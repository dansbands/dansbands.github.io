"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface PortfolioItemProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  extendedDescription?: string;
  technologies: string[];
  features: string[];
  links: { title: string; url: string }[]; // Updated links structure
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
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="row portfolio-row">
      <div className="col-md-1" />
      <div className="col-md-5 portfolio-media">
        <Image
          className="portfolio-image"
          src={image}
          alt={`${title} project screenshot`}
          width={380}
        />
      </div>
      <div className="col-md-5 portfolio-text">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h6 style={{ color: "silver" }}>{date}</h6>
        <p className="p1">{description}</p>
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
        <span
          onClick={() => setIsExpanded((prev) => !prev)}
          className="less-1"
          id="view"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </span>
      </div>
      <div className="col-md-1" />
    </div>
  );
};

export default PortfolioItem;
