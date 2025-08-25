import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import projectData from "./projectData";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "ai", label: "AI/ML" },
  ];

  const getProjectCategory = (project) => {
    if (project.technologies.includes("Spring Boot") || project.technologies.includes("Flask Python")) {
      return "fullstack";
    }
    if (project.technologies.includes("AI/ML") || project.technologies.includes("Python")) {
      return "ai";
    }
    return "frontend";
  };

  const filteredProjects = filter === "all" 
    ? projectData 
    : projectData.filter(project => getProjectCategory(project) === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section className="projects-section section">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              A collection of projects that showcase my skills and experience in web development
            </p>
          </motion.div>

          {/* Filters and View Toggle */}
          <motion.div className="projects-controls" variants={itemVariants}>
            <div className="filter-tabs">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-tab ${filter === category.id ? 'active' : ''}`}
                  onClick={() => setFilter(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <FiGrid />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <FiList />
              </button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className={`projects-grid ${viewMode === 'list' ? 'list-view' : ''}`}
            variants={containerVariants}
          >
            {filteredProjects.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
                viewMode={viewMode}
                variants={itemVariants}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div className="no-projects" variants={itemVariants}>
              <p>No projects found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        .projects-section {
          background: var(--background-primary);
          min-height: 100vh;
          padding-top: 100px;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .section-title {
          font-size: var(--text-4xl);
          margin-bottom: var(--space-md);
          background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-3xl);
          flex-wrap: wrap;
          gap: var(--space-lg);
        }

        .filter-tabs {
          display: flex;
          gap: var(--space-sm);
          background: var(--background-secondary);
          padding: var(--space-xs);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-primary);
        }

        .filter-tab {
          padding: var(--space-sm) var(--space-lg);
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: var(--text-sm);
          font-weight: 500;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-tab:hover {
          color: var(--text-primary);
          background: var(--background-tertiary);
        }

        .filter-tab.active {
          background: var(--accent-primary);
          color: white;
        }

        .view-toggle {
          display: flex;
          gap: var(--space-xs);
          background: var(--background-secondary);
          padding: var(--space-xs);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-primary);
        }

        .view-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .view-btn:hover {
          color: var(--text-primary);
          background: var(--background-tertiary);
        }

        .view-btn.active {
          background: var(--accent-primary);
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-2xl);
        }

        .projects-grid.list-view {
          grid-template-columns: 1fr;
          gap: var(--space-xl);
        }

        .no-projects {
          text-align: center;
          padding: var(--space-3xl);
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .projects-controls {
            flex-direction: column;
            align-items: stretch;
          }

          .filter-tabs {
            justify-content: center;
            flex-wrap: wrap;
          }

          .view-toggle {
            align-self: center;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
        }

        @media (max-width: 480px) {
          .filter-tabs {
            flex-direction: column;
          }

          .filter-tab {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;