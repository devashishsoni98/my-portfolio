import React, { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SkillsCard from "./skillscard";
import skillsdata from "./Skillsdata";
import Marquee from "react-fast-marquee";
import { FiDownload, FiUser, FiCode, FiAward, FiZap, FiTarget, FiHeart } from "react-icons/fi";

const About = () => {
  const containerRef = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const [text] = useTypewriter({
    words: ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast", "Creative Thinker"],
    loop: {},
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
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

  const stats = [
    { icon: FiCode, label: "Projects Completed", value: "15+", color: "var(--gradient-primary)" },
    { icon: FiAward, label: "Technologies", value: "10+", color: "var(--gradient-secondary)" },
    { icon: FiUser, label: "Years Learning", value: "3+", color: "var(--gradient-accent)" },
  ];

  const experiences = [
    {
      icon: FiZap,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies and scalable architectures",
      gradient: "var(--gradient-primary)"
    },
    {
      icon: FiTarget,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with focus on user experience",
      gradient: "var(--gradient-secondary)"
    },
    {
      icon: FiHeart,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and exceptional user experience",
      gradient: "var(--gradient-accent)"
    }
  ];

  return (
    <section ref={containerRef} className="about-section">
      {/* Animated Background Elements */}
      <div className="about-bg-elements">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <div className="section-badge">
              <span className="neon-glow">About Me</span>
            </div>
            <h2 className="section-title display-text">
              Crafting Digital
              <span className="highlight-line">Experiences</span>
            </h2>
            <p className="section-subtitle">
              Get to know more about who I am, what I do, and the passion that drives my work
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="about-main">
            {/* Profile Section */}
            <motion.div className="profile-section glass-card" variants={itemVariants}>
              <div className="profile-visual">
                <div className="profile-image-container">
                  <div className="profile-glow"></div>
                  <img src="19.png" alt="Devashish Soni" className="profile-image" />
                  <div className="profile-ring"></div>
                </div>
                
                <div className="profile-status">
                  <div className="status-indicator"></div>
                  <span>Available for work</span>
                </div>
              </div>
              
              <div className="profile-content">
                <h3 className="profile-name">Devashish Soni</h3>
                
                <div className="typing-container">
                  <span className="typing-text">
                    {text}
                    <Cursor cursorStyle="|" cursorColor="var(--accent-electric)" />
                  </span>
                </div>
                
                <div className="bio-content">
                  <p className="bio-paragraph">
                    I am a third-year CSE undergraduate at <span className="highlight">PIET, Jaipur</span>, 
                    specializing in software development and data structures & algorithms.
                  </p>
                  
                  <p className="bio-paragraph">
                    Proficient in <span className="highlight">Java, C++, MySQL, Spring Boot and React.js</span>, 
                    with experience in building scalable web applications and modern user interfaces.
                  </p>
                  
                  <p className="bio-paragraph">
                    Passionate about problem-solving, <span className="highlight">API development</span>, 
                    and <span className="highlight">version control</span>. I stay updated with industry 
                    trends and thrive in collaborative environments while working on 
                    <span className="highlight"> AI and MERN stack projects</span>.
                  </p>
                </div>

                <motion.a
                  href="/Resume_DEVASHISH_SONI.pdf"
                  download="Resume_DevashishSoni"
                  className="btn btn-primary download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Stats & Experience */}
            <motion.div className="stats-experience" variants={itemVariants}>
              {/* Stats Grid */}
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-card glass-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="stat-icon" style={{ background: stat.color }}>
                      <stat.icon />
                    </div>
                    <div className="stat-content">
                      <h4 className="stat-value">{stat.value}</h4>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                    <div className="stat-glow"></div>
                  </motion.div>
                ))}
              </div>

              {/* Experience Cards */}
              <div className="experience-grid">
                <h4 className="experience-title">What I Do</h4>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="experience-card glass-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="experience-icon" style={{ background: exp.gradient }}>
                      <exp.icon />
                    </div>
                    <div className="experience-content">
                      <h5 className="experience-name">{exp.title}</h5>
                      <p className="experience-desc">{exp.description}</p>
                    </div>
                    <div className="experience-glow"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div 
            ref={skillsRef}
            className="skills-section" 
            variants={itemVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
          >
            <div className="skills-header">
              <h3 className="skills-title hero-text">Technical Arsenal</h3>
              <p className="skills-subtitle">Technologies and tools I work with</p>
            </div>
            
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
          padding: var(--space-5xl) 0;
          overflow: hidden;
        }

        .about-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: blob 10s infinite;
        }

        .bg-blob-1 {
          top: 10%;
          left: 10%;
          width: 300px;
          height: 300px;
          background: var(--gradient-primary);
          animation-delay: 0s;
        }

        .bg-blob-2 {
          top: 60%;
          right: 10%;
          width: 250px;
          height: 250px;
          background: var(--gradient-secondary);
          animation-delay: 3s;
        }

        .bg-blob-3 {
          bottom: 20%;
          left: 50%;
          width: 200px;
          height: 200px;
          background: var(--gradient-accent);
          animation-delay: 6s;
        }

        .about-content {
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
          text-align: center;
        }

        .highlight-line {
          display: block;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .section-subtitle {
          font-size: var(--text-xl);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4xl);
          margin-bottom: var(--space-5xl);
        }

        .profile-section {
          padding: var(--space-4xl);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .profile-visual {
          margin-bottom: var(--space-3xl);
          position: relative;
        }

        .profile-image-container {
          position: relative;
          display: inline-block;
          margin-bottom: var(--space-xl);
        }

        .profile-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: var(--gradient-primary);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.3;
          animation: pulse 3s infinite;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 2;
          border: 4px solid var(--glass-border);
        }

        .profile-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid var(--accent-electric);
          border-radius: 50%;
          border-top-color: transparent;
          border-right-color: transparent;
          animation: spin 4s linear infinite;
        }

        .profile-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
          font-size: var(--text-sm);
          color: var(--accent-electric);
          font-weight: 500;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          background: var(--accent-electric);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .profile-name {
          font-size: var(--text-3xl);
          font-weight: 700;
          margin-bottom: var(--space-lg);
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .typing-container {
          margin-bottom: var(--space-2xl);
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .typing-text {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--accent-electric);
        }

        .bio-content {
          text-align: left;
          margin-bottom: var(--space-3xl);
        }

        .bio-paragraph {
          margin-bottom: var(--space-lg);
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .highlight {
          color: var(--accent-electric);
          font-weight: 600;
          position: relative;
        }

        .download-btn {
          margin-top: var(--space-xl);
        }

        .stats-experience {
          display: flex;
          flex-direction: column;
          gap: var(--space-3xl);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-xl);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          padding: var(--space-xl);
          position: relative;
          overflow: hidden;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: var(--text-xl);
          position: relative;
          z-index: 2;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: var(--text-3xl);
          font-weight: 800;
          margin-bottom: var(--space-xs);
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: var(--text-sm);
          margin: 0;
        }

        .stat-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-primary);
          opacity: 0;
          filter: blur(20px);
          transition: opacity var(--transition-normal);
        }

        .stat-card:hover .stat-glow {
          opacity: 0.1;
        }

        .experience-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .experience-title {
          font-size: var(--text-2xl);
          font-weight: 700;
          margin-bottom: var(--space-lg);
          color: var(--text-primary);
          text-align: center;
        }

        .experience-card {
          display: flex;
          gap: var(--space-lg);
          padding: var(--space-xl);
          position: relative;
          overflow: hidden;
        }

        .experience-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: var(--text-lg);
          flex-shrink: 0;
        }

        .experience-content {
          flex: 1;
        }

        .experience-name {
          font-size: var(--text-lg);
          font-weight: 600;
          margin-bottom: var(--space-sm);
          color: var(--text-primary);
        }

        .experience-desc {
          color: var(--text-secondary);
          font-size: var(--text-sm);
          line-height: 1.6;
          margin: 0;
        }

        .experience-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-accent);
          opacity: 0;
          filter: blur(20px);
          transition: opacity var(--transition-normal);
        }

        .experience-card:hover .experience-glow {
          opacity: 0.05;
        }

        .skills-section {
          text-align: center;
        }

        .skills-header {
          margin-bottom: var(--space-4xl);
        }

        .skills-title {
          margin-bottom: var(--space-lg);
        }

        .skills-subtitle {
          font-size: var(--text-lg);
          color: var(--text-secondary);
        }

        .skills-marquee {
          margin-top: var(--space-2xl);
        }

        @media (max-width: 1024px) {
          .about-main {
            grid-template-columns: 1fr;
            gap: var(--space-3xl);
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: var(--space-3xl) 0;
          }

          .profile-image {
            width: 150px;
            height: 150px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card,
          .experience-card {
            flex-direction: column;
            text-align: center;
            gap: var(--space-md);
          }

          .bio-content {
            text-align: center;
          }

          .bg-blob {
            filter: blur(40px);
          }

          .bg-blob-1 { width: 200px; height: 200px; }
          .bg-blob-2 { width: 150px; height: 150px; }
          .bg-blob-3 { width: 100px; height: 100px; }
        }
      `}</style>
    </section>
  );
};

export default About;