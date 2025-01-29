import React from "react";

export default function Skills(props) {
  return (
    <div>
      <h3 className="title">Skills</h3>
      <ul className="skill">
        {props.skills.map((skill, index) => {
          return <li key={index}>❖ {skill}</li>;
        })}
      </ul>
    </div>
  );
}
