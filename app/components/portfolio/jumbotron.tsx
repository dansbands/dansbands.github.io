import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron" id="portfolio">
      <div className="main2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image src="Media/Photos/yumble.png" alt="Yumble" width={380} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
