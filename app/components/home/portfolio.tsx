import React from "react";
import Image from "next/image";
import { portfolioItems } from "@/app/util/const";

const featuredItems = portfolioItems.slice(0, 3);

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
          <div className="recent-work-grid">
            {featuredItems.map((item) => (
              <a
                key={item.title}
                href="/portfolio"
                className="recent-work-card"
                aria-label={`View ${item.title}`}
              >
                <div className="recent-work-card-image">
                  <Image
                    alt={`${item.title} project screenshot`}
                    src={item.image}
                    width={300}
                    height={300}
                    sizes="(max-width: 767px) 200px, (max-width: 1199px) 200px, 300px"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div className="recent-work-card-info">
                  <p className="recent-work-card-title">{item.title}</p>
                  <p className="recent-work-card-subtitle">{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
