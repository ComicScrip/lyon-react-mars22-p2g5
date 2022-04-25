import React from 'react';
import '../styles/ResultPage.css';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png';

const questions = [
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
  {
    question: 'De quelle couleur est le soleil ?',
    answer: ['green', 'red', 'blue'],
    correct_answer: 'jaune',
  },
];

const answers = [
  'jaune',
  'jaune',
  'jaune',
  'jaune',
  'jaune',
  'jaune',
  'jaune',
  'jaune',
  'jaune',
  'jaune',
];

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
      <br />
      <h3 className="scoreResult">
        {' '}
        Score: {score} / {questions.length}{' '}
      </h3>
      <div className="animation-quiz">
        <img src={gifanim(score)} alt=" animation end quiz" />
      </div>
      <h2 className="details-quiz">Détails de vos réponses</h2>
      <div className="details">
        {questions.map((question, i) => (
          <div className="text-align">
            <p>
              {i + 1}
              <img className="arrow" src={arrow} alt="arrow" />{' '}
              {question.question}
            </p>
            <p>Bonne réponse : {question.correct_answer}</p>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="restart" type="button">
          Recommencer
        </button>
      </Link>
    </div>
  );
}

export default ResultPage;
