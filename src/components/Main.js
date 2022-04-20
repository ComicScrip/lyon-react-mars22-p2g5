import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactPage from './ContactPage';
import ResultPage from './ResultPage';
import QuizAPI from './QuizAPI';
import SelectBar from './SelectBar';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./ContactPage" element={<ContactPage />} />
        <Route path="./ResultPage" element={<ResultPage />} />
        <Route path="./QuizPage" element={<QuizAPI />} />
        <Route path="./SelectBar" element={<SelectBar />} />
      </Routes>
    </main>
  );
}
