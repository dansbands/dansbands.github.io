"use client";

import { useEffect } from "react";

const SCROLL_KEY = "portfolioScrollY";

/** Restores the portfolio scroll position saved before navigating to a case study. */
const ScrollRestorer = () => {
  useEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved !== null) {
      sessionStorage.removeItem(SCROLL_KEY);
      const top = Number(saved);
      if (Number.isFinite(top)) {
        window.scrollTo({ top, behavior: "auto" });
      }
    }
  }, []);

  return null;
};

export { SCROLL_KEY };
export default ScrollRestorer;
