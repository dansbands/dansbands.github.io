import Link from "next/link";
import React from "react";

const DeployedProjects = () => {
  const links = [
    {
      title: "AI Todo List",
      description: "Basic Todo List with AI assistance to complete tasks",
      repoUrl: "https://github.com/dansbands/ai-todo-list",
      liveUrl: "https://dansbands.github.io/ai-todo-list",
    },
    {
      title: "LincolnBio",
      description: "My take on a Link In Bio site",
      repoUrl: "https://github.com/dansbands/lincolnbio",
      liveUrl: "https://dansbands.github.io/lincolnbio",
    },
    {
      title: "Star Wars 2024",
      description: "Basic UI for Star Wars movie database (SWAPI)",
      repoUrl: "https://github.com/dansbands/star-wars-2024",
      liveUrl: "https://dansbands.github.io/star-wars-2024",
    },
    {
      title: "Teleprompter",
      repoUrl: "https://github.com/dansbands/teleprompter",
      liveUrl: "https://dansbands.github.io/teleprompter",
      hide: true,
    },
  ];
  return (
    <>
      {/* // This is gross. Change it */}
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h3>Deployed Projects</h3>
        <div>Yet to be documented</div>
        {links.map((link) =>
          // This is gross. Change it
          !link.hide ? (
            <div className="project-card" key={link.title}>
              <div>{link.title}</div>
              <div>
                {" - "}
                <Link href={link.repoUrl}>Repo</Link>
              </div>
              <div>
                {" - "}
                <Link href={link.liveUrl}>Live App</Link>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default DeployedProjects;
