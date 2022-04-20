import axios from 'axios';
import React, { useState } from 'react';
// import ProgressBar from './progress-bar';
// import ShowQuestions from './QuizPage';
import '../styles/QuizPage.css';
import he from 'he';
import ResultDummy from './ResultDummy';

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  // const answerChoice = [];
  let quizEnded = false;
  const getQuestions = () => {
    axios
      .get('https://opentdb.com/api.php?amount=15')
      .then((response) => response.data)
      .then((data) => {
        setQuizQuestions(data.results);
        setCurrentQuestion(data.results[0]);
      });
  };
  const handleChoiceAnswer = () => {
    if (currentQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex((count) => count + 1);
      setCurrentQuestion(quizQuestions[currentQuestionIndex]);
      console.log(currentQuestionIndex);
    }
    if (currentQuestionIndex === quizQuestions.length) {
      quizEnded = true;
    }
    console.log(quizEnded);
  };
  console.log(quizQuestions);
  //   const [timer, setTimer] = useState(20);
  //   useEffect(() => {
  //     let interval;
  //     if (timer === 0) clearInterval(interval);
  //     else {
  //       interval = setInterval(() => {
  //         setTimer((second) => second - 1);
  //       }, 1000);
  //     }
  //     return () => clearInterval(interval);
  //   }, [timer]);
  return (
    <>
      <button type="button" onClick={getQuestions}>
        Get Questions
      </button>
      {quizQuestions[0].question === '' ? (
        ''
      ) : (
        <>
          {/* <ShowQuestions questionItem={quizQuestions[currentQuestion]} /> */}
          <div className="quiz">
            <div className="question">
              {he.decode(currentQuestion.question)}
            </div>
            <div className="reponses">
              <button
                type="submit"
                className="answers answerOne"
                onClick={handleChoiceAnswer}
                value={currentQuestion.correct_answer}
              >
                {currentQuestion.correct_answer}
              </button>
              <button
                type="submit"
                className="answers answerTwo"
                onClick={handleChoiceAnswer}
              >
                {currentQuestion.incorrect_answers[0]}
              </button>
              <button
                type="submit"
                className="answers answerThree"
                onClick={handleChoiceAnswer}
              >
                {currentQuestion.incorrect_answers[1]}
              </button>
              <button
                type="submit"
                className="answers answerFour"
                onClick={handleChoiceAnswer}
              >
                {currentQuestion.incorrect_answers[2]}
              </button>
            </div>
          </div>
          {/* <ProgressBar bgColor="#b31212" completed={timer} /> */}
        </>
      )}
      {quizEnded ? <ResultDummy /> : ''}
    </>
  );
}
export default QuizAPI;
