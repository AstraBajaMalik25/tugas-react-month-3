import React, { useState } from "react";


function ChildLevel3({ message }) {
  return (
    <div style={{ border: "2px dashed #aaa", padding: "10px", marginTop: "10px" }}>
      <h4>Level 3 (Child)</h4>
      <p>Pesan dari level 1: <b>{message}</b></p>
    </div>
  );
}

function ChildLevel2({ message }) {
  return (
    <div style={{ border: "2px solid #bbb", padding: "10px" }}>
      <h4>Level 2</h4>
      <ChildLevel3 message={message} />
    </div>
  );
}

export default function PropDrilling() {
  const data = "Halo dari Komponen Level 1 👋";

  return (
    <div style={{ border: "2px solid #666", padding: "20px", borderRadius: "10px", width: "300px" }}>
      <h3>Prop Drilling Example</h3>
      <ChildLevel2 message={data} />
    </div>
  );
}