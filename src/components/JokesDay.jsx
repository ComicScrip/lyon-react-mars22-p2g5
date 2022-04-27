import React from 'react';
import '../styles/jokesday.css';
import Confetti from 'react-dom-confetti';

function JokesDay({ jokes }) {
  const [jokeOpen, setJokeOpen] = React.useState(false);

  const config = {
    angle: '97',
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

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
        {jokeOpen ? (
          <div>
            {jokes.answer} <Confetti active={getJoke} config={config} />
          </div>
        ) : (
          ''
        )}
      </div>
    )
  );
}

export default JokesDay;
