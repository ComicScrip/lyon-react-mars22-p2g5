import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/scores.css';
import or from '../assets/or.png';
import argent from '../assets/argent.png';
import bronze from '../assets/bronze.png';

function Scores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios
      // ${process.env.REACT_APP_API_URL}
      .get('http://localhost:5000/scores')
      .then((response) => response.data)
      .then((data) => {
        setScores(data);
      });
  }, []);

  return (
    <div className="scorepage">
      <h1 className="scoreTitle">SCORE</h1>
      <div className="podium">
        <div className="third">
          <div className="coupeBronze">
            <img className="coupe" src={bronze} alt="coupe-bronze" />
          </div>
        </div>
        <div className="first">
          <div className="coupeOr">
            <img className="coupe" src={or} alt="coupe-or" />
          </div>
        </div>
        <div className="second">
          <div className="coupeArgent">
            <img className="coupe" src={argent} alt="coupe-argent" />
          </div>
        </div>
      </div>
      <div className="socle">
        <h2>Podium</h2>
      </div>
      <h1 className="scoreTitle">GAMERS LIST</h1>
      <div className="scoreList">
        <ul className="playersList" />
        {scores.map((score) => (
          <li key={score.id}>
            {score.name}
            {score.score}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Scores;
