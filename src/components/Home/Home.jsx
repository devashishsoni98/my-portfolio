import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="home-section">
      <div className="container">
        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.p 
              className="greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi there! 👋 I'm
            </motion.p>
            
            <motion.h1 
              className="name"
              variants={itemVariants}
            >
              Devashish Soni
            </motion.h1>
            
            <motion.h2 
              className="title"
              variants={itemVariants}
            >
              Full Stack Developer & Designer
            </motion.h2>
            
            <motion.p 
              className="description"
              variants={itemVariants}
            >
              I craft digital experiences with clean code and thoughtful design. 
              Passionate about creating scalable web applications and solving complex problems.
            </motion.p>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <Link to="/projects" className="btn btn-primary">
              View My Work
              <FiArrowRight />
            </Link>
            
            <a
              href="/Resume_DEVASHISH_SONI.pdf"
              download="Resume_DevashishSoni"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            <motion.a
              href="https://github.com/devashishsoni98"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={socialVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/devashish-soni"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={socialVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            
            <motion.a
              href="https://www.instagram.com/_devashishsoni/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={socialVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </motion.a>
          </motion.div>

          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <div className="scroll-line"></div>
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .home-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 70px;
          background: linear-gradient(135deg, var(--background-primary) 0%, var(--background-secondary) 100%);
        }

        .home-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-2xl) 0;
        }

        .hero-text {
          margin-bottom: var(--space-2xl);
        }

        .greeting {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          margin-bottom: var(--space-md);
          font-weight: 500;
        }

        .name {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 700;
          margin-bottom: var(--space-md);
          background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .title {
          font-size: clamp(1.25rem, 4vw, 1.75rem);
          color: var(--accent-primary);
          margin-bottom: var(--space-xl);
          font-weight: 600;
        }

        .description {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
          max-width: 600px;
          margin-bottom: var(--space-2xl);
        }

        .hero-actions {
          display: flex;
          gap: var(--space-lg);
          margin-bottom: var(--space-2xl);
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-links {
          display: flex;
          gap: var(--space-lg);
          margin-bottom: var(--space-3xl);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--background-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: 50%;
          color: var(--text-secondary);
          font-size: var(--text-xl);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
          box-shadow: var(--shadow-lg);
        }

        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-sm);
          color: var(--text-muted);
          font-size: var(--text-sm);
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--accent-primary), transparent);
          animation: pulse 2s infinite;
        }

        @media (max-width: 768px) {
          .home-section {
            padding-top: 70px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
          }

          .social-links {
            gap: var(--space-md);
          }

          .social-link {
            width: 44px;
            height: 44px;
            font-size: var(--text-lg);
          }
        }

        @media (max-width: 480px) {
          .hero-actions {
            width: 100%;
          }

          .btn {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;