import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

function App() {
  return (
    <UserProvider>
      <h2>Tugas 1: User Context</h2>
      <UserProfile />
    </UserProvider>
  );
}

export default App;