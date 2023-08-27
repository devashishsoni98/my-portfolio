import { useState } from "react";
function Portfolio() {
  const colors = [
    "#336699",
    "#FF5733",
    "#33CC99",
    "#ff4040",
    "#ffc0cb",
    "#ffd700",
  ];

  const [bgcolor, setBgcolor] = useState("");

  function abc() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setBgcolor(colors[randomIndex]);
  }

  return (
    <>
      <header id="head" style={{ backgroundColor: bgcolor }}>
        <h1>Welcome to my Profile</h1>
        <br />
        <button onClick={abc}>click here</button>
      </header>
      <div id="container">
        <div id="image-div">
          <img src="15.jpg" alt="profile pic" width="300" id="image" />
          <br />
        </div>
        <h2 id="name">Devashish Soni</h2>
        <p class="text">Front-End Web Developer</p>
        <hr />
        <h3 class="mini-heading">About Me</h3>
        <p class="text">
          I am pursuing my B.Tech from PIET, Jaipur. I am interested in learning
          new technologies in web development like JS, React Js, Next Js, SASS
          and many more. I like to learn by applying theoretical knowledge into
          projects to get a solid grip on fundamentals and learn how to deal
          with errors.
        </p>
        <hr />
        <h3 class="mini-heading">Contact Info</h3>
        <div class="text-two">
          <p>
            <strong>Email</strong>: devashishsoni0@gmail.com
          </p>
          <br />
          <p>
            <strong>Mobile Number</strong>: (+91) 0123456789
          </p>
          <br />
          <p>
            <strong>Website - </strong>
            <a
              href="https://devashishsoni73.github.io/devashish-portfolio.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              My Portfolio Website Link
            </a>
          </p>
          <br />
        </div>
        <hr />
        <h1 class="mini-heading">Skills</h1>
        <ul class="text">
          <li>HTML 5</li>
          <li>React</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
        <hr />
        <h1 class="mini-heading">Contact US</h1>
        <form action="" class="text-two">
          <label for="Name">
            <b>Enter your name:</b>
          </label>
          <br />
          <br />
          <input name="Name" type="text" placeholder="Enter your First name" />
          <input name="Name" type="text" placeholder="Enter your Second name" />
          <br />
          <br />

          <label for="email">
            <b>Enter your E-Mail:</b>
          </label>
          <br />
          <br />
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
          <br />
          <br />

          <label for="mNumber">
            <b>Enter your Mobile Number:</b>
          </label>
          <br />
          <br />
          <input
            name="mnumber"
            type="number"
            placeholder="Enter your Mobile Number"
            min="0"
            max="9999999999"
          />
          <br />
          <br />

          <label for="message">
            <b>Enter your Message:</b>
          </label>
          <br />
          <br />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="t-area"
          ></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
export default Portfolio;
