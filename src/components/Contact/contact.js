import "./contact.css";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="c-h1">Contact Me</h1>
      <div className="formm">
        <form className="forum">
          <input
            name="name"
            type="text"
            class="feedback-input"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            class="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="text"
            class="feedback-input"
            placeholder="Message"
          ></textarea>
          <input
            className="form-btn"
            type="submit"
            value="SUBMIT"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};
export default Contact;
