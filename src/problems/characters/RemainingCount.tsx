// 1️⃣ Live Remaining Characters

// Instead of total typed, show:
// "Remaining: N characters"
// Turns the count text red when fewer than 10 remain

import { useState } from "react";

export default function RemainingCount({ limit = 50 }) {
  const [text, setText] = useState("");
  const handleInput = (value: string) => {
    if (value.length <= 50) {
      setText(value);
    }
  };
  const remainingCount = limit - text.length;
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <p>Remaining: {remainingCount} characters</p>
    </div>
  );
}
