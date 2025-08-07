import { useState } from "react";

export default function MaxLimitCounter({ max = 10, step = 1 }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => Math.max(prev - step), 0);
  const reset = () => setCount(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment} disabled={count === max}>
        +
      </button>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
