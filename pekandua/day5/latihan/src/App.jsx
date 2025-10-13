import { useState } from 'react'
import './App.css'


function App() {
  // Komponen anak: Input Suhu
  function TemperatureInput({ temperature, onTemperatureChange, scale }) {
    const scaleNames = {
      c: "Celsius",
      f: "Fahrenheit",
    };

    return (
      <fieldset>
        <legend>Masukkan suhu dalam {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={(e) => onTemperatureChange(e.target.value, scale)}
        />
      </fieldset>
    );
  }

  // Fungsi konversi
  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  // State dan logika utama
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c");
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f");
  };

  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Kalkulator Suhu (Lifting State Up)</h2>

      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />

      <p>Suhu dalam Celsius: {celsius}</p>
      <p>Suhu dalam Fahrenheit: {fahrenheit}</p>
    </div>
  );
}

export default App;
