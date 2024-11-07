import Image from "next/image";
import React from "react";
import Favicon from "@/app/Media/favicon2.png";

const GlobalFooter = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Image
          alt="favicon"
          className="icon"
          src={Favicon}
          height={40}
          width={40}
        />
      </div>
      <div className="footer-center">
        <p>{"© 2024 by Dan O'Dea"}</p>
      </div>
    </div>
  );
};

export default GlobalFooter;
