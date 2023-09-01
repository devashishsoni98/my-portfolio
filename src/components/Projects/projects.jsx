import React from "react";
import {VscPreview} from 'react-icons/vsc'
import ProjectItem from "./ProjectItem";
import projectData from "./projectData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div 
      
      className="projects">
        <motion.div
        initial={{ y: 75,}}
        whileInView={{ y: 0, }}
        viewport={{ once: true }}
        transition={{duration:.75,}}
        >
        {projectData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
        </motion.div>

      <section>
        <div className="p-div">
        <h1><span className="def-col">Simple HTML Portfolio</span></h1>
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
          <button className="s-btn">
        <Link className="git-link" to="/portfolio">
          <VscPreview className="iicon"/>Visit
        </Link></button>
        </p><br />
        </div>
      </section>
      </div>
    </>
  );
};

export default Projects;