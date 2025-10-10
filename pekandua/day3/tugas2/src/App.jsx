import React, { useState, useEffect } from "react";

import './App.css'

function App() {

  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log(`Mengambil data untuk user ID: ${userId}`);
    setUserData({ name: `User ${userId}`, email: `user${userId}@mail.com` });
  }, [userId]);

  return (
    <div>
      <h2>Dependency Array</h2>
      <p>ID: {userId}</p>
      <p>Nama: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <button onClick={() => setUserId((prev) => prev + 1)}>Next User</button>
    </div>
  );
}

export default App
