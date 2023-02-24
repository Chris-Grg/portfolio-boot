import React from "react";

function SkillsList() {
  const data = [
    { ID: "HTML", Value: "90" },
    { ID: "CSS", Value: "30" },
    { ID: "JavaScript", Value: "80" },
    { ID: "React", Value: "40" },
    { ID: "Node.js", Value: "40" },
  ];
  const listSkills = data.map((element) => {
    return (
      <>
        <span className="skill">
          {element.ID} <i className="val">{element.Value}%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </>
    );
  });
}
export default SkillsList;
