import "./App.css";
import Question from "./Question";

function App() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        { opt: "new york", correct: false },
        { opt: "london", correct: false },
        { opt: "paris", correct: true },
        { opt: "lagos", correct: false },
      ],
    },
    {
      id: 2,
      question: "who is ceo of tesla ?",
      answers: [
        { opt: "Jeff Bezos", correct: false },
        { opt: "Elon Musk", correct: true },
        { opt: "Bill Gates", correct: false },
        { opt: "Tony Stark", correct: false },
      ],
    },
    {
      id: 3,
      question: "The iPhone was created by which company?",
      answers: [
        { opt: "Apple", correct: true },
        { opt: "Intel", correct: false },
        { opt: "Amazon", correct: false },
        { opt: "Microsoft", correct: false },
      ],
    },
    {
      id: 4,
      question: "How many Harry Potter books are there?",
      answers: [
        { opt: "1", correct: false },
        { opt: "4", correct: false },
        { opt: "6", correct: false },
        { opt: "7", correct: true },
      ],
    },
    {
      id: 5,
      question: "who am i",
      answers: [
        { opt: "ganesh", correct: false },
        { opt: "john", correct: true },
        { opt: "ravi", correct: false },
        { opt: "hello", correct: false },
      ],
    },
  ];
  return (
    <div className="App">
      <Question questions={questions} />
    </div>
  );
}

export default App;
