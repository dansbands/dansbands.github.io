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

  const toggleMobileSection = (sectionId: string) => {
    setActiveMobileSection((currentSection) =>
      currentSection === sectionId ? null : sectionId
    );
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
            onToggleContact={() => toggleMobileSection("contact")}
          />
          <Body
            isExperienceCollapsed={activeMobileSection !== "work-experience"}
            onToggleExperience={() => toggleMobileSection("work-experience")}
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
