import Contact from "./components/home/contact";
import Main from "./components/home/main";
import Portfolio from "./components/home/portfolio";
import Professional from "./components/home/professional";
import Welcome from "./components/home/welcome";

export default function Home() {
  return (
    <div className="wrapper">
      <Main />
      <Welcome />
      <Professional />
      <Portfolio />
      <Contact />
    </div>
  );
}
