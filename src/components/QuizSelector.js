import React, { useState, useContext } from "react";
import "../styles/quizSelector.css";
import { data } from "../data/data.js";
import { fetchData } from "../data/fetchData.js";
import { DataContext } from "./Quiz";

const QuizSelector = () => {
  const { setQuestionData } = useContext(DataContext);
  const [difficulty, setDifficulty] = useState("any");
  const [category, setCategory] = useState(0);
  const [type, setType] = useState("any");
  const handleSubmit = async (e) => {
    let questions = "";
    e.preventDefault();
    questions = await fetchData(category, difficulty, type);
    console.log("questions");
    console.log(questions);
    setQuestionData(questions);
  };

  return (
    <>
      <form className="quiz-selector" onSubmit={handleSubmit}>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {category ? data[category] : "Choose Category"}
          </button>
          <ul
            className="dropdown-menu pre-scrollable"
            aria-labelledby="dropdownMenuButton1"
            id="dropdownMenu"
          >
            {Object.keys(data).map((item, index) => {
              return (
                <li
                  id="list-item"
                  onClick={(e) => setCategory(item)}
                  className="dropdown-item"
                  key={index}
                >
                  {data[item]}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {type ? type : "Question Type"}
          </button>
          <ul
            className="dropdown-menu pre-scrollable"
            aria-labelledby="dropdownMenuButton1"
            id="dropdownQtype"
          >
            <li onClick={(e) => setType("any")} className="dropdown-item">
              Any type
            </li>
            <li onClick={(e) => setType("multiple")} className="dropdown-item">
              Multiple Choice
            </li>
            <li onClick={(e) => setType("boolean")} className="dropdown-item">
              True/False
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {difficulty ? difficulty : "Difficulty"}
          </button>
          <ul
            className="dropdown-menu pre-scrollable"
            aria-labelledby="dropdownMenuButton1"
          >
            <li onClick={(e) => setDifficulty("any")} className="dropdown-item">
              Any Difficulty
            </li>
            <li
              onClick={(e) => setDifficulty("easy")}
              className="dropdown-item"
            >
              Easy
            </li>
            <li
              onClick={(e) => setDifficulty("medium")}
              className="dropdown-item"
            >
              Medium
            </li>
            <li
              onClick={(e) => setDifficulty("hard")}
              className="dropdown-item"
            >
              Hard
            </li>
          </ul>
        </div>
        <button
          id="submit-btn"
          className="btn btn-primary"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default QuizSelector;
