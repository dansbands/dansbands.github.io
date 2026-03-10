import React from "react";
import FooterSubsection from "./footer-subsection";
import {
  faBriefcase,
  faGear,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { education, icons, leadershipAndInfluence, otherExperience, otherWork } from "../util/const";

function Footer() {
  return (
    <div className="footer-section">
      <FooterSubsection icon={faBriefcase} data={otherWork}>
        Other Work
      </FooterSubsection>
      <FooterSubsection icon={faGraduationCap} data={education}>
        Education
      </FooterSubsection>     
       <FooterSubsection icon={faGraduationCap} data={leadershipAndInfluence}>
        Leadership and Influence
      </FooterSubsection>
      <FooterSubsection
        icon={faGear}
        icons={icons}
        otherExperience={otherExperience}
      >
        Skills
      </FooterSubsection>
    </div>
  );
}

export default Footer;
