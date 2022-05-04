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
      .get(`${process.env.REACT_APP_API_URL}/scores`)
      .then((response) => response.data)
      .then((data) => {
        setScores(data);
      });
  }, []);

  const [score1, score2, score3, ...otherScores] = scores;

  return (
    <div className="scorepage">
      <h1 className="scoreTitle">SCORE</h1>
      <div className="podium">
        <div className="box3">
          <p className="playerScore3">{score3?.player}</p>
          <div className="third">
            <p className="scoreP3">{score3?.score} %</p>
            <img className="coupe" src={bronze} alt="coupe-bronze" />
          </div>
        </div>
        <div className="box1">
          <p className="playerScore1">{score1?.player}</p>
          <div className="first">
            <p className="scoreP1">{score1?.score} %</p>
            <img className="coupe" src={or} alt="coupe-or" />
          </div>
        </div>
        <div className="box2">
          <p className="playerScore2">{score2?.player}</p>
          <div className="second">
            <p className="scoreP2">{score2?.score} %</p>
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
        {otherScores.map((score) => (
          <li className="eachScore" key={score.id}>
            {score.player} : {score.score} %
          </li>
        ))}
      </div>
    </div>
  );
}

export default Scores;
