import React, { useEffect } from 'react';
import '../styles/jokesday.css';
import confetti from 'canvas-confetti';
import Klaxon from '../assets/Klaxon.mp3';
import axios from 'axios';

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
  const firstJoke = jokes;
  const [jokeOpen, setJokeOpen] = React.useState(false);
  const [newJoke, setNewJoke] = React.useState(firstJoke);

  const sonKlaxon = new Audio(Klaxon);

  const start = () => {
    sonKlaxon.play();
  };

  const getJoke = () => {
    setJokeOpen(!jokeOpen);
    requestAnimationFrame(frame);
    start();
  };

  const getNewJoke = () => {
    setJokeOpen(false);
    axios
      .get('http://localhost:5000/jokes/random')
      .then((response) => response.data)
      .then((data) => {
        setNewJoke(data);
      });
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    jokes && (
      <div className="jokesContainer">
        <div>{newJoke.question}</div>
        {jokeOpen ? (
          <button type="button" className="buttonAnswer" onClick={getNewJoke}>
            {' '}
            Nouvelle Blague{' '}
          </button>
        ) : (
          <button type="button" className="buttonAnswer" onClick={getJoke}>
            {' '}
            Réponse{' '}
          </button>
        )}

        {jokeOpen ? <div>{newJoke.answer} </div> : ''}
      </div>
    )
  );
}

export default JokesDay;
