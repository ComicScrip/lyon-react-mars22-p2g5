import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ResultPage from './ResultPage';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </main>
  );
}
