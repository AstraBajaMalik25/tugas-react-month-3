"use client";

import React, { useState } from "react";
import type { FC } from "react";

export interface Position {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render?: (position: Position) => React.ReactNode;
}

const MouseTrackerProps: FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-[420px] h-[260px] mx-auto border border-zinc-700 rounded-xl bg-zinc-800/40 overflow-hidden"
    >
      {render ? render(position) : null}
    </div>
  );
};

export default MouseTrackerProps;
