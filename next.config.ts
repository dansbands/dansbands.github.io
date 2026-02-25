import { execSync } from "child_process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BUILD_SHA: process.env.NEXT_PUBLIC_BUILD_SHA || execSync("git rev-parse --short HEAD").toString().trim() || "unknown",
    NEXT_PUBLIC_BUILD_TIME: process.env.NEXT_PUBLIC_BUILD_TIME || JSON.stringify(new Date().toLocaleString().trim()) || "unknown",
  },
};

export default nextConfig;
