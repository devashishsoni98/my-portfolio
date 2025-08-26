import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiX, FiMessageCircle, FiUser, FiZap } from "react-icons/fi";

const Contact = () => {
  const userid = process.env.REACT_APP_USER_ID;
  const templateid = process.env.REACT_APP_TEMPLATE;
  const myapi = process.env.REACT_APP_EMAIL_API;

  const form = useRef();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!isValidEmail) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(userid, templateid, form.current, myapi);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      form.current.reset();
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong! Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setIsValidEmail(/\S+@\S+\.\S+/.test(enteredEmail) || enteredEmail === '');
  };

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

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "devashishsoni0@gmail.com",
      href: "mailto:devashishsoni0@gmail.com",
      color: "var(--gradient-primary)"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Jaipur, Rajasthan, India",
      href: null,
      color: "var(--gradient-secondary)"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 (123) 456-7890",
      href: "tel:+911234567890",
      color: "var(--gradient-accent)"
    }
  ];

  return (
    <section ref={containerRef} className="contact-section">
      {/* Background Elements */}
      <div className="contact-bg">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <div className="section-badge">
              <span className="neon-glow">Contact</span>
            </div>
            <h2 className="section-title display-text">
              Let's Create
              <span className="highlight-line">Together</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind or want to collaborate? I'd love to hear from you! 
              Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <div className="contact-main">
            {/* Contact Info */}
            <motion.div className="contact-info-section" variants={itemVariants}>
              <div className="contact-card glass-card">
                <div className="contact-header">
                  <div className="contact-icon-main">
                    <FiMessageCircle />
                  </div>
                  <h3>Let's Connect</h3>
                  <p className="contact-intro">
                    I'm always open to discussing new opportunities, creative projects, 
                    or just having a friendly chat about technology and development.
                  </p>
                </div>

                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      className="contact-item"
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="contact-icon" style={{ background: info.color }}>
                        <info.icon />
                      </div>
                      <div className="contact-text">
                        <span className="contact-label">{info.label}</span>
                        {info.href ? (
                          <a href={info.href} className="contact-value">
                            {info.value}
                          </a>
                        ) : (
                          <span className="contact-value">{info.value}</span>
                        )}
                      </div>
                      <div className="contact-glow"></div>
                    </motion.div>
                  ))}
                </div>

                <div className="social-section">
                  <h4>Follow My Journey</h4>
                  <div className="social-links-grid">
                    <motion.a
                      href="https://linkedin.com/in/devashish-soni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-card glass"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BiLogoLinkedin />
                      <span>LinkedIn</span>
                      <div className="social-glow linkedin-glow"></div>
                    </motion.a>
                    <motion.a
                      href="https://github.com/devashishsoni98"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-card glass"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BsGithub />
                      <span>GitHub</span>
                      <div className="social-glow github-glow"></div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-section" variants={itemVariants}>
              <div className="contact-form-card glass-card">
                <div className="form-header">
                  <div className="form-icon">
                    <FiZap />
                  </div>
                  <h3>Send Message</h3>
                  <p>Ready to start a conversation? Drop me a line!</p>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="user_name">
                        <FiUser />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        required
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="user_email">
                        <FiMail />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        required
                        className={`form-input ${!isValidEmail ? 'error' : ''}`}
                        placeholder="Enter your email address"
                        onChange={handleEmailChange}
                      />
                      {!isValidEmail && (
                        <span className="error-message">Please enter a valid email address</span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <FiMessageCircle />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      className="form-input form-textarea"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <motion.button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting || !isValidEmail}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {submitStatus && (
                    <motion.div 
                      className={`status-message ${submitStatus.type}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {submitStatus.type === 'success' ? <FiCheck /> : <FiX />}
                      <span>{submitStatus.message}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-section {
          background: var(--background-primary);
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
        }

        .contact-bg {
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
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.5;
        }

        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          animation: blob 12s infinite;
        }

        .bg-blob-1 {
          top: 20%;
          left: 10%;
          width: 350px;
          height: 350px;
          background: var(--gradient-primary);
          animation-delay: 0s;
        }

        .bg-blob-2 {
          bottom: 20%;
          right: 10%;
          width: 300px;
          height: 300px;
          background: var(--gradient-accent);
          animation-delay: 6s;
        }

        .contact-content {
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
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
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .contact-card,
        .contact-form-card {
          padding: 2rem;
          height: fit-content;
          position: relative;
          overflow: hidden;
        }

        .contact-header,
        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-icon-main,
        .form-icon {
          width: 80px;
          height: 80px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-2xl);
          color: white;
          margin: 0 auto var(--space-lg);
          position: relative;
        }

        .contact-icon-main::after,
        .form-icon::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid var(--accent-electric);
          border-radius: 50%;
          border-top-color: transparent;
          border-right-color: transparent;
          animation: spin 3s linear infinite;
        }

        .contact-card h3,
        .contact-form-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .contact-intro,
        .form-header p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          margin-bottom: var(--space-xl);
          padding: var(--space-lg);
          border-radius: var(--radius-xl);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: var(--text-xl);
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          flex: 1;
        }

        .contact-label {
          font-size: var(--text-sm);
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-value {
          color: var(--text-primary);
          font-weight: 600;
          font-size: var(--text-base);
          text-decoration: none;
          transition: color var(--transition-normal);
        }

        .contact-value:hover {
          color: var(--accent-electric);
        }

        .contact-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-primary);
          opacity: 0;
          filter: blur(20px);
          transition: opacity var(--transition-normal);
          border-radius: var(--radius-xl);
        }

        .contact-item:hover .contact-glow {
          opacity: 0.1;
        }

        .social-section h4 {
          font-size: var(--text-lg);
          margin-bottom: var(--space-lg);
          color: var(--text-primary);
          text-align: center;
        }

        .social-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
        }

        .social-link-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-xl);
          border-radius: var(--radius-xl);
          color: var(--text-secondary);
          font-size: var(--text-2xl);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .social-link-card span {
          font-size: var(--text-sm);
          font-weight: 600;
        }

        .social-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          filter: blur(20px);
          transition: opacity var(--transition-normal);
          border-radius: var(--radius-xl);
        }

        .linkedin-glow {
          background: #0077b5;
        }

        .github-glow {
          background: #333;
        }

        .social-link-card:hover .social-glow {
          opacity: 0.2;
        }

        .social-link-card:hover {
          color: var(--text-primary);
          transform: translateY(-5px);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input {
          padding: 1rem;
          background: var(--background-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-xl);
          color: var(--text-primary);
          font-size: 1rem;
          font-family: inherit;
          transition: all var(--transition-normal);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-electric);
          box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.1);
          background: var(--background-secondary);
        }

        .form-input.error {
          border-color: var(--error);
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .form-input::placeholder {
          color: var(--text-muted);
        }

        .form-textarea {
          resize: vertical;
          min-height: 140px;
          font-family: inherit;
        }

        .error-message {
          color: var(--error);
          font-size: var(--text-sm);
          margin-top: var(--space-xs);
          display: flex;
          align-items: center;
          gap: var(--space-xs);
        }

        .submit-btn {
          margin-top: 1rem;
          width: 100%;
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: var(--radius-xl);
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: 1rem;
        }

        .status-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: var(--error);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        @media (max-width: 1024px) {
          .contact-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 2rem 0;
          }

          .contact-card,
          .contact-form-card {
            padding: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .social-links-grid {
            grid-template-columns: 1fr;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .bg-blob {
            filter: blur(40px);
          }

          .bg-blob-1 { width: 250px; height: 250px; }
          .bg-blob-2 { width: 200px; height: 200px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;