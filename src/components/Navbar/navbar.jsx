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
          <Link to="/" className={`${styles.logo}`}>DS</Link>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>About</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/projects" className={`${styles.navLink}`}>Projects</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/minifunctions" className={`${styles.navLink}`}>Mini Functions</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/contact" className={`${styles.navLink}`}>Contact</Link>
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
