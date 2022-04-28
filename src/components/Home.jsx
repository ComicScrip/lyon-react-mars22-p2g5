import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="homepage">
      <h1>INQUIZ'ITOR</h1>
      <div>
        <Link to="/Quizz">
          <button className="letsGo" type="button">
            Let's Quizz
          </button>
        </Link>
      </div>
      <div className="joke-of-the-day" />
    </div>
  );
}
