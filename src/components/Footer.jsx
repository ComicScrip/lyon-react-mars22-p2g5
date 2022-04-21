import '../styles/footer.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="logo" className="logoImage" />
      </Link>
      <p>Inquiz'itor © 2022 Tous droits réservés.</p>
    </footer>
  );
}
