/* eslint-disable indent */
/* eslint-disable max-len */
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import '../App.css';
import '../styles/QuizPage.css';
import he from 'he';
import ResultPage from './ResultPage';
import ProgressBar from './progress-bar';
import dataSlider from './DataSlider';
import { NightModeContext } from '../contexts/nightModeContext';

const lodash = require('lodash');

function QuizAPI() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const [answerChoice, setAnswerChoice] = useState([]);
  const [randomAnswers, setRandomAnswers] = useState([]);
  const [nbQuestion] = useLocalStorage('nbQuestion');
  const [difficulty] = useLocalStorage('difficulty');
  const [storeCategory] = useLocalStorage('category');
  const difficultyArray = ['easy', 'medium', 'hard', ''];
  // eslint-disable-next-line operator-linebreak
  const quizEnded =
    quizQuestions.length === 0
      ? false
      : currentQuestionIndex === quizQuestions.length;
  const initTime = 20;
  const [timer, setTimer] = useState(initTime);
  const nightModeRendering = useContext(NightModeContext);

  const sliderArray = dataSlider.map((object) => object.link);
  console.log('');

  useEffect(() => {
    axios
      .get(
        sliderArray.includes(storeCategory)
          ? storeCategory
          : `https://opentdb.com/api.php?amount=${nbQuestion}&category=${
              storeCategory[0].id
            }&difficulty=${difficultyArray[difficulty - 1]}&type=multiple`
      )
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
  useEffect(() => {
    if (currentQuestion) {
      answerArray.push(currentQuestion.correct_answer);
      currentQuestion.incorrect_answers.forEach((answer) => {
        answerArray.push(answer);
      });
      setRandomAnswers(lodash.shuffle(answerArray));
    }
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
                    className={`answers ${
                      nightModeRendering.isNight && 'nightAnswer'
                    }`}
                    onClick={(event) => handleChoiceAnswer(event.target.value)}
                    value={answer}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              <ProgressBar bgColor="#FFFFFF" completed={timer} />
              <div className="nbrQuest">
                {`${currentQuestionIndex + 1} / ${quizQuestions.length}`}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default QuizAPI;
