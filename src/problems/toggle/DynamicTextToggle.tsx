import { useState } from "react";

export default function DynamicTextToggle() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const handleVisibility = () => setIsVisible(!isVisible);
  const handleInput = (value) => {
    setMessage(value);
  };
  return (
    <div>
      <div>
        {isVisible && message && <p>{message}</p>}
        <div>
          <input
            type="text"
            placeholder="pls enter your message"
            value={message}
            onChange={(e) => handleInput(e.target.value)}
          />
        </div>
        <button onClick={handleVisibility}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
