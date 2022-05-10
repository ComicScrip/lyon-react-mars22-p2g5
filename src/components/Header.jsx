import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import logoNight from '../assets/LogoNight.png';
import accueil from '../assets/accueil.png';
import accueilNight from '../assets/accueil_blanc.png';
import categorie from '../assets/categorie.png';
import categorieNight from '../assets/categorie_blanc.png';
import evaluation from '../assets/evaluation.png';
import evaluationNight from '../assets/evaluation_blanc.png';
import avatar from '../assets/avatar.png';
import avatarNight from '../assets/avatar_blanc.png';
import { NightModeContext } from '../contexts/nightModeContext';

const getActiveLinkStyle = ({ isActive }) => ({
  textDecoration: isActive ? 'underline' : 'none',
});

export default function Header() {
  const nightModeRendering = useContext(NightModeContext);
  const [active, setActive] = React.useState(false);
  const handleChangeClick = () => {
    setActive(!active);
  };
  const handleNightMode = () => {
    nightModeRendering.setIsNight(!nightModeRendering.isNight);
  };
  return (
    <header style={nightModeRendering.pageStyle}>
      <nav className="navbar">
        <div className="navbarLogo">
          <ul className="navbar_links">
            <div className="logoImageLogo">
              <NavLink to="/" style={getActiveLinkStyle}>
                <img
                  src={nightModeRendering.isNight ? logoNight : logo}
                  alt={logo}
                  className="logoImage"
                />
              </NavLink>
              <div className="nightMode">
                <input
                  type="checkbox"
                  id="toggle"
                  onChange={handleNightMode}
                  checked={nightModeRendering.isNight}
                />
                <label htmlFor="toggle" className="nightModeBtn">
                  {' '}
                </label>
              </div>
            </div>
            <div className="burger-button">
              <NavLink
                to="/"
                style={(isActive) => ({
                  color: isActive ? 'black' : 'white',
                })}
                onClick={handleChangeClick}
                className={`toggle-button ${active && 'open'} ${
                  nightModeRendering.isNight && 'nightBtn'
                }`}
              >
                <span className="bar2" />
              </NavLink>
            </div>
            <div
              className={`menu ${active && 'open'} ${
                nightModeRendering.isNight && 'nightHeader'
              }`}
            >
              <li className="navbar_item">
                {' '}
                <img
                  src={nightModeRendering.isNight ? accueilNight : accueil}
                  alt={accueil}
                  className="logoMenu"
                />
                <NavLink
                  to="/"
                  className={`navbar_link active ${
                    nightModeRendering.isNight && 'nightText'
                  }`}
                  style={getActiveLinkStyle}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="navbar_item">
                <img
                  src={nightModeRendering.isNight ? categorieNight : categorie}
                  alt={categorie}
                  className="logoMenu"
                />
                <NavLink
                  to="/Categories"
                  className={`navbar_link active ${
                    nightModeRendering.isNight && 'nightText'
                  }`}
                  style={getActiveLinkStyle}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Catégories
                </NavLink>
              </li>
              <li className="navbar_item">
                {' '}
                <img
                  src={
                    nightModeRendering.isNight ? evaluationNight : evaluation
                  }
                  alt={evaluation}
                  className="logoMenu"
                />
                <NavLink
                  to="/Scores"
                  className={`navbar_link active ${
                    nightModeRendering.isNight && 'nightText'
                  }`}
                  style={getActiveLinkStyle}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Scores
                </NavLink>
              </li>
              <li className="navbar_item navbarAbout">
                <img
                  src={nightModeRendering.isNight ? avatarNight : avatar}
                  alt={avatar}
                  className="logoMenu"
                />
                <NavLink
                  to="/ContactPage"
                  className={`navbar_link active ${
                    nightModeRendering.isNight && 'nightText'
                  }`}
                  style={getActiveLinkStyle}
                  onClick={() => {
                    setActive(false);
                  }}
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
