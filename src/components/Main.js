import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ResultPage from './ResultPage';
import QuizAPI from './QuizAPI';
import Categories from './Categories';
import { NightModeContext } from '../contexts/nightModeContext';

export default function Main() {
  const nightModeRendering = useContext(NightModeContext);
  return (
    <main style={nightModeRendering.pageStyle}>
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
