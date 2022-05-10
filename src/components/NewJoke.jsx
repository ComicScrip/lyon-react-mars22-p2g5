import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../styles/NewJoke.css';
import Klaxon from '../assets/Klaxon.mp3';
import swal from 'sweetalert';
import { NightModeContext } from '../contexts/nightModeContext';

function NewJoke({ show, setShow }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const nightModeRendering = useContext(NightModeContext);

  const sonKlaxon = new Audio(Klaxon);

  const start = () => {
    sonKlaxon.play();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/jokes`, {
        question,
        answer,
      })
      .then(() => {
        setQuestion('');
        setAnswer('');
      })
      .then(() => {
        swal('Merci pour votre blague !');
        start();
        setShow(false);
      });
  };

  return (
    <div className={`popup ${show ? 'active' : ''} `}>
      <div
        className={`popup__content ${show ? 'active' : ''} ${
          nightModeRendering.isNight && 'nightPopup'
        }`}
      >
        {show && (
          <span onClick={() => setShow(false)} className="popup__close">
            &times;
          </span>
        )}
        <div className="popup__header">
          <h1 className="titreJoke">FAITES-NOUS RIRE ! !</h1>
        </div>
        <form className="formQuestionJoke" onSubmit={handleSubmit}>
          <div className="popupBodyJoke">
            <div className="sliderQuestion questionJoke">
              <label htmlFor="question" id="question">
                Votre Blague
              </label>
              <textarea
                type="textarea"
                id="question"
                placeholder="Votre question"
                required="required"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>

            <div className="sliderReponse responseJoke">
              <label htmlFor="reponse" id="reponse">
                Chute de votre Blague
              </label>
              <textarea
                type="texte"
                id="reponse"
                placeholder="Votre réponse"
                required="required"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
          </div>
          <div className="popup__footer popupFooterJoke">
            <button
              type="submit"
              className={`bntJoke ${
                nightModeRendering.isNight && 'nightBntJoke'
              }`}
            >
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewJoke;
