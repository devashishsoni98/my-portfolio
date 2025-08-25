import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import Headroom from 'react-headroom';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <Headroom
      style={{
        webkitTransition: 'all .3s ease',
        mozTransition: 'all .3s ease',
        oTransition: 'all .3s ease',
        transition: 'all .3s ease'
      }}
    >
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo} onClick={removeActive}>
            &lt;DS /&gt;
          </Link>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link 
                to="/" 
                className={`${styles.navLink} ${isActiveLink('/') ? styles.active : ''}`}
              >
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link 
                to="/about" 
                className={`${styles.navLink} ${isActiveLink('/about') ? styles.active : ''}`}
              >
                About
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link 
                to="/projects" 
                className={`${styles.navLink} ${isActiveLink('/projects') ? styles.active : ''}`}
              >
                Projects
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link 
                to="/contact" 
                className={`${styles.navLink} ${isActiveLink('/contact') ? styles.active : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div 
            className={`${styles.hamburger} ${isActive ? styles.active : ''}`} 
            onClick={toggleActiveClass}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
      </nav>
    </Headroom>
  );
}

export default Navbar;