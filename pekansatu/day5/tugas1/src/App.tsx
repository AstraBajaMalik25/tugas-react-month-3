import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
 


    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{display: 'center' }}
    >
      <p>Count: {count}</p>
      <div className="counter-container">
        <button onClick={increment}>Tambah</button>
        <button onClick={decrement}>Kurang</button>
      </div>
    </div>
  );
}

export default Counter;