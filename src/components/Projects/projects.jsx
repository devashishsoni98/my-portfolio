import React , {useEffect} from "react";
import { VscPreview } from "react-icons/vsc";
import ProjectItem from "./ProjectItem";
import projectData from "./projectData";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
    <>
      <div className="projects">
        <div>
          {projectData.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>

        <section>
          <motion.div ref={ref}
          animate={animation}
          className="p-div">
            <h1>
              <span className="def-col">Simple HTML Portfolio</span>
            </h1>
            <h2>This is a simple HTML Portfolio page!</h2>
            <img className="p-img" src="portfolio.png" alt="portfolio-img" />
            <p>
              This webpage is built using{" "}
              <span className="def-col">HTML, CSS</span> and{" "}
              <span className="def-col">JavaScript</span>
              <br />
              <br />
              <button className="s-btn">
                <Link className="git-link" to="/portfolio">
                  <VscPreview className="iicon" />
                  Visit
                </Link>
              </button>
            </p>
            <br />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Projects;
