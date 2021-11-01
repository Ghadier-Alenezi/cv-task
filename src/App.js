import React from "react";
import './components/Main/'
import Main from "./components/Main";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="profile">
        <Main />
      </div>
      <div className="mainInfo">
        <About />
        <Experience />
        <Skills />
        <Education />
      </div>
    </div>
  );
};
export default App;
