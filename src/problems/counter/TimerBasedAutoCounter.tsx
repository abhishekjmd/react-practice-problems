import { useRef, useState } from "react";

export default function TimerBasedAutoCounter({ step = 1 }) {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const startCounter = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + step);
    }, 1000);
  };

  const pauseCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    pauseCounter();
    setCount(0);
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
      <p>{count}</p>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={startCounter}>Start</button>
        <button onClick={pauseCounter}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
