import React from "react";
import Image from "next/image";
import { portfolioItems } from "@/app/util/const";

const Portfolio = () => {
  return (
    <>
      <div id="recent-work" className="smooth"></div>
      <div className="portfolio">
        <div className="container">
          <h1 className="title">
            <span className="gray">02</span> RECENT WORK
          </h1>
          <h2 className="subtitle">
            SELECTED PROJECTS. <a href="/portfolio">{"SEE MORE >"}</a>
          </h2>
          <div className="portfolio-carousel">
            {portfolioItems.map((item) => (
              <a key={item.title} className="portfolio-card" href="/portfolio">
                <Image
                  alt={item.title}
                  src={item.image}
                  width={420}
                  height={236}
                  sizes="(max-width: 767px) 280px, (max-width: 1199px) 280px, 420px"
                />
                <p className="portfolio-card-title">{item.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
