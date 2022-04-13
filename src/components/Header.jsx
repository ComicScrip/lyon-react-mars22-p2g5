import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbarLogo">
          <ul className="navbar_links">
            <div className="logoImageLogo">
              <Link to="/">
                <img src={logo} alt={logo} className="logoImage" />
              </Link>
            </div>
            <div className="menu">
              <li className="navbar_item">
                <Link to="/" className="navbar_link">
                  Accueil
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/" className="navbar_link">
                  Catégorie
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/" className="navbar_link">
                  Score
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/" className="navbar_link">
                  About Us
                </Link>
              </li>
            </div>
          </ul>
          {/* <button className="navbar_burger">
          <span className="burgerBar"></span>
          </button> */}
        </div>
      </nav>
    </header>
  );
}
