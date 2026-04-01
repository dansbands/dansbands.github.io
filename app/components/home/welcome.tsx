import React from "react";
import Favicon2 from "@/app/Media/Favicon2.png";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="welcome-outer">
      <div className="welcome">
        <div className="container" id="welcome">
          <Image src={Favicon2} alt="favicon" height={140} width={140} />
          <h2>Applied AI • Product delivery</h2>
          <p className="welcome-copy">
            I turn ambiguous product ideas into clear, shippable systems with
            strong UX and maintainable implementation. I focus on AI-assisted
            workflows, product-quality interfaces, and scoped delivery that is
            clear to maintain. Start with selected work to see how I frame
            problems, make tradeoffs, and ship usable systems.
          </p>
          <div className="welcome-actions">
            <a className="btn" href="/portfolio">
              Selected Work
            </a>
            <a
              className="btn"
              href="/resume"
              rel="noreferrer"
            >
              Résumé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
