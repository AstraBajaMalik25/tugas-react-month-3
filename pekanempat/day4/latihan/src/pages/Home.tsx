import { useRef } from "react";
import Modal, { type ModalHandle } from "../components/Modal";
import MouseTrackerProps, { type Position } from "../components/MouseTrackerProps";

function Home() {
  const modalRef = useRef<ModalHandle | null>(null);

  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #141414, #0a0a0a)",
        color: "#eaeaea",
        fontFamily: "system-ui, sans-serif",
        padding: "3rem 1rem",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Contoh Modal</h2>

      <div style={{ marginBottom: "4rem" }}>
        {["Buka Modal", "Tutup Modal"].map((text, i) => (
          <button
            key={i}
            onClick={() =>
              i === 0 ? modalRef.current?.open() : modalRef.current?.close()
            }
            style={{
              background: "#1f1f1f",
              color: "#fff",
              padding: "0.7rem 1.4rem",
              borderRadius: "10px",
              margin: "0 0.4rem",
              border: "1px solid rgba(255,255,255,0.08)",
              cursor: "pointer",
              fontWeight: 500,
              boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.background = "#292929")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.background = "#1f1f1f")
            }
          >
            {text}
          </button>
        ))}
      </div>

      <Modal ref={modalRef}>
        <p style={{ color: "#ffffff" }}>Modal Demonstration</p>
        <img
          src="https://img1.picmix.com/output/stamp/normal/9/8/1/1/2841189_1acee.png"
          style={{
            width: "100px",
            height: "100px",
            margin: "0 auto",
          }}
        />
        <p>This is just a Demonstration for Modal</p>
      </Modal>

      <section style={{ marginTop: "5rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>
          Render Props: Mouse Tracker
        </h2>
        <p style={{ color: "#aaa", marginBottom: "2rem" }}>
          Gerakkan mouse Anda di dalam area berikut:
        </p>

        <div
          style={{
            position: "relative",
            width: "420px",
            height: "260px",
            margin: "0 auto",
            borderRadius: "12px",
            border: "1.5px dashed rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.04)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            overflow: "hidden",
            cursor: "none",
          }}
        >
          <MouseTrackerProps
            render={(pos: Position) => (
              <img
                src="https://img1.picmix.com/output/stamp/normal/9/8/1/1/2841189_1acee.png"
                alt="paw"
                style={{
                  position: "absolute",
                  top: pos.y,
                  left: pos.x,
                  width: "70px",
                  height: "70px",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  userSelect: "none",
                  transition: "top 0.05s linear, left 0.05s linear",
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
                }}
              />
            )}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
