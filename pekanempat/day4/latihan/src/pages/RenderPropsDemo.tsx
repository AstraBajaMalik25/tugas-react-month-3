import { useState, useEffect } from "react";

import type { Position } from "@/components/MouseTrackerProps";

type MouseTrackerProps = {
  render: (pos: { x: number; y: number }) => React.ReactNode;
};

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <>{render(pos)}</>;
};

export default function RenderPropsDemo() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 text-white overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">Render Props Pattern</h1>
      <p className="text-zinc-400 mb-8 text-center">
        Move your cursor to see render props in action!
      </p>

          <MouseTracker
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
  );
}
