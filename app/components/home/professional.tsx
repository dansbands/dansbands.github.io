"use client";

import React, { useRef, useEffect } from "react";

const techStack = [
  { label: "React", accent: true },
  { label: "TypeScript", accent: false },
  { label: "Next.js", accent: true },
  { label: "Node.js", accent: false },
  { label: "XState", accent: false },
  { label: "CSS Animations", accent: true },
  { label: "REST APIs", accent: false },
  { label: "System Design", accent: false },
  { label: "AI Integration", accent: true },
  { label: "Figma", accent: false },
];

const Professional = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const compositionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const composition = compositionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && composition) {
            composition.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="professional" ref={sectionRef}>
      <div id="professional" className="smooth"></div>
      <div className="container">
        <h1 className="title">
          <span className="gray">01</span> PROFESSIONAL
        </h1>
        <h2 className="subtitle">CORE TECHNOLOGIES IN SHIPPED WORK</h2>
        <div className="tech-motion-composition" ref={compositionRef}>
          {techStack.map((item, i) => (
            <span
              key={item.label}
              className={`tech-word${item.accent ? " accent" : ""}`}
              style={{ "--tech-delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professional;
