// Word Count + Character Count
// Show both characters typed and word count
// Word count increments when a space-separated word is added

import { useState } from "react";

export default function WordAndCharacterCount() {
  const [text, setText] = useState("");
  const handleInput = (value: string) => {
    if (value.length >= 0) {
      setText(value);
    }
  };

  const character = text.trim().length;
  const words = text.split(" ").length;
  return (
    <div>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <p>characters count: {character}</p>
      <p>words count: {words}</p>
    </div>
  );
}
