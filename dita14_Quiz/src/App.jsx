import React, { useState } from "react"; 
import "./App.css"; 

const questions = [
  {
    question: "Çfarë është React?",
    options: [
      "Një bibliotekë JavaScript për ndërtimin e UI",
      "Një gjuhë programimi",
      "Një server database",
      "Një framework CSS"
    ],
    answer: "Një bibliotekë JavaScript për ndërtimin e UI",
  },
  {
    question: "Cili hook përdoret për të menaxhuar state?",
    options: ["useEffect", "useState", "useContext", "useRef"],
    answer: "useState",
  },
  {
    question: "Cili hook ekzekutohet pas çdo renderimi?",
    options: ["useEffect", "useMemo", "useReducer", "useCallback"],
    answer: "useEffect",
  },
  {
    question: "Çfarë është JSX?",
    options: [
      "Një sintaksë për të shkruar HTML brenda JavaScript",
      "Një database",
      "Një API i React",
      "Një command line tool"
    ],
    answer: "Një sintaksë për të shkruar HTML brenda JavaScript",
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [score, setScore] = useState(0); 

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1); 
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="quiz-container">
        <h1>React Quiz</h1>
        <h3>Quiz-i ka përfunduar!</h3>
        <p>Shkalla e saktësisë: {score} nga {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>React Quiz</h1>
      <div>
        <h2>{questions[currentQuestion].question}</h2>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
