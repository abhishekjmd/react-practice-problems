import { useState } from "react";

export default function CheckboxDisableToggle() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleVisibility = () => {
    if (isChecked) return;
    setIsVisible(!isVisible);
  };
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    setIsVisible(false);
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
      {isVisible && <p>Hello, there My name is Abhishek Tiwari</p>}
      <div>
        <button onClick={handleVisibility} disabled={isChecked}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
          />
          Disable Toggle
        </label>
      </div>
    </div>
  );
}
