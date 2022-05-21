import "./App.css";
import React, { useState } from "react";
import Quiz from "./components/Quiz";
import video from "./background.mp4";
import Results from "./components/Results";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const DataContext = React.createContext();

function App() {
  const [score, setScore] = useState(0);
  const [questionData, setQuestionData] = useState([]);
  return (
    <DataContext.Provider
      value={{ questionData, setQuestionData, score, setScore }}
    >
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
          <div className="App-content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/quiz" element={<Quiz />} />
              <Route exact path="/results" element={<Results />} />
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
