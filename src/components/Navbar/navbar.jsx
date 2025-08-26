"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const toggleActiveClass = () => {
    setIsActive(!isActive)
  }

  const removeActive = () => {
    setIsActive(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={removeActive}>
          <div className="logo-content">
            <span className="logo-text">DS</span>
            <div className="logo-glow"></div>
          </div>
        </Link>

        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li onClick={removeActive}>
            <Link to="/" className={`nav-link ${isActiveLink("/") ? "active" : ""}`}>
              <span>Home</span>
              <div className="link-glow"></div>
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/about" className={`nav-link ${isActiveLink("/about") ? "active" : ""}`}>
              <span>About</span>
              <div className="link-glow"></div>
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/projects" className={`nav-link ${isActiveLink("/projects") ? "active" : ""}`}>
              <span>Projects</span>
              <div className="link-glow"></div>
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/contact" className={`nav-link ${isActiveLink("/contact") ? "active" : ""}`}>
              <span>Contact</span>
              <div className="link-glow"></div>
            </Link>
          </li>
        </ul>

        <div className={`hamburger ${isActive ? "active" : ""}`} onClick={toggleActiveClass}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
