import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectItem = ({ project, index, projectData }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.25,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, scale: 0.6 });
    }
  }, [inView]);

  const lastIndexOfArray = projectData.length - 1;
  console.log(lastIndexOfArray);

  return (
    <section>
      <motion.div ref={ref} animate={animation} className="p-div">
        <img
          className="p-img"
          src={project.image}
          alt={`${project.title}-img`}
        />
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
        <p>
          <div className="b-div">
            {project.githubLink && (
              <button>
                <Link
                  className="git-link"
                  to={project.githubLink}
                  target={index <= lastIndexOfArray - 1 ? "_blank" : undefined}
                >
                  <FaGithub className="iicon" />
                  Github Repo
                </Link>
              </button>
            )}
            <button>
              <Link
                className="git-link"
                to={project.liveLink}
                target={index <= lastIndexOfArray - 1 ? "_blank" : undefined}
              >
                <VscPreview className="iicon" />
                Live Demo
              </Link>
            </button>
            <br />
          </div>
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectItem;
