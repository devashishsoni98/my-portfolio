import React from "react";
import Counter from "./counter";
import SecondComp from "./second";
import BlogList from "./blogList";

const MiniFunctions = () => {
  return (
    <div className="minifunction">
      <BlogList />
      <Counter />
      <SecondComp />
    </div>
  );
};

export default MiniFunctions;
