import type { Metadata } from "next";
import "./styles.css";
import GlobalFooter from "./components/layout/global-footer";
import GlobalNav from "./components/layout/global-nav";
import BuildInfoLogger from "./components/layout/build-info-logger";

export const metadata: Metadata = {
  title: "Dan O'Dea Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const buildSha = process.env.NEXT_PUBLIC_BUILD_SHA ?? "unknown";
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME ?? "unknown";

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta charSet="UTF-8" />
        <meta name="build:sha" content={buildSha} />
        <meta name="build:time" content={buildTime} />
        <link rel="icon" type="image/png" href="/Favicon3.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Favicon3.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Favicon3.png" />
        <link rel="apple-touch-icon" href="/Favicon3.png" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
      </head>
      <body>
        <GlobalNav />
        {children}
        <GlobalFooter />
        <BuildInfoLogger />
      </body>
    </html>
  );
}
