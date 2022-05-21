import QuizSelector from "./QuizSelector";
import QuizQuestions from "./QuizQuestions";
import "../styles/quiz.css";

const Quiz = () => {
  return (
    <div className="quiz">
      <div className="quiz-header">
        <QuizSelector />
      </div>
      <div className="quiz-content">
        <QuizQuestions />
      </div>
    </div>
  );
};

export default Quiz;
