import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";

const About = () => {

  const [text] = useTypewriter({
    words:['Devashish Soni','a Student', 'a Developer', 'a Designer'],
    loop:{},
  })

  return (
    <>
      <div
      className="about">
      <video src="bgv3.mp4" autoPlay muted loop className="background-video-a" />
      <motion.div
      initial={{ y: 75,}}
      whileInView={{ y: 0, }}
      viewport={{ once: true }}
      transition={{duration:.75,}}
      className="content">
        <h1>About Me</h1>
        <div class="split left">
          <motion.div 
          initial={{ y: 75,}}
          whileInView={{ y: 0, }}
          viewport={{ once: true }}
          transition={{duration:.75,}}
          class="written">
            <h2>
              I'm{" "}<br/>
              <div className="containerr">
                <span className="textt">{text}{' '}<Cursor cursorStyle="\"/></span>
                
              </div>
            </h2>
            <p>
              I am pursuing my B.Tech from <span className="colour">PIET</span>,
              Jaipur.
            </p>
            <p>
              I am interested in learning new technologies in web development
              like <span className="colour">JS, React Js, Next Js, SASS</span>{" "}
              and many more. I like to learn by applying theoretical knowledge
              into projects to get a solid grip on fundamentals and learn how to
              deal with errors.
            </p>
          </motion.div>
        </div>
        <div className="cv-container" style={{marginTop:"1rem"}}>
        <a 
            href="CV_DEVASHISH_ SONI.pdf"
            download="CV_DevashishSoni"
            className="ccv social"
            target="_blank"
          >
            Download CV
          </a>
        </div>
        <br/>
        <br/>
        <br/>
        <motion.div 
        initial={{ y: 175,}}
        whileInView={{ y: 0,}}
        viewport={{ once: true }}
        transition={{duration:1,}}
        class="split right">
          <img
          className="imge"
            src="https://media3.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif?cid=ecf05e47wqpb46g73d0urbltntnwb8wpocb7g7cv9o846d2e&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            alt="development-img"
          />
        </motion.div>
        </motion.div>
      </div>
    </>
  );
};
export default About;
