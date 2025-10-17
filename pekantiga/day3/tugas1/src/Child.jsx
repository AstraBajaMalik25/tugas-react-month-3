import React from "react";

// Komponen Child dibungkus React.memo agar tidak re-render
const Child = React.memo(({ value }) => {
  console.log("Child render!");
  return (
    <div style={{ marginTop: "10px", padding: "10px", border: "1px solid gray" }}>
      <p>Text dari parent: {value}</p>
    </div>
  );
});

export default Child;
