import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="App-header">
      <div id="title-div">Dilek Baykara</div>
      <div id="button-div">
        <button onClick={() => navigate("/Home")}>SKETCH</button>
        <button onClick={() => navigate("/About")}>ABOUT</button>
      </div>
    </header>
  );
}

export default Header;
