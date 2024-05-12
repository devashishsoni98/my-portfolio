import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { VscPreview, VscThreeBars } from "react-icons/vsc";
import { easeInOut, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectData from "./projectData";

const ProjectItem = ({ project, index, projectData }) => {
  // const { ref, inView } = useInView({
  //   threshold: 0.3,
  // });
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       opacity: 1,
  //       scale: 1,
  //       transition: {
  //         duration: 0.25,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ opacity: 0, scale: 0.6 });
  //   }
  // }, [inView]);

  const lastIndexOfArray = projectData.length - 1;

  return (
    <section>
      <motion.div
        // ref={ref}
        // animate={animation}
        // transition={{ ease: "easeInOut" }}
        initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75}}
        className="p-div"
      >
        <img
          className="p-img"
          src={project.image}
          alt={`${project.title}-img`}
        />
        <h1>{project.title}</h1>
        {/* <h2>{project.description}</h2> */}
        <div className="a-btns">
          <div className="b-div">
            {project.githubLink && (
              <Link
                to={project.githubLink}
                target={index <= lastIndexOfArray - 1 ? "_blank" : undefined}
              >
                <button className="s-btn git-link">
                  <FaGithub className="iicon" />
                  Github Repo
                </button>
              </Link>
            )}
            {project.liveLink && (
            <Link
              to={project.liveLink}
              target={index <= lastIndexOfArray - 1 ? "_blank" : undefined}
            >
              <button className="s-btn git-link">
                <VscPreview className="iicon" />
                Live Demo
              </button>
            </Link>
            )}
            <br />
          </div>
          <Link className="v-btn" to={`/projectdetails/${project.id}`} key={project.id}>
            <button className="git-link v-txt">
              <VscThreeBars className="iicon"/>
              View Details</button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectItem;
