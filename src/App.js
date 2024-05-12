import "./App.css";
import Img1 from ".././src/images/img-1.jpg";
import Img2 from ".././src/images/img-2.jpg";
import Img3 from ".././src/images/img-3.jpg";

function App() {
  return (
    <div className="App">
      <div id="header-div">
        <header className="App-header">
          <div id="title-div">Dilek Baykara</div>
          <div id="button-div">
            <button>SKETCH</button>
            <button>ABOUT</button>
          </div>
        </header>
        <div id="sketch-div">
          <img alt="sketch-1" src={Img1}></img>
          <img alt="sketch-2" src={Img2}></img>
          <img alt="sketch-3" src={Img3}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
