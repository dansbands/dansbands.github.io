"use client";

import Image from "next/image";
import React from "react";
import Favicon2 from "@/app/Media/favicon2.png";
import Link from "next/link";

const GlobalNav = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.location.pathname != "/") {
      window.location.href = "/";
    }
    const element = document.getElementById(e.currentTarget.name);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="smooth" id="home">
      <div className="footer2">
        <Link href="/" className="footer2-left">
          <Image
            alt="favicon"
            className="icon"
            src={Favicon2}
            height={40}
            width={40}
          />
        </Link>
        <div className="footer2-center" id="navbar-example">
          <ul className="green" role="tablist">
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
              <button type="button" onClick={handleClick} name="recent-work">
                RECENT WORK
              </button>
            </li>
            <li>
              <button type="button" onClick={handleClick} name="contact">
                CONTACT
              </button>
            </li>
            <li>
              <Link href="portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="resume">RESUME</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalNav;
