import React from 'react';
import '../styles/jokesday.css';

function JokesDay({ jokes }) {
  const [jokeOpen, setJokeOpen] = React.useState(false);

  const getJoke = () => {
    setJokeOpen(!jokeOpen);
  };

  return (
    jokes && (
      <div className="jokesContainer">
        <div>{jokes.question}</div>
        <button type="button" className="buttonAnswer" onClick={getJoke}>
          {' '}
          Réponse{' '}
        </button>
        {jokeOpen ? <div>{jokes.answer}</div> : ''}
      </div>
    )
  );
}

export default JokesDay;
