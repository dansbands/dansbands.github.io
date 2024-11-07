'use client'

import React from "react";
import Home from "@/app/Media/Icons/Home.svg";
import Professional from "@/app/Media/Icons/Professional.svg";
import Portfolio from "@/app/Media/Icons/Portfolio.svg";
import Contact from "@/app/Media/Icons/Contact.svg";
import Image from "next/image";

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
                <Image alt="Home" src={Home} width={40} />
              </button>
            </li>
            <li>
              <button type="button" name="professional" onClick={handleClick}>
                <Image alt="Professional" src={Professional} width={40} />
              </button>
            </li>
            <li>
              <button type="button" name="portfolio" onClick={handleClick}>
                <Image alt="Portfolio" src={Portfolio} width={40} />
              </button>
            </li>
            <li>
              <button type="button" name="contact" onClick={handleClick}>
                <Image alt="Contact" src={Contact} width={40} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
