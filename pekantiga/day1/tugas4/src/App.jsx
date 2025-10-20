import React from 'react';
import { UserProvider } from './UserContext';
import UserInfo from './UserInfo';

function App() {
  return (
    <UserProvider>
      <h2>Tugas 4: Custom Hook</h2>
      <UserInfo />
    </UserProvider>
  );
}

export default App;
