import React from 'react';
import '../styles/jokesday.css';
import confetti from 'canvas-confetti';
import Klaxon from '../assets/Klaxon.mp3';

function frame() {
  const colors = ['#bb0000', '#ffffff'];
  confetti({
    particleCount: 2000,
    angle: -90,
    spread: 550,
    origin: { x: 0 },
    colors,
    startVelocity: 60,
  });
  confetti({
    particleCount: 2000,
    angle: 90,
    spread: 550,
    origin: { x: 1 },
    colors,
    startVelocity: 60,
  });
}

function JokesDay({ jokes }) {
  const [jokeOpen, setJokeOpen] = React.useState(false);

  const sonKlaxon = new Audio(Klaxon);

  const start = () => {
    sonKlaxon.play();
  };

  const getJoke = () => {
    setJokeOpen(!jokeOpen);
    requestAnimationFrame(frame);
    start();
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
