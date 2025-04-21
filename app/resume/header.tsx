import Image from "next/image";
import SantoriniCircle from "../Media/Photos/Santorini Circle.png";
import "./resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faPhone,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <div className="resume-header">
        <div className="resume-header-left">
          <Image alt="dan pic" src={SantoriniCircle} width={114} />
          <div className="resume-header-left-text">
            <h1>Dan</h1>
            <h1>O&apos;Dea</h1>
          </div>
        </div>
        <div className="resume-header-right">
          <h2>Senior Front End Engineer</h2>
          <h3>My Unique Experience is Exactly What You Need</h3>
        </div>
      </div>
      <div className="resume-subheader">
        <div className="subheader-section">
          <div className="subheader-section-content">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <a href="mailto:danodeawebdev@gmail.com">danodeawebdev@gmail.com</a>
          </div>
        </div>
        <div className="subheader-section">
          <div className="subheader-section-content">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <a href="https://dansbands.github.io">dansbands.github.io</a>
          </div>
        </div>
        <div className="subheader-section">
          <div className="subheader-section-content">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <a href="tel:+19734864884">973-486-4884</a>
          </div>
        </div>
        <div className="subheader-section">
          <div className="subheader-section-content">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <a href="https://linkedin.com/in/dan-odea">
              linkedin.com/in/dan-odea
            </a>
          </div>
        </div>
        <div className="subheader-section">
          <div className="subheader-section-content">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <a href="https://www.github.com/dansbands">github.com/dansbands</a>
          </div>
        </div>
        <div className="subheader-section">
          <div className="subheader-section-content">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <a href="/resume">Jersey City, NJ</a>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}
