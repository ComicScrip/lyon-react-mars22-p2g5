import '../styles/Footer.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="logo" className="logoImageFooter" />
      </Link>
      <p className="footerText">Inquiz'itor © 2022 Tous droits réservés.</p>
    </footer>
  );
}
