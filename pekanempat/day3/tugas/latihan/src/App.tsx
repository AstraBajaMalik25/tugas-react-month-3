import React from 'react'
import Counter from './components/Counter'
import UserList from './components/userList'


const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Evaluasi Harian - Redux Toolkit (TypeScript)</h1>

      <section style={{ marginTop: 16 }}>
        <h2>1. Setup Redux Store</h2>
        <p>Store & Provider disiapkan di <code>main.tsx</code>.</p>
      </section>

      <section style={{ marginTop: 8 }}>
        <h2>2. Slices (berbeda)</h2>
        <p>Contoh: <code>counter</code> dan <code>users</code>.</p>
      </section>

      <hr />

      <Counter />
      <UserList />
    </div>
  )
}

export default App
