import React from "react";

const Welcome = () => {
  return (
    <div className="welcome-outer">
      <div className="welcome">
        <div className="container" id="welcome">
          <img src="Media/Favicon2.png" />
          <h1>Welcome to my site. </h1>
          <h1>
            I strive to create beautiful interfaces that are intuitive and
            enjoyable to use.
          </h1>
          <h2>Feel free to have a look around.</h2>
          <a className="btn" href="portfolio.html">
            Recent Work
          </a>
          <a
            className="btn"
            href="Media/Resume%20-%20Dan%20ODea.pdf"
            target="_blank"
          >
            Résumé
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
