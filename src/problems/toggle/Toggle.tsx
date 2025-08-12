import { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {isVisible && <p>Hello, abhishek this side</p>}
      <div>
        <button onClick={handleVisibility}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
