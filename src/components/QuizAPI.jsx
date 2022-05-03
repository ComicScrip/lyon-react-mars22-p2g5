/* eslint-disable max-len */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import '../styles/QuizPage.css';
import he from 'he';
import ResultPage from './ResultPage';
import ProgressBar from './progress-bar';

const lodash = require('lodash');

function QuizAPI() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const [answerChoice, setAnswerChoice] = useState([]);
  const [randomAnswers, setRandomAnswers] = useState([]);
  // eslint-disable-next-line operator-linebreak
  const quizEnded =
    quizQuestions.length === 0
      ? false
      : currentQuestionIndex === quizQuestions.length;
  const initTime = 20;
  const [timer, setTimer] = useState(initTime);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=5')
      .then((response) => response.data)
      .then((data) => {
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
    if (
      // eslint-disable-next-line operator-linebreak
      quizQuestions.length !== 0 &&
      currentQuestionIndex !== quizQuestions.length
    ) {
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

    return () => clearInterval(interval);
  }, [timer, quizQuestions]);

  const answerArray = [];
  // let randomAnswer = [];
  useEffect(() => {
    if (currentQuestion) {
      answerArray.push(currentQuestion.correct_answer);
      currentQuestion.incorrect_answers.forEach((answer) => {
        answerArray.push(answer);
      });
      setRandomAnswers(lodash.shuffle(answerArray));
      // randomAnswer = lodash.shuffle(answerArray);
    }
    console.log('answerarray', answerArray);
    console.log('randomanswer', randomAnswers);
  }, [currentQuestion, quizQuestions]);
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
                {randomAnswers.map((answer) => (
                  <button
                    key={answer}
                    type="submit"
                    className="answers"
                    onClick={(event) => handleChoiceAnswer(event.target.value)}
                    value={answer}
                  >
                    {answer}
                  </button>
                ))}
                {/* <button
                  type="submit"
                  className="answers answerOne"
                  onClick={(event) => handleChoiceAnswer(event.target.value)}
                  value={randomAnswer[0]}
                >
                  {randomAnswer[0]}
                </button>
                <button
                  type="submit"
                  className="answers answerTwo"
                  onClick={(event) => handleChoiceAnswer(event.target.value)}
                  value={randomAnswer[1]}
                >
                  {randomAnswer[1]}
                </button>
                <button
                  type="submit"
                  className="answers answerThree"
                  onClick={(event) => handleChoiceAnswer(event.target.value)}
                  value={randomAnswer[2]}
                >
                  {randomAnswer[2]}
                </button>
                <button
                  type="submit"
                  className="answers answerFour"
                  onClick={(event) => handleChoiceAnswer(event.target.value)}
                  value={randomAnswer[3]}
                >
                  {randomAnswer[3]}
                </button> */}
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
