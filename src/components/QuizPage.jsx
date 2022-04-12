import React from 'react';
import '../styles/QuizPage.css';

function QuizPage({ quizComponent }) {
  return (
    <div className="quiz">
      <div
        className="question"
        dangerouslySetInnerHTML={{ __html: quizComponent.question }}
      />
      <div className="reponses">
        <div className="answerOne">{quizComponent.correct_answer}</div>
        <div className="answerTwo">{quizComponent.incorrect_answers[0]}</div>
        <div className="answerThree">{quizComponent.incorrect_answers[1]}</div>
        <div className="answerFour">{quizComponent.incorrect_answers[2]}</div>
      </div>
    </div>
  );
}

export default QuizPage;
