import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Axios API</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default App
