import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8">
      <div className="bg-zinc-800/60 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">useRef DOM Access</h1>
        <p className="text-zinc-400 mb-4 text-center">
          Click the button to focus the input element using <code>useRef</code>.
        </p>
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="Focus me!"
            className="flex-1 px-4 py-2 rounded-lg bg-zinc-700 border border-zinc-600 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <button
            onClick={handleFocus}
            className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg font-medium"
          >
            Focus
          </button>
        </div>
      </div>
    </div>
  );
}
