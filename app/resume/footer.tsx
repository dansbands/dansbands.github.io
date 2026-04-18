import React from "react";
import FooterSubsection from "./footer-subsection";
import {
  faBuilding,
  faCompass,
  faGear,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { education, icons, leadershipAndInfluence, otherExperience, otherWork } from "../util/const";

type FooterProps = {
  activeSection: string | null;
  onToggleSection: (sectionId: string, sectionHeader: HTMLDivElement) => void;
};

function Footer({ activeSection, onToggleSection }: FooterProps) {
  return (
    <div className="footer-section">
      <FooterSubsection
        icon={faBuilding}
        data={otherWork}
        isCollapsed={activeSection !== "other-work"}
        onToggle={(sectionHeader) => onToggleSection("other-work", sectionHeader)}
      >
        Other Work
      </FooterSubsection>
      <FooterSubsection
        icon={faGraduationCap}
        data={education}
        isCollapsed={activeSection !== "education"}
        onToggle={(sectionHeader) => onToggleSection("education", sectionHeader)}
      >
        Education
      </FooterSubsection>
      <FooterSubsection
        icon={faCompass}
        data={leadershipAndInfluence}
        isCollapsed={activeSection !== "leadership-and-influence"}
        onToggle={(sectionHeader) =>
          onToggleSection("leadership-and-influence", sectionHeader)
        }
      >
        Leadership and Influence
      </FooterSubsection>
      <FooterSubsection
        icon={faGear}
        icons={icons}
        otherExperience={otherExperience}
        isCollapsed={activeSection !== "skills"}
        onToggle={(sectionHeader) => onToggleSection("skills", sectionHeader)}
      >
        Skills
      </FooterSubsection>
    </div>
  );
}

export default Footer;
