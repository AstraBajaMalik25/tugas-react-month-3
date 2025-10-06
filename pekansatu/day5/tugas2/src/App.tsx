import  { useState } from 'react';
import './App.css'

function UserProfile() {
  const [name, setName] = useState('Baja Malik');
  const [age, setAge] = useState(16);
  const [email, setEmail] = useState('testaccount@outlook.co.id');
  const [isEditing, setIsEditing] = useState(false);

  return (
       <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // tengah vertikal
        alignItems: 'center',     // tengah horizontal
        height: '100vh',          // penuh tinggi layar
        textAlign: 'center',
        color: 'white',
      }}
    >
  
      <h2>Profil Pengguna</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => setIsEditing(false)}>Simpan</button>
        </div>
      ) : (
        <div>
          <p>nama: {name}</p>
          <p>usia: {age}</p>
          <p>Email: {email}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profil</button>
        </div>
      )}



      
    </div>

    
  );
}

export default UserProfile;