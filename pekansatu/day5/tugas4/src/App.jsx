import React, { useState } from "react";

function Todolist() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React Hooks", completed: false },
    { id: 2, text: "Membangun Aplikasi Todo", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodoText, completed: false },
    ]);
    setNewTodoText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-800 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">🍜 Daftar Makanan</h2>

      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Tambahkan menu baru..."
          className="flex-1 p-2 rounded-lg text-black outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold transition-all"
        >
          Tambah
        </button>
      </form>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              className="cursor-pointer flex-1"
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md transition-all"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;