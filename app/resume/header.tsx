import Image from "next/image";
import SantoriniCircle from "../Media/Photos/Santorini Circle.png";
import "./resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <div className="resume-header">
        <div className="resume-header-left">
          <Image alt="dan pic" src={SantoriniCircle} width={114} />
        </div>
        <div className="resume-header-center">
          <h1>Dan O&apos;Dea</h1>
        </div>
        <div className="resume-header-right">
          <h2>Senior Front End Engineer</h2>
          <h3>My Unique Experience is Exactly What You Need</h3>
        </div>
      </div>
      <div className="resume-subheader-1">
        <div className="subheader-section">
          <div className="icon-circle">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <span>danodeawebdev@gmail.com</span>
        </div>
        <div className="subheader-section">
          <div className="icon-circle">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <span>danodeamedia.com</span>
        </div>
        <div className="subheader-section">
          <div className="icon-circle">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <span>973-486-4884</span>
        </div>
      </div>
      <div className="resume-subheader-2">
        <div className="subheader-section">
          <div className="icon-circle">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <span>linkedin.com/in/dan-odea</span>
        </div>
        <div className="subheader-section">
          <div className="icon-circle">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <span>github.com/dansbands</span>
        </div>
      </div>
    </>
  );
}
