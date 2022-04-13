import React from 'react';
import '../styles/QuizPage.css';
import he from 'he';

function QuizPage({ quizComponent }) {
  return (
    <div className="quiz">
      <div className="question">{he.decode(quizComponent.question)}</div>
      <div className="reponses">
        <button type="submit" className="answers answerOne">
          {quizComponent.correct_answer}
        </button>
        <button type="submit" className="answers answerTwo">
          {quizComponent.incorrect_answers[0]}
        </button>
        <button type="submit" className="answers answerThree">
          {quizComponent.incorrect_answers[1]}
        </button>
        <button type="submit" className="answers answerFour">
          {quizComponent.incorrect_answers[2]}
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
