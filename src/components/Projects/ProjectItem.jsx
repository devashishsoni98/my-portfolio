import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowRight, FiCalendar, FiCode } from "react-icons/fi";

const ProjectItem = ({ project, index, viewMode = "grid", variants }) => {
  return (
    <motion.div 
      className={`project-card ${viewMode}`}
      variants={variants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <img src={project.image} alt={`${project.title} preview`} />
        <div className="project-overlay">
          <div className="project-links">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                title="View Source Code"
              >
                <FaGithub />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                title="View Live Demo"
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <div className="project-category">
            {project.technologies[0]}
          </div>
          <div className="project-date">
            <FiCalendar />
            {project.timeframe.split(' - ')[1] || project.timeframe}
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>
        
        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-more">+{project.technologies.length - 4}</span>
          )}
        </div>

        <div className="project-actions">
          <Link 
            to={`/projectdetails/${project.id}`} 
            className="btn btn-primary"
          >
            View Details
            <FiArrowRight />
          </Link>
          
          <div className="project-external-links">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                title="View Source"
              >
                <FaGithub />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                title="Live Demo"
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: var(--background-secondary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          transition: all 0.3s ease;
          height: fit-content;
        }

        .project-card:hover {
          border-color: var(--accent-primary);
          box-shadow: var(--shadow-xl);
        }

        .project-card.list {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: var(--space-xl);
          align-items: center;
        }

        .project-image {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: var(--background-tertiary);
        }

        .project-card.list .project-image {
          height: 200px;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: var(--space-md);
        }

        .project-link {
          width: 48px;
          height: 48px;
          background: var(--accent-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-lg);
          transition: all 0.2s ease;
        }

        .project-link:hover {
          background: var(--accent-secondary);
          transform: scale(1.1);
        }

        .project-content {
          padding: var(--space-xl);
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .project-category {
          background: var(--accent-primary);
          color: white;
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-date {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--text-muted);
          font-size: var(--text-sm);
        }

        .project-title {
          font-size: var(--text-xl);
          font-weight: 700;
          margin-bottom: var(--space-md);
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
          margin-bottom: var(--space-lg);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-card.list .project-description {
          -webkit-line-clamp: 4;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          margin-bottom: var(--space-xl);
        }

        .tech-tag {
          background: var(--background-tertiary);
          color: var(--text-secondary);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
          font-weight: 500;
          border: 1px solid var(--border-primary);
        }

        .tech-more {
          background: var(--accent-primary);
          color: white;
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
          font-weight: 600;
        }

        .project-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-md);
        }

        .project-external-links {
          display: flex;
          gap: var(--space-sm);
        }

        .project-external-links .btn {
          width: 40px;
          height: 40px;
          padding: 0;
        }

        @media (max-width: 768px) {
          .project-card.list {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .project-card.list .project-image {
            height: 200px;
          }

          .project-actions {
            flex-direction: column;
            gap: var(--space-md);
          }

          .project-actions .btn:first-child {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .project-content {
            padding: var(--space-lg);
          }

          .project-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectItem;