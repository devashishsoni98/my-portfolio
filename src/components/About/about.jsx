import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import SkillsCard from "./skillscard";
import skillsdata from "./Skillsdata";
import Marquee from "react-fast-marquee";

const ResumeClick = () => {
  document.getElementById("resume-a").click();
}

const About = () => {
  const [text] = useTypewriter({
    words: ["Devashish Soni", "a Student", "a Developer", "a Designer"],
    loop: {},
  });

  return (
    <>
      <div className="about">
        {/* <video src="bgv5.mp4" autoPlay muted loop className="background-video-a" /> */}
        <motion.div
          initial={{ y: 75 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="content"
        >
          <h1>About Me</h1>
          <div class="split left">
            <motion.div
              initial={{ y: 75 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              class="written"
            >
              <h2>
                I'm <br />
                <div className="containerr">
                  <span className="textt">
                    {text} <Cursor cursorStyle="\" />
                  </span>
                </div>
              </h2>
              <p>
                I am currently pursuing my B.Tech from{" "}
                <span className="colour">PIET</span>, Jaipur.
              </p>
              <p>
                I am a second-year CS student, 
                interested in learning new technologies in web development
                like <span className="colour">JS, React Js, Next Js</span>{" "}
                and many more. <br /><br /> I like to learn by applying theoretical knowledge
                into projects to get a solid grip on fundamentals and learn how
                to deal with errors. 
              </p>
            </motion.div>
          </div>
          <div className="cv-container" style={{ marginTop: "2rem" }} onClick={ResumeClick}>
            <a
              href="Resume_DEVASHISH_ SONI.pdf"
              download="Resume_DevashishSoni"
              className="ccv social"
              target="_blank"
              id="resume-a"
            >
              Download Resume
            </a>
          </div>
          <br />
          <motion.div
            initial={{ x: 175 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            class="split right"
          >
            <img
              className="imge"
              src="https://media3.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif?cid=ecf05e47wqpb46g73d0urbltntnwb8wpocb7g7cv9o846d2e&ep=v1_gifs_related&rid=giphy.gif&ct=g"
              alt="development-img"
            />
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="skill-h1"
        >
          Skills
        </motion.h1>
        <div className="skills-div">
          <Marquee
            gradient={false}
            speed={65}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            loop={0}
            autoFill={true}
          >
            {skillsdata.map((skills, index) => (
              <SkillsCard
                key={index}
                skills={skills}
                index={index}
                skillsdata={skillsdata}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};
export default About;
