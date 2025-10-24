import { useAppDispatch, useAppSelector } from '../hooks'
import { increment, decrement, incrementByAmount } from '../slices/counterSlice'

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center w-full sm:w-80">
      <h2 className="text-lg font-bold mb-2">Counter</h2>
      <p className="text-3xl font-mono mb-3">{count}</p>
      <div className="flex justify-center gap-2">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
        >
          +
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
        >
          +5
        </button>
      </div>
    </div>
  )
}
