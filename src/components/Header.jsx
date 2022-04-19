import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import accueil from '../assets/accueil.png';
import categorie from '../assets/categorie.png';
import evaluation from '../assets/evaluation.png';
import avatar from '../assets/avatar.png';

const getActiveLinkStyle = ({ isActive }) => ({
  fontWeight: isActive ? 'bold' : 'null',
});

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
              <NavLink to="/" style={getActiveLinkStyle}>
                <img src={logo} alt={logo} className="logoImage" />
              </NavLink>
            </div>
            <div className="burger-button">
              <NavLink
                to="/"
                style={(isActive) => ({
                  color: isActive ? 'black' : 'white',
                })}
                onClick={handleChangeClick}
                className={`toggle-button ${active && 'open'}`}
              >
                <span className="bar2" />
              </NavLink>
            </div>
            <div className={`menu ${active && 'open'}`}>
              <li className="navbar_item">
                {' '}
                <img src={accueil} alt={accueil} className="logoMenu" />
                <NavLink
                  to="/"
                  className="navbar_link active"
                  style={getActiveLinkStyle}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="navbar_item">
                <img src={categorie} alt={categorie} className="logoMenu" />
                <NavLink
                  to="/"
                  className="navbar_link"
                  style={getActiveLinkStyle}
                >
                  Catégorie
                </NavLink>
              </li>
              <li className="navbar_item">
                <img src={evaluation} alt={evaluation} className="logoMenu" />
                <NavLink
                  to="/ResultPage"
                  className="navbar_link"
                  style={getActiveLinkStyle}
                >
                  Score
                </NavLink>
              </li>
              <li className="navbar_item navbarAbout">
                <img src={avatar} alt={avatar} className="logoMenu" />
                <NavLink
                  to="/ContactPage"
                  className="navbar_link"
                  style={getActiveLinkStyle}
                >
                  About Us
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}
