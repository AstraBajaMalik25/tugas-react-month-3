import React, { Profiler, useState } from "react";
import ExpensiveList from "./ExpensiveList";
import OptimizedList from "./OptimizedList";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(
      `[${id}] ${phase} phase:`,
      `actual duration ${actualDuration.toFixed(2)}ms`,
      `base duration ${baseDuration.toFixed(2)}ms`
    );
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <h1>🧠 React Performance Profiling</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setToggle((t) => !t)}>
        Toggle Component ({toggle ? "Optimized" : "Unoptimized"})
      </button>

      <hr />

      <Profiler id="ListComponent" onRender={onRenderCallback}>
        {toggle ? (
          <OptimizedList count={count} />
        ) : (
          <ExpensiveList count={count} />
        )}
      </Profiler>
    </div>
  );
}

export default App;
