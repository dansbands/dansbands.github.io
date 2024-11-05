import React from 'react'

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="container">
        <div className="row" id="navbar-example2">
          <ul>
            <li>
              <a href="#home">
                Home
                {/* <img src="@/app/Media/Icons/Home.svg" /> */}
              </a>
            </li>
            <li>
              <a href="#professional">
                Pro
                {/* <img src="@/app/Media/Icons/Professional.svg" /> */}
              </a>
            </li>
            <li>
              <a href="#portfolio">
                Port
                {/* <img src="@/app/Media/Icons/Portfolio.svg" /> */}
              </a>
            </li>
            <li>
              <a href="#contact">
                Con
                {/* <img src="@/app/Media/Icons/Contact.svg" /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BottomNav