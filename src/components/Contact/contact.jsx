import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiX } from "react-icons/fi";

const Contact = () => {
  const userid = process.env.REACT_APP_USER_ID;
  const templateid = process.env.REACT_APP_TEMPLATE;
  const myapi = process.env.REACT_APP_EMAIL_API;

  const form = useRef();
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

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "devashishsoni0@gmail.com",
      href: "mailto:devashishsoni0@gmail.com"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Jaipur, Rajasthan, India",
      href: null
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 (123) 456-7890",
      href: "tel:+911234567890"
    }
  ];

  return (
    <section className="contact-section section">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="contact-main grid grid-cols-2">
            {/* Contact Info */}
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="contact-card card">
                <h3>Let's Connect</h3>
                <p className="contact-intro">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and development.
                </p>

                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-item">
                      <div className="contact-icon">
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
                    </div>
                  ))}
                </div>

                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-icons">
                    <a
                      href="https://linkedin.com/in/devashish-soni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <BiLogoLinkedin />
                    </a>
                    <a
                      href="https://github.com/devashishsoni98"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <BsGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-wrapper" variants={itemVariants}>
              <div className="contact-form-card card">
                <h3>Send Message</h3>
                
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="user_name">Full Name</label>
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
                    <label htmlFor="user_email">Email Address</label>
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

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      className="form-input form-textarea"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting || !isValidEmail}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus && (
                    <div className={`status-message ${submitStatus.type}`}>
                      {submitStatus.type === 'success' ? <FiCheck /> : <FiX />}
                      {submitStatus.message}
                    </div>
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

        .contact-card,
        .contact-form-card {
          height: 100%;
        }

        .contact-card h3,
        .contact-form-card h3 {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-lg);
          color: var(--text-primary);
        }

        .contact-intro {
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
          margin-bottom: var(--space-2xl);
        }

        .contact-details {
          margin-bottom: var(--space-2xl);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-gold));
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: var(--text-lg);
          flex-shrink: 0;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .contact-label {
          font-size: var(--text-sm);
          color: var(--text-muted);
          font-weight: 500;
        }

        .contact-value {
          color: var(--text-primary);
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-value:hover {
          color: var(--accent-primary);
        }

        .social-links h4 {
          font-size: var(--text-lg);
          margin-bottom: var(--space-md);
          color: var(--text-primary);
        }

        .social-icons {
          display: flex;
          gap: var(--space-md);
        }

        .social-link {
          width: 48px;
          height: 48px;
          background: var(--background-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-size: var(--text-xl);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .form-group label {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-input {
          padding: var(--space-md);
          background: var(--background-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          color: var(--text-primary);
          font-size: var(--text-base);
          font-family: inherit;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-input.error {
          border-color: var(--error);
        }

        .form-input::placeholder {
          color: var(--text-muted);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .error-message {
          color: var(--error);
          font-size: var(--text-sm);
          margin-top: var(--space-xs);
        }

        .submit-btn {
          margin-top: var(--space-md);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          font-size: var(--text-sm);
          font-weight: 500;
          margin-top: var(--space-md);
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
            gap: var(--space-2xl);
          }
        }

        @media (max-width: 768px) {
          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: var(--space-sm);
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;