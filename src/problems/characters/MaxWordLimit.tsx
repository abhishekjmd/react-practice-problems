// 5️⃣ Max Word Limit

// Limit to 10 words in addition to 50 characters
// Show warning "Word limit reached"

import { useState } from "react";

export default function MaxWordLimit() {
  const [text, setText] = useState("");
  const handleInput = (value: string) => {
    const wordLimit = value.split(" ").length;
    const charactersLimit = value.trim().length;
    if (wordLimit <= 10 && charactersLimit <= 50) {
      setText(value);
    }
  };
  const character = text.trim().length;
  const word = text.split(" ").length;
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
    
      <p>character: {character}</p>
      <p>character: {word}</p>
    </div>
  );
}
