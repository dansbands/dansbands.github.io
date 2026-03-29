import React from "react";
import PortfolioItem from "../components/portfolio/portfolio-item";
import ScrollRestorer from "../components/portfolio/scroll-restorer";
import { portfolioItems } from "../util/const";

const personalItems = portfolioItems.filter((item) => item.section === "personal");
const professionalItems = portfolioItems.filter((item) => item.section === "professional");

const Portfolio = () => {
  return (
    <div data-spy="scroll" data-target="#navbar-example">
      <div className="jumbotron" id="portfolio">
        <div className="main2">
          <div className="portfolio-container">
            <ScrollRestorer />
            <h2 className="portfolio-section-heading">Personal Projects</h2>
            {personalItems.map((item) => (
              <PortfolioItem
                key={item.title}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                description={item.description}
                extendedDescription={item.extendedDescription}
                technologies={item.technologies}
                features={item.features || []}
                links={item.links}
              />
            ))}
            <h2 className="portfolio-section-heading">Professional Case Studies</h2>
            {professionalItems.map((item) => (
              <PortfolioItem
                key={item.title}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                description={item.description}
                extendedDescription={item.extendedDescription}
                technologies={item.technologies}
                features={item.features || []}
                links={item.links}
                caseStudyUrl={item.links[0]?.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
