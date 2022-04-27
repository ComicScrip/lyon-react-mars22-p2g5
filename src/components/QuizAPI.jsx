import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import '../styles/QuizPage.css';
import he from 'he';
import ResultPage from './ResultPage';
import ProgressBar from './progress-bar';

function QuizAPI() {
  // const sampleQuestion = [
  //   {
  //     question: '',
  //     correct_answer: '',
  //     incorrect_answers: ['', '', ''],
  //   },
  // ];
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const [answerChoice, setAnswerChoice] = useState([]);
  // eslint-disable-next-line max-len
  const quizEnded = quizQuestions.length === 0
    ? false
    : currentQuestionIndex === quizQuestions.length;
  const initTime = 5;
  const [timer, setTimer] = useState(initTime);
  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=5')
      .then((response) => response.data)
      .then((data) => {
        console.log(quizQuestions);
        setQuizQuestions(data.results);
      });
  }, []);
  const handleChoiceAnswer = (value) => {
    setAnswerChoice((table) => [...table, value]);
    setTimer(initTime);
    if (currentQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex((index) => index + 1);
    }
  };
  useEffect(() => {
    let interval;
    if (quizQuestions.length !== 0) {
      if (timer === 0) {
        clearInterval(interval);
        setAnswerChoice((table) => [...table, '']);
        setCurrentQuestionIndex((index) => index + 1);
        setTimer(initTime);
      } else {
        interval = setInterval(() => {
          setTimer((second) => second - 1);
        }, 1000);
      }
    }
    if (currentQuestionIndex === quizQuestions.length) {
      setCurrentQuestionIndex(quizQuestions.length);
    }
    return () => clearInterval(interval);
  }, [timer, quizQuestions]);
  console.log(quizEnded);
  return (
    <div>
      {quizEnded ? (
        <ResultPage answers={answerChoice} questions={quizQuestions} />
      ) : (
        <div>
          {currentQuestion && (
            <div className={quizEnded ? 'hiddenQuiz' : 'quiz'}>
              <div className="question">
                {he.decode(currentQuestion.question)}
              </div>
              <div className="reponses">
                <button
                  type="submit"
                  className="answers answerOne"
                  onClick={(event) => handleChoiceAnswer(event.target.value)}
                  value={currentQuestion.correct_answer}
                >
                  {currentQuestion.correct_answer}
                </button>
                <button
                  type="submit"
                  className="answers answerTwo"
                  onClick={(event) => handleChoiceAnswer(event.target.value)}
                  value={currentQuestion.incorrect_answers[0]}
                >
                  {currentQuestion.incorrect_answers[0]}
                </button>
                <button
                  type="submit"
                  className="answers answerThree"
                  onClick={(event) => handleChoiceAnswer(event.target.value)}
                  value={currentQuestion.incorrect_answers[1]}
                >
                  {currentQuestion.incorrect_answers[1]}
                </button>
                <button
                  type="submit"
                  className="answers answerFour"
                  onClick={(event) => handleChoiceAnswer(event.target.value)}
                  value={currentQuestion.incorrect_answers[2]}
                >
                  {currentQuestion.incorrect_answers[2]}
                </button>
              </div>
              <ProgressBar bgColor="#FFFFFF" completed={timer} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default QuizAPI;
