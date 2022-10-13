import React, { useState } from "react";

export default function Question(props) {
  const [score, setScore] = useState(0);
  const [currentQts, setCurrentQts] = useState(0);
  const [showscore, setShowScore] = useState(false);

  const qs = props.questions;

  const handleAnswer = (correct) => {
    if (correct) {
      setScore(score + 1);
      console.log(score);
    }
    const nextQuestion = currentQts + 1;
    if (nextQuestion < qs.length) {
      setCurrentQts(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <h2>Welcome to quiz</h2>
      {showscore ? (
        <>
          <div>Your score is {score}</div>
        </>
      ) : (
        <>
          <div>{props.questions[currentQts].question}</div>
          <div>
            {props.questions[currentQts].answers.map((option) => (
              <button
                onClick={() => handleAnswer(option.correct)}
                style={{ margin: 10 }}
              >
                {option.opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
