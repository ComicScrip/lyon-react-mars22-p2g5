import axios from 'axios';
import React, { useState } from 'react';

function QuizAPI() {
  const sampleQuestion = [
    {
      question: '',
      correct_answer: '',
      incorrect_answers: ['', '', ''],
    },
  ];

  const [quizQuestions, setQuizQuestions] = useState(sampleQuestion);
  const [currentQuestion, setCurrentQuestion] = useState(sampleQuestion[0]);

  let questions = [];

  const getQuestions = () => {
    axios
      .get('https://opentdb.com/api.php?amount=15')
      .then((response) => response.data)
      .then((data) => {
        setQuizQuestions(data.results);
        setCurrentQuestion(data.results[0]);
        questions = data.results.map((data) => {
          const formattedQuestion = {
            questions: data.questions,
          };

          const answerChoice = [...data.incorrect_answers];
          formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
          answerChoice.splice(
            formattedQuestion.answer - 1,
            0,
            data.correct_answer
          );
          answerChoice.forEach((choice, index) => {
            data[`choice${index + 1}`] = choice;
          });
          return data;
        });
      });
  };
  return (
    <button type="button" onClick={getQuestions}>
      Get Questions
    </button>
  );
}
export default QuizAPI;
