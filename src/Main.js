import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizAPI from './components/QuizAPI';
import Home from './Home';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuizQuestions" element={<QuizAPI />} />
      </Routes>
    </main>
  );
}
