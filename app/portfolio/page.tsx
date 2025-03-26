import React from "react";
import PortfolioItem from "../components/portfolio/portfolio-item";
import PortfolioOld from "../components/portfolio/portfolio-old";
import { portfolioItems } from "../util/const";
import DeployedProjects from "../components/portfolio/deployed-projects"; // Adjust the path as needed

const Portfolio = () => {
  return (
    <div data-spy="scroll" data-target="#navbar-example">
      <div className="jumbotron" id="portfolio">
        <div className="main2">
          <div className="container">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
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
            <DeployedProjects />
            <PortfolioOld display={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
