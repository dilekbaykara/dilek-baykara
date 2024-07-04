import React from "react";
import "./App.css";
import Img1 from ".././src/images/img-1.jpg";
import Img2 from ".././src/images/img-2.jpg";
import Img3 from ".././src/images/img-3.jpg";

const Home = () => {
  return (
    <div>
      <div id="sketch-div">
        <img alt="sketch-1" src={Img1}></img>
        <img alt="sketch-2" src={Img2}></img>
        <img alt="sketch-3" src={Img3}></img>
      </div>
    </div>
  );
};

export default Home;
