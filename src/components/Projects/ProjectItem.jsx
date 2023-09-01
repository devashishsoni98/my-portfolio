import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectItem = ({ project }) => {
  const {ref, inView} = useInView({
    threshold: 0.3
  });
  const animation = useAnimation();


  useEffect(() => {
    if(inView){
      animation.start({
        opacity: 1, scale:1,
        transition: {
          duration: .25
        }
      });
    }
    if (!inView){
      animation.start({opacity: 0, scale: .9})
    }
  }, [inView]);

  return (
    <section>
      <motion.div ref={ref}
      animate={animation}
      className="p-div">
        <h1>
          <span className="def-col">{project.title}</span>
        </h1>
        <h2>{project.description}</h2>
        <img
          className="p-img"
          src={project.image}
          alt={`${project.title}-img`}
        />
        <p>
          {project.details}
          <br />
          <br />
          <div className="b-div">
            <button>
              <Link
                className="git-link"
                to={project.githubLink}
                target="_blank"
              >
                <FaGithub className="iicon" />
                Github Repo
              </Link>
            </button>
            <button>
              <Link className="git-link" to={project.liveLink} target="_blank">
                <VscPreview className="iicon" />
                Live Demo
              </Link>
            </button>
            <br />
            <br />
          </div>
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectItem;
