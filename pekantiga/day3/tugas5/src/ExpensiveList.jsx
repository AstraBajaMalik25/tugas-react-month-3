import React from "react";

export default function ExpensiveList({ count }) {
  console.log("🔴 Rendering ExpensiveList...");


  const numbers = Array.from({ length: 5000 }, (_, i) => i + count);
  const total = numbers.reduce((a, b) => a + b, 0);

  return (
    <div style={{ border: "2px solid red", margin: 20, padding: 10 }}>
      <h2>❌ Unoptimized List</h2>
      <p>Rendered with count: {count}</p>
      <p>Sum: {total}</p>
    </div>
  );
}
