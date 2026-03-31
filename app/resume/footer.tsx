import React from "react";
import FooterSubsection from "./footer-subsection";
import {
  faBriefcase,
  faGear,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { education, icons, leadershipAndInfluence, otherExperience, otherWork } from "../util/const";

type FooterProps = {
  activeSection: string | null;
  onToggleSection: (sectionId: string) => void;
};

function Footer({ activeSection, onToggleSection }: FooterProps) {
  return (
    <div className="footer-section">
      <FooterSubsection
        icon={faBriefcase}
        data={otherWork}
        isCollapsed={activeSection !== "other-work"}
        onToggle={() => onToggleSection("other-work")}
      >
        Other Work
      </FooterSubsection>
      <FooterSubsection
        icon={faGraduationCap}
        data={education}
        isCollapsed={activeSection !== "education"}
        onToggle={() => onToggleSection("education")}
      >
        Education
      </FooterSubsection>
      <FooterSubsection
        icon={faGraduationCap}
        data={leadershipAndInfluence}
        isCollapsed={activeSection !== "leadership-and-influence"}
        onToggle={() => onToggleSection("leadership-and-influence")}
      >
        Leadership and Influence
      </FooterSubsection>
      <FooterSubsection
        icon={faGear}
        icons={icons}
        otherExperience={otherExperience}
        isCollapsed={activeSection !== "skills"}
        onToggle={() => onToggleSection("skills")}
      >
        Skills
      </FooterSubsection>
    </div>
  );
}

export default Footer;
