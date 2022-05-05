import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ResultPage from './ResultPage';
import QuizAPI from './QuizAPI';
import Scores from './Scores';
import Categories from './Categories';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Scores" element={<Scores />} />
        <Route path="/ContactPage" element={<Contact />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/QuizAPI" element={<QuizAPI />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </main>
  );
}
