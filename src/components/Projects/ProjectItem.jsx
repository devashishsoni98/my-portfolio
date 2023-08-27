import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <section>
      <h1>{project.title}</h1>
      <h2>
        {project.description}
      </h2>
      <img className="p-img" src={project.image} alt={`${project.title}-img`} />
      <p>
        {project.details}
        <br />
        <br />
        <br />
        You can find the <span className="def-col">Github Repository</span>{" "}
        for this project at :{" "}
        <Link className="git-link" to={project.githubLink} target="_blank">
          Github Repo
        </Link>
        <br />
        <br />
        <br />
        You can also check it out <span className="def-col">live</span> at :{" "}
        <Link className="git-link" to={project.liveLink} target="_blank">
          {project.liveText}
        </Link>
        </p>
      <hr />
    </section>
  );
};

export default ProjectItem;