"use client";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { experience } from "../util/const";
import ExperienceItem from "./experience-item";

type BodyProps = {
  isExperienceCollapsed: boolean;
  onToggleExperience: (sectionHeader: HTMLDivElement) => void;
};

export default function Body({
  isExperienceCollapsed,
  onToggleExperience,
}: BodyProps) {
  return (
    <div className="resume-body">
      <div
        className="body-header"
        onClick={(event) => onToggleExperience(event.currentTarget)}
      >
        <div className="icon-circle-lg">
          <FontAwesomeIcon icon={faBriefcase} width={20} />
        </div>
        <span>WORK EXPERIENCE</span>
        <span className="toggle-button">
          {isExperienceCollapsed ? "+" : "-"}
        </span>
      </div>
      <div
        className={`work-experience-list${
          isExperienceCollapsed ? " collapsed" : ""
        }`}
      >
        {experience.map(
          ({ featured, id, company, title, dates, responsibilities, technologies }) => (
            <ExperienceItem
              featured={featured}
              key={`${id}`}
              company={company}
              title={title}
              dates={dates}
              responsibilities={responsibilities}
              technologies={technologies}
            />
          )
        )}
      </div>
    </div>
  );
}
