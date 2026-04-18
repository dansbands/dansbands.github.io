"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { homepageRecentWorkItems } from "@/app/util/const";

const Portfolio = () => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollRow = (direction: "next" | "prev") => {
    if (!rowRef.current) {
      return;
    }

    const cardWidth = rowRef.current.firstElementChild
      ? (rowRef.current.firstElementChild as HTMLElement).clientWidth
      : 320;
    const gap = 20;
    const delta = direction === "next" ? cardWidth + gap : -(cardWidth + gap);

    rowRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

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
          <div className="portfolio-controls" aria-hidden="true">
            <button className="carousel-btn" onClick={() => scrollRow("prev")} type="button">
              ←
            </button>
            <button className="carousel-btn" onClick={() => scrollRow("next")} type="button">
              →
            </button>
          </div>
          <div className="row" ref={rowRef}>
            {homepageRecentWorkItems.map((item) => (
              <a
                key={item.title}
                href={item.caseStudyUrl || "/portfolio"}
                className="recent-work-card"
              >
                <Image
                  alt={`${item.title} preview`}
                  src={item.image}
                  width={300}
                  height={300}
                  sizes="(max-width: 767px) 76vw, (max-width: 1199px) 260px, 300px"
                />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
