import axios from 'axios';
import React from 'react';
import QuizPage from './QuizPage';

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
  const [quizQuestions, setQuizQuestions] = React.useState(sampleQuestion);
  const getQuestions = () => {
    axios
      .get('https://opentdb.com/api.php?amount=15')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setQuizQuestions(data.results[0]);
      });
  };
  return (
    <>
      <QuizPage quizComponent={quizQuestions} />
      <button type="button" onClick={getQuestions}>
        Get Questions
      </button>
    </>
  );
}
export default QuizAPI;
