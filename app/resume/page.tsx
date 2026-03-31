"use client";

import { useState } from "react";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(
    null
  );

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = "Dan O'Dea Resume";
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 500);
  };

  const scrollSectionHeaderIntoView = (sectionHeader: HTMLDivElement) => {
    window.setTimeout(() => {
      const headerOffset = 50;
      const scrollTarget =
        sectionHeader.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(scrollTarget, 0),
        behavior: "smooth",
      });
    }, 300);
  };

  const toggleMobileSection = (
    sectionId: string,
    sectionHeader: HTMLDivElement
  ) => {
    setActiveMobileSection((currentSection) =>
      currentSection === sectionId ? null : sectionId
    );
    scrollSectionHeaderIntoView(sectionHeader);
  };

  return (
    <>
      <div className="print-container">
        <button className="print-button" onClick={handlePrint}>
          Print Resume
          <FontAwesomeIcon icon={faPrint} className="icon-margin-left" />
        </button>
      </div>
      <div className="resume">
        <div className="resume-frame">
          <Header
            isContactCollapsed={activeMobileSection !== "contact"}
            onToggleContact={(sectionHeader) =>
              toggleMobileSection("contact", sectionHeader)
            }
          />
          <Body
            isExperienceCollapsed={activeMobileSection !== "work-experience"}
            onToggleExperience={(sectionHeader) =>
              toggleMobileSection("work-experience", sectionHeader)
            }
          />
          <Footer
            activeSection={activeMobileSection}
            onToggleSection={toggleMobileSection}
          />
        </div>
      </div>
    </>
  );
}
