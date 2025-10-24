import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks"
import { increment, decrement, incrementByAmount } from "./slices/counterSlice"
import { fetchUsers } from "./slices/usersSlice"

function App() {
  const dispatch = useAppDispatch()
  const counter = useAppSelector((state) => state.counter.value)
  const { list, loading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">🚀 Redux Toolkit Dashboard</h1>

      {/* Counter Section */}
      <section className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mb-10 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-center">Counter</h2>
        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white text-2xl rounded-full px-4 py-2 transition"
          >
            −
          </button>
          <span className="text-3xl font-bold w-12 text-center">{counter}</span>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white text-2xl rounded-full px-4 py-2 transition"
          >
            +
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Add +5
          </button>
        </div>
      </section>

      {/* Users Section */}
      <section className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Users</h2>
          <button
            onClick={() => dispatch(fetchUsers())}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
          >
            Refresh
          </button>
        </div>

        {loading && <p className="text-gray-500 italic">Loading users...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <ul className="divide-y divide-gray-200">
            {list.map((u) => (
              <li key={u.id} className="py-3 px-2 hover:bg-gray-50 rounded-lg">
                <p className="font-medium">{u.name}</p>
                <p className="text-sm text-gray-500">{u.email}</p>
              </li>
            ))}
          </ul>
        )}
      </section>


    </div>
  )
}

export default App
