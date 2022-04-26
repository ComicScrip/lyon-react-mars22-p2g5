import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="homepage">
      <h1>INQUIZ'ITOR</h1>
      <div>
        <Link to="/Categorie">
          <button className="letsGo" type="button">
            LET'S QUIZZ
          </button>
        </Link>
      </div>
    </div>
  );
}
