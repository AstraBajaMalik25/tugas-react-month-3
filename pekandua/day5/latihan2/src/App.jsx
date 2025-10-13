import './App.css'

import React, { useReducer } from "react";

function App() {
  // Fungsi Reducer
  function counterReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        throw new Error("Unknown action type");
    }
  }

  // Menggunakan useReducer
  const [counterState, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Count: {counterState.count}
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => dispatch({ type: "increment" })}>Tambah</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Kurang</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}


export default App
