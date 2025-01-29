import github from "./component/github.png";
import "./App.css";
import Skills from './component/Skills'
import Education from './component/Education'
import Certification from './component/certification'
import Academic from './component/Academic'
import Navbar from "./component/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <h2 id="fir1">Rakesh Singh Bora</h2>
      <h3>rakeshsinghbora3@gmail.com</h3>
      <div className="git">
        <img alt="github" src={github}></img>
        <a target="blank" href="https://github.com/rakeshsinghbora">@rakeshsinghbora</a>
      </div>
      <Skills/>
      <Education/>
      <Academic/>
      <Certification/>
    </>
  );
}

export default App;
