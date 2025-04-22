"use client";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { experience } from "../util/const";
import ExperienceItem from "./experience-item";

export default function Body() {
  const [isExperienceCollapsed, setIsExperienceCollapsed] = useState(true);

  const toggleExperience = () => {
    setIsExperienceCollapsed(!isExperienceCollapsed);
  };

  return (
    <div className="resume-body">
      <div className="body-header" onClick={toggleExperience}>
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
          ({ featured, id, company, title, dates, responsibilities }) => (
            <ExperienceItem
              featured={featured}
              key={`${id}`}
              company={company}
              title={title}
              dates={dates}
              responsibilities={responsibilities}
            />
          )
        )}
      </div>
    </div>
  );
}
