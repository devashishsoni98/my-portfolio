import { Link } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  function myFunctione() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <>
      <div class="topnav" id="myTopnav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div class="dropdown">
          <button class="dropbtn">
            Projects
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to={"https://ds-flight-app.netlify.app/"} target="_blank">
              Flight Booking Webiste
            </Link>
            <Link to={"https://ds-weather-app.netlify.app/"} target="_blank">
              Weather checking Website
            </Link>
            <Link to={"https://moviebazaar-48ma.onrender.com/"} target="_blank">
              MovieBazaar Website
            </Link>
            <Link to="/portfolio">Simple HTML Portfolio</Link>
          </div>
        </div>
        <Link to="/minifunctions">Mini Functions</Link>
        <Link to="/contact">Contact</Link>
        <a
          href="javascript:void(0);"
          style={{ fontSize: "15px" }}
          className="icon"
          onClick={myFunctione}
        >
          &#9776;
        </a>
      </div>

      <div style={{ paddingLeft: "16px" }}></div>
    </>
  );
}

export default NavBar;
