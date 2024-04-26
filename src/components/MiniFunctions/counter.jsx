import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

function Counter() {
  const [count, setCount] = useState(0);
  const [Heading, setHeading] = useState("This is my Counter :");

  function addCount() {
    console.log("check add");
    if (count < 10) {
      setCount(count + 1);
    }
    if (count == 10) {
      setHeading("Huraay!!!🎉");
    } else if (count < 10) {
      setHeading("This is my Counter :");
    }
  }

  function subCount() {
    console.log("check sub");
    if (count <= 10) {
      setHeading("This is my Counter :");
    }
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <motion.div
        initial={{ y: 0, x: 75 }}
        whileInView={{ y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="counter-main"
      >
        <h1
          style={{
            margin: "0",
            marginTop: "1rem",
            color: "#f2af29",
            textAlign: "center",
            fontSize: "2.8rem",
          }}
        >
          Counter Function
        </h1>
        <p
          style={{
            marginBottom: "0",
            marginTop: "1rem",
            color: "#e0e0ce",
            width: "80%",
            marginLeft: "10%",
            marginRight: "10%",
            textAlign: "center",
            fontSize: "1.8rem",
          }}
        >
          This is a simple Counter component which changes the value of counter
          by clicking on add or subtract buttons. It changes the text displayed
          when the counter reaches above 10 and switches it back to default text
          once the counter is below 10 again!
        </p>
        <h1
          style={{
            marginBottom: "2rem",
            marginTop: "1rem",
            color: "#f2af29",
            textAlign: "center",
            fontSize: "1.8rem",
          }}
        >
          {Heading} {count}
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{ margin: "0 1rem", borderRadius: "1.5rem" }}
            className="First"
            onClick={addCount}
          ><IoMdAdd className="counter-icon"/></button>
          <button
            style={{ marginBottom: "2rem", borderRadius: "1.5rem" }}
            className="Second"
            onClick={subCount}
          >
            <RiSubtractFill className="counter-icon"/>
          </button>
        </div>
        <div className="line-styling">
          <div className="style-circle"></div>
          <div className="style-circle"></div>
          <div className="style-line"></div>
        </div>
      </motion.div>
    </>
  );
}

export default Counter;
