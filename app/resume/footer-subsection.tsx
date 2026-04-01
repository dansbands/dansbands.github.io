"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ExperienceItem from "./experience-item";
import Image from "next/image";

const FooterSubsection: React.FC<{
  icon: IconDefinition;
  children: React.ReactNode;
  isCollapsed: boolean;
  onToggle: (sectionHeader: HTMLDivElement) => void;
  data?: Array<{
    featured: boolean;
    isFlexColumn: boolean;
    id: number;
    company: string;
    title: string;
    dates: string;
    responsibilities: string[];
  }>;
  icons?: Array<{ src: string; height: number; width: number; label: string }>;
  otherExperience?: string;
}> = ({ icon, children, isCollapsed, onToggle, data, icons, otherExperience }) => {
  return (
    <div className="footer-sub-section">
      <div
        className="subsection-header"
        onClick={(event) => onToggle(event.currentTarget)}
      >
        <div className="icon-circle-md">
          <FontAwesomeIcon icon={icon} width={20} />
        </div>
        <div className="subsection-title">{children}</div>
        <span className="toggle-button">{isCollapsed ? "+" : "-"}</span>
      </div>
      <div className={`subsection-body${isCollapsed ? " collapsed" : ""}`}>
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
              return (
                <div className="icon-container" key={index}>
                  <Image
                    key={index}
                    className="skill-icon"
                    src={icon.src}
                    height={icon.height}
                    width={icon.width}
                    alt={icon.label}
                  />
                  <span className="icon-label">{icon.label}</span>
                </div>
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
