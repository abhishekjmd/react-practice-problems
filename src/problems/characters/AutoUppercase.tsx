// 6️⃣ Auto Uppercase Mode (Toggle)

// Add a checkbox: "Uppercase Mode"
// If checked, input auto-capitalizes all letters while typing

import { useState } from "react";

export default function AutoUppercaseToggle() {
  const [text, setText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleInput = (value: string) => {
    if (value.length > 0) {
      setText(value);
    }
  };

  const handleCheckBox = () => setIsChecked(!isChecked);

  return (
    <div>
      <input
        style={isChecked ? { textTransform: "uppercase" } : {}}
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <div>
        <input checked={isChecked} type="checkbox" onChange={handleCheckBox} />
      </div>
    </div>
  );
}
