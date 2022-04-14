import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
  const [active, setActive] = React.useState(false);
  const handleChangeClick = () => {
    setActive(!active);
  };

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
            <div className="burger-button">
              <Link
                to="/"
                // className="toggle-button"
                onClick={handleChangeClick}
                className={`toggle-button ${active && 'open'}`}
              >
                <span className="bar2" />
              </Link>
            </div>
            <div className={`menu ${active && 'open'}`}>
              <li className="navbar_item">
                <Link to="/" className="navbar_link active">
                  Accueil
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/" className="navbar_link">
                  Catégorie
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/ResultPage" className="navbar_link">
                  Score
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/ContactPage" className="navbar_link">
                  About Us
                </Link>
              </li>
            </div>
          </ul>
          {/* <button type="button" className="navbar_burger">
            <span className="burgerBar" />
          </button> */}
        </div>
      </nav>
    </header>
  );
}
