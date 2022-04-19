import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import accueil from '../assets/accueil.png';
import categorie from '../assets/categorie.png';
import evaluation from '../assets/evaluation.png';
import avatar from '../assets/avatar.png';

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
              <NavLink
                to="/"
                style={{style={isActive => ({
                  color: isActive ? "white" : "black"
                })}
              >
                <img src={logo} alt={logo} className="logoImage" />
              </NavLink>
            </div>
            <div className="burger-button">
              <NavLink
                to="/"
                activeStyle={{ color: 'white', fontWeight: 'bold' }}
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
                  activeStyle={{ color: 'white', fontWeight: 'bold' }}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="navbar_item">
                <img src={categorie} alt={categorie} className="logoMenu" />
                <NavLink
                  to="/"
                  className="navbar_link"
                  activeStyle={{ color: 'white', fontWeight: 'bold' }}
                >
                  Catégorie
                </NavLink>
              </li>
              <li className="navbar_item">
                <img src={evaluation} alt={evaluation} className="logoMenu" />
                <NavLink
                  to="/ResultPage"
                  className="navbar_link"
                  activeStyle={{ color: 'white', fontWeight: 'bold' }}
                >
                  Score
                </NavLink>
              </li>
              <li className="navbar_item navbarAbout">
                <img src={avatar} alt={avatar} className="logoMenu" />
                <NavLink
                  to="/ContactPage"
                  className="navbar_link"
                  activeStyle={{ color: 'white', fontWeight: 'bold' }}
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
