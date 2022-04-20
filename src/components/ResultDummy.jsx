import React from 'react';

function ResultDummy({ answer, questions }) {
  return (
    <div>
      <div>Tu es con comme ton père et moche comme ta mère</div>;
      {questions.map((question) => (
        <p>{question.question}</p>
      ))}
      <div>{answer}</div>
    </div>
  );
}

export default ResultDummy;
