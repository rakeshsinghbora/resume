import github from "./component/github.png";
import "./App.css";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Certification from "./component/certification";
import Academic from "./component/Academic";
import Navbar from "./component/Navbar";
function App() {
  let skill = [
    "Java",
    "C",
    "C++",
    "HTML,CSS,JavaScript",
    "Python(Basic)",
    "MERN(Basic)",
  ];

  let education = [
    "MCA | Babasaheb Bhimrao Ambedkar University,Lucknow CGPA : 8.27 | (2023 - Present)",
    "BCA | University of Lucknow,Lucknow 77.88% | (2019 - 2022)",
    "XII (CBSE) | Kendriya Vidyalaya Gomti Nagar Lucknow 71.2% | 2019",
    "X (CBSE) | Kendriya Vidyalaya Gomti Nagar Lucknow CGPA : 9.4 | 2017",
  ];

  let certification = [
    {
      title: "Coding and Programming",
      li1: "Duration: August 2024 to September 2024",
      li2: "Organization:Samsung Innovation Campus",
    },
    {
      title: "Android Application Development",
      li1: "Duration: August 2022 to October 2022",
      li2: "Organization:Digipodium",
    },
  ];

  let acad = [
    {
      title: "EZRENTAL - Car Rental Website",
      desc1:
        "As a part of my BCA final year project, I developed this Car Rental website with my two teammates to book cars for rent online.",
      desc2:
        "Technology Used: Adobe XD for designing wireframes and MERN stack for development.",
    },
    {
      title: "Crime Rate Analysis -",
      desc1:
        "This project was a part of Samsung Innovation Campus certification. The goal of this project was to analyse the crime rate against women in India using python.",
      desc2: "Technology used: Python Libraries.",
    },
  ];

  return (
    <>
      <Navbar />
      <h2 id="fir1">Rakesh Singh Bora</h2>
      <h3>rakeshsinghbora3@gmail.com</h3>
      <div className="git">
        <img alt="github" src={github}></img>
        <a target="blank" href="https://github.com/rakeshsinghbora">
          @rakeshsinghbora
        </a>
      </div>
      <Skills skills={skill} />
      <Education education={education} />
      <Academic acad={acad} />
      <Certification certification={certification} />
    </>
  );
}

export default App;
