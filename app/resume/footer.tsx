import React from 'react'
import FooterSubsection from './footer-subsection';
import { faBriefcase, faGear, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer-section">
      <FooterSubsection icon={faGraduationCap}>Education</FooterSubsection>
      <FooterSubsection icon={faBriefcase}>Other Work</FooterSubsection>
      <FooterSubsection icon={faGear}>Skills</FooterSubsection>
    </div>
  );
}

export default Footer