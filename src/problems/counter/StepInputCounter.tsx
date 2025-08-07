import { useState } from "react";
import "../../styles.css";
export default function StepInputCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => Math.max(prev - step, 0));
  const handleInput = (value: string) => {
    const num = Number(value);
    if (num > 0) {
      setStep(num);
    }
  };
  return (
    <div>
      <p>{count}</p>
      <div className="flexColumn">
        <input
          type="number"
          min="1"
          value={step}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="enter the step"
        />
      </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
    </div>
  );
}
