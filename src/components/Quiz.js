import React, { useState } from "react";
import QuizSelector from "./QuizSelector";
import QuizQuestions from "./QuizQuestions";
import "../styles/quiz.css";

export const DataContext = React.createContext();

const Quiz = () => {
  const [questionData, setQuestionData] = useState([]);
  return (
    <DataContext.Provider value={{ questionData, setQuestionData }}>
      <div className="quiz">
        <div className="quiz-header">
          <QuizSelector />
        </div>
        <div className="quiz-content">
          <QuizQuestions />
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default Quiz;
