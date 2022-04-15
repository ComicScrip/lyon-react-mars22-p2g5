import React from 'react';
import '../styles/ResultPage.css';

function ResultPage() {
  return (
    <div className="resultpage">
      <h1 className="result-title">Bien joué</h1>
      <h2>7 / 10</h2>
      <div className="animation-quiz">
        <img
          src={'https://media.giphy.com/media/l3q2XhfQ8oCkm1Ts4/giphy.gif'}
          alt="bon score"
        />
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
