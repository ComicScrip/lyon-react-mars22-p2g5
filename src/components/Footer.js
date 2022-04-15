import '../styles/Footer.css';
import logo from '../img/Logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <p className="footer-text">IQ © 2022 Tous droits réservés</p>
    </footer>
  );
}
