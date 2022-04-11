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

/* function QuizPage() {
  return (
    <div className="quiz">
      <div className="question">Qu'est-ce qu'un chat dans l'espace</div>
      <div className="reponses">
        <div className="answerOne">Un chat-tellite</div>
        <div className="answerTwo">Une chat-vette spaciale</div>
        <div className="answerThree">Un Cat-Cat</div>
        <div className="answerFour">Chat-lon Musk</div>
      </div>
    </div>
  );
}
export default QuizPage; */
