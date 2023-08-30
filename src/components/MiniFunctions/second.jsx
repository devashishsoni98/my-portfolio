import { useState } from "react";
import { motion } from "framer-motion";

function SecondComp() {
  const [name, setName] = useState("SpiderMan");

  function changeHeroFun() {
    console.log("Check test");

    setName("ShaktiMaan");
  }

  return (
    <>
      <motion.div
        initial={{ y: 75 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
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
          Change Text OnClick
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
          Simple JavaScript to change the text displayed by clicking on button.
        </p>
        <h1
          style={{
            marginBottom: "0",
            marginTop: "1rem",
            color: "#ebe9e9",
            textAlign: "center",
            fontSize: "1.8rem",
          }}
        >
          My hero is <span className="def-col">{name}</span>
        </h1>
        <br></br>
        <div style={{ paddingBottom: "2rem" }}>
          <button
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "2rem",
              borderRadius: "0.5rem",
              background: "#ebe9e9",
              borderRadius: "5px",
              border: "0",
              cursor: "pointer",
              color: "#0d0d11",
              transition: "all 0.3s",
              fontweight: "700",
              padding: "1rem",
            }}
            onClick={changeHeroFun}
          >
            Change Hero
          </button>
        </div>
      </motion.div>
    </>
  );
}
export default SecondComp;
