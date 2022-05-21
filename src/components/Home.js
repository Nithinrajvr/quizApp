import React, { useContext } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router";
import { DataContext } from "../App";

const Home = () => {
  const { setQuestionData } = useContext(DataContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quiz");
    setQuestionData([]);
  };
  return (
    <div className="home">
      <div className="card-container text">
        <div className="title">
          <h1> The 100% engagement platform</h1>
        </div>
        <div className="description">
          <p>
            Put your knowledge to the test with curious quizzes for all levels.
            Different quiz categories with varied difficulty levels The feature
            view question results shows how many people answered the same way or
            differently. It can be interesting for respondents to see how other
            people answered the same question. To use this feature, make sure
            you create an API key in the Account menu.
          </p>
        </div>
      </div>
      <div className="card-container button">
        <button
          id="button"
          className="btn btn-primary"
          onClick={() => {
            handleClick();
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
