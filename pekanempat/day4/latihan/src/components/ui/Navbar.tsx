import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navItems = [
    { label: "Latihan", path: "/" },
    { label: "Tugas 1", path: "/useref" },
    { label: "Tugas 2", path: "/portal" },
    { label: "Tugas 3", path: "/hoc" },
    { label: "Tugas 4", path: "/renderprops" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        background: "rgba(15, 15, 15, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0.8rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "1.3rem",
          fontWeight: 600,
          letterSpacing: "0.5px",
          textShadow: "0 0 10px rgba(255,255,255,0.2)",
        }}
      >
        Tugas Evaluasi
      </h1>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s ease, text-shadow 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#fff")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#ccc")
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
