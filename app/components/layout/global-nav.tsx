import Image from "next/image";
import React from "react";
import Favicon2 from "@/app/Media/favicon2.png";

const GlobalNav = () => {
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
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="index.html#professional">PROFESSIONAL</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="index.html">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalNav;
