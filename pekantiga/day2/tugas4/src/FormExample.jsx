import React from "react";
import useForm from "./useForm";

export default function FormExample() {
  const { values, handleChange } = useForm({ name: "", email: "" });

  return (
    <div>
      <h3>Form Example</h3>
      <input
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <p>Name: {values.name}</p>
      <p>Email: {values.email}</p>
    </div>
  );
}
