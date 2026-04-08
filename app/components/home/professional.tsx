"use client";

import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faSitemap, faRobot } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faFigma } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { StaticImageData } from "next/image";
import ReactIcon from "@/app/Media/Icons/React.svg";
import TypeScriptIcon from "@/app/Media/Icons/TypeScript.svg";
import NextIcon from "@/app/Media/Icons/Next.svg";
import NodeIcon from "@/app/Media/Icons/Node.svg";
import XStateIcon from "@/app/Media/Icons/xState.svg";

type ImgTechItem = {
  label: string;
  accent: boolean;
  kind: "img";
  src: StaticImageData;
};
type FaTechItem = {
  label: string;
  accent: boolean;
  kind: "fa";
  icon: IconDefinition;
};
type TechItem = ImgTechItem | FaTechItem;

const techStack: TechItem[] = [
  { label: "React", kind: "img", src: ReactIcon as StaticImageData, accent: true },
  { label: "TypeScript", kind: "img", src: TypeScriptIcon as StaticImageData, accent: false },
  { label: "Next.js", kind: "img", src: NextIcon as StaticImageData, accent: true },
  { label: "Node.js", kind: "img", src: NodeIcon as StaticImageData, accent: false },
  { label: "XState", kind: "img", src: XStateIcon as StaticImageData, accent: false },
  { label: "CSS Animations", kind: "fa", icon: faCss3Alt, accent: true },
  { label: "REST APIs", kind: "fa", icon: faServer, accent: false },
  { label: "System Design", kind: "fa", icon: faSitemap, accent: false },
  { label: "AI Integration", kind: "fa", icon: faRobot, accent: true },
  { label: "Figma", kind: "fa", icon: faFigma, accent: false },
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
            <div
              key={item.label}
              className={`tech-card${item.accent ? " accent" : ""}`}
              style={{ "--tech-delay": `${i * 0.07}s` } as React.CSSProperties}
            >
              <div className="tech-card-icon">
                {item.kind === "img" ? (
                  <img src={item.src.src} alt={item.label} />
                ) : (
                  <FontAwesomeIcon icon={item.icon} />
                )}
              </div>
              <span className="tech-card-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professional;
