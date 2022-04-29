import React from 'react';
import '../styles/ResultPage.css';
import { Link } from 'react-router-dom';
import he from 'he';
import check2 from '../assets/check2.png';
import wrong2 from '../assets/wrong2.png';

const animation = {
  good: 'https://media.giphy.com/media/l3q2XhfQ8oCkm1Ts4/giphy.gif',
  medium: 'https://media.giphy.com/media/sB4Z9U3yErt9S/giphy.gif',
  bad: 'https://media.giphy.com/media/N2i9JoLDDI5VK/giphy.gif',
};

const resultTitle = {
  great: 'BIEN JOUÉ ',
  middle: 'PAS TROP MAL',
  wrong: 'IL Y A DU BOULOT !',
};

function ResultPage({ answers, questions }) {
  const countScore = (s, currentAnswer, index) =>
    currentAnswer === questions[index].correct_answer ? s + 1 : s;
  const score = answers.reduce(countScore, 0);

  function gifanim(anim) {
    if (anim < questions.length * 0.33) return animation.bad;
    if (anim < questions.length * 0.66) return animation.medium;
    return animation.good;
  }

  function resultSentence(answ) {
    if (answ < questions.length * 0.33) return resultTitle.wrong;
    if (answ < questions.length * 0.66) return resultTitle.middle;
    return resultTitle.great;
  }

  return (
    <div className="resultpage">
      <h1 className="result-title">{resultSentence(score)}</h1>
      <br />
      <h2 className="scoreResult">
        {' '}
        Score: {score} / {questions.length}{' '}
      </h2>
      <div className="animation-quiz">
        <img src={gifanim(score)} alt=" animation end quiz" />
      </div>
      <h2 className="details-quiz">Détails de vos réponses</h2>
      <div className="details">
        {questions.map((question, i) => (
          <div className="text-align" key={question.question}>
            <p className="questionBold">
              {i + 1}. {he.decode(question.question)}
            </p>
            {answers[i] === '' ? (
              <p>Vous n'avez pas répondu à la question</p>
            ) : (
              <p>Votre réponse : {he.decode(answers[i])}</p>
            )}
            {answers[i] === question.correct_answer ? (
              <img className="check" src={check2} alt="good" />
            ) : (
              <img className="wrong" src={wrong2} alt="wrong" />
            )}
            {answers[i] !== question.correct_answer ? (
              <p>Bonne réponse : {question.correct_answer}</p>
            ) : null}
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
