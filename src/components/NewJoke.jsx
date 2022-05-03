import React, { useState } from 'react';
import '../styles/Popup.css';
import '../styles/NewJoke.css';

function NewJoke({ show, setShow }) {
  const [addNewQuestion, setAddNewQuestion] = useState('');
  const [addNewAnswer, setAddNewAnswer] = useState('');

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
                Question
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
                Réponse
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
          <button type="button" className="btnGo bntJoke">
            ENVOYER
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewJoke;
