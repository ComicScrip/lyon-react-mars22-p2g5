import '../styles/footer.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import nightBkg from '../assets/backdesktop-night.png';
import dayBkg from '../assets/backdesktop.png';
import { useLocalStorage } from 'react-use';

export default function Footer() {
  const [isNight] = useLocalStorage('isNight');
  const pageLightStyle = {
    backgroundImage: `url(${dayBkg})`,
    backgroundSize: 'cover',
    backgroundRepaeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
  };
  const pageNightStyle = {
    backgroundImage: `url(${nightBkg})`,
    backgroundSize: 'cover',
    backgroundRepaeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
  };
  console.log('footer', isNight);
  return (
    <footer style={isNight ? pageNightStyle : pageLightStyle}>
      <Link to="/">
        <img src={logo} alt="logo" className="logoImageFooter" />
      </Link>
      <p className="footerText">Inquiz'itor © 2022 Tous droits réservés.</p>
    </footer>
  );
}
