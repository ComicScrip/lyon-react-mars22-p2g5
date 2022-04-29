import React from 'react';
import '../styles/scores.css';
import or from '../assets/or.png';
import argent from '../assets/argent.png';
import bronze from '../assets/bronze.png';

function Scores() {
  return (
    <div className="scorepage">
      <h1 className="scoreTitle">SCORE</h1>
      <div className="podium">
        <div className="third">
          <img className="coupe" src={bronze} alt="coupe-bronze" />
        </div>
        <div className="first">
          <img className="coupe" src={or} alt="coupe-or" />
        </div>
        <div className="second">
          <img className="coupe" src={argent} alt="coupe-argent" />
        </div>
      </div>
      <div className="socle" />
      <div className="scoreList" />
      <h1>GAMERS LIST</h1>
    </div>
  );
}

export default Scores;
