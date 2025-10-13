import React, { useState } from "react";

function InputName({ name, onChange }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <label>
        Nama:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => onChange(e.target.value)}
          style={{ padding: "5px", width: "150px" }}
        />
      </label>
    </div>
  );
}

function DisplayName({ name }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <p>Halo, <b>{name || "..."}</b>!</p>
    </div>
  );
}

function SharedState() {
  const [name, setName] = useState("");

  return (
    <div
      style={{
        border: "2px solid #999",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
      }}
    >
      <h3>Berbagi State antar Komponen</h3>
      <InputName name={name} onChange={setName} />
      <DisplayName name={name} />
    </div>
  );
}

export default SharedState;