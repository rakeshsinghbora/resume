import React from "react";

export default function Education(props) {
  return (
    <div>
      <h3 className="title">Education</h3>
      <ul className="skill">
        {props.education.map((education, index) => {
          return <li key={index}>❖ {education}</li>;
        })}
      </ul>
    </div>
  );
}
