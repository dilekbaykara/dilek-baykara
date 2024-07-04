import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
