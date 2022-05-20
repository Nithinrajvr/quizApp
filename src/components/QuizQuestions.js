import React, { useContext, useState, useEffect } from "react";
import "../styles/quizQuestions.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { DataContext } from "./Quiz";

const QuizQuestions = () => {
  const { questionData } = useContext(DataContext);
  const [index, setIndex] = useState(0);

  const handleAnswerCheck = (questionIndex, answer) => {
    if (questionData[questionIndex].correct_answer === answer) {
      console.log("correct");
    } else {
      console.log(questionData[questionIndex].correct_answer);
      console.log("Wrong answer");
    }
  };

  useEffect(() => {
    // const lastIndex = questionData.length - 1;
    // if (index < 0) {
    //   setIndex(lastIndex);
    // }
    // if (index > lastIndex) {
    //   setIndex(0);
    // }
    setIndex(0);
  }, [questionData]);

  if (questionData) {
    return (
      <div className="section-center">
        {questionData.map((item, questionIndex) => {
          const {
            category,
            type,
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
          let difficultyBg = "";
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
          <button className="finish">Submit</button>
        ) : (
          <div>
            {index === 0 ? (
              <></>
            ) : (
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <GrLinkPrevious />
              </button>
            )}
            <button className="next" onClick={() => setIndex(index + 1)}>
              <GrLinkNext />
            </button>
          </div>
        )}
      </div>
    );
  }
  return <div>QuizQuestions</div>;
};

export default QuizQuestions;
