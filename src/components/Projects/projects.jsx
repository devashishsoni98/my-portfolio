import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectItem from "./ProjectItem";
import projectData from "./projectData";
import { FiFilter, FiGrid, FiList, FiZap, FiCode, FiCpu, FiLayers } from "react-icons/fi";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const categories = [
    { id: "all", label: "All Projects", icon: FiLayers, color: "var(--gradient-primary)" },
    { id: "fullstack", label: "Full Stack", icon: FiCode, color: "var(--gradient-secondary)" },
    { id: "frontend", label: "Frontend", icon: FiZap, color: "var(--gradient-accent)" },
    { id: "ai", label: "AI/ML", icon: FiCpu, color: "var(--gradient-warm)" },
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

  return (
    <section ref={containerRef} className="projects-section">
      {/* Background Elements */}
      <div className="projects-bg">
        <div className="bg-grid"></div>
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
      </div>

      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <div className="section-badge">
              <span className="neon-glow">Portfolio</span>
            </div>
            <h2 className="section-title display-text">
              Featured
              <span className="highlight-line">Projects</span>
            </h2>
            <p className="section-subtitle">
              A curated collection of projects that showcase my expertise in modern web development, 
              creative problem-solving, and cutting-edge technologies
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div className="projects-controls" variants={itemVariants}>
            <div className="filter-section">
              <div className="filter-tabs">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    className={`filter-tab ${filter === category.id ? 'active' : ''}`}
                    onClick={() => setFilter(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="filter-icon" style={{ background: category.color }}>
                      <category.icon />
                    </div>
                    <span>{category.label}</span>
                    {filter === category.id && (
                      <motion.div 
                        className="filter-glow"
                        layoutId="filterGlow"
                        style={{ background: category.color }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="view-controls">
              <div className="view-toggle glass">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <FiGrid />
                  <span>Grid</span>
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <FiList />
                  <span>List</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Projects Counter */}
          <motion.div className="projects-counter" variants={itemVariants}>
            <span className="counter-text">
              Showing <span className="counter-number">{filteredProjects.length}</span> projects
            </span>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className={`projects-grid magazine-grid ${viewMode === 'list' ? 'list-view' : ''}`}
            variants={containerVariants}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-wrapper"
                variants={itemVariants}
                layout
              >
                <ProjectItem
                  project={project}
                  index={index}
                  viewMode={viewMode}
                  variants={itemVariants}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div className="no-projects glass-card" variants={itemVariants}>
              <div className="empty-icon">
                <FiFilter />
              </div>
              <h3>No projects found</h3>
              <p>Try adjusting your filters to see more projects.</p>
              <button 
                className="btn btn-primary"
                onClick={() => setFilter('all')}
              >
                Show All Projects
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        .projects-section {
          background: var(--background-primary);
          min-height: 100vh;
          padding: var(--space-5xl) 0;
          position: relative;
          overflow: hidden;
        }

        .projects-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .bg-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
        }

        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          animation: blob 15s infinite;
        }

        .bg-blob-1 {
          top: 20%;
          left: 20%;
          width: 400px;
          height: 400px;
          background: var(--gradient-primary);
          animation-delay: 0s;
        }

        .bg-blob-2 {
          bottom: 20%;
          right: 20%;
          width: 300px;
          height: 300px;
          background: var(--gradient-secondary);
          animation-delay: 7s;
        }

        .projects-content {
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-5xl);
        }

        .section-badge {
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
          margin-bottom: var(--space-xl);
          color: var(--accent-electric);
        }

        .section-title {
          margin-bottom: var(--space-lg);
        }

        .highlight-line {
          display: block;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: var(--text-xl);
          color: var(--text-secondary);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-4xl);
          flex-wrap: wrap;
          gap: var(--space-xl);
        }

        .filter-section {
          flex: 1;
        }

        .filter-tabs {
          display: flex;
          gap: var(--space-md);
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          padding: var(--space-sm);
          border-radius: var(--radius-2xl);
          border: 1px solid var(--glass-border);
          flex-wrap: wrap;
        }

        .filter-tab {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-md) var(--space-lg);
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: var(--text-sm);
          font-weight: 600;
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .filter-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: var(--text-sm);
        }

        .filter-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          filter: blur(10px);
          border-radius: var(--radius-xl);
        }

        .filter-tab:hover {
          color: var(--text-primary);
          background: var(--background-glass-hover);
        }

        .filter-tab.active {
          color: var(--text-primary);
          background: var(--background-glass-hover);
        }

        .view-controls {
          display: flex;
          align-items: center;
        }

        .view-toggle {
          display: flex;
          padding: var(--space-xs);
          border-radius: var(--radius-xl);
        }

        .view-btn {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          padding: var(--space-sm) var(--space-md);
          background: transparent;
          border: none;
          color: var(--text-secondary);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-normal);
          font-size: var(--text-sm);
          font-weight: 500;
        }

        .view-btn:hover {
          color: var(--text-primary);
          background: var(--background-glass-hover);
        }

        .view-btn.active {
          background: var(--accent-electric);
          color: var(--background-primary);
        }

        .projects-counter {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .counter-text {
          font-size: var(--text-lg);
          color: var(--text-secondary);
        }

        .counter-number {
          font-weight: 700;
          color: var(--accent-electric);
          font-size: var(--text-xl);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-3xl);
        }

        .projects-grid.list-view {
          grid-template-columns: 1fr;
          gap: var(--space-2xl);
        }

        .project-wrapper {
          position: relative;
        }

        .no-projects {
          text-align: center;
          padding: var(--space-5xl);
          max-width: 500px;
          margin: 0 auto;
        }

        .empty-icon {
          width: 80px;
          height: 80px;
          background: var(--glass-bg);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-xl);
          font-size: var(--text-2xl);
          color: var(--text-muted);
        }

        .no-projects h3 {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-md);
          color: var(--text-primary);
        }

        .no-projects p {
          color: var(--text-secondary);
          margin-bottom: var(--space-xl);
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: var(--space-2xl);
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: var(--space-3xl) 0;
          }

          .projects-controls {
            flex-direction: column;
            align-items: stretch;
            gap: var(--space-lg);
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

          .bg-blob {
            filter: blur(40px);
          }

          .bg-blob-1 { width: 250px; height: 250px; }
          .bg-blob-2 { width: 200px; height: 200px; }
        }

        @media (max-width: 480px) {
          .filter-tabs {
            flex-direction: column;
          }

          .filter-tab {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;