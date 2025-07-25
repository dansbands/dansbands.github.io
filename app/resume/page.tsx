"use client";

import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = "Dan O'Dea Resume";
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 500);
  };

  return (
    <>
      <div className="print-container">
        <button className="print-button" onClick={handlePrint}>
          Print Resume
          <FontAwesomeIcon icon={faPrint} className="icon-margin-left" />
        </button>
      </div>
      <div className="resume">
        <div className="resume-frame">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}
