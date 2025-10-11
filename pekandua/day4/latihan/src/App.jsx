import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Memuat data pengguna...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div className="data-box">
      <h2>Data dari Axios</h2>

      <div className="info-box">
        <h3>{data.name}</h3>
      </div>

      <div className="info-box">
        <p><strong>Email:</strong> {data.email}</p>
      </div>

      <div className="info-box">
        <p><strong>Telepon:</strong> {data.phone}</p>
      </div>
    </div>
  );
}

export default App;
