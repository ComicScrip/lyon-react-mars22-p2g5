import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizAPI from './components/QuizAPI';
import Home from './Home';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuizPage" element={<QuizAPI />} />
      </Routes>
    </main>
  );
}
