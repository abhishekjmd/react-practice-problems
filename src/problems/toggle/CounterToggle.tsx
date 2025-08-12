import { useState } from "react";

export default function CounterToggle() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(prev - 1, 0));
  const handleVisibility = () => {
    if (isVisible) {
      setCount(0);
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
          <p>{count}</p>
          <div style={{ display: "flex", gap: 15 }}>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
        </>
      )}

      <button onClick={handleVisibility}>{isVisible ? "Hide" : "Show"}</button>
    </div>
  );
}
