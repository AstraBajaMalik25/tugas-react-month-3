import { useState } from "react";
import { createPortal } from "react-dom";

function Modal({ onClose }: { onClose: () => void }) {
  return createPortal(
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-8 text-center max-w-sm w-full">
        <h2 className="text-xl font-bold mb-3 text-white">Hello from the Portal!</h2>
        <p className="text-zinc-400 mb-4">
          This modal is rendered outside the main React tree using <code>createPortal()</code>.
        </p>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

export default function PortalModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8">
      <h1 className="text-2xl font-bold mb-6">React Portal Modal</h1>
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-medium"
      >
        Open Modal
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}
