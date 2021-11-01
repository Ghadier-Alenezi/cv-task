import React from "react";
import "style.css"

const Main = () => {
  return (
    <div className="mainProf">
      <img className="profileImg"
        src="https://avatars.githubusercontent.com/u/92247998?v=4"
        width="120px"
      ></img>
      <h1 className="text">Ghadier Mutar</h1>
      <h2 className="text">Junior JS Developer</h2>
      <hr></hr>
      <p className="text">Buraidah, Saudi Arabia</p>
      <p className="text">Ghadier.Mutar.elq.js@tuwaiq.edu.sa</p> <hr></hr>
      <img src="https://img.icons8.com/windows/32/000000/twitter.png" />
      <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
      <hr></hr>
      <p className="text">
        I built this site with React components and a JSON Resome Schema. The
        full source code can be found in my Github repo.
      </p>
    </div>
  );
};
export default Main;
