import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ResultPage from './ResultPage';
import QuizAPI from './QuizAPI';
import Categories from './Categories';
import nightBkg from '../assets/backdesktop-night.png';
import dayBkg from '../assets/backdesktop.png';
import { useLocalStorage } from 'react-use';
import { useEffect } from 'react';

export default function Main() {
  const [isNight, setIsNight] = useLocalStorage('isNight');
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
  useEffect(() => {
    setIsNight(isNight);
    console.log('main', isNight);
  }, [isNight]);
  return (
    <main style={isNight ? pageNightStyle : pageLightStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactPage" element={<Contact />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/QuizAPI" element={<QuizAPI />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </main>
  );
}
