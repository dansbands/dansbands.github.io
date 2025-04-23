"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Favicon2 from "@/public/favicon2.png";
import "./global-nav.css";

const GlobalNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
    const element = document.getElementById(e.currentTarget.name);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <div className="smooth" id="home">
      <div className={`footer2`}>
        <Link href="/" className={"logo"}>
          <Image
            alt="favicon"
            className={"icon"}
            src={Favicon2}
            height={40}
            width={40}
          />
        </Link>
        <div className="footer2-container">
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
        <button
          className={`${"hamburger"} ${isDrawerOpen ? "open" : ""}`}
          onClick={toggleDrawer}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        className={`${"overlay"} ${isDrawerOpen ? "open" : ""}`}
        onClick={toggleDrawer}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleDrawer();
          }
        }}
      />
      <div className={`${"drawer"} ${isDrawerOpen ? "open" : ""}`} role="menu">
        <ul className={"green"} role="tablist">
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
            <Link href="portfolio" onClick={toggleDrawer}>
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="resume" onClick={toggleDrawer}>
              RESUME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalNav;
