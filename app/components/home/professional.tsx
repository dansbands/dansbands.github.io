"use client";

import React, { useRef, useEffect, useState } from "react";

const panels = [
  { eyebrow: "System Architecture", title: "Composable component model", stat: "32 reusable UI patterns" },
  { eyebrow: "Interaction Design", title: "Accessible motion + meaningful states", stat: "Lighthouse a11y 100" },
  { eyebrow: "Delivery Velocity", title: "Fast iteration with stable code paths", stat: "Release-ready slices in days" },
  { eyebrow: "Product Thinking", title: "UX precision tied to business outcomes", stat: "Clear goals, measurable impact" },
];

const Professional = () => {
  const professionalRef = useRef<HTMLDivElement>(null);
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

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
      { threshold: 0.4 }
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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);
    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !animationContainerRef.current) {
      return;
    }

    const bounds = animationContainerRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    animationContainerRef.current.style.setProperty("--pointer-x", `${x.toFixed(4)}`);
    animationContainerRef.current.style.setProperty("--pointer-y", `${y.toFixed(4)}`);
  };

  const handlePointerLeave = () => {
    if (!animationContainerRef.current) {
      return;
    }
    animationContainerRef.current.style.setProperty("--pointer-x", "0");
    animationContainerRef.current.style.setProperty("--pointer-y", "0");
  };

  return (
    <div className="professional" ref={professionalRef}>
      <div id="professional" className="smooth"></div>
      <div className="container">
        <h1 className="title">
          <span className="gray">01</span> PROFESSIONAL
        </h1>
        <h2 className="subtitle">PRODUCT-QUALITY FRONTEND EXECUTION</h2>
        <p className="professional-copy">
          I design and ship resilient interfaces where architecture, interaction details,
          and implementation quality all support measurable product outcomes.
        </p>
        <div
          className={`visible-on-scroll professional-scene${reduceMotion ? " reduced-motion" : ""}`}
          ref={animationContainerRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div className="scene-grid" aria-hidden="true"></div>
          <div className="scene-glow scene-glow-one" aria-hidden="true"></div>
          <div className="scene-glow scene-glow-two" aria-hidden="true"></div>
          <div className="professional-panels">
            {panels.map((panel, index) => (
              <article
                key={panel.eyebrow}
                className="professional-panel"
                style={
                  {
                    "--depth": `${8 + index * 5}`,
                    "--delay": `${index * 90}ms`,
                  } as React.CSSProperties
                }
              >
                <p>{panel.eyebrow}</p>
                <h3>{panel.title}</h3>
                <span>{panel.stat}</span>
              </article>
            ))}
          </div>
          <div className="scene-footer">
            <span>React + TypeScript + Next.js</span>
            <span>Accessibility-first motion</span>
            <span>Optimized for desktop and mobile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
