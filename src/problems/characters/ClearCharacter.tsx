// 3️⃣ Clear Button

import { useState } from "react";

// Add a Clear button next to the input
// Clears the input and resets count to 0

export default function ClearCharacter() {
  const [text, setText] = useState("");
  const handleInput = (value: string) => {
    if (value.length >= 0) {
      setText(value);
    }
  };

  const clearMessage = () => setText("");

  return (
    <div>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={clearMessage}>Clear</button>
      <p>Count: {text.trim().length} characters </p>
    </div>
  );
}
