"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink, FiArrowRight, FiCalendar, FiCode } from "react-icons/fi"
import LazyImage from "../ImageOptimizer/LazyImage"

const ProjectItem = ({ project, index, viewMode = "grid", variants }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`project-card-modern ${viewMode}`}
      variants={variants}
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="project-image-container">
        <div className="project-image">
          <LazyImage 
            src={project.image || "/placeholder.svg"} 
            alt={`${project.title} preview`}
            className="project-image-content"
            loading="lazy"
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <div className="project-links">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="project-badge">
          <span>{project.technologies[0]}</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        {/* Meta Information */}
        <div className="project-meta">
          <div className="project-category">
            <FiCode />
            <span>{project.technologies[0]}</span>
          </div>
          <div className="project-date">
            <FiCalendar />
            <span>{project.timeframe.split(" - ")[1] || project.timeframe}</span>
          </div>
        </div>

        {/* Title and Description */}
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>

        {/* Technologies */}
        <div className="project-tech">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <motion.span key={techIndex} className="tech-tag" whileHover={{ scale: 1.05 }}>
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && <span className="tech-more">+{project.technologies.length - 4}</span>}
        </div>

        {/* Actions */}
        <div className="project-actions">
          <Link to={`/projectdetails/${project.id}`} className="btn btn-primary project-btn">
            <span>View Details</span>
            <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ type: "spring", stiffness: 400 }}>
              <FiArrowRight />
            </motion.div>
          </Link>

          <div className="external-links">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline external-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </motion.a>
            )}
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline external-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="project-glow"></div>

      <style jsx>{`
        .project-card-modern {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-3xl);
          overflow: hidden;
          transition: all var(--transition-normal);
          position: relative;
          height: fit-content;
        }

        .project-card-modern:hover {
          border-color: var(--accent-electric);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(0, 255, 255, 0.1);
        }

        .project-card-modern.list {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 0;
          align-items: stretch;
        }

        .project-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-primary);
          opacity: 0;
          filter: blur(30px);
          transition: opacity var(--transition-normal);
          z-index: -1;
        }

        .project-card-modern:hover .project-glow {
          opacity: 0.1;
        }

        .project-image-container {
          position: relative;
          overflow: hidden;
        }

        .project-image {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: var(--background-tertiary);
        }

        .project-card-modern.list .project-image {
          height: 100%;
          min-height: 300px;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .project-card-modern:hover .project-image img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 255, 255, 0.1) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: var(--space-xl);
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .project-card-modern:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .project-links {
          display: flex;
          gap: var(--space-md);
          justify-content: flex-end;
        }

        .project-link {
          width: 50px;
          height: 50px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          color: white;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-lg);
          transition: all var(--transition-normal);
          border: 1px solid var(--glass-border);
        }

        .project-link:hover {
          background: var(--accent-electric);
          color: var(--background-primary);
          box-shadow: var(--shadow-neon);
        }

        .project-stats {
          display: none;
        }

        .project-badge {
          position: absolute;
          top: var(--space-lg);
          left: var(--space-lg);
          background: var(--gradient-primary);
          color: white;
          padding: var(--space-xs) var(--space-md);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          z-index: 2;
        }

        .project-content {
          padding: var(--space-2xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
          width: 100%;
          overflow: hidden;
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-md);
          width: 100%;
        }

        .project-category,
        .project-date {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--text-muted);
          font-size: var(--text-sm);
          font-weight: 500;
        }

        .project-date {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 120px;
        }

        .project-info {
          flex: 1;
          width: 100%;
          overflow: hidden;
        }

        .project-title {
          font-size: var(--text-2xl);
          font-weight: 800;
          margin-bottom: var(--space-md);
          color: var(--text-primary);
          font-family: var(--font-display);
          line-height: 1.2;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 4.8em;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          width: 100%;
          max-width: 100%;
        }

        .project-card-modern.list .project-description {
          -webkit-line-clamp: 5;
          min-height: 6em;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .tech-tag {
          background: var(--background-tertiary);
          color: var(--text-secondary);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
          font-weight: 600;
          border: 1px solid var(--border-primary);
          transition: all var(--transition-normal);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tech-tag:hover {
          background: var(--accent-electric);
          color: var(--background-primary);
          border-color: var(--accent-electric);
        }

        .tech-more {
          background: var(--gradient-primary);
          color: white;
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
          font-weight: 700;
        }

        .project-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-md);
          margin-top: var(--space-lg);
        }

        .project-btn {
          flex: 1;
          max-width: 200px;
          padding: var(--space-md) var(--space-lg);
          font-weight: 600;
          font-size: var(--text-sm);
          border-radius: var(--radius-xl);
          background: var(--gradient-primary);
          border: none;
          color: white;
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
          text-decoration: none;
        }

        .project-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-neon);
        }

        .external-links {
          display: flex;
          gap: var(--space-sm);
        }

        .external-btn {
          width: 45px;
          height: 45px;
          padding: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-lg);
          transition: all var(--transition-normal);
        }

        .external-btn:hover {
          transform: scale(1.1);
          background: var(--accent-electric);
          color: var(--background-primary);
          box-shadow: 0 0 8px rgba(0, 255, 255, 0.6);
        }

        @media (max-width: 768px) {
          .project-card-modern.list {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .project-card-modern.list .project-image {
            height: 250px;
            min-height: auto;
          }

          .project-content {
            padding: var(--space-xl);
          }

          .project-actions {
            flex-direction: column;
            gap: var(--space-md);
          }

          .project-btn {
            max-width: none;
            width: 100%;
          }

          .external-links {
            justify-content: center;
          }

          .project-date {
            max-width: none;
            white-space: normal;
          }
        }

        @media (max-width: 480px) {
          .project-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }

          .project-image {
            height: 220px;
          }

          .project-links {
            justify-content: center;
          }

          .project-stats {
            justify-content: center;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default ProjectItem
