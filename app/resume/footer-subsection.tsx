import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ExperienceItem from "./experience-item";
import Image from "next/image";

const FooterSubsection: React.FC<{
  icon: IconDefinition;
  children: React.ReactNode;
  data?: Array<{
    featured: boolean;
    isFlexColumn: boolean;
    id: number;
    company: string;
    title: string;
    dates: string;
    responsibilities: string[];
  }>;
  icons?: Array<{ src: string; height: number; width: number }>;
  otherExperience?: string; // Add the appropriate type for otherExperience
}> = ({ icon, children, data, icons, otherExperience }) => {
  return (
    <div className="footer-sub-section">
      <div className="subsection-header">
        <div className="icon-circle-md">
          <FontAwesomeIcon icon={icon} width={20} />
        </div>
        <div className="subsection-title">{children}</div>
      </div>
      <div className="subsection-body">
        {data?.map(
          ({
            featured,
            isFlexColumn,
            id,
            company,
            title,
            dates,
            responsibilities,
          }) => (
            <ExperienceItem
              featured={featured}
              isFlexColumn={isFlexColumn}
              key={`${id}`}
              company={company}
              title={title}
              dates={dates}
              responsibilities={responsibilities}
            />
          )
        )}
        {icons && (
          <div className="icon-grid">
            {icons?.map((icon, index) => {
              console.log("icon", icon);
              return (
                <Image
                  key={index}
                  className="icon-container"
                  src={icon.src}
                  height={icon.height}
                  width={icon.width}
                  alt={`icon-${index}`}
                />
              );
            })}
          </div>
        )}
        {otherExperience && (
          <div className="other-experience">{otherExperience}</div>
        )}
      </div>
    </div>
  );
};

export default FooterSubsection;
