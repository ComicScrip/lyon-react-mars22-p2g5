import React from 'react';
import '../styles/QuizPage.css';
import he from 'he';

function ShowQuestions({ questionItem }) {
  return (
    <div className="quiz">
      <div className="question">{he.decode(questionItem.question)}</div>
      <div className="reponses">
        <button type="submit" className="answers answerOne">
          {questionItem.correct_answer}
        </button>
        <button type="submit" className="answers answerTwo">
          {questionItem.incorrect_answers[0]}
        </button>
        <button type="submit" className="answers answerThree">
          {questionItem.incorrect_answers[1]}
        </button>
        <button type="submit" className="answers answerFour">
          {questionItem.incorrect_answers[2]}
        </button>
      </div>
    </div>
  );
}

export default ShowQuestions;
