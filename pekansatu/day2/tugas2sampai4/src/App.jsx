function App() {

  const harga = 100000;
  const diskon = 0.2;
  const hargaSetelahDiskon = harga - harga * diskon;

  const nama = "Budi";
  const umur = 20;

  function sapaUser(nama) {
    return `Halo ${nama}, selamat datang!`;
  }


  const isLoggedIn = true;
  const jumlahPesan = 3;


  const fruits = ["Apel", "Jeruk", "Mangga", "Pisang"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h2>JavaScript Expressions</h2>
      <p>Harga asli: Rp {harga}</p>
      <p>Harga setelah diskon 20%: Rp {hargaSetelahDiskon}</p>
      <p>Nama dengan huruf besar: {nama.toUpperCase()}</p>
      <p>Umur tahun depan: {umur + 1}</p>
      <p>{sapaUser(nama)}</p>

      <hr />

      <h2>Conditional Rendering</h2>
      <p>{isLoggedIn ? "Selamat datang kembali!" : "Silakan login dulu."}</p>
      <p>
        {jumlahPesan > 0
          ? `Kamu punya ${jumlahPesan} pesan baru.`
          : "Tidak ada pesan baru."}
      </p>

      <hr />


      <h2>Rendering Array</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
