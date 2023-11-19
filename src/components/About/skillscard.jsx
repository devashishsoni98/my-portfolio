import React from "react";

const SkillsCard = ({ index, skills }) => {
  return (
    <>
      <div className="skills">
        <img src={skills.img} alt="logo" className="skill-image" />
        <h1>{skills.title}</h1>
      </div>
    </>
  );
};

export default SkillsCard;
