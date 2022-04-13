import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactPage from './ContactPage';
import ResultPage from './ResultPage';
import QuizPage from './QuizPage';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./components/ContactPage" element={<ContactPage />} />
        <Route path="./components/ResultPage" element={<ResultPage />} />
        <Route path="./components/QuizPage" element={<QuizPage />} />
      </Routes>
    </main>
  );
}
