import { useState } from "react";

function SecondComp() {
  const [name, setName] = useState("SpiderMan");

  function changeHeroFun() {
    console.log("Check test");

    setName("ShaktiMaan");
  }

  return (
    <>
      <h1
        style={{
          margin: "0",
          marginTop: "1rem",
          backgroundColor: "#0d0d11",
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
          backgroundColor: "#0d0d11",
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
          backgroundColor: "#0d0d11",
          color: "#f2af29",
          textAlign: "center",
          fontSize: "1.8rem",
        }}
      >
        My hero is {name}
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
            background: "#f2af29",
            borderRadius: "5px",
            border: "0",
            cursor: "pointer",
            color: "white",
            transition: "all 0.3s",
            fontweight: "700",
            paddingBottom: "0",
          }}
          onClick={changeHeroFun}
        >
          Change Hero
        </button>
      </div>
    </>
  );
}
export default SecondComp;