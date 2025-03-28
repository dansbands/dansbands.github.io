import React from 'react'
import FooterSubsection from './footer-subsection';
import { faBriefcase, faGear, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { education, icons, otherExperience, otherWork } from '../util/const';


function Footer() {
  return (
    <div className="footer-section">
      <FooterSubsection icon={faGraduationCap} data={education}>
        Education
      </FooterSubsection>
      <FooterSubsection icon={faBriefcase} data={otherWork}>
        Other Work
      </FooterSubsection>
      <FooterSubsection icon={faGear} icons={icons} otherExperience={otherExperience}>
        Skills
      </FooterSubsection>
    </div>
  );
}

export default Footer