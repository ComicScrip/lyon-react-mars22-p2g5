import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ResultPage from './ResultPage';
import QuizAPI from './QuizAPI';
import Scores from './Scores';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quizz" element={<QuizAPI />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/Scores" element={<Scores />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
