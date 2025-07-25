import type { Metadata } from "next";
import "./styles.css";
import GlobalFooter from "./components/layout/global-footer";
import GlobalNav from "./components/layout/global-nav";
import Head from "./components/layout/head";

export const metadata: Metadata = {
  title: "Dan O'Dea Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body>
        <GlobalNav />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
