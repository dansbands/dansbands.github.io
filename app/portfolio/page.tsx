import React from "react";
import Image from "next/image";
import yumble from "@/app/Media/Photos/yumble.png";
import boozer from "@/app/Media/Photos/boozer.png";
import toolshare from "@/app/Media/Photos/toolshare.png";
import danodeamedia from "@/app/Media/Photos/danodeamedia.png";
import ript from "@/app/Media/Photos/ript.png";
import fox from "@/app/Media/Photos/Fox Album Cover Alt2.jpg";
import dansbands from "@/app/Media/Photos/DansBands.png";
import PortfolioItem from "../components/portfolio/portfolio-item";

const Portfolio = () => {
  return (
    <>
      <div data-spy="scroll" data-target="#navbar-example">
        <div className="jumbotron" id="portfolio">
          <div className="main2">
            <div className="container">
              <PortfolioItem image={yumble} />
              <div className="row">
                <div className="col-md-6">
                  <Image
                    src={boozer}
                    width={380}
                    height={380}
                    alt="Boozer project screenshot"
                  />
                </div>
                <div className="col-md-4" id="boozer">
                  <h2>Boozer</h2>
                  <h3>ReactJS and Ruby on Rails web applicaton</h3>
                  <h6 style={{ color: "silver" }}>January 2018</h6>
                  <p className="p1">
                    Search our database of cocktails, save your favorites, and
                    update them with your own custom recipes
                  </p>
                  <span className="more-2" id="view">
                    ...Read More
                  </span>
                  <div className="p2-2">
                    <ul>
                      <li>+ Technologies: ReactJS, Ruby on Rails, AJAX, CSS</li>
                      <li>
                        + Extended Bootstrap with custom styles to build an
                        elegant, intuitive interface
                      </li>
                      <li>
                        + Enabled a shared library of cocktails while also
                        allowing unique customizations per user through data
                        modeling
                      </li>
                      <li>
                        + Used authorization and React Router to limit access to
                        authorized users
                      </li>
                    </ul>
                    <p>
                      <a
                        href="https://dansbands.github.io/boozer/"
                        target="_blank"
                        id="view"
                      >
                        Try it Live
                      </a>{" "}
                      |
                      <a
                        href="https://youtu.be/-FLpo7EFhxs"
                        target="_blank"
                        id="view"
                      >
                        Demo Video
                      </a>{" "}
                      |
                      <a
                        href="https://github.com/dansbands/boozer"
                        target="_blank"
                        id="view"
                      >
                        Front End Repo
                      </a>{" "}
                      |
                      <a
                        href="https://github.com/schung97/boozer-api-web-0716-web-103017"
                        target="_blank"
                        id="view"
                      >
                        Back End Repo
                      </a>
                      <br /> - Username: dansbands
                      <br />- Password: expertleveldrinker
                      <br />
                      <span className="less-2" id="view">
                        Show Less
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Image
                    src={toolshare}
                    width={380}
                    height={380}
                    alt="ToolShare project screenshot"
                  />
                </div>
                <div className="col-md-4" id="toolshare">
                  <h2>ToolShare</h2>
                  <h3>Ruby on Rails application</h3>
                  <h6 style={{ color: "silver" }}>December 2017</h6>
                  <p className="p1">
                    Bringing neglected power and hand tools to DIYing
                    city-dwellers who don’t have room for a tool shed. Long live
                    the sharing economy!
                  </p>
                  <span className="more-3" id="view">
                    ...Read More
                  </span>
                  <div className="p2-3">
                    <ul>
                      <li>+ Technologies: Ruby on Rails, CSS</li>
                      <li>
                        + Incorporated Bootstrap to give the application a
                        professionally-styled initial layout
                      </li>
                      <li>
                        + Employed Google Fonts to add font styling with a
                        unique feel
                      </li>
                      <li>
                        + Added custom CSS to give the application a uniquely
                        styled presentation
                      </li>
                    </ul>
                    <p>
                      <a
                        href="https://toolshareapp.herokuapp.com/"
                        target="_blank"
                        id="view"
                      >
                        Try it Live
                      </a>{" "}
                      |
                      <a
                        href="https://youtu.be/lpWzPtENQxo"
                        target="_blank"
                        id="view"
                      >
                        Demo Video
                      </a>{" "}
                      |
                      <a
                        href="https://github.com/pawlkris/toolshare"
                        target="_blank"
                        id="view"
                      >
                        Github Repo
                      </a>
                      <br /> - Username: dan@dan.com
                      <br />- Password: dandan
                      <br />
                      <span className="less-3" id="view">
                        Show Less
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Image
                    src={danodeamedia}
                    width={380}
                    height={380}
                    alt="Danodea Media project screenshot"
                  />
                </div>
                <div className="col-md-4" id="site">
                  <h2>This Website</h2>
                  <h3>Web Development</h3>
                  <h6 style={{ color: "silver" }}>May 2017</h6>
                  <p className="p1">
                    I built this site as a place to demonstrate my skills with
                    HTML5, CSS3, JavaScript and related libraries like jQuery.
                    The design is based on one I adapted from a template on
                    Wix.com, a drag-and-drop editor. You can{" "}
                    <a
                      id="view"
                      href="https://www.danodeamedia.com"
                      target="_blank"
                    >
                      view the original design
                    </a>{" "}
                    here.
                  </p>
                  <span className="more-4" id="view">
                    ...Read More
                  </span>
                  <p className="p2-4">
                    My initial goal was to rebuild my Wix site using purely the
                    development skills I had at the time. As it has progressed,
                    I have improved the experience by adding a fixed global
                    navigation element, and by repositioning content to
                    prioritize the needs of my users. I hope to continue to
                    demonstrate good User Experience principles through my
                    design as I learn new skills and attempt to incorporate
                    them. Keep in mind, it is a work in progress. Enjoy!
                    <br />
                    <span className="less-4" id="view">
                      Show Less
                    </span>
                  </p>
                </div>
              </div>
              <div className="row" id="even">
                <div className="col-md-6">
                  <Image
                    src={ript}
                    width={380}
                    height={380}
                    alt="Ript Fitness App screenshot"
                  />
                </div>
                <div className="col-md-4" id="ript">
                  <h2>Ript Fitness App</h2>
                  <h3>UX Portfolio Presentation</h3>
                  <h6 style={{ color: "silver" }}>February 2017</h6>
                  <p>
                    I created Ript as a solution for bodybuilders who need a
                    simple way to keep track of their workouts. This slideshow
                    will take you through my process from User Research through
                    Prototyping and Usability Testing.
                  </p>
                  <a
                    className="button"
                    href="Media/Photos/Portfolio Presentation - Ript.pdf"
                    target="_blank"
                  >
                    View Presentation
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Image
                    src={fox}
                    width={300}
                    height={300}
                    alt="Fox Album Cover"
                  />
                </div>
                <div className="col-md-4" id="old">
                  <h2>Old Favorites</h2>
                  <h3>Album Artwork</h3>
                  <h6 style={{ color: "silver" }}>April 2016</h6>
                  <p>
                    For my latest CD, &quot;Old Favorites&quot;, I did all of
                    the album artwork and layout.
                  </p>
                  <a className="button" href="#">
                    View Slideshow
                  </a>
                </div>
              </div>
              <div className="row" id="even">
                <div className="col-md-6">
                  <Image
                    src={dansbands}
                    width={300}
                    height={300}
                    alt="DansBands project screenshot"
                  />
                </div>
                <div className="col-md-4" id="web">
                  <h2>DansBands.com</h2>
                  <h3>Layout</h3>
                  <p>I did the layout for my music website.</p>
                  <a className="button" href="http://www.dansbands.com">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bottom-nav">
          <div className="container">
            <div className="row" id="navbar-example">
              <ul className="stubborn">
                <li>
                  <a href="index.html#home">
                    <img src="Media/Icons/Home.svg" />
                  </a>
                </li>
                <li>
                  <a href="index.html#professional">
                    <img src="Media/Icons/Professional.svg" />
                  </a>
                </li>
                <li>
                  <a href="index.html#portfolio">
                    <img src="Media/Icons/Portfolio.svg" />
                  </a>
                </li>
                <li>
                  <a href="index.html#contact">
                    <img src="Media/Icons/Contact.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <script src="JS/portfolio.js" type="text/javascript"></script> */}
      </div>
    </>
  );
};

export default Portfolio;
