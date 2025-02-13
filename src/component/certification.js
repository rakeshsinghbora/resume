import React from "react";

export default function certification(props) {
  return (
    <div>
      <h3 className="title">Certification</h3>
      <ul className="skill">
        {props.certification.map((cert, index) => {
          return (
            <li key={index}>
              ❖{cert.title}
              <li>{cert.li1}</li>
              <li>{cert.li2}</li>
            </li>
          );
        })}
        {/*         
        <li>
          ❖ Coding and Programming
          <li>Duration: August 2024 to September 2024</li>
          <li>Organization:Samsung Innovation Campus</li>
        </li>
        <li>
          ❖ Android Application Development
          <li>Duration: August 2022 to October 2022</li>
          <li>Organization:Samsung Innovation Campus</li>
        </li> */}
      </ul>
    </div>
  );
}
