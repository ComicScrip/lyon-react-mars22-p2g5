import React from 'react';
import '../styles/ResultPage.css';
import { Link } from 'react-router-dom';

const questions = [
  {
    question: '1 + 1 = ?',
    answer: [3, 4, 5],
    correct_answer: 2,
  },
  {
    question: 'couleur du soleil?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: '2 + 2 = ?',
    answer: [5, 7, 6],
    correct_answer: 4,
  },
];

const answers = [2, 'jaune', 5];

const animation = {
  good: 'https://media.giphy.com/media/l3q2XhfQ8oCkm1Ts4/giphy.gif',
  medium: 'https://media.giphy.com/media/sB4Z9U3yErt9S/giphy.gif',
  bad: 'https://media.giphy.com/media/N2i9JoLDDI5VK/giphy.gif',
};

const resultTitle = {
  great: 'Bien joué ',
  middle: 'Pas trop mal',
  wrong: 'Il y a du boulot !',
};

function ResultPage() {
  const countScore = (s, currentAnswer, index) =>
    currentAnswer === questions[index].correct_answer ? s + 1 : s;
  const score = answers.reduce(countScore, 0);

  function gifanim(anim) {
    if (anim < 4) return animation.bad;
    if (anim < 7) return animation.medium;
    return animation.good;
  }

  function resultSentence(answ) {
    if (answ < 4) return resultTitle.wrong;
    if (answ < 7) return resultTitle.middle;
    return resultTitle.great;
  }

  return (
    <div className="resultpage">
      <h2 className="result-title">{resultSentence(score)}</h2>
      <h3 className="scoreResult">
        {' '}
        Score: {score} sur {questions.length}{' '}
      </h3>
      <div className="animation-quiz">
        <img src={gifanim(score)} alt=" animation end quiz" />
      </div>
      <h2 className="details-quiz">Détails de vos réponses</h2>
      <div className="details">
        {questions.map((question, i) => (
          <div>
            <p>
              Question {i + 1} / {question.question}
            </p>
            <p>Bonne réponse: {question.correct_answer}</p>
          </div>
        ))}
      </div>
      <Link to="/Home">
        <button className="restart" type="button">
          Recommencer
        </button>
      </Link>
    </div>
  );
}

export default ResultPage;
