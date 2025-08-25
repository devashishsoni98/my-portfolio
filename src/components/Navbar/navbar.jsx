import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import Headroom from 'react-headroom';
import { motion } from 'framer-motion';

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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="logo-content"
            >
              <span className="logo-text">DS</span>
              <div className="logo-glow"></div>
            </motion.div>
          </Link>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link 
                to="/" 
                className={`${styles.navLink} ${isActiveLink('/') ? styles.active : ''}`}
              >
                <span>Home</span>
                <div className="link-glow"></div>
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link 
                to="/about" 
                className={`${styles.navLink} ${isActiveLink('/about') ? styles.active : ''}`}
              >
                <span>About</span>
                <div className="link-glow"></div>
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link 
                to="/projects" 
                className={`${styles.navLink} ${isActiveLink('/projects') ? styles.active : ''}`}
              >
                <span>Projects</span>
                <div className="link-glow"></div>
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link 
                to="/contact" 
                className={`${styles.navLink} ${isActiveLink('/contact') ? styles.active : ''}`}
              >
                <span>Contact</span>
                <div className="link-glow"></div>
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

      <style jsx>{`
        .logo-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--gradient-primary);
          overflow: hidden;
        }

        .logo-text {
          font-size: var(--text-xl);
          font-weight: 800;
          color: white;
          z-index: 2;
          position: relative;
        }

        .logo-glow {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: var(--gradient-primary);
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .logo-content:hover .logo-glow {
          opacity: 0.6;
        }

        .link-glow {
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-accent);
          transform: scaleX(0);
          transition: transform var(--transition-normal);
          border-radius: 1px;
        }

        .nav-link:hover .link-glow,
        .nav-link.active .link-glow {
          transform: scaleX(1);
        }
      `}</style>
    </Headroom>
  );
}

export default Navbar;