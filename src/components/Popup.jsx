import { Link } from 'react-router-dom';
import '../styles/Popup.css';
import { useLocalStorage } from 'react-use';

function Popup({ show, setShow }) {
  const [nbQuestion, setNbQuestion] = useLocalStorage('nbQuestion', '10');
  const [difficulty, setDifficulty] = useLocalStorage('difficulty', '1');
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
            <label htmlFor="questions">Nombre de question</label>
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
              value={nbQuestion}
              onChange={(e) => setNbQuestion(e.target.value)}
            />
          </div>
          <div className="sliderDifficulty">
            <label htmlFor="difficulté" id="difficultyLabel">
              Difficulté
            </label>
            <datalist id="tickmarksDifficulty">
              <option value="easy" label="Easy" />
              <option value="medium" label="Medium" />
              <option value="hard" label="Hard" />
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
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            />
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
