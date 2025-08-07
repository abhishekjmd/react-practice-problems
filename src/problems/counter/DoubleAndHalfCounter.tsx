import { useState } from "react";
export default function DoubleAndHalfCounter({ step = 1 }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(prev - step, 0));
  const double = () => setCount((prev) => prev * 2);
  const half = () => setCount((prev) => Math.max(Math.floor(prev / 2), 0));
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{count}</p>
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyItems: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <button onClick={double}>Double</button>
        <button onClick={half}>Half</button>
      </div>
    </div>
  );
}
