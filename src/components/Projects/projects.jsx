import React, { useEffect } from "react";
import { VscPreview } from "react-icons/vsc";
import ProjectItem from "./ProjectItem";
import projectData from "./projectData";
import { easeIn, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0,
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

  return (
    <>
      <div className="projects">
        <div className="projects-container">
          {projectData.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              index={index}
              projectData={projectData}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
