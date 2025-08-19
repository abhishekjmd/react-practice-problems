// Controlled Input with Character Count

// A text <input />
// Shows “Characters: X / 50” below it
// Prevents typing beyond 50 characters

import { useState } from "react";

export default function CharacterCount() {
  const [text, setText] = useState("");
  const handleInput = (value: string) => {
    if (value.length <= 50) {
      setText(value);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <p>Character: {text.length} /50</p>
    </div>
  );
}
