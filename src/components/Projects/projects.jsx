import React from "react";
import ProjectItem from "./ProjectItem";
import projectData from "./projectData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="projects">
        {projectData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      

      <section>
        <h1>Simple HTML Portfolio</h1>
        <h2>This is a simple HTML Portfolio page!</h2>
        <img
          className="p-img"
          src="portfolio.png"
          alt="portfolio-img"
        />
        <p>
          This webpage is built using{" "}
          <span className="def-col">HTML, CSS</span> and{" "}
          <span className="def-col">JavaScript</span>
          <br />
          <br />
          You can also check it out at :{" "}
          <Link className="git-link" to="/portfolio">
            {" "}
            Simple Portfolio Website
          </Link>
        </p>
      </section>
      </div>
    </>
  );
};

export default Projects;