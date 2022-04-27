import React from 'react';
import '../styles/jokesday.css';

function JokesDay({ jokes }) {
  return (
    jokes && (
      <div className="jokesContainer">
        <div>{jokes.question}</div>
        <button type="button" className="buttonAnswer">
          {' '}
          Réponse{' '}
        </button>
        <div>{jokes.answer}</div>
      </div>
    )
  );
}

export default JokesDay;
