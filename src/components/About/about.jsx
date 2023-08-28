const About = () => {
  return (
    <>
      <div className="about">
        <h1>About Me</h1>
        <div class="split left">
          <div class="written">
            <h2>
              I'm{" "}
              <div className="containerr">
                <p className="textt"> Devashish Soni</p>
              </div>{" "}
              , a Web Developer
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
          </div>
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
        <div class="split right">
          <img
          className="imge"
            src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
            alt="development-img"
          />
        </div>
      </div>
    </>
  );
};
export default About;
