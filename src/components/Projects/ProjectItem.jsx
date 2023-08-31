import React from "react";
import { Link } from "react-router-dom";
import {FaGithub} from 'react-icons/fa'
import {VscPreview} from 'react-icons/vsc'

const ProjectItem = ({ project }) => {
  return (
    <section>
      <div className="p-div">
      <h1>{project.title}</h1>
      <h2>
        {project.description}
      </h2>
      <img className="p-img" src={project.image} alt={`${project.title}-img`} />
      <p>
        {project.details}
        <br />
        <br />
        <div className="b-div">
        <button>
        <Link className="git-link" to={project.githubLink} target="_blank">
          <FaGithub/>Github Repo
        </Link></button>
        <button>
        <Link className="git-link" to={project.liveLink} target="_blank">
          <VscPreview/>Live Demo
        </Link></button>
        <br /><br />
        </div>
        </p>
      {/* <hr /> */}
      </div>
    </section>
  );
};

export default ProjectItem;