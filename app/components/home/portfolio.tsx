"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { portfolioItems } from "@/app/util/const";

const CARD_GAP = 24;

const getPrimaryHref = (caseStudyUrl?: string) => caseStudyUrl ?? "/portfolio";

const Portfolio = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      setCanScrollPrev(track.scrollLeft > 4);
      setCanScrollNext(track.scrollLeft < maxScrollLeft - 4);
    };

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollCards = (direction: "prev" | "next") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>(".portfolio-card");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 320;
    const distance = cardWidth + CARD_GAP;

    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
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
          <div className="portfolio-carousel-shell">
            <div className="portfolio-carousel-copy">
              <p>
                The homepage now pulls directly from the same portfolio dataset,
                so project imagery stays in sync with the full Selected Work page.
              </p>
              <div className="portfolio-carousel-controls" aria-hidden="true">
                <button
                  type="button"
                  className="portfolio-carousel-button"
                  onClick={() => scrollCards("prev")}
                  disabled={!canScrollPrev}
                  aria-label="Scroll recent work backward"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="portfolio-carousel-button"
                  onClick={() => scrollCards("next")}
                  disabled={!canScrollNext}
                  aria-label="Scroll recent work forward"
                >
                  →
                </button>
              </div>
            </div>
            <div className="portfolio-track" ref={trackRef}>
              {portfolioItems.map((item) => (
                <article className="portfolio-card" key={item.title}>
                  <div className="portfolio-card-media">
                    <Image
                      alt={`${item.title} project screenshot`}
                      src={item.image}
                      fill
                      sizes="(max-width: 767px) 78vw, (max-width: 1199px) 44vw, 340px"
                    />
                  </div>
                  <div className="portfolio-card-body">
                    <div className="portfolio-card-meta">
                      <span>{item.section === "professional" ? "CASE STUDY" : "PROJECT"}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <div className="portfolio-card-actions">
                      <Link href={getPrimaryHref(item.caseStudyUrl)}>
                        {item.caseStudyUrl ? "Open Case Study" : "View Portfolio"}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
