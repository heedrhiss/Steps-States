import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [steps, setSteps] = useState(1);
  function handlePrevious() {
    if (steps > 1) setSteps(steps - 1);
  }
  function handleNext() {
    if (steps < 3) setSteps(steps + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={steps === 1 ? "active" : ""}>1</div>
        <div className={steps === 2 ? "active" : ""}>2</div>
        <div className={steps === 3 ? "active" : ""}>3</div>
      </div>

      <div className="message">
        Step {steps}: {messages[steps - 1]}
      </div>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className=""
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
