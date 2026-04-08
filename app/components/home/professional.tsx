"use client";

import React, { useRef, useEffect } from "react";

const techRow1 = [
  "React", "TypeScript", "Next.js", "Node.js", "Redux", "XState",
  "Express", "PostgreSQL", "MongoDB", "Figma", "CSS3", "HTML5",
];

const companyRow2 = [
  "TD Bank / TD Securities", "Care/of", "Comcast Business", "American Express",
  "AllSocial", "Attck / TimeRepublik", "Crane.ai",
];

const Professional = () => {
  const professionalRef = useRef<HTMLDivElement>(null);
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = professionalRef.current;
    const animationContainer = animationContainerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && animationContainer) {
            animationContainer.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <div className="professional" ref={professionalRef}>
      <div id="professional" className="smooth"></div>
      <div className="container">
        <h1 className="title">
          <span className="gray">01</span> PROFESSIONAL
        </h1>
        <h2 className="subtitle">CORE STACK &amp; EXPERIENCE</h2>
        <div className="visible-on-scroll" ref={animationContainerRef}>
          <div className="tech-ticker-wrap" aria-hidden="true">
            <div className="tech-ticker tech-ticker--forward">
              {[...techRow1, ...techRow1].map((label, i) => (
                <span key={i} className="tech-ticker-item">
                  <span className="tech-ticker-dot" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="tech-ticker-wrap tech-ticker-wrap--reverse" aria-hidden="true">
            <div className="tech-ticker tech-ticker--reverse">
              {[...companyRow2, ...companyRow2].map((label, i) => (
                <span key={i} className="tech-ticker-item tech-ticker-item--company">
                  <span className="tech-ticker-dot tech-ticker-dot--accent" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
