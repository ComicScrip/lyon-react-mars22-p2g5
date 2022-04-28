import React from 'react';
import '../styles/jokesday.css';
import confetti from 'canvas-confetti';
// import Confetti from 'react-dom-confetti';

function frame() {
  const colors = ['#bb0000', '#ffffff'];
  confetti({
    particleCount: 200,
    angle: 0,
    spread: 55,
    origin: { x: 0 },
    colors,
  });
  confetti({
    particleCount: 200,
    angle: 180,
    spread: 55,
    origin: { x: 1 },
    colors,
  });
}

function JokesDay({ jokes }) {
  const [jokeOpen, setJokeOpen] = React.useState(false);

  const getJoke = () => {
    setJokeOpen(!jokeOpen);
    requestAnimationFrame(frame);
  };

  return (
    jokes && (
      <div className="jokesContainer">
        <div>{jokes.question}</div>
        <button type="button" className="buttonAnswer" onClick={getJoke}>
          {' '}
          Réponse{' '}
        </button>
        {jokeOpen ? <div>{jokes.answer} </div> : ''}
      </div>
    )
  );
}

export default JokesDay;
