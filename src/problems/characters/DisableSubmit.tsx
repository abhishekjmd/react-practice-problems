// 2️⃣ Disable Submit Button on Empty Input

// Add a Submit button
// Disable the button if input is empty or only spaces

import { useState } from "react";

export default function DisableSubmit() {
  const [text, setText] = useState("");
  const handleInput = (value: string) => {
    if (value.length >= 0) {
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
      <button disabled={text.trim().length === 0}>submit</button>
    </div>
  );
}
