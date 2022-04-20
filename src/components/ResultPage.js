import React from 'react';
import '../styles/ResultPage.css';

const questions = [
  {
    question1: '1 + 1 = ?',
    answer: [3, 4, 5],
    correctAnswer: 2,
  },
  {
    question2: 'couleur du soleil?',
    answer: ['green', 'red', 'blue'],
    correctAnswer: 'jaune',
  },
  {
    question3: '2 + 2 = ?',
    answer: [5, 7, 6],
    correctAnswer: 4,
  },
];

const answers = [2, 'jaune', 5];

const animation = {
  good: 'https://media.giphy.com/media/l3q2XhfQ8oCkm1Ts4/giphy.gif',
  medium: 'https://media.giphy.com/media/sB4Z9U3yErt9S/giphy.gif',
  bad: 'https://media.giphy.com/media/N2i9JoLDDI5VK/giphy.gif',
};

const resultTitle = {
  great: 'Bien joué !!!',
  middle: 'Pas trop mal',
  wrong: 'Il y a du boulot',
};

function ResultPage() {
  const countScore = (s, currentAnswer, index) =>
    currentAnswer === questions[index].correctAnswer ? s + 1 : s;
  const score = answers.reduce(countScore, 0);

  function gifanim(s) {
    if (s < 4) return animation.bad;
    if (s < 7) return animation.medium;
    return animation.good;
  }

  function resultSentence(s) {
    if (s < 4) return resultTitle.wrong;
    if (s < 7) return resultTitle.middle;
    return resultTitle.great;
  }

  return (
    <div className="resultpage">
      <h1 className="result-title">{resultSentence(score)}</h1>
      <div className="animation-quiz">
        <img src={gifanim(score)} alt=" animation end quiz" />
      </div>
      <h2 className="details-quiz">Détails de vos réponses</h2>
      <div className="details" />
      <button className="restart" type="button">
        Recommencer
      </button>
    </div>
  );
}

export default ResultPage;
