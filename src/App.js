import "./App.css";

import Quiz from "./components/Quiz";
import video from "./background.mp4";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source src={video} type="video/mp4" />
      </video>
      <Router>
        <header className="App-header">
          <h1 className="App-title">Quiz App</h1>
          <NavBar />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
