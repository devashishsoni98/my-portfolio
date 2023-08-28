import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
const Contact = () => {

  const userid = process.env.REACT_APP_USER_ID;
  const templateid = process.env.REACT_APP_TEMPLATE;
  const myapi = process.env.REACT_APP_EMAIL_API;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        userid,
        templateid,
        form.current,
        myapi
      )
      .then(
        (result) => {
          e.target.reset();
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Something went wrong! Try again after some time.");
        }
      );
  };
  return (
    <>
      <div className="contact">
        <h1 className="c-h1">Contact Me</h1>
        <div className="formm">
          <form ref={form} onSubmit={sendEmail} className="forum">
            <input
              type="text"
              name="user_name"
              className="feedback-input"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="feedback-input"
              placeholder="Email"
            />
            <textarea
              name="message"
              className="feedback-input"
              placeholder="Message"
            />
            <input type="submit" value="Send" className="form-btn" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
