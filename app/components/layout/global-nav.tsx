'use client'

import Image from "next/image";
import React from "react";
import Favicon2 from "@/app/Media/favicon2.png";

const GlobalNav = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = document.getElementById(e.currentTarget.name);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="smooth" id="home">
      <div className="footer2">
        <div className="footer2-left">
          <Image
            alt="favicon"
            className="icon"
            src={Favicon2}
            height={40}
            width={40}
          />
        </div>
        <div className="footer2-center" id="navbar-example">
          <ul className="nav nav-pills green" role="tablist">
            <li>
              <button type="button" onClick={handleClick} name="home">
                HOME
              </button>
            </li>
            <li>
              <button type="button" onClick={handleClick} name="professional">
                PROFESSIONAL
              </button>
            </li>
            <li>
              <button type="button" onClick={handleClick} name="portfolio">
                PORTFOLIO
              </button>
            </li>
            <li>
              <button type="button" onClick={handleClick} name="contact">
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalNav;
