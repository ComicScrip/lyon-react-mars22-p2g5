import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Popup.css';
import '../styles/NewJoke.css';
import Klaxon from '../assets/Klaxon.mp3';
import swal from 'sweetalert';

function NewJoke({ show, setShow }) {
  const [addNewQuestion, setAddNewQuestion] = useState('');
  const [addNewAnswer, setAddNewAnswer] = useState('');
  const [form, setForm] = useState('');

  const sonKlaxon = new Audio(Klaxon);

  const start = () => {
    sonKlaxon.play();
  };

  const handleClick = (e) => {
    e.preventDefault(
      axios
        .post(`${process.env.REACT_APP_API_URL}/jokes/random`, {
          question: form.question,
          answer: form.answer,
        })
        .then((res) => res.data)
    );
    setForm({ question: '', answer: '' });
    swal('Merci pour votre blague !');
    start();
    setShow(false);
  };

  return (
    <div className={`popup ${show ? 'active' : ''} `}>
      <div className={`popup__content ${show ? 'active' : ''}`}>
        {show && (
          <span onClick={() => setShow(false)} className="popup__close">
            &times;
          </span>
        )}
        <div className="popup__header">
          <h1>FAITES-NOUS RIRE ! !</h1>
        </div>
        <div className="popup__body popupBodyJoke">
          <div className="sliderQuestion questionJoke">
            <form className="formQuestionJoke">
              <label htmlFor="question" id="question">
                Votre Blague
              </label>
              <input
                type="text"
                id="question"
                placeholder="Votre question"
                required="required"
                value={addNewQuestion}
                onChange={(e) => setAddNewQuestion(e.target.value)}
              />
            </form>
          </div>
          <div className="sliderReponse responseJoke">
            <form className="formReponseJoke">
              <label htmlFor="reponse" id="reponse">
                Chute de votre Blague
              </label>
              <input
                type="text"
                id="reponse"
                placeholder="Votre réponse"
                required="required"
                value={addNewAnswer}
                onChange={(e) => setAddNewAnswer(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="popup__footer">
          <button type="button" className="btnGo bntJoke" onClick={handleClick}>
            ENVOYER
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewJoke;
