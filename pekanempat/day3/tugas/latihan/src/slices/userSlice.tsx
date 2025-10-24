import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface User {
  id: number
  name: string
  username?: string
  email?: string
}

interface UsersState {
  data: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UsersState = {
  data: [],
  status: 'idle',
  error: null,
}

// Async thunk: fetch users (contoh dari jsonplaceholder)
export const fetchUsers = createAsyncThunk<User[], void>(
  'users/fetchUsers',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error('Network response was not ok')
    return res.json()
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // bisa tambahkan reducers sync kalau perlu
    clearUsers: (state) => {
      state.data = []
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to fetch'
      })
  },
})

export const { clearUsers } = usersSlice.actions
export default usersSlice.reducer
