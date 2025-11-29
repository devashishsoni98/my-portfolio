"use client"

import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FiDownload, FiArrowRight, FiCode, FiZap, FiStar } from "react-icons/fi"
import { Link } from "react-router-dom"
// import "../index.css"

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const blobs = document.querySelectorAll(".interactive-blob")
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.02
        const x = (e.clientX * speed) / 100
        const y = (e.clientY * speed) / 100
        blob.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-reveal")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("revealed")
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Initial scroll check
    handleScroll()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Parallax Background */}
      <div className="parallax-bg" />

      {/* Interactive Blobs */}
      <div className="interactive-blob blob blob-1" />
      <div className="interactive-blob blob blob-2" />
      <div className="interactive-blob blob blob-3" />

      <section ref={containerRef} className="home-section" style={{ paddingTop: "120px", minHeight: "100vh" }}>
        <div className="parallax-content">
          <div className="container" style={{ maxWidth: "1200px", padding: "0 2rem" }}>
            <div
              className="home-content"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4rem",
                textAlign: "center",
                padding: "2rem 0",
              }}
            >
              {/* Floating Elements */}
              <div className="floating-elements">
                <div className="floating-icon floating-icon-1 floating">
                  <FiCode />
                </div>
                <div className="floating-icon floating-icon-2 floating">
                  <FiZap />
                </div>
                <div className="floating-icon floating-icon-3 floating">
                  <FiStar />
                </div>
              </div>

              <div
                className="hero-content glass-card scroll-reveal"
                style={{
                  padding: "3rem 2.5rem",
                  maxWidth: "900px",
                  width: "100%",
                  margin: "0 auto",
                }}
              >
                <div className="hero-badge" style={{ marginBottom: "2rem" }}>
                  <span
                    className="neon-glow"
                    style={{
                      padding: "0.75rem 1.5rem",
                      borderRadius: "2rem",
                      background: "rgba(0, 255, 255, 0.1)",
                      border: "1px solid rgba(0, 255, 255, 0.3)",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Available for Work
                  </span>
                </div>

                <h1 className="hero-text" style={{ marginBottom: "2rem", lineHeight: "1.1" }}>
                  <span className="text-line" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Hi, I'm
                  </span>
                  <span
                    className="text-line highlight-text"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Devashish Soni
                  </span>
                  <span className="text-line" style={{ display: "block", fontSize: "0.8em", opacity: "0.9" }}>
                    Full-Stack Developer
                  </span>
                </h1>

                <div className="hero-subtitle" style={{ marginBottom: "3rem" }}>
                  <p
                    className="subtitle-text"
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.6",
                      color: "rgba(255, 255, 255, 0.8)",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                  >
                    I craft exceptional digital experiences that blend cutting-edge technology with stunning visual
                    design. Specializing in React, Node.js, and modern web technologies to bring your ideas to life.
                  </p>
                </div>

                <div
                  className="hero-stats"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "3rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="stat-item" style={{ textAlign: "center" }}>
                    <span
                      className="stat-number"
                      style={{
                        display: "block",
                        fontSize: "2.5rem",
                        fontWeight: "800",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "0.5rem",
                      }}
                    >
                      50+
                    </span>
                    <span
                      className="stat-label"
                      style={{
                        fontSize: "1rem",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontWeight: "500",
                      }}
                    >
                      Projects
                    </span>
                  </div>
                  <div className="stat-item" style={{ textAlign: "center" }}>
                    <span
                      className="stat-number"
                      style={{
                        display: "block",
                        fontSize: "2.5rem",
                        fontWeight: "800",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "0.5rem",
                      }}
                    >
                      3+
                    </span>
                    <span
                      className="stat-label"
                      style={{
                        fontSize: "1rem",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontWeight: "500",
                      }}
                    >
                      Years
                    </span>
                  </div>
                  <div className="stat-item" style={{ textAlign: "center" }}>
                    <span
                      className="stat-number"
                      style={{
                        display: "block",
                        fontSize: "2.5rem",
                        fontWeight: "800",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "0.5rem",
                      }}
                    >
                      15+
                    </span>
                    <span
                      className="stat-label"
                      style={{
                        fontSize: "1rem",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontWeight: "500",
                      }}
                    >
                      Technologies
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="hero-actions scroll-reveal"
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/projects"
                  className="btn btn-primary"
                  style={{
                    padding: "1rem 2rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  <span>View My Work</span>
                  <FiArrowRight />
                </Link>

                <a
                  href="/resume.pdf"
                  download="Resume_DevashishSoni"
                  className="btn btn-neon"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "1rem 2rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  <FiDownload />
                  <span>Download Resume</span>
                </a>
              </div>

              <div
                className="social-links-modern scroll-reveal"
                style={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://github.com/devashishsoni98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-modern"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="social-tooltip">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/devashish-soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-modern"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span className="social-tooltip">LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/_devashishsoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-modern"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  <span className="social-tooltip">Instagram</span>
                </a>
              </div>

              <div
                className="scroll-indicator-modern"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  marginTop: "2rem",
                }}
              >
                <div
                  className="scroll-line"
                  style={{
                    width: "2px",
                    height: "40px",
                    background: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent)",
                  }}
                ></div>
                <span
                  className="scroll-text"
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.6)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Scroll to explore
                </span>
                <div
                  className="scroll-arrow"
                  style={{
                    transform: "rotate(90deg)",
                    animation: "bounce 2s infinite",
                  }}
                >
                  <FiArrowRight />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
