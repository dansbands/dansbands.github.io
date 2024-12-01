"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const BottomNav = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = document.getElementById(e.currentTarget.name);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bottom-nav">
      <div className="container">
        <div className="row" id="navbar-example2">
          <ul>
            <li>
              <button type="button" name="home" onClick={handleClick}>
                <FontAwesomeIcon icon={faHouse} />
              </button>
            </li>
            <li>
              <button type="button" name="professional" onClick={handleClick}>
                <FontAwesomeIcon icon={faCode} />
              </button>
            </li>
            <li>
              <button type="button" name="portfolio" onClick={handleClick}>
                <FontAwesomeIcon icon={faBriefcase} />
              </button>
            </li>
            <li>
              <button type="button" name="contact" onClick={handleClick}>
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
