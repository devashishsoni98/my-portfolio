import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <section>
          <h1>Flight Booking Website</h1>
          <h2>
            This is a <span className="def-col">simple</span> and{" "}
            <span className="def-col">responsive</span> flight booking website
            with lots of effects and animations!
          </h2>
          <img className="p-img" src="flight.png" alt="flight-app-img" />
          <p>
            This website is built using{" "}
            <span className="def-col">React Js</span> and{" "}
            <span className="def-col">SCSS</span>. It consists of multiple pages
            with different hover effects, transitions and inputs.
            <br />
            <br />
            <br />
            You can find the <span className="def-col">
              Github Repository
            </span>{" "}
            for this project at :{" "}
            <Link
              className="git-link"
              to="https://github.com/devashishsoni98/flight-booking-website"
              target="_blank"
            >
              Github Repo
            </Link>
            <br />
            <br />
            <br />
            You can also check it out <span className="def-col">live</span> at :{" "}
            <Link
              className="git-link"
              to="https://ds-flight-app.netlify.app/"
              target="_blank"
            >
              {" "}
              Flight Website
            </Link>
          </p>
        </section>
        <hr style={{ marginTop: "3rem" }} />
        <section>
          <h1>Weather checking Website</h1>
          <h2>
            This is a <span className="def-col">simple</span> and{" "}
            <span className="def-col">responsive</span> Weather website which
            shows the <span className="def-col">live weather</span> of any city!
          </h2>
          <img className="p-img" src="weather.png" alt="weather-app-img" />
          <p>
            This website is built using{" "}
            <span className="def-col">React Js</span> and it collects data for
            live weather from{" "}
            <span className="def-col">OpenWeatherMap API</span>. It displays
            various information about the weather like temprature, humidity,
            what the area feels like and weather.
            <br />
            <br />
            It also have a toggle button which can be used to switch to a{" "}
            <span className="def-col">dark theme</span>, like this :<br />
            <br />
            <br />
            <img
              className="p-img"
              src="dark-weather.png"
              alt="dark-theme-pic"
            />
            <br />
            <br />
            You can find the <span className="def-col">
              Github Repository
            </span>{" "}
            for this project at :{" "}
            <Link
              className="git-link"
              to="https://github.com/devashishsoni98/weatherApp"
              target="_blank"
            >
              Github Repo
            </Link>
            <br />
            <br />
            <br />
            You can also check it out <span className="def-col">live</span> at :{" "}
            <Link
              className="git-link"
              to="https://ds-weather-app.netlify.app/"
              target="_blank"
            >
              {" "}
              Weather Website
            </Link>
          </p>
        </section>
        <hr style={{ marginTop: "3rem" }} />

        <section>
          <h1>FlexStart Clone Website</h1>
          <h2>
            This is a <span className="def-col">clone</span> for a Bootstrap
            template FlexStart!
          </h2>
          <img className="p-img" src="flexstart.png" alt="flexstart-app-img" />
          <p>
            This website is built using{" "}
            <span className="def-col">HTML5, CSS3</span> and{" "}
            <span className="def-col">JavaScript</span>. It consists of multiple
            pages with different hover effects, transitions and animations.
            <br />
            <br />
            <br />
            You can find the <span className="def-col">
              Github Repository
            </span>{" "}
            for this project at :{" "}
            <Link
              className="git-link"
              to="https://github.com/devashishsoni98/flexstart-clone"
              target="_blank"
            >
              Github Repo
            </Link>
            <br />
            <br />
            <br />
            You can also check it out <span className="def-col">live</span> at :{" "}
            <Link
              className="git-link"
              to="https://ds-flexstart-clone.netlify.app/"
              target="_blank"
            >
              {" "}
              FlexStart Website
            </Link>
          </p>
        </section>
        <hr style={{ marginTop: "3rem" }} />

        <section>
          <h1>MovieBazaar Website</h1>
          <h2>
            This is a simple movie website which displays a list of movies by
            collecting data from a <span className="def-col">Movie API</span>!
          </h2>
          <img
            className="p-img"
            src="moviebazaar.png"
            alt="moviebazaar-app-img"
          />
          <p>
            This website is built using{" "}
            <span className="def-col">React Js</span> and{" "}
            <span className="def-col">CSS</span>. I have also used different{" "}
            <span className="def-col">MUI Components</span> to create this
            website.
            <br />
            <br />
            <br />
            You can find the <span className="def-col">
              Github Repository
            </span>{" "}
            for this project at :{" "}
            <Link
              className="git-link"
              to="https://github.com/devashishsoni98/moviebazaar"
              target="_blank"
            >
              Github Repo
            </Link>
            <br />
            <br />
            <br />
            You can also check it out <span className="def-col">live</span> at :{" "}
            <Link
              className="git-link"
              to="https://moviebazaar-48ma.onrender.com/"
              target="_blank"
            >
              {" "}
              MovieBazaar Website
            </Link>
          </p>
        </section>
        <hr style={{ marginTop: "3rem" }} />

        <section>
          <h1>Simple HTML Portfolio</h1>
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
            You can also check it out at :{" "}
            <Link className="git-link" to="/portfolio">
              {" "}
              Simple Portfolio Website
            </Link>
          </p>
        </section>
        <section></section>
      </div>
    </>
  );
};

export default Projects;
