"use client";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { experience } from "../util/const";
import ExperienceItem from "./experience-item";

const monthToNumber: Record<string, string> = {
  january: "01",
  jan: "01",
  february: "02",
  feb: "02",
  march: "03",
  mar: "03",
  april: "04",
  apr: "04",
  may: "05",
  june: "06",
  jun: "06",
  july: "07",
  jul: "07",
  august: "08",
  aug: "08",
  september: "09",
  sep: "09",
  sept: "09",
  october: "10",
  oct: "10",
  november: "11",
  nov: "11",
  december: "12",
  dec: "12",
};

function formatMobileWorkExperienceDates(dates: string) {
  const [start, end] = dates.split(" - ").map((segment) => segment.trim());

  const normalizeDateSegment = (segment: string) => {
    if (!segment) {
      return segment;
    }

    if (/^present$/i.test(segment)) {
      return "Pres.";
    }

    if (/^\d{4}$/.test(segment)) {
      return segment;
    }

    const [month, year] = segment.split(/\s+/);
    const monthNumber = monthToNumber[month.toLowerCase()];

    if (monthNumber && year) {
      return `${Number(monthNumber)}/${year.slice(-2)}`;
    }

    return segment;
  };

  return [normalizeDateSegment(start), normalizeDateSegment(end)]
    .filter(Boolean)
    .join("-");
}

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
          ({ featured, id, company, title, dates, responsibilities }) => (
            <ExperienceItem
              featured={featured}
              key={`${id}`}
              company={company}
              title={title}
              dates={dates}
              mobileDates={formatMobileWorkExperienceDates(dates)}
              responsibilities={responsibilities}
            />
          )
        )}
      </div>
    </div>
  );
}
