import React from "react";
import useCounterWithToggle from "./useCounterWithToggle";

export default function CounterWithToggleExample() {
  const { count, increment, decrement, reset, isVisible, toggleVisible } =
    useCounterWithToggle();

  return (
    <div>
      <h3>Counter With Toggle Example</h3>
      <button onClick={toggleVisible}>
        {isVisible ? "Hide Counter" : "Show Counter"}
      </button>
      {isVisible && (
        <>
          <p>Count: {count}</p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
}