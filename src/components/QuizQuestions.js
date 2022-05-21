import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "../styles/quizQuestions.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { DataContext } from "../App";

const QuizQuestions = () => {
  const buttonRef = useRef();
  const navigate = useNavigate();
  const { questionData, setScore } = useContext(DataContext);
  const [index, setIndex] = useState(0);

  const handleAnswerCheck = (questionIndex, answer) => {
    if (questionData[questionIndex].correct_answer === answer) {
      questionData[questionIndex]["chosen_answer"] = answer;
    } else {
      questionData[questionIndex]["chosen_answer"] = answer;
    }
  };
  const handlesubmit = () => {
    let score = 0;
    questionData.forEach((item) => {
      if (item.correct_answer === item.chosen_answer) {
        score += 1;
      }
    });
    setScore(score);
    navigate("/results");
  };

  useEffect(() => {
    if (questionData.length === 10) {
      buttonRef.current.style.visibility = "visible";
    } else {
      buttonRef.current.style.visibility = "hidden";
    }
    setIndex(0);
  }, [questionData]);

  if (questionData) {
    return (
      <div className="section-center">
        {questionData.map((item, questionIndex) => {
          const {
            category,
            difficulty,
            question,
            correct_answer,
            incorrect_answers,
          } = item;
          const answers = [...incorrect_answers, correct_answer];
          const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());
          let position = "nextSlide";
          if (questionIndex === index) {
            position = "activeSlide";
          }
          let difficultyBg = {};
          switch (difficulty) {
            case "easy":
              difficultyBg = {
                background: "rgba(0, 255, 98, 0.56)",
                borderRadius: "1.6rem",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(0px)",
              };
              break;
            case "hard":
              difficultyBg = {
                background: "rgba(255, 41, 0, 0.42)",
                borderRadius: "1.6rem",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(0px)",
              };
              break;
            case "medium":
              difficultyBg = {
                background: "rgba(255, 162, 0, 0.32)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: " blur(0px)",
              };
              break;
            default:
              difficultyBg = { backgroundColor: "grey" };
              break;
          }
          if (
            questionIndex === index - 1 ||
            (index === 0 && questionIndex === questionData.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article
              key={questionIndex}
              id="question-card"
              className={position}
            >
              <section className="info">
                <h1 style={difficultyBg} className="difficulty">
                  {difficulty}
                </h1>
                <h1 className="category">Category: {category}</h1>
              </section>
              {/* <h1 className="type">{type}</h1> */}
              <h1 className="question">
                {questionIndex + 1}/10. {question}
              </h1>

              <div className="answers-container">
                {shuffledAnswers.map((answer, answerIndex) => {
                  return (
                    <button
                      onClick={() => {
                        handleAnswerCheck(questionIndex, answer);
                      }}
                      className="answer"
                      key={answerIndex}
                    >
                      {answer}
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}
        {index === 9 ? (
          <button onClick={() => handlesubmit()} className="finish">
            Submit
          </button>
        ) : (
          <div>
            {index === 0 ? (
              <></>
            ) : (
              <button
                className="prev  btn btn-secondary"
                onClick={() => setIndex(index - 1)}
              >
                <GrLinkPrevious style={{ fontSize: "2rem" }} />
              </button>
            )}
            <button
              ref={buttonRef}
              className="next btn btn-secondary"
              onClick={() => setIndex(index + 1)}
            >
              <GrLinkNext style={{ fontSize: "2rem" }} />
            </button>
          </div>
        )}
      </div>
    );
  }
  return <div>QuizQuestions</div>;
};

export default QuizQuestions;
