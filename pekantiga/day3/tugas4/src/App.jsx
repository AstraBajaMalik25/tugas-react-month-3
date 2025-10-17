import React, { useState, lazy, Suspense } from "react";

// Tugas 4: Code Splitting & Lazy Loading
// Tujuan: Memuat komponen hanya saat dibutuhkan menggunakan React.lazy

// Lazy load komponen
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2>Tugas 4 - Lazy Loading</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setPage("home")}>🏠 Home</button>{" "}
        <button onClick={() => setPage("about")}>ℹ️ About</button>{" "}
        <button onClick={() => setPage("contact")}>📞 Contact</button>
      </div>

      {/* Suspense menampilkan fallback saat komponen masih dimuat */}
      <Suspense fallback={<p>Loading halaman...</p>}>{renderPage()}</Suspense>
    </div>
  );
}
