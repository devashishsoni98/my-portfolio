import React, { useRef, useState } from "react";
import styles from "./ContactForm.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const userid = process.env.REACT_APP_USER_ID;
  const templateid = process.env.REACT_APP_TEMPLATE;
  const myapi = process.env.REACT_APP_EMAIL_API;

  const form = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs.sendForm(userid, templateid, form.current, myapi).then(
      (result) => {
        e.target.reset();
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Something went wrong! Try again after some time.");
      }
    );
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setIsValidEmail(/\S+@\S+\.\S+/.test(enteredEmail));
  };

  return (
    <div className={styles.containeer}>
      <div className="containeer">
        <span className="big-circle"></span>
        <img src="square.png" className="square" alt="square-img" />
        <div className="form">
          <motion.div
            initial={{ x: -75 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="contact-info"
          >
            <h3 className="title">Let's get in touch</h3>
            
            <img
              style={{ width: "100%", margin: "0" }}
              src="./contact.png"
              alt="contact"
            />

            <div className="social-media">
              <p>Connect with me :</p>
              <div className="social-icons">
                <Link
                  to="https://linkedin.com/in/devashish-soni"
                  target="_blank"
                >
                  <BiLogoLinkedin style={{ fontSize: "2rem" }} />
                </Link>
                <Link to="https://github.com/devashishsoni98" target="_blank">
                  <BsGithub
                    style={{ fontSize: "1.8rem", paddingTop: ".5rem" }}
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 75 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="contact-form"
          >
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form ref={form} onSubmit={sendEmail} className="z">
              <h3 className="title">Contact Me</h3>
              <div className="input-containeer">
                <input
                  type="text"
                  name="user_name"
                  className="input"
                  required
                />
                <span>Name</span>
              </div>
              <div className="input-containeer">
                <input
                  type="text"
                  name="user_email"
                  className={`input ${!isValidEmail ? "invalid" : ""}`}
                  required
                    
                />
                <span>E-Mail</span>
              </div>
              <div className="input-containeer textarea">
                <textarea name="message" className="input" required />
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
