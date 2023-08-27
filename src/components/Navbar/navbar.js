// import { Link } from "react-router-dom";
// function NavBar() {
//   function myFunctione() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

//   return (
//     <>
    
//       <div class="topnav" id="myTopnav">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <div class="dropdown">
//           <button class="dropbtn">
//             Projects
//             <i class="fa fa-caret-down"></i>
//           </button>
//           <div class="dropdown-content">
//             <Link to={"https://ds-flight-app.netlify.app/"} target="_blank">
//               Flight Booking Webiste
//             </Link>
//             <Link to={"https://ds-weather-app.netlify.app/"} target="_blank">
//               Weather checking Website
//             </Link>
//             <Link to={"https://moviebazaar-48ma.onrender.com/"} target="_blank">
//               MovieBazaar Website
//             </Link>
//             <Link to={"https://ds-flexstart-clone.netlify.app"} target="_blank">
//               FlexStart Clone Website
//             </Link>
//             <Link to="/portfolio">Simple HTML Portfolio</Link>
//           </div>
//         </div>
//         <Link to="/minifunctions">Mini Functions</Link>
//         <Link to="/contact">Contact</Link>
//         <a
//           href="javascript:void(0);"
//           style={{ fontSize: "15px" }}
//           className="icon"
//           onClick={myFunctione}
//         >
//           &#9776;
//         </a>
//       </div>

//       <div style={{ paddingLeft: "16px" }}></div>
//     </>
//   );
// }

// export default NavBar;

import { useState } from 'react'
import  styles from './Navbar.module.css';
import { Link } from 'react-router-dom';  



function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
      <header className="App-header">


        <nav className={`${styles.navbar}`}>


          {/* logo */}
          <a href='#home' className={`${styles.logo}`}>DS</a>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>About</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/minifunctions" className={`${styles.navLink}`}>Mini Functions</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/contact" className={`${styles.navLink}`}>Contact</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>Projects</Link>
            </li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


      </header>
  );
}


export default Navbar;

;
