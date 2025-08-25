import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ skills, index }) => {
  return (
    <motion.div 
      className="skill-card"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="skill-icon">
        <img src={skills.img} alt={`${skills.title} logo`} />
      </div>
      <h4 className="skill-title">{skills.title}</h4>

      <style jsx>{`
        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-xl);
          margin: 0 var(--space-md);
          background: var(--background-secondary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-xl);
          min-width: 160px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .skill-card:hover {
          background: var(--background-tertiary);
          border-color: var(--accent-primary);
          box-shadow: var(--shadow-lg);
        }

        .skill-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-tertiary);
          border-radius: var(--radius-lg);
          padding: var(--space-sm);
        }

        .skill-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .skill-title {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          text-align: center;
        }

        @media (max-width: 768px) {
          .skill-card {
            min-width: 140px;
            padding: var(--space-lg);
          }

          .skill-icon {
            width: 40px;
            height: 40px;
          }

          .skill-title {
            font-size: var(--text-sm);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default SkillsCard;