import React from "react";
import useToggle from "./useToggle";

export default function ToggleExample() {
  const [isVisible, toggleVisible] = useToggle();

  return (
    <div>
      <h3>Toggle Example</h3>
      <button onClick={toggleVisible}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>Hello! You toggled me 👋</p>}
    </div>
  );
}