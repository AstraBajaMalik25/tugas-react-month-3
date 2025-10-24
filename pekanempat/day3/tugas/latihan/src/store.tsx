import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./slices/usersSlice"
import counterReducer from "./slices/counterSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
