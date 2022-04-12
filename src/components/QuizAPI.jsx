import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QuizPage from './QuizPage';
import ProgressBar from './progress-bar';

function QuizAPI() {
  const sampleQuestion = {
    question: "Qu'est-ce qu'un chat dans l'espace ?",
    correct_answer: 'Un chat-tellite',
    incorrect_answers: [
      'Une chat-vette spaciale',
      'Un Cat-Cat',
      'Chat-lon Musk',
    ],
  };
  const [quizQuestions, setQuizQuestions] = useState(sampleQuestion);
  const getQuestions = () => {
    axios
      .get('https://opentdb.com/api.php?amount=15')
      .then((response) => response.data)
      .then((data) => {
        setQuizQuestions(data.results[0]);
      });
  };
  const [timer, setTimer] = useState(20);
  useEffect(() => {
    console.log(timer);
    let interval = null;
    if (interval === null) {
      interval = setInterval(() => {
        setTimer((second) => second - 1);
        if (timer === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
  }, []);
  return (
    <>
      <QuizPage quizComponent={quizQuestions} />
      <button type="button" onClick={getQuestions}>
        Get Questions
      </button>
      <ProgressBar bgColor="#6a1b9a" completed={timer} />
    </>
  );
}
export default QuizAPI;
