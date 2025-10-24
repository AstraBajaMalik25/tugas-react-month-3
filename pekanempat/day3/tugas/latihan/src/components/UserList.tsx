import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUsers } from '../slices/usersSlice'

export default function UserList() {
  const dispatch = useAppDispatch()
  const { list, loading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6 w-full sm:w-[500px]">
      <h2 className="text-lg font-bold mb-3">User List</h2>
      {loading && <p className="text-blue-500">Loading users...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul className="divide-y divide-gray-200">
        {list.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id} className="py-2">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
