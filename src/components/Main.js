import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactPage from './ContactPage';
import ResultPage from './ResultPage';
import QuizAPI from './QuizAPI';
import SelectBar from './SelectBar';
import CategorieTempo from './CategorieTempo';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/QuizAPI" element={<QuizAPI />} />
        <Route path="/SelectBar" element={<SelectBar />} />
        <Route path="/Categorie" element={<CategorieTempo />} />
      </Routes>
    </main>
  );
}
