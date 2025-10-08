import React, { useState } from "react";
import "./App.css";

function RegisterForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (value) => {
    if (/[A-Z]/.test(value)) {
      return "Password must NOT contain uppercase letters!";
    } else if (!/[a-z]/.test(value)) {
      return "Password must contain at least one lowercase letter!";
    } else if (value.length < 6) {
      return "Password must be at least 6 characters long!";
    }
      else if (!/[!@#$%^&*_+]/.test(value)) {
      return "Password must have ATLEAST one symbols!";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    alert("Registration successful!");
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Formulir Pendaftaran</h2>

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Daftar</button>
      </form>
    </div>
  );
}

export default RegisterForm;
