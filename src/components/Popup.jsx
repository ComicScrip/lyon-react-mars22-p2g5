import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Popup.css';

function Popup({ show, setShow }) {
  return (
    <div className={`popup ${show ? 'active' : ''}`}>
      <div className={`popup__content ${show ? 'active' : ''}`}>
        {show && (
          <span onClick={() => setShow(false)} className="popup__close">
            &times;
          </span>
        )}
        <div className="popup__header">
          <h1>Settings</h1>
        </div>
        <div className="popup__body">
          <div className="sliderQuestion">
            <datalist id="tickmarksQuestion">
              <option value="10" label="10" />
              <option value="15" label="15" />
              <option value="20" label="20" />
            </datalist>
            <input
              type="range"
              id="questions"
              name="questions"
              min="10"
              max="20"
              step="5"
              list="tickmarksQuestion"
              className="slider slider-nbQuestion"
            />
            <label htmlFor="questions">Nombre de question</label>
          </div>
          <div className="sliderDifficulty">
            <datalist id="tickmarksDifficulty">
              <option value="1" label="Easy" />
              <option value="2" label="Medium" />
              <option value="3" label="Difficult" />
              <option value="4" label="Mix" />
            </datalist>
            <input
              type="range"
              id="difficulté"
              name="difficulté"
              min="1"
              max="4"
              list="tickmarksDifficulty"
              className="slider slider-difficulty"
            />
            <label htmlFor="difficulté" id="difficultyLabel">
              Difficulté
            </label>
          </div>
        </div>
        <div className="popup__footer">
          <Link to="/QuizAPI">
            <button type="button" className="btnGo">
              GO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Popup;
