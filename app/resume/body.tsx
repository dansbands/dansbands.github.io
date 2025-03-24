import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { experience } from "../util/const";
import ExperienceItem from "./experience-item";

export default function Body() {
  return (
    <div className="resume-body">
      <div className="body-header">
        <div className="icon-circle-lg">
          <FontAwesomeIcon icon={faBriefcase} width={20} />
        </div>
        <span>WORK EXPERIENCE</span>
      </div>
      <div className="work-experience-list">
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
