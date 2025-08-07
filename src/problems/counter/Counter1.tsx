import { useState } from "react";

export default function Counter({ step = 1 }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => Math.max(prev - step, 0));
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
    </div>
  );
}
