import React from "react";
import yumble from "@/app/Media/Photos/yumble.png";
import boozer from "@/app/Media/Photos/boozer.png";
import toolshare from "@/app/Media/Photos/toolshare.png";
import danodeamedia from "@/app/Media/Photos/danodeamedia.png";
import PortfolioItem from "../components/portfolio/portfolio-item";
import PortfolioOld from "../components/portfolio/portfolio-old";

const Portfolio = () => {
  const portfolioItems = [
    {
      image: yumble,
      title: "Yumble",
      subtitle:
        "ReactJS and Ruby on Rails web application with responsive design",
      date: "February 2018",
      description:
        "It’s like Bumble and Yelp had a baby - pick a dining partner and find a restaurant you’ll both love in minutes!",
      technologies: ["ReactJS", "Ruby on Rails", "AJAX", "CSS"],
      features: [
        "Employed Responsive Design Principles to build a Mobile-First application that expands into an immersive Desktop Experience",
        "Integrated the Yelp Business Search API to bring a wide array of restaurant data to users",
        "Made use of Location Services to expedite the user’s onboarding process",
        "Incorporated the swiping interactions and the 'It’s a Match' modal to provide an authentic user experience.",
      ],
      links: [
        { title: "Try it Live", url: "https://dansbands.github.io/yumble/" },
        { title: "Demo Video", url: "https://youtu.be/10hwYAqOaKw" },
        { title: "Front End Repo", url: "https://github.com/dansbands/yumble" },
        {
          title: "Back End Repo",
          url: "https://github.com/dansbands/yumble-backend",
        },
      ],
    },
    {
      image: boozer,
      title: "Boozer",
      subtitle: "ReactJS and Ruby on Rails web application",
      date: "January 2018",
      description:
        "Search our database of cocktails, save your favorites, and update them with your own custom recipes.",
      technologies: ["ReactJS", "Ruby on Rails", "AJAX", "CSS"],
      features: [
        "Extended Bootstrap with custom styles to build an elegant, intuitive interface",
        "Enabled a shared library of cocktails while also allowing unique customizations per user through data modeling",
        "Integrated a search feature to quickly find cocktails by name or ingredients",
      ],
      links: [
        { title: "Try it Live", url: "https://dansbands.github.io/boozer/" },
        { title: "Demo Video", url: "https://youtu.be/demo-boozer" },
        { title: "Front End Repo", url: "https://github.com/dansbands/boozer" },
        {
          title: "Back End Repo",
          url: "https://github.com/dansbands/boozer-backend",
        },
      ],
    },
    {
      image: toolshare,
      title: "ToolShare",
      subtitle: "A peer-to-peer tool lending platform",
      date: "March 2018",
      description:
        "ToolShare connects people who need tools with those who have them, fostering a sharing economy.",
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB"],
      features: [
        "Built a secure user authentication system with JWT",
        "Implemented a tool search and reservation system",
        "Designed a responsive UI for both desktop and mobile users",
      ],
      links: [
        { title: "Try it Live", url: "https://dansbands.github.io/toolshare/" },
        { title: "Demo Video", url: "https://youtu.be/demo-toolshare" },
        { title: "Github Repo", url: "https://github.com/dansbands/toolshare" },
      ],
    },
    {
      image: danodeamedia,
      title: "This Website",
      subtitle: "Web Development",
      date: "May 2017, March 2025",
      description:
        "I built this site as a place to demonstrate my skills with HTML5, CSS3, JavaScript and related libraries like jQuery. The design is based on one I adapted from a template on Wix.com, a drag-and-drop editor.",
      extendedDescription:
        "My initial goal was to rebuild my Wix site using purely the development skills I had at the time. As it has progressed, I have improved the experience by adding a fixed global navigation element, and by repositioning content to prioritize the needs of my users. I hope to continue to demonstrate good User Experience principles through my design as I learn new skills and attempt to incorporate them. Keep in mind, it is a work in progress. Enjoy!",
      technologies: ["NextJS", "EmailJS"],
      links: [
        { title: "Original Wix Site", url: "https://www.danodeamedia.com" },
      ],
    },
  ];

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
                extendedDescription={item.extendedDescription || ""}
                technologies={item.technologies}
                features={item.features || []}
                links={item.links}
              />
            ))}
            <PortfolioOld display={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
