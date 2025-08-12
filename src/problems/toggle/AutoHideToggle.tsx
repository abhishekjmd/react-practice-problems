import { useRef, useState } from "react";

export default function AutoHideToggle() {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const handleVisibility = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (isVisible) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
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
      {isVisible && <p>Hello, there myself Abhishek Tiwari</p>}
      <div>
        <button onClick={handleVisibility}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
