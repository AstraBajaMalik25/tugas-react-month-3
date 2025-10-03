import React from "react";
import Card from "./Card";
import Comment from "./Comment";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contoh Card & Komposisi Komponen</h1>

      {/* Card dengan konten teks */}
      <Card>
        <h2>Judul Card 1</h2>
        <p>Ini adalah isi dari card pertama.</p>
        <button>Detail</button>
      </Card>

      {/* Card dengan gambar */}
      <Card>
        <h2>Judul Card 2</h2>
        <img
          src="https://placekitten.com/200/200"
          alt="Kucing lucu"
          style={{ borderRadius: "8px" }}
        />
      </Card>

      {/* Card berisi komentar */}
      <Card>
        <h2>Komentar</h2>
        <Comment
          user={{ name: "Budi", avatar: "https://placekitten.com/50/50" }}
          text="Halo, ini contoh komentar!"
        />
      </Card>
    </div>
  );
}

export default App;