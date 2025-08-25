import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import SkillsCard from "./skillscard";
import skillsdata from "./Skillsdata";
import Marquee from "react-fast-marquee";
import { FiDownload, FiUser, FiCode, FiAward } from "react-icons/fi";

const About = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"],
    loop: {},
    delaySpeed: 2000,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const stats = [
    { icon: FiCode, label: "Projects Completed", value: "15+" },
    { icon: FiAward, label: "Technologies", value: "10+" },
    { icon: FiUser, label: "Years Learning", value: "3+" },
  ];

  return (
    <section className="about-section section">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="about-main grid grid-cols-2">
            {/* Left Column - Personal Info */}
            <motion.div className="about-info" variants={itemVariants}>
              <div className="profile-card card">
                <div className="profile-image">
                  <img src="19.png" alt="Devashish Soni" />
                </div>
                
                <div className="profile-content">
                  <h3>Devashish Soni</h3>
                  <div className="typing-text">
                    <span className="text-gradient">
                      {text}
                      <Cursor cursorStyle="|" />
                    </span>
                  </div>
                  
                  <p className="bio">
                    I am a third-year CSE undergraduate at <span className="highlight">PIET, Jaipur</span>, 
                    specializing in software development and data structures & algorithms.
                  </p>
                  
                  <p className="bio">
                    Proficient in <span className="highlight">Java, C++, MySQL, Spring Boot and React.js</span>, 
                    with experience in building scalable web applications.
                  </p>
                  
                  <p className="bio">
                    Passionate about problem-solving, <span className="highlight">API development</span>, 
                    and <span className="highlight">version control</span>. I stay updated with industry 
                    trends and thrive in collaborative environments while working on 
                    <span className="highlight"> AI and MERN stack projects</span>.
                  </p>

                  <a
                    href="/Resume_DEVASHISH_SONI.pdf"
                    download="Resume_DevashishSoni"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiDownload />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats & Skills Preview */}
            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-card card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="stat-icon">
                      <stat.icon />
                    </div>
                    <div className="stat-content">
                      <h4>{stat.value}</h4>
                      <p>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="experience-card card">
                <h4>What I Do</h4>
                <div className="experience-list">
                  <div className="experience-item">
                    <div className="experience-icon">🚀</div>
                    <div>
                      <h5>Full Stack Development</h5>
                      <p>Building end-to-end web applications with modern technologies</p>
                    </div>
                  </div>
                  <div className="experience-item">
                    <div className="experience-icon">🎨</div>
                    <div>
                      <h5>UI/UX Design</h5>
                      <p>Creating intuitive and beautiful user interfaces</p>
                    </div>
                  </div>
                  <div className="experience-item">
                    <div className="experience-icon">⚡</div>
                    <div>
                      <h5>Performance Optimization</h5>
                      <p>Optimizing applications for speed and scalability</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div className="skills-section" variants={itemVariants}>
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-marquee">
              <Marquee
                gradient={false}
                speed={50}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
                loop={0}
                autoFill={true}
              >
                {skillsdata.map((skill, index) => (
                  <SkillsCard
                    key={index}
                    skills={skill}
                    index={index}
                    skillsdata={skillsdata}
                  />
                ))}
              </Marquee>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-section {
          background: var(--background-primary);
          position: relative;
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

        .about-main {
          margin-bottom: var(--space-3xl);
        }

        .profile-card {
          height: 100%;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          margin: 0 auto var(--space-xl);
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--accent-primary);
          box-shadow: var(--shadow-xl);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-content h3 {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-sm);
          text-align: center;
        }

        .typing-text {
          text-align: center;
          font-size: var(--text-xl);
          font-weight: 600;
          margin-bottom: var(--space-xl);
          min-height: 2rem;
        }

        .bio {
          margin-bottom: var(--space-lg);
          line-height: var(--leading-relaxed);
        }

        .highlight {
          color: var(--accent-primary);
          font-weight: 600;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-lg);
          margin-bottom: var(--space-xl);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          padding: var(--space-lg);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-gold));
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: var(--text-xl);
        }

        .stat-content h4 {
          font-size: var(--text-2xl);
          font-weight: 700;
          margin-bottom: var(--space-xs);
          color: var(--accent-primary);
        }

        .stat-content p {
          color: var(--text-secondary);
          margin: 0;
        }

        .experience-card h4 {
          margin-bottom: var(--space-lg);
          color: var(--text-primary);
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .experience-item {
          display: flex;
          gap: var(--space-md);
          align-items: flex-start;
        }

        .experience-icon {
          font-size: var(--text-xl);
          width: 40px;
          height: 40px;
          background: var(--background-tertiary);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .experience-item h5 {
          margin-bottom: var(--space-xs);
          color: var(--text-primary);
          font-size: var(--text-base);
        }

        .experience-item p {
          color: var(--text-secondary);
          font-size: var(--text-sm);
          margin: 0;
        }

        .skills-section {
          text-align: center;
        }

        .skills-title {
          font-size: var(--text-3xl);
          margin-bottom: var(--space-xl);
          color: var(--text-primary);
        }

        .skills-marquee {
          margin-top: var(--space-xl);
        }

        @media (max-width: 1024px) {
          .about-main {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .profile-image {
            width: 150px;
            height: 150px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            flex-direction: column;
            text-align: center;
            gap: var(--space-md);
          }

          .experience-item {
            flex-direction: column;
            text-align: center;
            gap: var(--space-sm);
          }
        }
      `}</style>
    </section>
  );
};

export default About;