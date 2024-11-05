import React from "react";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="smooth"></div>
      <div className="portfolio">
        <div className="container">
          <h1 className="title">
            <span className="gray">02</span> PORTFOLIO
          </h1>
          <h2 className="subtitle">
            MY LATEST WORK. <a href="portfolio.html">{"SEE MORE >"}</a>
          </h2>
          <div className="row">
            <img src="Media/Photos/Fox Album Cover Alt2.jpg" width="300" />
            <img src="Media/Photos/Ript Portfolio Icon.png" width="300" />
            <img src="Media/Photos/dansbands icon.png" width="300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
