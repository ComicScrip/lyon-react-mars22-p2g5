import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ResultPage from './ResultPage';
import QuizAPI from './QuizAPI';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/Quizz" element={<QuizAPI />} />
      </Routes>
    </main>
  );
}
