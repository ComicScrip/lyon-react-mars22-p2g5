import React from 'react';
/* import '../styles/score.css';
import or from '../assets/or.png';
import argent from '../assets/argent.png';
import bronze from '../assets/bronze.png'; */

function Scores() {
  return (
    <div className="scorepage">
      <h1 className="scoreTitle">SCORE</h1>
      <br />
      <div className="podium">
        <div className="first" />
        <div className="second" />
        <div className="third" />
        <br />
        <div className="scoreList" />
        <h1>GAMER LIST</h1>
      </div>
    </div>
  );
}

export default Scores;
