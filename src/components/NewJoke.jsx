import React, { useState } from 'react';
import '../styles/Popup.css';

function NewJoke({ show, setShow }) {
  const [addNewQuestion, setAddNewQuestion] = useState('');
  const [addNewAnswer, setAddNewAnswer] = useState('');

  return (
    <div className={`newjoke ${show ? 'active' : ''} `}>
      <div className={`popup_content ${show ? 'active' : ''}`}>
        {show && (
          <span onClick={() => setShow(false)} className="popup_close">
            &times;
          </span>
        )}
        <div className="popup_header">
          <h1>Faites-nous rire !</h1>
        </div>
        <div className="popup_body">
          <div className="sliderQuestion">
            <form>
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
          <div className="sliderReponse">
            <form>
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
        <div className="popup_footer">
          <button type="button" className="btnGo">
            ENVOYER
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewJoke;
