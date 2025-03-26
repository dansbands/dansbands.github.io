import React from "react";
import Image from "next/image";
import ript from "@/app/Media/Photos/ript.png";
import fox from "@/app/Media/Photos/Fox Album Cover Alt2.jpg";
import dansbands from "@/app/Media/Photos/DansBands.png";

interface PortfolioOldProps {
  display: boolean;
}

const PortfolioOld: React.FC<PortfolioOldProps> = ({ display }) => {
  if (!display) {
    return null;
  }
  
  return (
    <>
      <div className="row" id="even">
        <div className="col-md-6">
          <Image
            src={ript}
            width={380}
            height={380}
            alt="Ript Fitness App screenshot"
          />
        </div>
        <div className="col-md-4" id="ript">
          <h2>Ript Fitness App</h2>
          <h3>UX Portfolio Presentation</h3>
          <h6 style={{ color: "silver" }}>February 2017</h6>
          <p>
            I created Ript as a solution for bodybuilders who need a simple way
            to keep track of their workouts. This slideshow will take you
            through my process from User Research through Prototyping and
            Usability Testing.
          </p>
          <a
            className="button"
            href="Media/Photos/Portfolio Presentation - Ript.pdf"
            target="_blank"
          >
            View Presentation
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Image src={fox} width={300} height={300} alt="Fox Album Cover" />
        </div>
        <div className="col-md-4" id="old">
          <h2>Old Favorites</h2>
          <h3>Album Artwork</h3>
          <h6 style={{ color: "silver" }}>April 2016</h6>
          <p>
            For my latest CD, &quot;Old Favorites&quot;, I did all of the album
            artwork and layout.
          </p>
          <a className="button" href="#">
            View Slideshow
          </a>
        </div>
      </div>
      <div className="row" id="even">
        <div className="col-md-6">
          <Image
            src={dansbands}
            width={300}
            height={300}
            alt="DansBands project screenshot"
          />
        </div>
        <div className="col-md-4" id="web">
          <h2>DansBands.com</h2>
          <h3>Layout</h3>
          <p>I did the layout for my music website.</p>
          <a className="button" href="http://www.dansbands.com">
            Visit Site
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioOld;
