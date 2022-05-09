import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import accueil from '../assets/accueil.png';
import categorie from '../assets/categorie.png';
import evaluation from '../assets/evaluation.png';
import avatar from '../assets/avatar.png';
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
                <img src={logo} alt={logo} className="logoImage" />
              </NavLink>
              <div className="nightMode">
                <input type="checkbox" id="toggle" onChange={handleNightMode} />
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
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="navbar_item">
                <img src={categorie} alt={categorie} className="logoMenu" />
                <NavLink
                  to="/Categories"
                  className="navbar_link"
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
                <img src={evaluation} alt={evaluation} className="logoMenu" />
                <NavLink
                  to="/Scores"
                  className="navbar_link active"
                  style={getActiveLinkStyle}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Scores
                </NavLink>
              </li>
              <li className="navbar_item navbarAbout">
                <img src={avatar} alt={avatar} className="logoMenu" />
                <NavLink
                  to="/ContactPage"
                  className="navbar_link"
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
