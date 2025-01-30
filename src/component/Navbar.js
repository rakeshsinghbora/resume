import React from "react";
import {Link} from 'react-router-dom'
// import '../App.css';
import Dp from "./rakeshlinkedin.jpg";
export default function Navbar() {
  return (
    <>
      <div className="nav">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    </>
  );
}
