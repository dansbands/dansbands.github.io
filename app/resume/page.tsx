import Body from "./body";
import Footer from "./footer";
import Header from "./header";

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume-frame">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
