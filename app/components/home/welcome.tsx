import React from "react";
import Favicon2 from "@/app/Media/Favicon2.png";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="welcome-outer">
      <div className="welcome">
        <div className="container" id="welcome">
          <Image src={Favicon2} alt="favicon" height={140} width={140} />
          <p>
            I build AI-powered products end to end — architecture,
            implementation, and shipping.
          </p>
          <p>
            Senior engineer with a track record at TD Bank, Comcast, and
            American Express.
          </p>
          <a className="btn" href="portfolio">
            Recent Work
          </a>
          <a
            className="btn"
            href="/resume"
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
