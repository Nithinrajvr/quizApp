import React, { useContext} from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../App";
import "../styles/results.css";

const Results = () => {
  const { questionData, setQuestionData, score } = useContext(DataContext);
  const navigate = useNavigate();
  const handleRetake = () => {
    navigate("/quiz");
  };
  const handleNewQuiz = () => {
    setQuestionData([]);
    navigate("/quiz");
  };
  let style = {};
  let text = "";
  if (score > 5) {
    text = "Good Job!!😍";
    style = {
      background: "rgba(0, 255, 98, 0.56)",
      borderRadius: "1.6rem",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(0px)",
    };
  } else {
    text = "Better Luck next time!😟";
    style = {
      background: "rgba(255, 41, 0, 0.42)",
      borderRadius: "1.6rem",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(0px)",
    };
  }

  return (
    <div className="results">
      <p className="score" style={style}>
        {`You scored : ${score}/10`}
        <br></br>
        {text}
      </p>
      <div className="result-list">
        {questionData.map((item, index) => {
          const { question, correct_answer, chosen_answer } = item;
          return (
            <section key={index}>
              <h1>
                {index + 1}. {question}
              </h1>
              <h2>{`correct answer: ${correct_answer}`}</h2>
              {correct_answer === chosen_answer ? (
                <h2
                  style={{ color: "green" }}
                >{`You chose the correct answer: ${chosen_answer}`}</h2>
              ) : (
                <h2
                  style={{ color: "red" }}
                >{`You chose the wrong answer: ${chosen_answer}`}</h2>
              )}
            </section>
          );
        })}
      </div>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => {
            handleRetake();
          }}
        >
          Retake
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleNewQuiz();
          }}
        >
          New quiz
        </button>
      </div>
    </div>
  );
};

export default Results;
