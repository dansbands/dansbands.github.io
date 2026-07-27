"use client";

import React, { useEffect, useRef, useState } from "react";

const capabilityPills = [
  "Frontend architecture",
  "Product-quality motion",
  "Accessible interaction systems",
  "Execution under complexity",
];

const orchestrationSteps = [
  "Problem framing",
  "Interaction model",
  "Validation states",
  "Delivery handoff",
];

const deliverySignals = [
  { label: "Flow clarity", value: "92%" },
  { label: "Accessibility pass", value: "AA" },
  { label: "UI consistency", value: "Systemized" },
];

const craftPoints = [
  "Complex forms and stateful product surfaces without sacrificing readability",
  "Design-aware implementation with disciplined spacing, hierarchy, and motion",
  "UI systems built to scale with product, content, and cross-functional delivery",
];

const Professional = () => {
  const professionalRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [canUsePointer, setCanUsePointer] = useState(false);

  useEffect(() => {
    const sectionElement = professionalRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
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
    if (typeof window === "undefined") {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateMotionPreferences = () => {
      setPrefersReducedMotion(reducedMotionQuery.matches);
      setCanUsePointer(pointerQuery.matches && !reducedMotionQuery.matches);
    };

    updateMotionPreferences();

    reducedMotionQuery.addEventListener("change", updateMotionPreferences);
    pointerQuery.addEventListener("change", updateMotionPreferences);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateMotionPreferences);
      pointerQuery.removeEventListener("change", updateMotionPreferences);
    };
  }, []);

  const updatePointerPosition = (clientX: number, clientY: number) => {
    const scene = sceneRef.current;

    if (!scene || !canUsePointer || prefersReducedMotion) {
      return;
    }

    const bounds = scene.getBoundingClientRect();
    const x = (clientX - bounds.left) / bounds.width - 0.5;
    const y = (clientY - bounds.top) / bounds.height - 0.5;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      scene.style.setProperty("--pointer-ratio-x", x.toFixed(3));
      scene.style.setProperty("--pointer-ratio-y", y.toFixed(3));
    });
  };

  const resetPointerPosition = () => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    scene.style.setProperty("--pointer-ratio-x", "0");
    scene.style.setProperty("--pointer-ratio-y", "0");
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
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
        <h2 className="subtitle">SYSTEMS, INTERACTIONS, AND DELIVERY AT PRODUCT SCALE</h2>
        <div className="professional-shell">
          <div className="professional-copy">
            <p className="professional-kicker">Senior frontend craft with product discipline</p>
            <p className="professional-lede">
              I build interfaces that stay calm under real complexity: multi-step flows,
              internal tooling, stateful product surfaces, and the motion detail needed to
              make them feel intentional instead of busy.
            </p>
            <div className="professional-pill-row">
              {capabilityPills.map((pill) => (
                <span key={pill} className="professional-pill">
                  {pill}
                </span>
              ))}
            </div>
            <ul className="professional-points">
              {craftPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div
            className={`professional-scene ${isVisible ? "is-visible" : ""} ${prefersReducedMotion ? "reduced-motion" : ""}`}
            ref={sceneRef}
            onPointerMove={(event) => updatePointerPosition(event.clientX, event.clientY)}
            onPointerLeave={resetPointerPosition}
          >
            <div className="professional-scene-grid" aria-hidden="true"></div>
            <div className="professional-scene-glow professional-scene-glow-one" aria-hidden="true"></div>
            <div className="professional-scene-glow professional-scene-glow-two" aria-hidden="true"></div>

            <article className="interface-panel interface-panel-primary">
              <span className="interface-panel-label">Workflow architecture</span>
              <h3>Complex UI systems, made legible</h3>
              <p>
                Layering validation, interaction states, and polished motion into interfaces
                that still read clearly to users and partners.
              </p>
              <div className="interface-steps">
                {orchestrationSteps.map((step, index) => (
                  <div key={step} className="interface-step">
                    <span>{`0${index + 1}`}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
            </article>

            <article className="interface-panel interface-panel-secondary">
              <span className="interface-panel-label">Release signals</span>
              <div className="signal-stack">
                {deliverySignals.map((signal) => (
                  <div key={signal.label} className="signal-row">
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                  </div>
                ))}
              </div>
            </article>

            <article className="interface-panel interface-panel-tertiary">
              <span className="interface-panel-label">Interface layers</span>
              <div className="surface-chip-row">
                <span>State</span>
                <span>Accessibility</span>
                <span>Motion</span>
                <span>Content systems</span>
              </div>
              <div className="surface-meter">
                <div className="surface-meter-track">
                  <div className="surface-meter-fill"></div>
                </div>
                <p>Shipping polish without adding noise</p>
              </div>
            </article>

            <article className="interface-panel interface-panel-quaternary">
              <span className="interface-panel-label">Execution pattern</span>
              <p>
                Product framing, code architecture, and visual finish handled as one system
                rather than three disconnected concerns.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
