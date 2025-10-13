import React, { useState } from "react";

function iftingStateUp({ label, value, onChange }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <label>
        {label}:{" "}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ padding: "5px", width: "80px" }}
        />
      </label>
    </div>
  );
}

export default function LiftingStateUp() {
  const [celsius, setCelsius] = useState(0);

  const handleCelsiusChange = (value) => {
    setCelsius(value);
  };

  const handleFahrenheitChange = (value) => {
    setCelsius(((value - 32) * 5) / 9);
  };

  const toFahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div style={{ border: "2px solid #ccc", padding: "20px", borderRadius: "10px", width: "250px" }}>
      <h3>Lifting State Up Example</h3>
      <InputField label="Celsius" value={celsius} onChange={handleCelsiusChange} />
      <InputField label="Fahrenheit" value={toFahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}