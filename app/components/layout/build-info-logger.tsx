"use client";

import { useEffect } from "react";

export default function BuildInfoLogger() {
  useEffect(() => {
    const shaFromMeta = document
      .querySelector<HTMLMetaElement>('meta[name="build:sha"]')
      ?.getAttribute("content");
    const timeFromMeta = document
      .querySelector<HTMLMetaElement>('meta[name="build:time"]')
      ?.getAttribute("content");

    const sha =
      shaFromMeta ?? process.env.NEXT_PUBLIC_BUILD_SHA ?? "unknown";
    const time =
      timeFromMeta ?? process.env.NEXT_PUBLIC_BUILD_TIME ?? "unknown";

    // Useful for confirming exactly what's deployed.
    console.log(`[build] sha=${sha} time=${time}`);
  }, []);

  return null;
}
