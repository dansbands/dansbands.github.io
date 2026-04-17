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

const monthLookup: Record<string, string> = {
  january: "1",
  jan: "1",
  february: "2",
  feb: "2",
  march: "3",
  mar: "3",
  april: "4",
  apr: "4",
  may: "5",
  june: "6",
  jun: "6",
  july: "7",
  jul: "7",
  august: "8",
  aug: "8",
  september: "9",
  sep: "9",
  sept: "9",
  october: "10",
  oct: "10",
  november: "11",
  nov: "11",
  december: "12",
  dec: "12",
};

function formatMobileDates(dates: string) {
  const parts = dates.split("-").map((part) => part.trim());

  if (parts.length !== 2) {
    return dates;
  }

  const formatPart = (value: string) => {
    if (/^present$/i.test(value)) {
      const now = new Date();
      return `${now.getMonth() + 1}/${String(now.getFullYear()).slice(-2)}`;
    }

    const [monthToken, yearToken] = value.split(/\s+/);
    const month = monthLookup[monthToken?.toLowerCase() ?? ""];

    if (!month || !/^\d{4}$/.test(yearToken ?? "")) {
      return value;
    }

    return `${month}/${yearToken.slice(-2)}`;
  };

  return `${formatPart(parts[0])}-${formatPart(parts[1])}`;
}

function ExperienceItem({
  featured,
  isFlexColumn,
  company,
  title,
  dates,
  responsibilities,
}: ExperienceItemProps) {
  const mobileDates = formatMobileDates(dates);

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
          <div className="section-header-top-row">
            <div className="company-name">{company}</div>
            <div className={featured ? "dates" : "dates dates-slim"}>
              <span className="dates-desktop">{dates}</span>
              <span className="dates-mobile">{mobileDates}</span>
            </div>
          </div>
          <div className="job-title">{title}</div>
        </div>
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