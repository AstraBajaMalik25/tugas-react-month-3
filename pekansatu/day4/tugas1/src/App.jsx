import React from 'react';
import './App.css'; // Import file CSS


const myStyle = {
  color: "white",
  backgroundColor: "rgba(155, 155, 155, 1)",
  padding: "10px",
  fontFamily: "Sans-Serif",  // <-- Add comma here
  textAlign: "center"
};

function App() {
  const isHighlighted = true;

  return (
    <div className="container" style={myStyle}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UrSfGp6SC1QTMgxPDyu7X8tJvIsC7j7GPg&s" alt="Girl in a jacket" style={{ width: '131px', height: 'auto' }}/>
      <h1>meowl</h1>
      <p>
Meowl adalah makhluk kecil berbulu lembut seukuran kucing rumahan, dengan telinga runcing seperti kucing dan mata besar bulat yang bercahaya seperti burung hantu. Bulu punggungnya memiliki pola silang berwarna abu-abu kebiruan, sementara perutnya krem dengan bintik-bintik keemasan. Ekor Meowl panjang dan berbulu, sering digunakan baginya untuk mengayun sebagai tanda emosi.
      </p>
      <a href="https://youtu.be/xvFZjo5PgG0?si=jvGpO0khWM8igHmZ"><button className="button">Pelajari Lebih Lanjut</button></a>
    </div>
    
  );
}

export default App;