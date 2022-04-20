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
  const [answerChoice, setAnswerChoice] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);
  // const [score, setScore] = useState(0);
  const getQuestions = () => {
    axios
      .get('https://opentdb.com/api.php?amount=15')
      .then((response) => response.data)
      .then((data) => {
        setQuizQuestions(data.results);
        setCurrentQuestion(data.results[0]);
      });
  };
  const handleChoiceAnswer = (value) => {
    setAnswerChoice((table) => [...table, value]);
    if (currentQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex((count) => count + 1);
      setCurrentQuestion(quizQuestions[currentQuestionIndex]);
    }
    if (currentQuestionIndex === quizQuestions.length) {
      setQuizEnded(true);
      for (let i = 0; i < quizQuestions.length; i += 1) {
        console.log(answerChoice[i]);
        console.log(quizQuestions[i].correct_answer);
        // answerChoice.forEach(answer =>
        // answer === quizQuestions[i].correct_answer ? setScore(count => count + 1) : '');
      }
    }
    // console.log(score);
  };
  console.log(quizQuestions);
  console.log(answerChoice);
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
          </div>
          {/* <ProgressBar bgColor="#b31212" completed={timer} /> */}
        </>
      )}
      {quizEnded ? <ResultDummy /> : ''}
    </>
  );
}
export default QuizAPI;
