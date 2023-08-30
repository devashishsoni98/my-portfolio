import React from "react";
import { GiPalm } from "react-icons/gi";
import { BiSolidWinkSmile } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <div className="container">
        <video src="bgv3.mp4" autoPlay muted loop className="background-video" />
        <div className="content">
        <div className="h-con">
          <h1>W</h1>
          <h1>e</h1>
          <h1>l</h1>
          <h1>c</h1>
          <h1>o</h1>
          <h1>m</h1>
          <h1>e</h1>
        </div>
        <h2>
          &nbsp; I'm <span className="def-col">Devashish Soni</span><span className="hand">🤚</span>
        </h2>
        <h3>
          This is my Portfolio <BiSolidWinkSmile className="def-col emoji" />
        </h3>
        <div className="social-container">
          <a
            href="https://github.com/devashishsoni98"
            className="github social"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/devashish-soni"
            className="linkedin social"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/_devashishsoni/"
            className="instagram social"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="cv-container">
          <a
            href="CV_DEVASHISH_ SONI.pdf"
            download="CV_DevashishSoni"
            className="ccv social"
            target="_blank"
          >
            Download CV
          </a>
       
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
