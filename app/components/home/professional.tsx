import React from "react";

const Professional = () => {
  return (
    <div className="professional">
      <div id="professional" className="smooth"></div>
      <div className="container">
        <h1 className="title">
          <span className="gray">01</span> PROFESSIONAL
        </h1>
        <h2 className="subtitle">MY KNOWLEDGE LEVEL IN SOFTWARE</h2>
        <div className="center" id="scroll">
          <div id="skills">
            <div id="apps">
              <p>Sketch</p>
              <p>InVision</p>
              <p>Photoshop</p>
              <p>Illustrator</p>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
            </div>

            <div className="grid">
              <div className="bar pct-95">
                <div className="inner"></div>
                <div className="right">
                  <p>95%</p>
                </div>
              </div>
              <div className="bar pct-95">
                <div className="inner2"></div>
                <div className="right">
                  <p>95%</p>
                </div>
              </div>
              <div className="bar pct-95">
                <div className="inner3"></div>
                <div className="right">
                  <p>95%</p>
                </div>
              </div>
              <div className="bar pct-85">
                <div className="inner"></div>
                <div className="right">
                  <p>85%</p>
                </div>
              </div>
              <div className="bar pct-95">
                <div className="inner3"></div>
                <div className="right">
                  <p>95%</p>
                </div>
              </div>
              <div className="bar pct-95">
                <div className="inner2"></div>
                <div className="right">
                  <p>95%</p>
                </div>
              </div>
              <div className="bar pct-85">
                <div className="inner"></div>
                <div className="right">
                  <p>85%</p>
                </div>
              </div>

              <div className="v-divider one"></div>
              <div className="v-divider two"></div>
              <div className="v-divider three"></div>

              <div id="scale">
                <p className="zero">0%</p>
                <p className="one">25%</p>
                <p className="two">50%</p>
                <p className="three">75%</p>
                <p className="four">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
