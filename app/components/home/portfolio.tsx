import React from "react";
import Album from '@/app/Media/Photos/Fox Album Cover Alt2.jpg';
import Ript from '@/app/Media/Photos/Ript Portfolio Icon.png';
import Dansbands from '@/app/Media/Photos/dansbands icon.png';
import Image from "next/image";


const Portfolio = () => {
  return (
    <>
      <div id="recent-work" className="smooth"></div>
      <div className="portfolio">
        <div className="container">
          <h1 className="title">
            <span className="gray">02</span> RECENT WORK
          </h1>
          <h2 className="subtitle">
            MY LATEST PROJECTS. <a href="portfolio">{"SEE MORE >"}</a>
          </h2>
          <div className="row">
            <Image alt="Album" src={Album} width="300" />
            <Image alt="Ript" src={Ript} width="300" />
            <Image alt="Dansbands" src={Dansbands} width="300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
