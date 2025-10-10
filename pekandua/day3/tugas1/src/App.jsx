import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Komponen dirender atau di-update!");
  });

  return <h2>use Effect test</h2>;
}

export default App;
