import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ skills, index }) => {
  return (
    <motion.div 
      className="skill-card-modern"
      whileHover={{ 
        scale: 1.1, 
        y: -10,
        rotateY: 10,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        damping: 20
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="skill-glow"></div>
      <div className="skill-content">
        <div className="skill-icon-container">
          <img src={skills.img} alt={`${skills.title} logo`} className="skill-icon" />
          <div className="skill-icon-bg"></div>
        </div>
        <h4 className="skill-title">{skills.title}</h4>
        <div className="skill-level">
          <div className="skill-bar">
            <motion.div 
              className="skill-progress"
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </div>
      <div className="skill-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      <style jsx>{`
        .skill-card-modern {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-lg);
          padding: var(--space-2xl);
          margin: 0 var(--space-lg);
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-2xl);
          min-width: 200px;
          min-height: 240px;
          transition: all var(--transition-normal);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .skill-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-primary);
          opacity: 0;
          filter: blur(20px);
          transition: opacity var(--transition-normal);
          border-radius: var(--radius-2xl);
        }

        .skill-card-modern:hover .skill-glow {
          opacity: 0.2;
        }

        .skill-card-modern:hover {
          background: var(--background-glass-hover);
          border-color: var(--accent-electric);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(0, 255, 255, 0.2);
        }

        .skill-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-md);
          position: relative;
          z-index: 2;
        }

        .skill-icon-container {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-icon-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-accent);
          border-radius: 50%;
          opacity: 0.1;
          transition: all var(--transition-normal);
        }

        .skill-card-modern:hover .skill-icon-bg {
          opacity: 0.3;
          transform: scale(1.2);
        }

        .skill-icon {
          width: 50px;
          height: 50px;
          object-fit: contain;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          transition: transform var(--transition-normal);
        }

        .skill-card-modern:hover .skill-icon {
          transform: scale(1.1) rotateY(10deg);
        }

        .skill-title {
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          text-align: center;
          font-family: var(--font-display);
          letter-spacing: -0.02em;
        }

        .skill-level {
          width: 100%;
          margin-top: var(--space-sm);
        }

        .skill-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          overflow: hidden;
          position: relative;
        }

        .skill-progress {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }

        .skill-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .skill-card-modern:hover .skill-particles {
          opacity: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent-electric);
          border-radius: 50%;
          animation: float 3s infinite ease-in-out;
        }

        .particle-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 60%;
          right: 20%;
          animation-delay: 1s;
        }

        .particle-3 {
          bottom: 20%;
          left: 50%;
          animation-delay: 2s;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .skill-card-modern {
            min-width: 160px;
            min-height: 200px;
            padding: var(--space-xl);
            margin: 0 var(--space-md);
          }

          .skill-icon-container {
            width: 60px;
            height: 60px;
          }

          .skill-icon {
            width: 40px;
            height: 40px;
          }

          .skill-title {
            font-size: var(--text-base);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default SkillsCard;