import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function UseReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div
      style={{
        border: "2px solid #555",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <h3>useReducer Example</h3>
      <h1>{state.count}</h1>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => dispatch({ type: "increment" })}>+ Tambah</button>
        <button onClick={() => dispatch({ type: "decrement" })} style={{ marginLeft: "10px" }}>
          - Kurang
        </button>
        <button onClick={() => dispatch({ type: "reset" })} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}