import quizLogo from '../assets/Star.jpeg';
import { Link } from 'react-router-dom';
import '../styles/categorieTempo.css';

function CategorieTempo() {
  return (
    <div className="quizLogo">
      <Link to="/QuizAPI">
        <button type="button" className="categorieBtn">
          <img src={quizLogo} alt="Logo de quiz" className="logo" />
        </button>
      </Link>
    </div>
  );
}

export default CategorieTempo;
