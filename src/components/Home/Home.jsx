import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiDownload, FiArrowRight, FiCode, FiZap, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const blobs = document.querySelectorAll('.interactive-blob');
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.02;
        const x = (e.clientX * speed) / 100;
        const y = (e.clientY * speed) / 100;
        blob.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Parallax Background */}
      <div className="parallax-bg" />
      
      {/* Interactive Blobs */}
      <div className="interactive-blob blob blob-1" />
      <div className="interactive-blob blob blob-2" />
      <div className="interactive-blob blob blob-3" />

      <section ref={containerRef} className="home-section">
        <motion.div style={{ y, opacity }} className="parallax-content">
          <div className="container">
            <motion.div
              className="home-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Floating Elements */}
              <motion.div 
                className="floating-elements"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="floating-icon floating-icon-1">
                  <FiCode />
                </div>
                <div className="floating-icon floating-icon-2">
                  <FiZap />
                </div>
                <div className="floating-icon floating-icon-3">
                  <FiStar />
                </div>
              </motion.div>

              {/* Hero Content */}
              <motion.div className="hero-content glass-card" variants={itemVariants}>
                <motion.div 
                  className="hero-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <span className="neon-glow">Available for Work</span>
                </motion.div>

                <motion.h1 
                  className="hero-text"
                  variants={itemVariants}
                >
                  <span className="text-line">Creative</span>
                  <span className="text-line highlight-text">Developer</span>
                  <span className="text-line">& Designer</span>
                </motion.h1>
                
                <motion.div 
                  className="hero-subtitle"
                  variants={itemVariants}
                >
                  <p className="subtitle-text">
                    I craft digital experiences that blend cutting-edge technology 
                    with stunning visual design. Specializing in full-stack development 
                    and creative problem-solving.
                  </p>
                </motion.div>

                <motion.div 
                  className="hero-stats"
                  variants={itemVariants}
                >
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div className="hero-actions" variants={itemVariants}>
                <Link to="/projects" className="btn btn-primary">
                  <span>Explore Work</span>
                  <FiArrowRight />
                </Link>
                
                <a
                  href="/Resume_DEVASHISH_SONI.pdf"
                  download="Resume_DevashishSoni"
                  className="btn btn-neon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiDownload />
                  <span>Download CV</span>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div className="social-links-modern" variants={itemVariants}>
                <motion.a
                  href="https://github.com/devashishsoni98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-modern"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="social-tooltip">GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/devashish-soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-modern"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span className="social-tooltip">LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href="https://www.instagram.com/_devashishsoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-modern"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  <span className="social-tooltip">Instagram</span>
                </motion.a>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div 
                className="scroll-indicator-modern"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                <div className="scroll-line"></div>
                <span className="scroll-text">Scroll to explore</span>
                <div className="scroll-arrow">
                  <FiArrowRight />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        .home-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: var(--background-primary);
        }

        .parallax-content {
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .home-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--space-5xl) 0;
          position: relative;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-icon {
          position: absolute;
          width: 60px;
          height: 60px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-xl);
          color: var(--accent-electric);
          animation: float 8s ease-in-out infinite;
        }

        .floating-icon-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-icon-2 {
          top: 30%;
          right: 15%;
          animation-delay: 2s;
        }

        .floating-icon-3 {
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
        }

        .hero-content {
          max-width: 900px;
          padding: var(--space-4xl);
          position: relative;
          z-index: 3;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          padding: var(--space-sm) var(--space-lg);
          background: var(--glass-bg);
          border: 1px solid var(--accent-electric);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-2xl);
          color: var(--accent-electric);
        }

        .hero-text {
          margin-bottom: var(--space-2xl);
          line-height: 0.9;
        }

        .text-line {
          display: block;
          margin-bottom: var(--space-sm);
        }

        .highlight-text {
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .highlight-text::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--gradient-accent);
          border-radius: 2px;
        }

        .hero-subtitle {
          margin-bottom: var(--space-3xl);
        }

        .subtitle-text {
          font-size: var(--text-xl);
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: var(--space-3xl);
          margin-bottom: var(--space-4xl);
          padding: var(--space-2xl) 0;
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: var(--text-4xl);
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          display: block;
          font-size: var(--text-sm);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: var(--space-sm);
        }

        .hero-actions {
          display: flex;
          gap: var(--space-xl);
          margin-bottom: var(--space-4xl);
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-links-modern {
          display: flex;
          gap: var(--space-lg);
          margin-bottom: var(--space-4xl);
        }

        .social-link-modern {
          position: relative;
          width: 60px;
          height: 60px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-size: var(--text-xl);
          transition: all var(--transition-normal);
          overflow: hidden;
        }

        .social-link-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity var(--transition-normal);
          z-index: -1;
        }

        .social-link-modern:hover::before {
          opacity: 1;
        }

        .social-link-modern:hover {
          color: white;
          border-color: transparent;
          box-shadow: var(--shadow-glow);
        }

        .social-tooltip {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--background-tertiary);
          color: var(--text-primary);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition-normal);
        }

        .social-link-modern:hover .social-tooltip {
          opacity: 1;
        }

        .scroll-indicator-modern {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-md);
          color: var(--text-muted);
          font-size: var(--text-sm);
        }

        .scroll-line {
          width: 2px;
          height: 60px;
          background: linear-gradient(to bottom, var(--accent-electric), transparent);
          animation: pulse 2s infinite;
        }

        .scroll-text {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
        }

        .scroll-arrow {
          transform: rotate(90deg);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: rotate(90deg) translateY(0);
          }
          40% {
            transform: rotate(90deg) translateY(-10px);
          }
          60% {
            transform: rotate(90deg) translateY(-5px);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: var(--space-2xl);
          }

          .hero-stats {
            gap: var(--space-xl);
          }

          .stat-number {
            font-size: var(--text-3xl);
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
          }

          .social-links-modern {
            gap: var(--space-md);
          }

          .social-link-modern {
            width: 50px;
            height: 50px;
            font-size: var(--text-lg);
          }

          .floating-icon {
            width: 40px;
            height: 40px;
            font-size: var(--text-base);
          }
        }

        @media (max-width: 480px) {
          .hero-actions .btn {
            width: 100%;
            max-width: 280px;
          }

          .hero-stats {
            flex-direction: column;
            gap: var(--space-lg);
          }
        }
      `}</style>
    </>
  );
};

export default Home;