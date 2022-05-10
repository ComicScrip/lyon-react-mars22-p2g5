import React, { useContext } from 'react';
import '../styles/footer.css';
import logo from '../assets/logo.png';
import logoNight from '../assets/LogoNight.png';
import { Link } from 'react-router-dom';
import { NightModeContext } from '../contexts/nightModeContext';

export default function Footer() {
  const nightModeRendering = useContext(NightModeContext);
  return (
    <footer style={nightModeRendering.pageStyle}>
      <Link to="/">
        <img
          src={nightModeRendering.isNight ? logoNight : logo}
          alt="logo"
          className="logoImageFooter"
        />
      </Link>
      <p className="footerText">Inquiz'itor © 2022 Tous droits réservés.</p>
    </footer>
  );
}
