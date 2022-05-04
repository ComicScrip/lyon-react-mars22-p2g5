import { Link } from 'react-router-dom';
import '../styles/home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JokesDay from './JokesDay';
import NewJoke from './NewJoke';

export default function Home() {
  const [jokesOfTheDay, setJokesOfTheDay] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/jokes/random')
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
          <button className="letsGo" type="button">
            LET'S QUIZZ
          </button>
        </Link>
      </div>
      <div className="joke-of-the-day" />
      <JokesDay jokes={jokesOfTheDay} />
      <div>
        <button onClick={handleClick} type="button" className="btnAjout">
          +
        </button>

        <NewJoke show={showPopup} setShow={setShowPopup} />
      </div>
      <div>
        <p className="textBlague">Ajout d'une nouvelle blague</p>
      </div>
    </div>
  );
}
