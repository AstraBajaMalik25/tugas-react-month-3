import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { increment, decrement, reset, addByAmount } from '../slices/counterSlice'

const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector((s) => s.counter.value)

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Counter: {value}</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => dispatch(increment())}>+ Tambah</button>
        <button onClick={() => dispatch(decrement())}>- Kurang</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(addByAmount(5))}>+5</button>
      </div>
    </div>
  )
}

export default Counter
