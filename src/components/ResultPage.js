import React from 'react';
import '../styles/ResultPage.css';

function ResultPage() {
  return (
    <div className="resultpage">
      <h1 className="result-title">Bien joué</h1>
      <div className="result-quiz">
        <h2>7 / 10</h2>
      </div>
      <div>
        <button className="restart" type="button">
          Recommencer
        </button>
      </div>
      <div className="animation-quiz">
        <img
          src={'https://media.giphy.com/media/l3q2XhfQ8oCkm1Ts4/giphy.gif'}
          alt="bon score"
        />
      </div>

      <h2 className="details-quiz">Détails de vos réponses</h2>
      <div className="details" />
    </div>
  );
}

export default ResultPage;
