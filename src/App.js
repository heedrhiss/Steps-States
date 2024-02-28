import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (steps > 1) setSteps((currentStep) => currentStep - 1);
  }
  function handleNext() {
    if (steps < 3) setSteps((currentStep) => currentStep + 1);
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>

          <Message stepProp={steps}>{messages[steps - 1]}</Message>

          <div className="buttons">
            <Button
              txColor="#ffff"
              bgColor="#7950f2"
              eventHandle={handlePrevious}
            >
              <span>👈</span>Previous
            </Button>

            <Button txColor="#ffff" bgColor="#7950f2" eventHandle={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ txColor, bgColor, eventHandle, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: txColor }}
      onClick={eventHandle}
    >
      {children}
    </button>
  );
}

function Message({ stepProp, children }) {
  return (
    <div className="message">
      <h3>Step {stepProp}</h3>
      {children}
    </div>
  );
}
export default App;
