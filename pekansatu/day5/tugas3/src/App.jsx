import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData, // Salin semua properti yang ada
      [name]: value     // Timpa properti yang berubah
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data yang disubmit:', formData);
    alert(`Terima kasih, ${formData.firstName}! Data Anda telah disubmit.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulir Kontak</h2>
      <div>
        <label>Nama Depan:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Nama Belakang:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
          </div>
          <button type="submit">Submit</button>
    </form>
  );
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // Horizontal center
    alignItems: "center",     // Vertical center
    height: "100vh",
    backgroundColor: "#222",
    color: "white",
    fontFamily: "Arial, sans-serif"
  },
  formBox: {
    textAlign: "left"
  }
};

export default ContactForm;
