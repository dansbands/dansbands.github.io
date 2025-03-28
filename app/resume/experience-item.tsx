import React from 'react'

interface ExperienceItemProps {
  featured: boolean;
  isFlexColumn?: boolean;
  key: string;
  company: string;
  title: string;
  dates: string;
  responsibilities: string[];
}

function ExperienceItem({
  featured,
  isFlexColumn,
  company,
  title,
  dates,
  responsibilities,
}: ExperienceItemProps) {
  return (
    <div className={featured ? "body-section" : "body-section-slim"}>
      <div className="section-header">
        <div
          className={
            !featured || isFlexColumn
              ? "section-header-left-column"
              : "section-header-left"
          }
        >
          <div className="company-name">{company}</div>
          <div className="job-title">{title}</div>
        </div>
        <div className={featured ? "" : "dates"}>{dates}</div>
      </div>
      <ul className="job-responsibilities">
        {responsibilities.map((resp) => (
          <li key={resp}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceItem