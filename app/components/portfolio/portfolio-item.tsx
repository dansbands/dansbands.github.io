"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface PortfolioItemProps {
  image: StaticImageData;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="row">
      <div className="col-md-6">
        <Image
          src={image}
          alt="Yumble project screenshot"
          width={380}
        />
      </div>
      <div className="col-md-4" id="yumble">
        <h2>Yumble</h2>
        <h3>
          ReactJS and Ruby on Rails web application with responsive design
        </h3>
        <h6 style={{ color: "silver" }}>February 2018</h6>
        <p className="p1">
          It’s like Bumble and Yelp had a baby - pick a dining partner and find
          a restaurant you’ll both love in minutes!
        </p>
        <div className={`p2-1 ${isExpanded ? "expanded" : "collapsed"}`}>
          <ul>
            <li>+ Technologies: ReactJS, Ruby on Rails, AJAX, CSS</li>
            <li>
              + Employed Responsive Design Principles to build a Mobile-First
              application that expands into an immersive Desktop Experience
            </li>
            <li>
              + Integrated the Yelp Business Search API to bring a wide array of
              restaurant data to users
            </li>
            <li>
              + Made use of Location Services to expedite the user’s onboarding
              process
            </li>
            <li>
              + Incorporated the swiping interactions and the “It’s a Match”
              modal to provide an authentic user experience.
            </li>
          </ul>
          <p>
            <a
              href="https://dansbands.github.io/yumble/"
              target="_blank"
              id="view"
            >
              Try it Live
            </a>{" "}
            |
            <a href="https://youtu.be/10hwYAqOaKw" target="_blank" id="view">
              Demo Video
            </a>{" "}
            |
            <a
              href="https://github.com/dansbands/yumble"
              target="_blank"
              id="view"
            >
              Front End Repo
            </a>{" "}
            |
            <a
              href="https://github.com/dansbands/yumble-backend"
              target="_blank"
              id="view"
            >
              Back End Repo
            </a>
            <br /> - Username: stormy
            <br />- Password: 123
            <br />
          </p>
        </div>
        <div
          onClick={() => setIsExpanded((prevState) => !prevState)}
          className="less-1"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
