import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbarLogo">
          <ul className="navbar_links">
            <li className="navbar_item">
              <a href="/" className="navbar_link">Accueil</a>
              <Link to="/">Home</Link>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">Catégorie</a>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">Score</a>
            </li>
            <li className="navbar_item">
              <a href="/" className="navbar_link">About Us</a>
            </li>
          </ul>
          {/* <button className="navbar_burger">
          <span className="burgerBar"></span>
          </button> */}
        </div>
      </nav>
    </header>
  );
}
