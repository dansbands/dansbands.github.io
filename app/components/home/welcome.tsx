import React from "react";
import Favicon2 from "@/app/Media/favicon2.png";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="welcome-outer">
      <div className="welcome">
        <div className="container" id="welcome">
          <Image src={Favicon2} alt="favicon" height={140} width={140} />
          <p>Welcome to my site. </p>
          <p>
            I strive to create beautiful interfaces that are intuitive and
            enjoyable to use.
          </p>
          <p>Feel free to have a look around.</p>
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
