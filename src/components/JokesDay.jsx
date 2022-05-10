import React, { useEffect, useContext } from 'react';
import '../styles/jokesday.css';
import confetti from 'canvas-confetti';
import Klaxon from '../assets/Klaxon.mp3';
import axios from 'axios';
import { NightModeContext } from '../contexts/nightModeContext';

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
  const nightModeRendering = useContext(NightModeContext);

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
      .get(`${process.env.REACT_APP_API_URL}/jokes/random`)
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
      <div
        className={`jokesContainer ${
          nightModeRendering.isNight && 'nightJoke'
        }`}
      >
        <div>{newJoke.question}</div>
        {jokeOpen ? (
          <button
            type="button"
            className={`buttonAnswer ${
              nightModeRendering.isNight && 'nightJoke'
            }`}
            onClick={getNewJoke}
          >
            {' '}
            Nouvelle Blague{' '}
          </button>
        ) : (
          <button
            type="button"
            className={`buttonAnswer ${
              nightModeRendering.isNight && 'nightJoke'
            }`}
            onClick={getJoke}
          >
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
