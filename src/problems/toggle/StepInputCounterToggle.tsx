import { useState } from "react";

export default function StepInputCounterToggle() {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + step);
  const handleDecrement = () => setCount((prev) => Math.max(prev - step, 0));
  const handleInput = (value: string) => {
    const num = Number(value);
    if (num > 0) {
      setStep(num);
    }
  };

  const handleVisibility = () => {
    if (isVisible) {
      setCount(0);
      setStep(1);
    }

    setIsVisible(!isVisible);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isVisible && (
        <>
          <div>
            <p>{count}</p>
            <div>
              <button onClick={handleIncrement}>+</button>
              <button onClick={handleDecrement}>-</button>
            </div>
          </div>
          <div>
            <input
              type="number"
              value={step}
              min={1}
              style={{ borderWidth: 1 }}
              onChange={(e) => handleInput(e.target.value)}
            />
          </div>
        </>
      )}
      <button onClick={handleVisibility}>{isVisible ? "Hide" : "Show"}</button>
    </div>
  );
}
