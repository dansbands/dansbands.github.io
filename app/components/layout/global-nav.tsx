"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Favicon2 from "@/public/Favicon2.png";
import "./global-nav.css";

const GlobalNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) {
        return;
      }

      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const updateViewportState = (event?: MediaQueryListEvent) => {
      setIsMobileViewport(event ? event.matches : mediaQuery.matches);
    };

    updateViewportState();
    mediaQuery.addEventListener("change", updateViewportState);

    return () => {
      mediaQuery.removeEventListener("change", updateViewportState);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetId = e.currentTarget.name;

    if (pathname !== "/") {
      router.push(`/#${targetId}`);
      setIsDrawerOpen(false);
      return;
    }

    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  if (pathname === "/resume" && isMobileViewport) {
    return null;
  }

  return (
    <div className="smooth" id="home">
      <div className={`footer2 ${isScrolled ? "is-scrolled" : ""}`.trim()}>
        <Link href="/" className={"logo"}>
          <Image
            alt="favicon"
            className={"icon"}
            src={Favicon2}
            height={40}
            width={40}
          />
        </Link>
        <div className="footer2-container">
          <div className="footer2-center" id="navbar-example">
            <ul className="green" role="tablist">
              <li>
                <button type="button" onClick={handleClick} name="home">
                  HOME
                </button>
              </li>
              <li>
                <button type="button" onClick={handleClick} name="professional">
                  PROFESSIONAL
                </button>
              </li>
              <li>
                <button type="button" onClick={handleClick} name="recent-work">
                  RECENT WORK
                </button>
              </li>
              <li>
                <button type="button" onClick={handleClick} name="contact">
                  CONTACT
                </button>
              </li>
              <li>
                <Link href="/portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <Link href="/resume">RESUME</Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          className={`${"hamburger"} ${isDrawerOpen ? "open" : ""}`}
          onClick={toggleDrawer}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        className={`${"overlay"} ${isDrawerOpen ? "open" : ""}`}
        onClick={toggleDrawer}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleDrawer();
          }
        }}
      />
      <div className={`${"drawer"} ${isDrawerOpen ? "open" : ""}`} role="menu">
        <ul className={"green"} role="tablist">
          <li>
            <button type="button" onClick={handleClick} name="home">
              HOME
            </button>
          </li>
          <li>
            <button type="button" onClick={handleClick} name="professional">
              PROFESSIONAL
            </button>
          </li>
          <li>
            <button type="button" onClick={handleClick} name="recent-work">
              RECENT WORK
            </button>
          </li>
          <li>
            <button type="button" onClick={handleClick} name="contact">
              CONTACT
            </button>
          </li>
          <li>
            <Link href="/portfolio" onClick={toggleDrawer}>
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/resume" onClick={toggleDrawer}>
              RESUME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalNav;
