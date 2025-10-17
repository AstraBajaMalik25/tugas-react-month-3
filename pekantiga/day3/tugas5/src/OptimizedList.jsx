import React, { memo, useMemo } from "react";

function OptimizedList({ count }) {
  console.log("🟢 Rendering OptimizedList...");

  const total = useMemo(() => {
    const numbers = Array.from({ length: 5000 }, (_, i) => i + count);
    return numbers.reduce((a, b) => a + b, 0);
  }, [count]);

  return (
    <div style={{ border: "2px solid green", margin: 20, padding: 10 }}>
      <h2>✅ Optimized List</h2>
      <p>Rendered with count: {count}</p>
      <p>Sum: {total}</p>
    </div>
  );
}

export default memo(OptimizedList);
