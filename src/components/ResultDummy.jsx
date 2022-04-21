import React from 'react';

function ResultDummy({ answers, questions }) {
  return (
    <div>
      {questions.map((question) => (
        <div>
          <p>{question.question}</p>
          <p>{question.correct_answer}</p>
        </div>
      ))}
      <div>{answers}</div>
    </div>
  );
}

export default ResultDummy;
