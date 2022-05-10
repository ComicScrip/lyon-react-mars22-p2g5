import { Link } from 'react-router-dom';
import '../styles/home.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import JokesDay from './JokesDay';
import NewJoke from './NewJoke';
import { NightModeContext } from '../contexts/nightModeContext';

export default function Home() {
  const [jokesOfTheDay, setJokesOfTheDay] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const nightModeRendering = useContext(NightModeContext);

  const handleClick = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/jokes/random`)
      .then((response) => response.data)
      .then((data) => {
        setJokesOfTheDay(data);
      });
  }, []);

  return (
    <div className="homepage">
      <h1>INQUIZ'ITOR</h1>
      <div>
        <Link to="/Categories">
          <button
            className={nightModeRendering.isNight ? 'letsGo night' : 'letsGo'}
            type="button"
          >
            LET'S QUIZZ
          </button>
        </Link>
      </div>
      <div className="joke-of-the-day" />
      <JokesDay jokes={jokesOfTheDay} />
      <div>
        <button
          onClick={handleClick}
          type="button"
          className={nightModeRendering.isNight ? 'btnAjout night' : 'btnAjout'}
        >
          +
        </button>

        <NewJoke show={showPopup} setShow={setShowPopup} />
      </div>
      <div>
        <p
          className={
            nightModeRendering.isNight ? 'textBlague night' : 'textBlague'
          }
        >
          Ajout d'une nouvelle blague
        </p>
      </div>
    </div>
  );
}
